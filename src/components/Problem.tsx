"use client";
import { AlertTriangle, Users, DollarSign, Shield } from "lucide-react";
import { motion } from "framer-motion";

const problemData = [
  {
    icon: <Users className="h-6 w-6 text-cyan-600" />,
    title: "担い手不足と属人化",
    description:
      "人口減少や高齢化により、ITや業務改善を担う人が限られ、特定の人に業務やノウハウが集中してしまっている。",
  },
  {
    icon: <DollarSign className="h-6 w-6 text-cyan-600" />,
    title: "外注依存によるコスト増",
    description:
      "ITやシステム対応を外部に頼り続けることでコストがかさみ、継続的なDXや改善に踏み出しにくい状況がある。",
  },
  {
    icon: <Shield className="h-6 w-6 text-cyan-600" />,
    title: "身近な相談先の不足",
    description:
      "離島では、トラブルや改善の相談を気軽にできる相手が少なく、問題が後回しになりやすい。",
  },
  {
    icon: <AlertTriangle className="h-6 w-6 text-cyan-600" />,
    title: "IT活用が定着しない",
    description:
      "ツールを導入しても現場に合わず、使われないまま終わってしまうケースが少なくない。",
  },
];

const Problem = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-4">
            こんな悩み、
            <span className="text-cyan-600">ありませんか？</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            離島でのIT活用には多くの課題があります。
            <br />
            IKI Digital
            Lab.は、業務改善とAI活用を軸に、壱岐島にDXが根づく支援を行います。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {problemData.map((problem, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm p-6 flex flex-col gap-4 group hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              {/* 背景の大きな番号 */}
              <span className="absolute -top-3 -right-1 text-[6rem] font-black text-gray-100 leading-none select-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* アイコン */}
              <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-xl bg-cyan-50 border border-cyan-100">
                {problem.icon}
              </div>

              {/* テキスト */}
              <div className="relative z-10 flex flex-col gap-1.5">
                <h3 className="text-base font-bold text-gray-900">
                  {problem.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Problem;
