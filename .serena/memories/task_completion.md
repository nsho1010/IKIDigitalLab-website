# Task Completion

コーディングタスク完了時に実行するコマンド:

```bash
# 1. 型チェック（TypeScript）
npx tsc --noEmit

# 2. Lint チェック
npm run lint

# 3. テスト実行
npm run test:run

# 4. ビルド確認（必要な場合）
npm run build
```

## 注意事項
- `npm run build` は fetch-cache を削除するため、開発中は通常不要
- テストファイルは `src/lib/__tests__/` または `src/lib/*.test.ts` に配置
- Vitest は jsdom 環境で動作、セットアップファイル: `src/test/setup.ts`
