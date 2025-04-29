import Link from "next/link";
import { getNewsList } from "@/lib/microcms";
import { formatDate } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRight, Calendar, ArrowRight } from "lucide-react";

const News = async () => {
  const data = await getNewsList({
    limit: 3,
  });

  return (
    <section id="news" className="py-12 bg-gradient-to-t from-white to-gray-50">
      <div className="flex flex-col items-center justify-center gap-6 lg:gap-10 p-8 w-full max-w-7xl mx-auto">
        <div className="w-full flex flex-col items-center">
          <Link
            href="/news"
            className="group flex items-center gap-2 hover:text-cyan-600 transition-colors"
          >
            <h2 className="text-4xl font-bold tracking-tight relative inline-block">
              <span className="relative z-10">News</span>
              <span className="absolute bottom-0 left-0 right-0 h-3 bg-cyan-600/20 z-0"></span>
            </h2>
            <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <p className="mt-2 md:text-xl/relaxed lg:text-xl/relaxed text-muted-foreground">
            お知らせ
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {data.contents.length > 0 ? (
            data.contents.map((news, id) => (
              <Card
                key={id}
                className="overflow-hidden rounded-xl shadow-md border-0 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                <Link href={`/news/${news.id}`} className="block h-full">
                  <CardHeader className="p-6 pb-0">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-4 h-4 text-cyan-600 mr-2" />
                      <time
                        className="text-sm font-medium text-cyan-600"
                        dateTime={news.publishedAt || news.createdAt}
                      >
                        {formatDate(news.publishedAt ?? news.createdAt)}
                      </time>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-xl font-semibold leading-snug text-gray-900 group-hover:text-cyan-600 transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {news.description}
                    </p>

                    <div className="flex items-center justify-end text-sm font-medium text-cyan-600 pt-3 border-t border-gray-100">
                      詳細を見る
                      <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))
          ) : (
            <div className="sm:col-span-2 lg:col-span-3 flex justify-center items-center w-full">
              <div className="overflow-hidden rounded-xl shadow-lg bg-gradient-to-r from-cyan-500 to-cyan-600 h-64 flex justify-center items-center w-full">
                <div className="text-center px-8 py-12 relative">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>

                  <p className="text-5xl font-bold text-white mb-4">
                    Coming soon...
                  </p>
                  <p className="text-white/80 text-lg">
                    新着情報は準備中です。もうしばらくお待ちください。
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default News;
