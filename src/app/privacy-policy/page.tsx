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
        <div className="space-y-6">
          <h1 className="text-3xl font-bold mb-4">プライバシーポリシー</h1>

          <p>
            {config.appName}
            （以下「本サイト」といいます。）は、個人情報の重要性を認識し、
            個人情報の保護に関する法律および関連法令を遵守するとともに、
            以下のプライバシーポリシーに基づき、個人情報を適切に取り扱います。
          </p>

          <h2 className="text-2xl font-bold mb-2">1. 取得する個人情報</h2>
          <p>本サイトでは、以下の個人情報を取得する場合があります。</p>
          <ul>
            <li>氏名</li>
            <li>メールアドレス</li>
            <li>お問い合わせ内容</li>
            <li>その他、フォーム入力時に利用者が任意で提供する情報</li>
          </ul>

          <h2 className="text-2xl font-bold mb-2">2. 個人情報の利用目的</h2>
          <p>取得した個人情報は、以下の目的の範囲内で利用します。</p>
          <ul>
            <li>お問い合わせ・ご相談への対応</li>
            <li>
              サービス（DX・AIサポート、Web制作・開発、プログラミング教育等）の案内・連絡
            </li>
            <li>サービス品質の向上および改善のための分析</li>
            <li>必要に応じた重要なお知らせの通知</li>
          </ul>

          <h2 className="text-2xl font-bold mb-2">3. 個人情報の第三者提供</h2>
          <p>
            運営者は、次の場合を除き、本人の同意なく個人情報を第三者に提供することはありません。
          </p>
          <ul>
            <li>法令に基づく場合</li>
            <li>
              人の生命、身体または財産の保護のために必要で、本人の同意を得ることが困難な場合
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-2">4. 個人情報の管理</h2>
          <p>
            運営者は、個人情報への不正アクセス、紛失、改ざん、漏洩等を防止するため、
            適切な安全管理措置を講じ、個人情報を適切に管理します。
          </p>

          <h2 className="text-2xl font-bold mb-2">
            5. 個人情報の開示・訂正・削除
          </h2>
          <p>
            利用者は、自己の個人情報について、開示・訂正・追加・削除を請求することができます。
            ご希望の場合は、下記のお問い合わせ窓口までご連絡ください。
          </p>

          <h2 className="text-2xl font-bold mb-2">
            6. プライバシーポリシーの変更
          </h2>
          <p>
            本ポリシーの内容は、法令の変更やサービス内容の変更等に応じて、
            予告なく改定されることがあります。変更後の内容は本サイトに掲載した時点で効力を生じます。
          </p>

          <h2 className="text-2xl font-bold mb-2">7. お問い合わせ窓口</h2>
          <p>
            個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。
            <br />
            DX・AIサポート IKI | DAIVe（運営者）
            <br />
            所在地：長崎県壱岐市
            <br />
            メールアドレス：shohei.nagamura@gmail.com
          </p>

          <p className="text-right">以上</p>
        </div>
      </article>
    </main>
  );
};

export default PrivacyPolicyPage;
