import Link from "next/link";
import { getNewsList } from "@/lib/microcms";
import { formatDate } from "@/lib/utils";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const News = async () => {
  const data = await getNewsList({
    limit: 3,
  });

  return (
    <section id="news" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* ヘッダー */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-cyan-600" />
              <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">
                News
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-950 leading-tight">
              お知らせ
            </h2>
          </div>
          <Link
            href="/news"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-cyan-600 transition-colors"
          >
            すべて見る
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* コンテンツ */}
        {data.contents.length > 0 ? (
          <div className="flex flex-col divide-y divide-gray-100">
            {data.contents.map((news, id) => (
              <Link
                key={id}
                href={`/news/${news.id}`}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 py-6 hover:bg-gray-50/80 -mx-4 px-4 rounded-xl transition-colors duration-200"
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
                <ArrowUpRight className="shrink-0 w-4 h-4 text-gray-300 group-hover:text-cyan-600 transition-colors hidden sm:block" />
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 py-20 flex flex-col items-center gap-3">
            <p className="text-lg font-bold text-gray-400">Coming soon...</p>
            <p className="text-sm text-gray-400">
              新着情報は現在準備中です。公開までお待ちください。
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default News;
