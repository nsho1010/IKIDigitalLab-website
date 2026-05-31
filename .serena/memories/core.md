# Core — IKI Digital Lab. Website

企業サイト。Next.js 14 App Router + TypeScript + Tailwind CSS。

## Source Map

```
src/
  app/          # Next.js App Router pages & API routes
    page.tsx    # トップページ（ランディングページ）
    layout.tsx  # ルートレイアウト
    services/   # サービスページ (dx-ai-support, web-development, programming-school, it-training)
    news/       # ニュース一覧・詳細
    api/revalidate/  # microCMS Webhook による ISR 再検証
    about/, coming-soon/, privacy-policy/, tos/, colors/
  components/   # ページセクションコンポーネント (Hero, Header, Footer, Service 等)
    ui/         # shadcn/ui パターンの汎用コンポーネント (Radix UI ベース)
  lib/
    microcms.ts   # microCMS SDK クライアント・News/Contact 型・fetch 関数
    featureFlags.ts  # サービスページ公開フラグ管理
    seo.tsx       # メタタグ生成ユーティリティ
    utils.ts
  config.ts     # appName, appDescription, domainName, navLinks 等の定数
  schemas/      # Zod バリデーションスキーマ
  actions/      # Server Actions
  test/         # Vitest セットアップ
  types/
types/          # グローバル型定義
```

## Project-wide Invariants

- パスエイリアス `@/*` → `src/*`
- アプリ名: "IKI Digital Lab."
- デプロイ先: Vercel (`iki-digital.vercel.app`)
- コンテンツ管理: microCMS（ニュース記事）
- feature flag が `false` のサービスは `null` を返す（`/coming-soon` リダイレクトは一時停止中）

詳細は `mem:tech_stack`, `mem:conventions`, `mem:suggested_commands`, `mem:task_completion` を参照。
