"use client";
import Image from "next/image";
import config from "@/config";
import { motion } from "framer-motion";

const benefitsData = [
  {
    image: "/educator.svg",
    title: "企業団体向けのIT研修支援",
    description:
      "地域の企業や団体に向けて、ITスキルの向上を目指した研修プログラムを提供します。これにより、社員のITリテラシーを高め、業務効率の向上とデジタル化による競争力の強化を実現します。",
    icon: "🏢",
  },
  {
    image: "/programming.svg",
    title: "個人向けのITスキル習得",
    description:
      "地域の個人を対象に、ITスキルの習得をサポートします。初心者から上級者まで、個々のニーズに合わせたプログラムを提供し、キャリアアップや新たなビジネス機会の創出を支援します。",
    icon: "💻",
  },
  {
    image: "/teaching.svg",
    title: "地域コミュニティへのIT導入",
    description:
      "地域コミュニティのIT導入を推進し、地元の生活をより便利で豊かにします。デジタル技術を活用して、コミュニティ内の連携や情報共有を強化し、地域全体の発展を支援します。",
    icon: "🌐",
  },
];

const Benefits = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="py-16 bg-gradient-to-b from-white to-gray-50"
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              離島での<span className="text-cyan-600">DX推進</span>を支援します
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg">
              {config.appName}が、離島のIT導入を全面的にサポートします。
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
