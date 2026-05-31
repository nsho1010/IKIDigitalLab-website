# Conventions

## ファイル・命名
- コンポーネントファイル: PascalCase (`Hero.tsx`, `Footer.tsx`)
- ユーティリティ・ライブラリ: camelCase (`featureFlags.ts`, `microcms.ts`)
- パスエイリアス `@/*` → `src/*` を常に使用

## コンポーネント
- `src/components/ui/` — Radix UI ベースの汎用 UI（shadcn/ui パターン）、`class-variance-authority` で variant 管理
- `src/components/` — ページセクション単位のコンポーネント（Hero, Footer, Header 等）
- Server Components をデフォルト、クライアント操作が必要な箇所のみ `"use client"`

## スタイル
- Tailwind CSS ユーティリティクラス主体
- `tailwind-merge` + `clsx` で条件付きクラス結合 (`cn()` ユーティリティが `src/lib/utils.ts` に存在)
- 角丸はシャープなスタイルに統一（recent commit 参照）

## 機能フラグ
- `featureFlags` オブジェクト (`src/lib/featureFlags.ts`) で環境変数から boolean に変換
- `getServiceUrl(enabled, url)` で `null` または URL を返す
- 無効サービスは `/coming-soon` リダイレクトせず `null` を返す（UI 側でリンクを非表示にする）

## SEO
- `src/lib/seo.tsx` のユーティリティでメタタグ生成
- `src/config.ts` の定数を参照

## ISR / キャッシュ
- microCMS の fetch は `next: { tags: ['news'] }` タグ付きキャッシュ
- `src/app/api/revalidate/` で Webhook による `revalidateTag('news')` 実装

## バリデーション
- `src/schemas/` に Zod スキーマを配置、フォーム入力の検証に使用
