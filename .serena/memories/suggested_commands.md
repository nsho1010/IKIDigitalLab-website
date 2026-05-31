# Suggested Commands

## Development
```bash
npm run dev        # 開発サーバー起動 (localhost:3000)
npm run build      # 本番ビルド (fetch-cache クリア付き: rm -rf .next/cache/fetch-cache && next build)
npm run start      # 本番サーバー起動
```

## Linting
```bash
npm run lint       # ESLint 実行
npm run lint:fix   # ESLint 自動修正
```

## Testing
```bash
npm test           # Vitest (watch モード)
npm run test:run   # Vitest (一回実行)
```

## Environment
`.env.local` を `.env.example` を参考に作成する。
必要な変数: `MICROCMS_SERVICE_DOMAIN`, `MICROCMS_API_KEY`, `NEXT_PUBLIC_FEATURE_*` フラグ群。
