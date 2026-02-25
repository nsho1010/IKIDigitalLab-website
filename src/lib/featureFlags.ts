/**
 * サービスページの公開フラグ管理
 *
 * 環境変数 NEXT_PUBLIC_FEATURE_* が "true" の場合にサービスページへ遷移し、
 * それ以外の場合は /coming-soon へ遷移します。
 */

export const featureFlags = {
  dxAiSupport: process.env.NEXT_PUBLIC_FEATURE_DX_AI_SUPPORT === "true",
  webDevelopment: process.env.NEXT_PUBLIC_FEATURE_WEB_DEVELOPMENT === "true",
  programmingSchool:
    process.env.NEXT_PUBLIC_FEATURE_PROGRAMMING_SCHOOL === "true",
  itTraining: process.env.NEXT_PUBLIC_FEATURE_IT_TRAINING === "true",
} as const;

/**
 * フラグが有効ならサービスURL、無効なら /coming-soon を返す
 */
export function getServiceUrl(enabled: boolean, serviceUrl: string): string {
  return enabled ? serviceUrl : "/coming-soon";
}
