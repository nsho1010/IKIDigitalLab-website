"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight, Zap, Users, BookOpen, Monitor } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "オンラインでの相談・ヒアリング",
    description:
      "まずはビデオ通話やチャットでお話を聞かせてください。現状の業務や気になっていることを整理するところから始めます。島内・島外問わず対応しています。",
  },
  {
    number: "02",
    title: "一緒に進め方を考える",
    description:
      "「何を・どの順番で・どこまで」を一緒に整理します。大きな計画より、まず一歩動けることを大切にします。",
  },
  {
    number: "03",
    title: "小さく試して、使えるか確かめる",
    description:
      "いきなり全部変えるのではなく、一つの業務から試します。使ってみてどうだったかを振り返りながら、実際の現場に合う形を探していきます。",
  },
  {
    number: "04",
    title: "自分たちで続けられる形に整える",
    description:
      "支援が終わっても困らないよう、使い方の整理やメモ作りも一緒に行います。外から頼り続けるのではなく、自分たちの手に残ることを目指します。",
  },
];

const topics = [
  {
    icon: "📝",
    title: "文書・文章まわりの作業",
    description:
      "お知らせ文・案内文・議事録など、文章を書く作業にAIを活用する方法を一緒に試します。",
  },
  {
    icon: "📊",
    title: "データの整理・集計",
    description:
      "ExcelやGoogleスプレッドシートを使ったデータ整理・集計の仕組みを、実際の業務に合わせて考えます。",
  },
  {
    icon: "🔄",
    title: "繰り返し作業の仕組み化",
    description:
      "毎回同じことをしている作業を、少し仕組み化してラクにできないか一緒に考えます。",
  },
  {
    icon: "💬",
    title: "AIツールの使い方を一緒に試す",
    description:
      "ChatGPTやClaudeなどのAIツールを、実際の業務場面でどう使えるか一緒に手を動かしながら試します。",
  },
  {
    icon: "🖥️",
    title: "デジタルツールの選び方・導入",
    description:
      "チャットツール・スケジュール管理・ファイル共有など、現場に合ったツールを一緒に選んで使い始めます。",
  },
  {
    icon: "🌐",
    title: "情報発信の仕組みづくり",
    description:
      "SNSやホームページでの発信を、無理なく続けられる形に整える方法を一緒に考えます。",
  },
];

const approach = [
  {
    icon: <Monitor className="w-6 h-6 text-cyan-600" />,
    title: "まずはオンラインで",
    description:
      "相談・ヒアリング・進め方の確認は、基本的にオンラインで行います。移動の負担なく、気軽に話せる場をつくります。",
  },
  {
    icon: <Users className="w-6 h-6 text-cyan-600" />,
    title: "一緒に考える、丸投げしない",
    description:
      "こちらが答えを押しつけるのではなく、現場の方が「自分ごと」として取り組める形を大切にします。",
  },
  {
    icon: <Zap className="w-6 h-6 text-cyan-600" />,
    title: "小さく、無理なく始める",
    description:
      "大規模な変革よりも、まず動ける一歩を。試しながら現場に合う形を見つけていきます。",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-cyan-600" />,
    title: "使い方が手元に残る支援",
    description:
      "支援終了後も自分たちで続けられるよう、使い方の記録や整理も一緒に行います。",
  },
];

const faqs = [
  {
    q: "ITが得意でなくても大丈夫ですか？",
    a: "はい。専門用語はできるだけ使わずにお伝えします。「パソコンはあまり得意ではない」という方でも、実際に手を動かしながら一緒に進めることができます。",
  },
  {
    q: "費用はどのくらいかかりますか？",
    a: "支援の内容・期間によって異なります。初回の相談は無料ですので、まずはお気軽にご連絡ください。",
  },
  {
    q: "島外からでも相談できますか？",
    a: "はい。基本的な対応はオンラインで行っていますので、場所を問わずご相談いただけます。",
  },
  {
    q: "どこから手をつければいいかわかりません",
    a: "それで大丈夫です。「何がわからないかもわからない」という状態から一緒に整理するのが、この支援の出発点です。まずお話を聞かせてください。",
  },
];

const DxAiSupportContent = () => {
  return (
    <main className="flex flex-col min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-8">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">トップ</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/#service">サービス</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>DX・AI伴走支援</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4" />
              DX・AI伴走支援
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              一緒に考えて、
              <br />
              <span className="text-cyan-600">一歩ずつ</span>進める支援です
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
              「何から手をつければいいかわからない」
              <br />
              そんな状態からでも、一緒に整理することができます。
              <br className="hidden md:block" />
              相談はオンラインで。現場に合った形を、ゆっくり見つけていきましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="bg-cyan-600 text-white hover:bg-cyan-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg px-8"
                >
                  相談してみる
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
              <a href="#process">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8"
                >
                  支援の流れを見る
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 支援のスタンスセクション */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              この支援で
              <span className="text-cyan-600">大切にしていること</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              答えを押しつけるのではなく、現場の方が自分たちで動けるようになることを目指しています。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approach.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-xl border border-gray-100 bg-gray-50 hover:border-cyan-200 hover:bg-cyan-50/30 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 対応できることセクション */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              一緒に取り組める
              <span className="text-cyan-600">テーマの例</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              これ以外のテーマでも、まずご相談ください。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-cyan-200 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{topic.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {topic.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {topic.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 支援の流れセクション */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              支援の<span className="text-cyan-600">流れ</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              相談から始まり、現場に合わせながら進めていきます。
            </p>
          </motion.div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-cyan-600 text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-sm">
                  {step.number}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQセクション */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              よくある<span className="text-cyan-600">質問</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-cyan-200 transition-colors duration-300"
              >
                <h3 className="text-base font-bold text-gray-900 mb-3 flex items-start gap-2">
                  <span className="text-cyan-600 font-bold text-lg leading-none mt-0.5">
                    Q.
                  </span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-6">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              まずは、話してみてください
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              「うちに使えるのかわからない」「何を聞けばいいかも不明」
              <br />
              そんな状態でも大丈夫です。一緒に整理するところから始めます。
              <br className="hidden md:block" />
              相談はオンラインで受け付けています。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="bg-cyan-600 text-white hover:bg-cyan-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg px-10 py-6 text-lg"
                >
                  問い合わせる
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
              <Link href="/#service">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-10 py-6 text-lg"
                >
                  他のサービスを見る
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default DxAiSupportContent;
