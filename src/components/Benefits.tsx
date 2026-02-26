"use client";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Bot, GraduationCap } from "lucide-react";

const benefitsData = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    number: "01",
    title: "業務改善とDXの伴走支援",
    description:
      "現場の業務を一緒に整理し、ムダ・手戻りを減らす改善から着手。小さく始めて成果を積み上げ、壱岐の現場に合うDXを形にします。",
    tag: "DX推進",
  },
  {
    icon: <Bot className="h-6 w-6" />,
    number: "02",
    title: "AI活用で「できること」を増やす",
    description:
      "文章作成・問い合わせ対応・見積や資料づくりなど、すぐ効く領域からAIを導入。ツール選定から運用まで、無理なく使える形で支援します。",
    tag: "AI活用",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    number: "03",
    title: "定着と内製化までサポート",
    description:
      "導入して終わりにせず、社内で回る状態まで伴走。必要な範囲で研修やマニュアル整備も行い、「外注し続けない」体制づくりを支えます。",
    tag: "内製化支援",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-cyan-600" />
              <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">
                Benefits
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-950 leading-tight">
              <span className="text-cyan-600">DX・AI活用</span>を
              <br className="hidden md:block" />
              伴走支援します
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm leading-relaxed text-sm md:text-base">
            業務改善からAI活用、定着・内製化まで
            <br />
            一緒に進めます。
          </p>
        </motion.div>

        {/* カードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col gap-6 p-8 rounded-2xl border border-gray-100 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-50 transition-all duration-300 bg-white"
            >
              {/* 番号 */}
              <span className="absolute top-6 right-6 text-4xl font-black text-gray-100 leading-none select-none group-hover:text-cyan-50 transition-colors">
                {benefit.number}
              </span>

              {/* アイコン */}
              <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-2xl bg-cyan-600 text-white group-hover:bg-cyan-700 transition-colors duration-300">
                {benefit.icon}
              </div>

              {/* コンテンツ */}
              <div className="flex flex-col gap-3 relative z-10">
                <span className="inline-flex text-xs font-semibold text-cyan-600 bg-cyan-50 px-2.5 py-1 rounded-full w-fit">
                  {benefit.tag}
                </span>
                <h3 className="text-lg font-bold text-gray-950 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* フッター */}
              {/* <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-xs font-medium text-gray-400 group-hover:text-cyan-600 transition-colors duration-300">
                <span>詳しく見る</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
