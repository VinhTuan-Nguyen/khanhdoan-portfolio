import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const pagesRoot = new URL("../dist/pages/", import.meta.url);

test("exports the portfolio as a static GitHub Pages document", async () => {
  const html = await readFile(new URL("index.html", pagesRoot), "utf8");

  assert.match(html, /^<!DOCTYPE html>/i);
  assert.match(html, /<title>Khánh Đoan — Performance Marketing &amp; Account Management/i);
  assert.match(html, /Từ chiến lược media/);
  assert.match(html, /id="expertise"/);
  assert.match(html, /id="work"/);
  assert.match(html, /id="additional-evidence"/);
  assert.match(html, /id="contact"/);
  assert.match(html, /\/_next\/static\//);
  const sectionOrder = ["home", "numbers", "about", "expertise", "work", "experience", "contact"]
    .map((id) => html.indexOf(`id="${id}"`));
  assert.ok(sectionOrder.every((position) => position >= 0));
  assert.deepEqual([...sectionOrder].sort((left, right) => left - right), sectionOrder);
  assert.equal((html.match(/data-expertise-kind="core"/g) ?? []).length, 4);
  assert.equal((html.match(/data-expertise-kind="supporting"/g) ?? []).length, 1);
  assert.doesNotMatch(html, /data-case-tier="flagship"/);
  assert.match(html, /Các case đang được xác minh số liệu và asset trước khi public/);
  assert.doesNotMatch(html, /project-carousel|PERFORMANCE \/ CREATIVE|ROAS ↗|CPL ↓|VTR ↗/);
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

test("does not ship unapproved case copy in browser assets", async () => {
  const nextRoot = new URL("_next/", pagesRoot);
  const pending = [nextRoot];
  const files = [];

  while (pending.length > 0) {
    const directory = pending.pop();
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const url = new URL(entry.name, directory);
      if (entry.isDirectory()) pending.push(new URL(`${entry.name}/`, directory));
      else if (entry.name.endsWith(".js")) files.push(url);
    }
  }

  const browserSource = (await Promise.all(files.map((file) => readFile(file, "utf8")))).join("\n");
  assert.doesNotMatch(browserSource, /Messages That Drive Sales|Multi-channel Enrollment|Course Registration Growth/);
  assert.doesNotMatch(browserSource, /🟨|\[___\]|⇔/);
});
