# Khánh Đoan - Portfolio

Portfolio Performance Marketing & Account Management của Khánh Đoan, được xây bằng React, Vinext và Vite, sau đó static export để deploy lên GitHub Pages.

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
    cases/              # Flagship card, evidence, modal và asset carousel
    layout/             # Header và Footer
    sections/           # Các section của landing page
    ui/                 # Icon và custom cursor
  data/
    content.ts          # Nội dung giao diện VI/EN
    cases.ts            # 19 case public-safe và trạng thái kiểm duyệt
    expertise.ts        # 4 năng lực cốt lõi + 1 năng lực bổ trợ
    types.ts            # Type dùng chung cho case và expertise
  lib/
    cases.ts            # Validation và public selector phía server
    assets.ts           # Đường dẫn asset tương thích GitHub Pages
  hooks/                # Navigation, stats và roadmap
  globals.css           # Styling toàn site
  layout.tsx            # Metadata và root layout
  page.tsx              # Ghép các section thành trang portfolio

public/
  og-v2.png            # Social preview theo định vị mới

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
- `NEXT_PUBLIC_BASE_PATH`
- `NEXT_PUBLIC_SITE_URL`

## Xem trước case chưa duyệt

`npm run dev` hiển thị nội dung case ở chế độ preview và gắn nhãn xác minh. Static production chỉ nhận case có `dataStatus = "approved"` và đủ asset theo publish gate.

Khi cần tạo một static preview nội bộ có case chưa duyệt, đặt:

```text
NEXT_PUBLIC_CASE_PREVIEW=1
```

Không bật biến này trong workflow production.

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
