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
import { ChevronRight, Code, MapPin, Users, BookOpen, Layers, ChevronDown } from "lucide-react";
import { useState } from "react";

const targets = [
  {
    icon: <Users className="w-6 h-6 text-cyan-400" />,
    label: "業務効率化を目指す方",
    description: "ExcelやGASを使って日常業務の繰り返し作業をラクにしたい",
  },
  {
    icon: <MapPin className="w-6 h-6 text-cyan-400" />,
    label: "壱岐でスキルをつけたい方",
    description: "島を離れずにプログラミングを学びたい・手に職をつけたい",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-cyan-400" />,
    label: "はじめの一歩を踏み出したい方",
    description: "プログラミングに興味があるが、何から始めればいいかわからない",
  },
  {
    icon: <Layers className="w-6 h-6 text-cyan-400" />,
    label: "AIツールを活用したい方",
    description: "ChatGPTなどを使いこなして、仕事や日常をもっとスマートにしたい",
  },
];

const roadmap = [
  {
    step: "STEP 1",
    label: "はじめの一歩",
    topics: ["プログラミングの考え方", "HTML・CSS基礎", "AIツールを触ってみる"],
  },
  {
    step: "STEP 2",
    label: "動くものを作る",
    topics: ["Python / JavaScript基礎", "GAS・Excelマクロ", "実際の業務に使う"],
  },
  {
    step: "STEP 3",
    label: "業務に活かす",
    topics: ["小さなツールを自作する", "AIと一緒にコードを書く", "独学の続け方を整える"],
  },
];

const steps = [
  { title: "まず話を聞かせてください", note: "何がしたいか・何がわからないかから", description: "「プログラミングを学びたい理由」「今どのくらい触ったことがあるか」を確認します。目標や状況に合わせて、進め方を一緒に考えます。" },
  { title: "学習の進め方を整理する", note: "あなたのペースで", description: "何をどの順番で学ぶかを整理します。週に使える時間や学習スタイルに合わせて、無理のないペースを設計します。" },
  { title: "実際に手を動かしながら学ぶ", note: "詰まったときは一緒に考える", description: "テキストを読むだけでなく、実際にコードを書きながら進めます。エラーが出たときもその場で一緒に対処します。" },
  { title: "作りたいものに近づける", note: "ゴールは「使えること」", description: "基礎が身についたら、自分が作りたいものや業務で使いたいものに向けて応用していきます。" },
];

const voices = [
  { text: "業務でGASを使えるようになって、毎日30分かかっていた集計作業が5分で終わるようになりました。", attr: "農業従事者・40代" },
  { text: "「プログラミングは難しい」というイメージがあったけど、一つひとつ丁寧に説明してもらえてよかったです。", attr: "飲食業・30代" },
  { text: "ChatGPTを仕事でどう使うか迷っていましたが、実際に自分の業務で試しながら学べたのがよかったです。", attr: "事務職・50代" },
];

const faqs = [
  { q: "プログラミングが全くはじめてでも大丈夫ですか？", a: "はい。「パソコンの操作には慣れているが、プログラミングはやったことがない」という方を主な対象としています。まったくの未経験からでも始められます。" },
  { q: "対面とオンライン、どちらで受講できますか？", a: "現在は主にオンラインで対応しています。状況に応じて対面での対応も検討しますので、ご相談ください。" },
  { q: "どのくらいの期間・頻度で学べますか？", a: "目標や学習内容によって異なります。まずはご希望をお聞きして、無理のないスケジュールを一緒に考えます。" },
  { q: "子どもも受講できますか？", a: "現時点では主に社会人・高校生以上を対象としています。子ども向けの内容については別途ご相談ください。" },
];

const ProgrammingSchoolContent = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="flex flex-col min-h-screen bg-slate-800">
      {/* ヒーローセクション */}
      <section className="relative pt-32 pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-100 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-50 rounded-full blur-3xl" />
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
                <BreadcrumbPage>プログラミングスクール</BreadcrumbPage>
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
                <Code className="w-4 h-4" />
                プログラミングスクール
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                壱岐で、
                <br />
                <span className="text-cyan-600">自分のペースで</span>学べる場所
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                プログラミングを学びたいけれど、どこから始めればいいかわからない。
                <br />
                そんな方のために、目的と状況に合わせて一緒に進めます。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/#contact">
                  <Button size="lg" className="bg-cyan-600 text-white hover:bg-cyan-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg px-8">
                    相談してみる
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </Button>
                </Link>
                <a href="#roadmap">
                  <Button size="lg" variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-8">
                    学習の流れを見る
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* ターミナル風装飾 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-shrink-0 w-full max-w-xs lg:max-w-sm font-mono"
            >
              <div className="bg-slate-700 rounded-xl overflow-hidden shadow-2xl border border-slate-600">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-600">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-cyan-500/70" />
                  <span className="text-zinc-500 text-xs ml-2">hello.py</span>
                </div>
                <div className="p-5 text-sm space-y-1">
                  <p className="text-zinc-600"># はじめてのプログラム</p>
                  <p><span className="text-purple-400">print</span><span className="text-zinc-300">(</span><span className="text-cyan-400">&quot;こんにちは、壱岐！&quot;</span><span className="text-zinc-300">)</span></p>
                  <p className="text-zinc-600 mt-3"># 実行してみよう</p>
                  <p className="text-zinc-400">$ python hello.py</p>
                  <p className="text-cyan-400">こんにちは、壱岐！</p>
                  <p className="text-zinc-600 animate-pulse mt-2">▌</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 対象者セクション */}
      <section className="py-20 bg-slate-700">
        <div className="max-w-5xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-white">
              こんな方に<span className="text-cyan-400">向けています</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {targets.map((target, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-600 rounded-xl p-6 border border-slate-600 flex gap-4 items-start hover:border-cyan-500/40 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center">
                  {target.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{target.label}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{target.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 学習ロードマップ */}
      <section id="roadmap" className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-white">
              学習<span className="text-cyan-400">ロードマップ</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg">どこから始めるかは、あなたの目標に合わせて決めます。</p>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-4 items-stretch">
            {roadmap.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex-1 rounded-2xl overflow-hidden border border-slate-600 bg-slate-700"
              >
                <div className="px-5 py-3 bg-slate-600 font-bold text-sm flex justify-between items-center">
                  <span className="text-cyan-400">{level.step}</span>
                  <span className="text-zinc-300">{level.label}</span>
                </div>
                <ul className="p-5 space-y-3">
                  {level.topics.map((topic, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-zinc-600 text-sm mt-6">
            ※ すべてのステップを順番に受講する必要はありません。目的に応じてカスタマイズして進めます。
          </p>
        </div>
      </section>

      {/* 受講の流れ */}
      <section className="py-20 bg-slate-700">
        <div className="max-w-3xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-white">
              受講の<span className="text-cyan-400">流れ</span>
            </h2>
          </motion.div>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5 items-start"
              >
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-base shadow-sm z-10">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px h-10 bg-slate-600 mt-1" />
                  )}
                </div>
                <div className="pb-2">
                  <span className="text-xs text-cyan-500 font-medium">{step.note}</span>
                  <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 受講者の声 */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-white">
              受講者の<span className="text-cyan-400">声</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {voices.map((voice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <div className="bg-slate-700 rounded-2xl rounded-tl-none p-5 flex-1 border border-slate-600">
                  <p className="text-zinc-300 text-sm leading-relaxed">{voice.text}</p>
                </div>
                <div className="mt-3 pl-4 text-xs text-zinc-600">{voice.attr}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQセクション */}
      <section className="py-20 bg-slate-700">
        <div className="max-w-3xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-white">
              よくある<span className="text-cyan-400">質問</span>
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
                className="border border-slate-600 bg-slate-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-600 transition-colors"
                >
                  <span className="font-bold text-zinc-200 text-sm">{faq.q}</span>
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
                      <p className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed border-t border-slate-600 pt-4">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              まずは、話してみませんか？
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
              「何を学べばいいかわからない」「自分に合うか不安」
              <br />
              そんな状態でも、一緒に考えるところから始めます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/#contact">
                <Button size="lg" className="bg-cyan-500 text-white hover:bg-cyan-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg px-10 py-6 text-lg font-bold">
                  問い合わせる
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
              <Link href="/#service">
                <Button size="lg" className="bg-transparent border border-slate-500 text-zinc-300 hover:border-cyan-500 hover:text-cyan-400 px-10 py-6 text-lg">
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

export default ProgrammingSchoolContent;
