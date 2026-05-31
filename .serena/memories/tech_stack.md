# Tech Stack

## Runtime & Framework
- Next.js `^14.2.3` (App Router)
- React `^18.3.1` / React DOM `^18.3.1`
- TypeScript `~5.6`
- Node.js (Darwin)

## Styling
- Tailwind CSS `^3.4.1` + tailwind-merge + tailwindcss-animate
- `@tailwindcss/typography`
- PostCSS

## UI Components
- Radix UI (`@radix-ui/react-avatar`, `react-label`, `react-slot`, `react-toast`) — shadcn/ui パターン
- lucide-react (アイコン)
- framer-motion (アニメーション)
- next-themes (ダークモード)

## CMS & Data
- microcms-js-sdk `^3.1.1` — ニュース記事取得・お問い合わせ送信
- zod `^3.23.8` — バリデーション

## Utilities
- date-fns `^3.6.0` + date-fns-tz
- clsx + class-variance-authority
- html-react-parser
- highlight.js

## Testing
- Vitest `^4.1.7` (jsdom 環境)
- @testing-library/react `^16.3.2`
- @testing-library/jest-dom + user-event

## Linting
- ESLint `^8` + eslint-config-next + @typescript-eslint + @stylistic/eslint-plugin

## Build
- `npm` (package manager)
- fetch-cache を `rm -rf .next/cache/fetch-cache` してからビルド
