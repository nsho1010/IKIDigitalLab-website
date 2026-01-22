"use client";
import Image from "next/image";
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
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-cyan-600">IT・業務改善・AI活用支援</span>
            をサポートします
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            離島でのIT活用には多くの課題があります。 DX・AIサポート IKI |
            DAIVeは、業務改善とAI活用を軸に、壱岐島にDXが根づく支援を行います。
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/problem.jpg"
              width={600}
              height={400}
              alt="ICT and DX"
              className="w-full aspect-video object-cover"
            />
          </div>

          <div className="space-y-6">
            {problemData.map((problem, index) => (
              <div key={index} className="flex gap-4">
                <div className="pt-1">{problem.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Problem;
