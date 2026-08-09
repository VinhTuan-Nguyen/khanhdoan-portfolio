import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const pagesRoot = new URL("../dist/pages/", import.meta.url);

test("exports the portfolio as a static GitHub Pages document", async () => {
  const html = await readFile(new URL("index.html", pagesRoot), "utf8");

  assert.match(html, /^<!DOCTYPE html>/i);
  assert.match(html, /<title>Khánh Đoan — Full-stack Marketer/i);
  assert.match(html, /Marketing toàn diện/);
  assert.match(html, /id="contact"/);
  assert.match(html, /\/_next\/static\//);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("includes GitHub Pages routing and Jekyll bypass files", async () => {
  await Promise.all([
    access(new URL("index.html", pagesRoot)),
    access(new URL("404.html", pagesRoot)),
    access(new URL(".nojekyll", pagesRoot)),
    access(new URL("og-v2.png", pagesRoot)),
    access(new URL("_next/", pagesRoot)),
  ]);
});
