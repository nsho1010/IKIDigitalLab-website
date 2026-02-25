"use client";

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
import { ChevronRight, Presentation, Settings, Clock, Users, CheckSquare, ChevronDown } from "lucide-react";
import { useState } from "react";

const highlights = [
  { value: "6種", label: "対応テーマ" },
  { value: "2h〜", label: "最短時間" },
  { value: "両対応", label: "オンライン・対面" },
];

const menuItems = [
  { category: "AI活用", title: "AIツールの基礎と業務活用", duration: "2〜4h", description: "ChatGPT・Claudeなどを業務でどう使うか、実際に触りながら学びます。" },
  { category: "データ整理", title: "表計算・データ整理の基礎", duration: "2〜3h", description: "ExcelやGoogleスプレッドシートを使った集計・整理の基本を扱います。" },
  { category: "ITリテラシー", title: "ビジネスITリテラシー", duration: "2h", description: "メール・チャットツール・クラウドストレージなど業務で使うデジタルツールの基礎。" },
  { category: "セキュリティ", title: "情報セキュリティの基礎", duration: "2h", description: "パスワード管理・フィッシング詐欺・データ取り扱いなど現場で必要なセキュリティ知識。" },
  { category: "DX概論", title: "DX・デジタル化の考え方", duration: "2〜3h", description: "「DXとは何か」を現場の言葉で整理する、管理職・幹部向け概要研修。" },
  { category: "コミュニケーション", title: "オンラインコミュニケーション", duration: "2h", description: "ビデオ会議・チャットツールの使い方と、オンラインでの情報共有の整え方。" },
];

const customPoints = [
  {
    icon: <Settings className="w-6 h-6 text-cyan-600" />,
    title: "内容のカスタマイズ",
    description: "汎用カリキュラムの当てはめではなく、組織の業務・使っているツール・メンバーの習熟度に合わせて内容を設計します。",
  },
  {
    icon: <Clock className="w-6 h-6 text-cyan-600" />,
    title: "時間の柔軟性",
    description: "2時間の短時間研修から半日・丸一日まで対応。業務の合間に組み込めるコンパクトな形から始めることもできます。",
  },
  {
    icon: <Users className="w-6 h-6 text-cyan-600" />,
    title: "形式の選択",
    description: "オンライン・対面どちらにも対応します。少人数の勉強会形式から部門単位の研修まで、規模を問わず相談可能です。",
  },
];

const steps = [
  { title: "研修の目的・対象・状況を確認", description: "「どんなメンバーに」「何を身につけてほしいか」「現状どのくらいITに慣れているか」を事前にお聞きします。" },
  { title: "内容・形式の設計", description: "ヒアリングをもとに、研修の内容・時間・進め方を設計します。既存の業務ツールに合わせた内容にカスタマイズします。" },
  { title: "研修の実施", description: "一方的な講義ではなく、実際に手を動かす時間を設けながら進めます。オンライン・対面どちらにも対応します。" },
  { title: "振り返り・フォロー", description: "研修後に「使えているか」を確認し、必要に応じて補足や個別フォローを行います。研修で終わりにしない支援を心がけます。" },
];

const orgTypes = [
  "自治体・公的機関", "中小企業", "NPO・社会福祉法人",
  "農業・漁業関連", "飲食・宿泊業", "小売・サービス業",
  "医療・福祉", "教育関連機関",
];

const faqs = [
  { q: "何人くらいから依頼できますか？", a: "人数の下限は特に設けていません。少人数の勉強会のような形でも対応します。まずはご相談ください。" },
  { q: "既存の業務ツールに合わせた内容にできますか？", a: "はい。実際に使っているソフトやツールに合わせて内容を調整します。事前にお使いのツールをお知らせください。" },
  { q: "社内稟議に使える資料はもらえますか？", a: "研修の概要・目的・想定時間などをまとめた資料を提供できます。お問い合わせの際にお伝えください。" },
  { q: "研修の費用はどのくらいですか？", a: "内容・時間・人数によって異なります。まずはご要望をお聞きしてからお見積もりします。" },
];

const ItTrainingContent = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="flex flex-col min-h-screen">
      {/* ヒーローセクション（インディゴダーク） */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-cyan-50 via-white to-cyan-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-80 h-80 bg-cyan-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300 rounded-full blur-3xl" />
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
                <BreadcrumbPage>企業・団体向けIT研修</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6 flex-1"
            >
              <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium">
                <Presentation className="w-4 h-4" />
                企業・団体向けIT研修
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                組織に合わせて、
                <br />
                <span className="text-cyan-600">現場で使える</span>研修を
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                「AIやITのことを、スタッフにも理解してほしい」
                <br />
                そのニーズに応えるため、組織の状況に合わせた研修を提供しています。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/#contact">
                  <Button size="lg" className="bg-cyan-600 text-white hover:bg-cyan-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg px-8 font-bold">
                    相談してみる
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </Button>
                </Link>
                <a href="#process">
                  <Button size="lg" variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8">
                    研修の流れを見る
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* ハイライトバッジ */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-row lg:flex-col gap-4 flex-shrink-0"
            >
              {highlights.map((h) => (
                <div key={h.label} className="bg-white border border-cyan-200 rounded-xl px-6 py-4 text-center min-w-[100px] shadow-sm">
                  <div className="text-2xl font-black text-cyan-600">{h.value}</div>
                  <div className="text-gray-500 text-xs mt-1">{h.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 研修メニュー（一覧形式） */}
      <section className="py-20 bg-cyan-50">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              研修<span className="text-cyan-600">メニュー</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">組み合わせ・カスタマイズも可能です。</p>
          </motion.div>
          <div className="border border-gray-200 rounded-2xl overflow-hidden">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className={`flex items-start gap-4 px-6 py-5 hover:bg-cyan-50 transition-colors duration-200 cursor-default ${index < menuItems.length - 1 ? "border-b border-gray-100" : ""}`}
              >
                <CheckSquare className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <span className="text-xs bg-cyan-50 text-cyan-700 px-2 py-0.5 rounded font-medium">{item.category}</span>
                    <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
                <span className="flex-shrink-0 text-xs text-cyan-600 bg-cyan-50 border border-cyan-100 px-3 py-1 rounded-full font-medium whitespace-nowrap">
                  {item.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* カスタマイズの仕組み */}
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
              カスタマイズの<span className="text-cyan-600">3つの軸</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">既製品の研修ではなく、現場に合わせた設計をします。</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl border-t-4 border-cyan-400 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-4">
                  {point.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{point.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 研修の流れ（ジグザグタイムライン） */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              研修の<span className="text-cyan-600">流れ</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">まず状況をお聞きして、内容を一緒に設計します。</p>
          </motion.div>

          {/* PC: ジグザグタイムライン */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-cyan-50 -translate-x-1/2" />
            <div className="space-y-10">
              {steps.map((step, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex items-center gap-8 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <div className="flex-1">
                      <div className={`bg-white border border-cyan-100 rounded-xl p-6 shadow-sm hover:border-cyan-300 transition-colors ${isLeft ? "text-right" : "text-left"}`}>
                        <div className="text-xs text-cyan-500 font-medium mb-1">STEP {index + 1}</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-base shadow-md z-10">
                      {index + 1}
                    </div>
                    <div className="flex-1" />
                  </motion.div>
                );
              })}
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
                  {index + 1}
                </div>
                <div className="pt-1">
                  <div className="text-xs text-cyan-500 font-medium mb-1">STEP {index + 1}</div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* こんな組織に */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              こんな組織・団体に<span className="text-cyan-600">選ばれています</span>
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {orgTypes.map((org) => (
                <span key={org} className="bg-white border border-cyan-200 text-cyan-700 text-sm px-4 py-2 rounded-full shadow-sm">
                  {org}
                </span>
              ))}
            </div>
            <p className="text-gray-600 text-sm">規模・業種を問わず、まずはご相談ください。</p>
          </motion.div>
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
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-cyan-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-sm">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-cyan-500 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} />
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
              まずは、相談からはじめましょう
            </h2>
            <p className="text-cyan-100 text-base md:text-lg leading-relaxed">
              「こういう研修ができるか」「どんな内容が合うかわからない」
              <br />
              担当者の方のご相談も歓迎します。見積もり依頼もお気軽にどうぞ。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/#contact">
                <Button size="lg" className="bg-white text-cyan-700 hover:bg-cyan-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg px-10 py-6 text-lg font-bold">
                  問い合わせる・見積もり依頼
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

export default ItTrainingContent;
