import Link from "next/link";
import { getNewsList } from "@/lib/microcms";
import Pagination from "@/components/ui/pagination";
import { formatDate } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import config from "@/config";
import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "お知らせ | " + config.appName,
  description: config.appName + "のお知らせ一覧ページです。",
  openGraph: {
    title: "お知らせ | " + config.appName,
    description: config.appName + "のお知らせ一覧ページです。",
  },
});

const NewsListPage = async ({
  searchParams,
}: {
  searchParams: { page: number; pageSize: number };
}) => {
  const page = Number(searchParams.page) || 1;
  const pageSize = Number(searchParams.pageSize) || 9;
  const offset = (page - 1) * pageSize;
  const data = await getNewsList({ offset, limit: pageSize });
  const totalPages = Math.ceil(data.totalCount / pageSize);

  return (
    <main className="min-h-screen bg-white">
      {/* ページヘッダー */}
      <div className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/60" />
          <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-50/80 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 pt-32 pb-16">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-gray-400 hover:text-gray-700 transition-colors text-sm">
                  トップ
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-sm text-gray-700">お知らせ</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-cyan-600" />
            <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">
              News
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950 leading-tight">
            お知らせ
          </h1>
        </div>
      </div>

      {/* コンテンツ */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        {data.contents.length > 0 ? (
          <>
            <div className="flex flex-col divide-y divide-gray-100">
              {data.contents.map((news) => (
                <Link
                  key={news.id}
                  href={`/news/${news.id}`}
                  className="group flex flex-col sm:flex-row sm:items-center gap-4 py-7 hover:bg-gray-50/80 -mx-4 px-4 rounded-xl transition-colors duration-200"
                >
                  <time
                    className="shrink-0 text-sm font-medium text-gray-400 w-28"
                    dateTime={news.publishedAt || news.createdAt}
                  >
                    {formatDate(news.publishedAt ?? news.createdAt)}
                  </time>
                  <h3 className="flex-1 text-base font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors line-clamp-2 leading-snug">
                    {news.title}
                  </h3>
                  {news.description && (
                    <p className="hidden md:block flex-1 text-sm text-gray-400 line-clamp-1 max-w-xs">
                      {news.description}
                    </p>
                  )}
                  <ArrowUpRight className="shrink-0 w-4 h-4 text-gray-300 group-hover:text-cyan-600 transition-colors hidden sm:block" />
                </Link>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center mt-16">
                <Pagination totalPages={totalPages} />
              </div>
            )}
          </>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 py-24 px-6 flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <span className="w-8 h-px bg-cyan-600" />
              <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">
                Coming Soon
              </span>
              <span className="w-8 h-px bg-cyan-600" />
            </div>
            <h2 className="font-extrabold text-3xl md:text-4xl tracking-tight text-gray-950">
              準備中です
            </h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-md">
              現在、お知らせを準備中です。
              <br />
              公開までしばらくお待ちください。
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default NewsListPage;
