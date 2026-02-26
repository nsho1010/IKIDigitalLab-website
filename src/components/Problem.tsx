"use client";
import { AlertTriangle, Users, DollarSign, Shield } from "lucide-react";
import { motion } from "framer-motion";

const problemData = [
  {
    icon: <Users className="h-5 w-5 text-cyan-600" />,
    title: "担い手不足と属人化",
    description:
      "人口減少や高齢化により、ITや業務改善を担う人が限られ、特定の人に業務やノウハウが集中してしまっている。",
  },
  {
    icon: <DollarSign className="h-5 w-5 text-cyan-600" />,
    title: "外注依存によるコスト増",
    description:
      "ITやシステム対応を外部に頼り続けることでコストがかさみ、継続的なDXや改善に踏み出しにくい状況がある。",
  },
  {
    icon: <Shield className="h-5 w-5 text-cyan-600" />,
    title: "身近な相談先の不足",
    description:
      "離島では、トラブルや改善の相談を気軽にできる相手が少なく、問題が後回しになりやすい。",
  },
  {
    icon: <AlertTriangle className="h-5 w-5 text-cyan-600" />,
    title: "IT活用が定着しない",
    description:
      "ツールを導入しても現場に合わず、使われないまま終わってしまうケースが少なくない。",
  },
];

const Problem = () => {
  return (
    <section className="py-24 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-cyan-500" />
            <span className="text-xs font-semibold tracking-widest text-cyan-500 uppercase">
              Problem
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            こんな悩み、
            <span className="text-cyan-400">ありませんか？</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl leading-relaxed">
            離島でのIT活用には多くの課題があります。IKI Digital Lab.は、
            業務改善とAI活用を軸に、壱岐島にDXが根づく支援を行います。
          </p>
        </motion.div>

        {/* グリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-800">
          {problemData.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-gray-950 p-8 group hover:bg-gray-900 transition-colors duration-300"
            >
              <div className="flex flex-col gap-4">
                {/* 番号 + アイコン */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-cyan-950 border border-cyan-900/50 group-hover:border-cyan-700 transition-colors duration-300">
                    {problem.icon}
                  </div>
                  <span className="text-5xl font-black text-gray-800 leading-none select-none group-hover:text-gray-700 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* テキスト */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-bold text-white">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
