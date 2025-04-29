"use client";
import Image from "next/image";
import { AlertTriangle, Users, DollarSign, Shield } from "lucide-react";
import { motion } from "framer-motion";

const problemData = [
  {
    icon: <Users className="h-6 w-6 text-cyan-600" />,
    title: "人口減少と高齢化",
    description:
      "若年層の流出と高齢化が進む中、高齢者に対するIT教育やサポート。現役世代への実践的なIT教育ができておらず、人材が確保できない状況。",
  },
  {
    icon: <DollarSign className="h-6 w-6 text-cyan-600" />,
    title: "コストの問題",
    description:
      "外部委託に頼ることによるコストの増加、これが島内企業がIT活用できない障壁となっている。",
  },
  {
    icon: <Shield className="h-6 w-6 text-cyan-600" />,
    title: "技術サポートの不足",
    description:
      "離島では、IT関連の技術サポートが少なく、問題が発生した際に迅速に対応できる人材や企業が限られている。",
  },
  {
    icon: <AlertTriangle className="h-6 w-6 text-cyan-600" />,
    title: "地域コミュニティの抵抗感",
    description:
      "伝統的な生活様式やコミュニティの中で、IT導入に対する抵抗感がある場合があり、新しい技術の導入が難しい。",
  },
];

const Problem = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="py-16"
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            離島で<span className="text-cyan-600">IKI DX CAMP</span>
            がサポートします
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            離島でのIT普及には多くの課題があります。IKI DX
            CAMPは、プログラミング塾や企業団体向けIT研修を通じて、これらの課題を解決し、DX人材を養成し、壱岐島のICT化を推進します。
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
