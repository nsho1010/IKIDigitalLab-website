import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import "highlight.js/styles/hybrid.css";
import { getSEOTags } from "@/lib/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: "プライバシーポリシー | " + config.appName,
  description: config.appDescription,
  openGraph: {
    title: "プライバシーポリシー | " + config.appName,
    description: config.appDescription,
  },
});

const PrivacyPolicyPage = () => {
  return (
    <main className="max-w-prose mx-auto space-y-8 px-8 py-16 gap-16 lg:gap-24 pt-16 lg:pt-24">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">トップ</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>プライバシーポリシー</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <article className="prose prose-slate mx-auto dark:prose-invert">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold mb-4">プライバシーポリシー</h1>
          <p className="mb-4">
            IKI DX
            STUDIO（以下「当社」といいます）は、お客様の個人情報の適切な取り扱いを重要視しており、個人情報の保護に関する法律及び関連法令等を遵守するとともに、以下のプライバシーポリシーに従って、お客様の個人情報を安全かつ適切に取り扱うことを宣言いたします。
          </p>
          <h2 className="text-2xl font-bold mb-2">1. 個人情報の取得</h2>
          <p className="mb-4">
            当社は、お問い合わせフォームにおいて、お客様の氏名とメールアドレスを取得いたします。
          </p>
          <h2 className="text-2xl font-bold mb-2">2. 個人情報の利用目的</h2>
          <p className="mb-4">
            取得した個人情報は、お客様からのお問い合わせに対する回答や連絡のために利用いたします。
          </p>
          <h2 className="text-2xl font-bold mb-2">3. 個人情報の第三者提供</h2>
          <p className="mb-4">
            当社は、法令に基づく場合を除き、お客様の同意なくお客様の個人情報を第三者に提供することはありません。
          </p>
          <h2 className="text-2xl font-bold mb-2">4. 個人情報の安全管理</h2>
          <p className="mb-4">
            当社は、お客様の個人情報を正確かつ最新の状態に保ち、不正アクセス、紛失、破壊、改ざん、漏洩などを防止するため、必要かつ適切な安全管理措置を講じます。
          </p>
          <h2 className="text-2xl font-bold mb-2">
            5. 個人情報の開示・訂正・削除
          </h2>
          <p className="mb-4">
            お客様は、当社に対してご自身の個人情報の開示、訂正、削除を請求することができます。請求を希望される場合は、下記のお問い合わせ窓口までご連絡ください。
          </p>
          <h2 className="text-2xl font-bold mb-2">
            6. プライバシーポリシーの変更
          </h2>
          <p className="mb-4">
            当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、当社ウェブサイト上で公表いたします。
          </p>
          <h2 className="text-2xl font-bold mb-2">7. お問い合わせ窓口</h2>
          <p>
            個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
            <br />
            IKI DX CAMP　個人情報取扱担当
            <br />
            住所：長崎県壱岐市郷ノ浦町
            {/* <br />
            電話番号：03-1234-5678 */}
            <br />
            メールアドレス：shohei.nagamura@gmail.com
          </p>
        </div>
      </article>
    </main>
  );
};

export default PrivacyPolicyPage;
