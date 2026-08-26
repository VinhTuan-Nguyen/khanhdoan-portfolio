import { access, cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const clientDirectory = resolve(root, "dist", "client");
const serverEntry = resolve(root, "dist", "server", "index.js");
const pagesDirectory = resolve(root, "dist", "pages");
const basePath = (process.env.PAGES_BASE_PATH ?? "").replace(/^\/+|\/+$/g, "");
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  `http://localhost:3000${basePath ? `/${basePath}` : ""}`
).replace(/\/$/, "");

await Promise.all([access(clientDirectory), access(serverEntry)]);

await rm(pagesDirectory, { recursive: true, force: true });
await mkdir(pagesDirectory, { recursive: true });
await cp(clientDirectory, pagesDirectory, { recursive: true });

if (basePath) {
  const nestedBasePath = join(pagesDirectory, basePath);
  await access(nestedBasePath);

  for (const entry of await readdir(nestedBasePath, { withFileTypes: true })) {
    await cp(join(nestedBasePath, entry.name), join(pagesDirectory, entry.name), {
      recursive: entry.isDirectory(),
      force: true,
    });
  }

  await rm(nestedBasePath, { recursive: true, force: true });
}

const handler = (await import(pathToFileURL(serverEntry).href)).default;

if (typeof handler !== "function") {
  throw new TypeError("Vinext server entry does not export a request handler");
}

const response = await handler(new Request(`${siteUrl}/`));

if (!response.ok) {
  throw new Error(`Unable to render the landing page: HTTP ${response.status}`);
}

const html = await response.text();
const expectedAssetPrefix = `${basePath ? `/${basePath}` : ""}/_next/`;
if (!html.includes(expectedAssetPrefix)) {
  throw new Error(`Rendered HTML is missing the expected asset prefix: ${expectedAssetPrefix}`);
}

const publicPathPrefix = basePath ? `/${basePath}/` : "/";
const assetUrls = [
  ...html.matchAll(/(?:src|href)="([^"]+)"/g),
].map((match) => match[1]).filter((url) => url.startsWith(expectedAssetPrefix));

for (const assetUrl of new Set(assetUrls)) {
  const relativeAssetPath = assetUrl.slice(publicPathPrefix.length).split(/[?#]/, 1)[0];
  await access(join(pagesDirectory, relativeAssetPath));
}

await Promise.all([
  writeFile(join(pagesDirectory, "index.html"), html, "utf8"),
  writeFile(join(pagesDirectory, "404.html"), html, "utf8"),
  writeFile(join(pagesDirectory, ".nojekyll"), "", "utf8"),
]);

console.log(`GitHub Pages artifact created at ${pagesDirectory} (${new Set(assetUrls).size} assets verified)`);
