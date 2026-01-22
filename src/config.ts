import { ConfigProps } from "../types/config";

const config = {
  // 必須
  appName: "DX・AIサポート IKI｜DAIVe",
  // 必須: アプリの説明をSEOタグに記載するための設定
  appDescription:
    "業務改善・AI活用・内製化から、必要に応じたWeb受託開発まで、壱岐の事業者に寄り添って伴走します。",
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
      href: "#service",
      label: "サービス",
    },
    {
      href: "",
      label: "スキル習得",
    },
    {
      href: "/#news",
      label: "お知らせ",
    },
    {
      href: "/#company-info",
      label: "運営概要",
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
