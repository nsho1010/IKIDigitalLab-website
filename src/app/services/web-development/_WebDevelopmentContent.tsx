"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight, Globe, ChevronDown } from "lucide-react";

const serviceTypes = [
  {
    label: "コーポレートサイト",
    title: "事業の顔となるサイトを、目的から設計",
    description:
      "「とりあえずホームページ」ではなく、誰に・何を伝えたいかを整理してから制作します。更新のしやすさや、問い合わせにつながる導線も合わせて設計します。",
    points: ["目的・ターゲット設計", "スマートフォン対応", "公開後の更新方法もレクチャー"],
  },
  {
    label: "LP・告知ページ",
    title: "イベント・サービスを伝える一枚のページ",
    description:
      "短期間で公開が必要な告知や、申し込み受付に使えるシンプルなページを制作します。必要な情報だけをスッキリ整理した構成で、伝えたいことを届けます。",
    points: ["スピーディな制作", "申し込みフォーム設置", "SNSシェア対応"],
  },
  {
    label: "業務用Webアプリ",
    title: "現場の業務に合わせた専用ツールを開発",
    description:
      "予約管理・申請フォーム・社内業務ツールなど、既製品では対応しにくい業務をWebアプリとして開発します。実際の業務フローを聞きながら設計します。",
    points: ["要件ヒアリングから設計", "段階的な開発・追加対応", "保守・継続サポート相談可"],
  },
  {
    label: "既存サイトの改修",
    title: "今あるサイトを、もっと使いやすく",
    description:
      "「古くなってきた」「スマホで見づらい」「機能を足したい」など、現在使っているサイトへの改修・機能追加にも対応します。作り直しが必要かどうかも含めて相談できます。",
    points: ["現状の診断・相談から", "部分改修・全面リニューアル", "他社制作サイトも相談可"],
  },
];

const steps = [
  { number: "01", title: "ヒアリング・目的の整理", description: "何のためのサイト・アプリなのか、誰に使ってもらいたいのかを一緒に整理します。" },
  { number: "02", title: "構成・仕様の確認", description: "必要なページ・機能・デザインの方向性を確認します。予算・運用体制に合わせて設計します。" },
  { number: "03", title: "制作・実装", description: "確認しながら進めます。途中で「ここを変えたい」という場合も柔軟に対応します。" },
  { number: "04", title: "公開・引き渡し", description: "公開後の更新方法や管理の仕方もお伝えします。使い続けられる形を一緒に整えます。" },
];

const commitments = [
  { num: "01", title: "目的から一緒に考える", description: "「とりあえずホームページ」ではなく、何のために・誰に向けて作るのかを丁寧に確認してから進めます。" },
  { num: "02", title: "現場の運用に合わせた設計", description: "公開後に自分たちで更新できるか、管理しやすいかも含めて設計します。使い続けられることを大切にします。" },
  { num: "03", title: "壱岐の現場・文化に合わせて", description: "都市部向けのテンプレートを当てはめるのではなく、壱岐の現場・利用者に合った形を考えます。" },
  { num: "04", title: "公開後も相談できる", description: "納品して終わりではなく、公開後の疑問や修正についても継続して相談に応じます。" },
];

const faqs = [
  { q: "どんな技術・言語で作りますか？", a: "用途に応じて選定します。シンプルなサイトであればNext.jsやWordPressなど、管理のしやすい構成を選ぶこともあります。まずは何を作りたいかをお聞きしてから提案します。" },
  { q: "費用の目安を教えてください", a: "規模・機能・デザインの複雑さによって大きく異なります。まずはご要望をお聞きして見積もりをお出しします。" },
  { q: "公開後の更新は自分たちでできますか？", a: "できる仕組みを設計するよう心がけています。更新方法のレクチャーや手順書の作成にも対応します。" },
  { q: "デザインのイメージがない状態でも相談できますか？", a: "はい。「こういう雰囲気にしたい」「他のサイトで好きなものがある」という段階からでも一緒に整理できます。" },
];

const WebDevelopmentContent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="flex flex-col min-h-screen">
      {/* ヒーローセクション（ダーク） */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-cyan-50 via-white to-cyan-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-300 rounded-full blur-3xl" />
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
                <BreadcrumbPage>Web制作・開発</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6 flex-1"
            >
              <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium">
                <Globe className="w-4 h-4" />
                Web制作・開発
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                目的に合った形を、
                <br />
                <span className="text-cyan-600">一緒に</span>つくります
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                「何を作るか」より「何のために作るか」を大切に。
                <br />
                コーポレートサイトから業務用Webアプリまで、壱岐の現場に合った形で進めます。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/#contact">
                  <Button size="lg" className="bg-cyan-600 text-white hover:bg-cyan-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg px-8">
                    相談してみる
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </Button>
                </Link>
                <a href="#process">
                  <Button size="lg" variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8">
                    制作の流れを見る
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* 擬似ブラウザUI */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-shrink-0 w-full max-w-xs lg:max-w-sm"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-100">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="flex-1 mx-3 bg-white rounded h-5 text-xs text-gray-400 flex items-center px-2">iki-digital.jp</div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-100 rounded w-full" />
                  <div className="h-3 bg-gray-100 rounded w-5/6" />
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="h-16 bg-cyan-50 rounded" />
                    <div className="h-16 bg-cyan-50 rounded" />
                  </div>
                  <div className="h-8 bg-cyan-500/30 rounded w-1/2 mx-auto" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 制作タイプ別タブセクション */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              対応できる<span className="text-cyan-600">制作・開発の種類</span>
            </h2>
          </motion.div>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {serviceTypes.map((type, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === index
                    ? "bg-cyan-600 text-white shadow-md"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-cyan-300"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{serviceTypes[activeTab].title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{serviceTypes[activeTab].description}</p>
              <ul className="flex flex-col sm:flex-row gap-3">
                {serviceTypes[activeTab].points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-cyan-700 bg-cyan-50 px-4 py-2 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* こだわりセクション */}
      <section className="py-20 bg-cyan-50">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              制作で<span className="text-cyan-600">こだわっていること</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitments.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-cyan-400 hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <span className="absolute top-3 right-4 text-6xl font-black text-slate-100 select-none leading-none">
                  {item.num}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2 relative z-10">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 制作の流れ（水平タイムライン） */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              制作の<span className="text-cyan-600">流れ</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg">相談から公開まで、一緒に進めていきます。</p>
          </motion.div>
          {/* PC: 水平タイムライン */}
          <div className="hidden md:block relative">
            <div className="absolute top-7 left-0 right-0 h-0.5 bg-cyan-100" />
            <div className="grid grid-cols-4 gap-6 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md z-10 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          {/* SP: 縦並び */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-base shadow-md">
                  {step.number}
                </div>
                <div className="pt-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQセクション */}
      <section className="py-20 bg-cyan-50">
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
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-sm">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-cyan-600 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-20 bg-cyan-600">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              まずは、話してみてください
            </h2>
            <p className="text-cyan-100 text-base md:text-lg leading-relaxed">
              「こんなものが作れるか」「どのくらいかかるか」など、
              <br />
              漠然とした段階でも構いません。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/#contact">
                <Button size="lg" className="bg-white text-cyan-700 hover:bg-cyan-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg px-10 py-6 text-lg font-bold">
                  問い合わせる
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
              <Link href="/#service">
                <Button size="lg" className="bg-transparent border border-white text-white hover:bg-cyan-700 px-10 py-6 text-lg">
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

export default WebDevelopmentContent;
