# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## コマンド

```bash
npm run dev       # 開発サーバー起動
npm run build     # 本番ビルド (fetch-cache クリア付き)
npm run lint      # ESLint 実行
npm run lint:fix  # ESLint 自動修正
```

## 環境変数

`.env.example` を参考に `.env.local` を作成する。

| 変数名 | 用途 |
|--------|------|
| `MICROCMS_SERVICE_DOMAIN` | microCMS サービスドメイン |
| `MICROCMS_API_KEY` | microCMS API キー |
| `NEXT_PUBLIC_FEATURE_DX_AI_SUPPORT` | DX・AI支援サービスページ公開フラグ |
| `NEXT_PUBLIC_FEATURE_WEB_DEVELOPMENT` | Web開発サービスページ公開フラグ |
| `NEXT_PUBLIC_FEATURE_PROGRAMMING_SCHOOL` | プログラミングスクールページ公開フラグ |
| `NEXT_PUBLIC_FEATURE_IT_TRAINING` | ITトレーニングページ公開フラグ |

## アーキテクチャ

**Next.js 14 App Router + TypeScript + Tailwind CSS** による企業サイト。

### コンテンツ管理

- `src/lib/microcms.ts` で microCMS SDK を設定し、ニュース記事を取得
- `src/app/api/revalidate/` で microCMS からの Webhook による ISR 再検証

### 機能フラグ

- `src/lib/featureFlags.ts` でサービスページの公開・非公開を制御
- フラグが `false` のサービスは `/coming-soon` ではなく `null` を返す（リダイレクトは一時停止中）
- 各サービスページ: `services/dx-ai-support`, `services/web-development`, `services/programming-school`, `services/it-training`

### コンポーネント構成

- `src/components/ui/` — Radix UI ベースの汎用コンポーネント (shadcn/ui パターン)
- `src/components/` — ページセクションコンポーネント (Hero, Footer, Header 等)

### パスエイリアス

`@/*` → `src/*`

### SEO・設定

- `src/lib/seo.tsx` — メタタグ生成ユーティリティ
- `src/config.ts` — サイト名、説明文、ナビリンク等の定数
- `src/app/sitemap.ts` — サイトマップ自動生成
