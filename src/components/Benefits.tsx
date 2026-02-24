"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const benefitsData = [
  {
    image: "/educator.svg",
    title: "業務改善とDXの伴走支援",
    description:
      "現場の業務を一緒に整理し、ムダ・手戻りを減らす改善から着手。小さく始めて成果を積み上げ、壱岐の現場に合うDXを形にします。",
    icon: "🏢",
  },
  {
    image: "/programming.svg",
    title: "AI活用で“できること”を増やす",
    description:
      "文章作成・問い合わせ対応・見積や資料づくりなど、すぐ効く領域からAIを導入。ツール選定から運用まで、無理なく使える形で支援します。",
    icon: "💻",
  },
  {
    image: "/teaching.svg",
    title: "定着と内製化までサポート",
    description:
      "導入して終わりにせず、社内で回る状態まで伴走。必要な範囲で研修やマニュアル整備も行い、“外注し続けない”体制づくりを支えます。",
    icon: "🌐",
  },
];

const Benefits = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center justify-center space-y-12 text-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold tracking-tight">
              <span className="text-cyan-600">DX・AI活用</span>
              を伴走支援します
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-sm md:text-base">
              業務改善からAI活用、定着・内製化まで一緒に進めます。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 w-full">
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center space-y-4 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform scale-125"></div>
                  <Image
                    alt={benefit.title}
                    width={200}
                    height={200}
                    src={benefit.image}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-0 right-0 bg-cyan-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-md">
                    {benefit.icon}
                  </div>
                </div>

                <div className="space-y-3 text-center max-w-md">
                  <h3 className="text-xl font-semibold group-hover:text-cyan-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Benefits;
