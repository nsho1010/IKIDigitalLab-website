import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getNewsDetail } from "@/lib/microcms";
import { formatDate } from "@/lib/utils";
import { getSEOTags } from "@/lib/seo";
import config from "@/config";
import { ArrowLeft } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import parse, {
  HTMLReactParserOptions,
  Element,
  Text,
} from "html-react-parser";
import hljs from "highlight.js";
import "highlight.js/styles/hybrid.css";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = await getNewsDetail(params.slug);
  return getSEOTags({
    title: data.title + " | " + config.appName,
    description: data.description,
    openGraph: {
      title: data.title + " | " + config.appName,
      description: data.description,
    },
  });
}

const NewsDetailPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getNewsDetail(params.slug);
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.name === "img") {
        return (
          <Image
            src={domNode.attribs.src}
            alt={domNode.attribs.alt}
            width={Number(domNode.attribs.width)}
            height={Number(domNode.attribs.height)}
          />
        );
      }
      if (domNode instanceof Element && domNode.name === "pre") {
        if (
          domNode.children[0] instanceof Element &&
          domNode.children[0].name === "code" &&
          domNode.children[0].children[0] instanceof Text
        ) {
          const code = domNode.children[0].children[0].data;
          const highlightCode = hljs.highlightAuto(code);
          return (
            <pre>
              <code className="hljs">{parse(highlightCode.value)}</code>
            </pre>
          );
        }
      }
    },
  };
  const content = parse(data.content, options);

  return (
    <main className="min-h-screen bg-white">
      {/* ページヘッダー */}
      <div className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/60" />
          <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-50/80 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 pt-32 pb-12">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-gray-400 hover:text-gray-700 transition-colors text-sm">
                  トップ
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/news" className="text-gray-400 hover:text-gray-700 transition-colors text-sm">
                  お知らせ
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-sm text-gray-700 line-clamp-1 max-w-xs">
                  {data.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-cyan-600" />
            <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">
              News
            </span>
          </div>

          <time
            className="text-sm font-medium text-gray-400 mb-4 block"
            dateTime={data.publishedAt || data.createdAt}
          >
            {formatDate(data.publishedAt || data.createdAt)}
          </time>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-950 leading-tight mb-4">
            {data.title}
          </h1>

          {data.description && (
            <p className="text-base md:text-lg text-gray-500 leading-relaxed">
              {data.description}
            </p>
          )}
        </div>
      </div>

      {/* 記事本文 */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        {data.thumbnail && (
          <div className="mb-12 rounded-2xl overflow-hidden">
            <Image
              src={data.thumbnail.url}
              alt={data.title}
              className="w-full object-cover"
              style={{ aspectRatio: "800/400", objectFit: "cover" }}
              height={400}
              width={800}
            />
          </div>
        )}

        <article className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-cyan-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-pre:rounded-xl">
          {content}
        </article>

        {/* 戻るリンク */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-cyan-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            お知らせ一覧に戻る
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NewsDetailPage;
