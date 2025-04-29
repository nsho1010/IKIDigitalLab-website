import { ConfigProps } from "../types/config";

const config = {
  // 必須
  appName: "IKI DX CAMP",
  // 必須: アプリの説明をSEOタグに記載するための設定
  appDescription:
    "私たちは、DX人材の養成と最新のテクノロジーで壱岐島のICT化を推進します。",
  // 必須: ドメイン名 (no https://, not trialing slash at the end, just the naked domain)
  domainName: "test.vercel.app",
  // twitterのユーザー名
  twitter: "",
  // HeaderとFooterで表示するリンク
  links: [
    {
      href: "",
      label: "トップ",
    },
    {
      href: "",
      label: "学ぶ",
    },
    {
      href: "",
      label: "IT研修",
    },
    {
      href: "/#news",
      label: "お知らせ",
    },
    {
      href: "/#company-info",
      label: "運営情報",
    },
    {
      href: "/#contact",
      label: "お問い合わせ",
    },
  ],
  // Google AnalyticsのID
  googleAnalyticsId: "G-thisistestid",
} as ConfigProps;

export default config;
