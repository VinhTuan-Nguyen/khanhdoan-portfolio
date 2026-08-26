# Khánh Đoan - Portfolio

Portfolio cá nhân của Khánh Đoan, được xây bằng React, Vinext và Vite, sau đó static export để deploy lên GitHub Pages.

## Yêu cầu

- Node.js `>=22.13.0`
- npm

## Cài đặt

```bash
npm ci
```

Dùng `npm install` khi chủ động thay đổi dependencies.

## Chạy local

```bash
npm run dev
```

## Kiểm tra

```bash
npm run lint
npm test
```

`npm test` sẽ build project, tạo static artifact trong `dist/pages` và chạy các kiểm tra HTML/export.

## Build cho GitHub Pages

```bash
npm run build:pages
```

Artifact deploy được tạo tại:

```text
dist/pages/
```

## Deploy GitHub Pages

Repository có workflow tại `.github/workflows/deploy-pages.yml`.

Khi push lên nhánh `main`, workflow sẽ:

1. Cài dependencies bằng `npm ci`.
2. Chạy `npm run build:pages`.
3. Upload `dist/pages`.
4. Deploy artifact lên GitHub Pages.

Có thể chạy workflow thủ công từ tab Actions.

Trong GitHub:

1. Mở **Settings -> Pages**.
2. Chọn **Build and deployment -> Source: GitHub Actions**.
3. Push lên `main` hoặc chạy workflow **Deploy GitHub Pages**.

URL production có dạng:

```text
https://<username>.github.io/<repository-name>/
```

## Cấu trúc chính

```text
app/
  components/
    layout/             # Header và Footer
    projects/           # Carousel, card và modal project
    sections/           # Các section của landing page
    ui/                 # Icon và custom cursor
  data/
    content.ts          # Nội dung giao diện VI/EN
    projects.ts         # Type và dữ liệu project
  hooks/                # Navigation, stats, roadmap và carousel logic
  globals.css           # Styling toàn site
  layout.tsx            # Metadata và root layout
  page.tsx              # Ghép các section thành trang portfolio

public/
  og-v2.png            # Social preview đang được sử dụng

scripts/
  export-github-pages.mjs

tests/
  rendered-html.test.mjs
```

Các kế hoạch và tài liệu kỹ thuật nằm trong `docs/`.

## Cấu hình static export

`next.config.ts` cấu hình:

- `output: "export"`
- `trailingSlash: true`
- `basePath` và `assetPrefix` cho GitHub Pages
- Image optimization ở chế độ static-compatible

Workflow tự thiết lập:

- `PAGES_BASE_PATH`
- `NEXT_PUBLIC_SITE_URL`

## Quy tắc repository

Không commit:

- `node_modules/`
- `.next/`
- `.vinext/`
- `dist/`
- `work/`
- `tmp/`
- `outputs1/`
- `*.tsbuildinfo`

Dùng npm làm package manager duy nhất và chỉ giữ `package-lock.json`.
