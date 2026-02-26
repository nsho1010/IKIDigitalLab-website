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
  title: "利用規約 | " + config.appName,
  description: config.appDescription,
  openGraph: {
    title: "利用規約 | " + config.appName,
    description: config.appDescription,
  },
});

const TermsOfServicePage = () => {
  return (
    <main className="max-w-prose mx-auto space-y-8 px-8 py-16 gap-16 lg:gap-24 pt-16 lg:pt-24">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">トップ</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>利用規約</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <article className="prose prose-slate mx-auto dark:prose-invert">
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-px bg-cyan-600" />
            <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">
              Terms of Service
            </span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-950 mb-4">利用規約</h1>

          <p>
            本利用規約（以下「本規約」といいます。）は、{config.appName}
            （以下「本サイト」といいます。）の利用条件を定めるものです。
            本サイトを利用された場合、本規約に同意したものとみなします。
          </p>

          <h2 className="text-2xl font-bold mb-2">第1条（提供情報について）</h2>
          <p>
            本サイトに掲載する情報は、参考情報として提供するものであり、その正確性、完全性、有用性、最新性、適法性等を保証するものではありません。
            具体的な意思決定や行動（契約、導入、投資、採用、医療・法律・税務等を含みます。）を行う際は、ご自身の判断と責任で行ってください。
          </p>

          <h2 className="text-2xl font-bold mb-2">第2条（免責事項）</h2>
          <p>
            運営者は、本サイトの利用または利用不能により生じた損害（逸失利益、間接損害、データの消失、システム障害等を含みます。）について、
            法令で免責が認められない場合を除き、一切の責任を負いません。
          </p>
          <p>
            本サイトからリンクされた第三者のサイト・サービスについて、運営者はその内容や安全性等を保証せず、利用によって生じた損害について責任を負いません。
          </p>

          <h2 className="text-2xl font-bold mb-2">
            第3条（サービス内容の変更・中断・停止）
          </h2>
          <p>
            運営者は、事前の予告なく、本サイトの内容の変更、追加、削除、提供の中断または停止を行うことがあります。
          </p>

          <h2 className="text-2xl font-bold mb-2">第4条（禁止事項）</h2>
          <p>
            利用者は、本サイトの利用にあたり、以下の行為をしてはなりません。
          </p>
          <ul>
            <li>法令または公序良俗に反する行為</li>
            <li>
              運営者または第三者の権利・利益（著作権、商標権、プライバシー等）を侵害する行為
            </li>
            <li>本サイトの運営を妨げる行為、または不正アクセス等の行為</li>
            <li>虚偽の情報を送信する行為</li>
            <li>その他、運営者が不適切と判断する行為</li>
          </ul>

          <h2 className="text-2xl font-bold mb-2">第5条（著作権等）</h2>
          <p>
            本サイトに掲載されている文章、画像、動画、デザイン、ロゴ、プログラムその他一切のコンテンツの権利は、
            運営者または正当な権利者に帰属します。私的利用の範囲を超えて、無断で複製、転載、改変、配布、販売等を行うことを禁止します。
          </p>

          <h2 className="text-2xl font-bold mb-2">第6条（規約の変更）</h2>
          <p>
            運営者は、必要に応じて本規約を変更することがあります。変更後の規約は、本サイト上に表示した時点から効力を生じます。
          </p>

          <h2 className="text-2xl font-bold mb-2">第7条（準拠法・管轄）</h2>
          <p>
            本規約は日本法を準拠法とし、本サイトに関して紛争が生じた場合、運営者の所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。
          </p>

          <h2 className="text-2xl font-bold mb-2">第8条（お問い合わせ）</h2>
          <p>
            本規約に関するお問い合わせは、本サイト内のお問い合わせフォームよりご連絡ください。
          </p>

          <p className="text-right">以上</p>
        </div>
      </article>
    </main>
  );
};

export default TermsOfServicePage;
