---
name: project-test-conventions
description: IKIDigitalLabプロジェクト固有のテスト規則・ディレクトリ構成・モックパターン
metadata:
  type: project
---

## テストファイルの配置

- `src/lib/__tests__/` ディレクトリにプレースホルダーが置かれているケースがあるが、実際のテストは `src/lib/featureFlags.test.ts` のようにソースファイルと同階層に配置するパターンも使われる
- Vitest設定: `vitest.config.ts` がプロジェクトルートに存在する

## Vitest設定の特徴

- `globals: true` → `describe`, `it`, `expect`, `vi` などをimportなしで使用可能だが、明示的に import するほうが好ましい
- `environment: 'jsdom'`
- `setupFiles: ['./src/test/setup.ts']` → `@testing-library/jest-dom` を読み込んでいる
- パスエイリアス: `@/*` → `src/*`

## モジュールレベル評価の環境変数テストパターン

`featureFlags` のようにモジュールトップレベルで `process.env` を評価するオブジェクトをテストする場合:

1. `beforeEach` で `vi.resetModules()` を呼ぶ
2. `afterEach` で `vi.unstubAllEnvs()` を呼ぶ
3. 各テスト内で `vi.stubEnv('VAR_NAME', 'value')` で環境変数をセット
4. `await import('@/lib/featureFlags')` で動的importしてモジュールを再評価する

```typescript
beforeEach(() => { vi.resetModules() })
afterEach(() => { vi.unstubAllEnvs() })

it('...', async () => {
  vi.stubEnv('NEXT_PUBLIC_FEATURE_DX_AI_SUPPORT', 'true')
  const { featureFlags } = await import('@/lib/featureFlags')
  expect(featureFlags.dxAiSupport).toBe(true)
})
```

## テストの命名規則

- `describe` ブロック: テスト対象の関数名・オブジェクト名・環境変数名
- `it` の説明文: 日本語（例: `'enabled が true の場合、指定した serviceUrl をそのまま返す'`）

**Why:** プロジェクト初期のVitest導入時に確立されたパターン。モジュールキャッシュの問題で環境変数切り替えテストが失敗するため `vi.resetModules()` が必須。

**How to apply:** `process.env` をモジュールトップレベルで参照するファイルのテストには必ずこのパターンを適用する。
