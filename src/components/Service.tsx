"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const serviceData = [
  {
    name: "プログラミングスクール",
    description:
      "初心者から上級者まで対応するプログラミング教育プログラム。地域の個人を対象に、実践的なITスキルを身につける機会を提供します。",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "/coming-soon",
  },
  {
    name: "企業団体・教育機関向けIT研修",
    description:
      "地域の企業や団体・教育機関向けにカスタマイズされたIT研修プログラム。社員のITリテラシーを向上させ、デジタル化による業務効率の向上を支援します。",
    image:
      "https://images.unsplash.com/photo-1614064548237-096f735f344f?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "/coming-soon",
  },
  {
    name: "地域コミュニティIT導入支援",
    description:
      "地域のコミュニティに向けたIT導入支援サービス。地元の生活をより便利で豊かにするためのITソリューションを提供し、地域全体の発展をサポートします。",
    image:
      "https://images.unsplash.com/photo-1506485338023-6ce5f36692df?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "#",
  },
  {
    name: "Coming Soon...",
    description: "現在プロダクトの準備中です。リリースをお待ちください。",
    image: "/comingsoon.jpg",
    url: "",
  },
];

const Service = () => {
  return (
    <section
      id="service"
      className="py-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="flex flex-col items-center justify-center text-center mx-auto gap-8 lg:gap-16 p-8 max-w-7xl">
        <motion.div
          className="space-y-4 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold tracking-tight relative inline-block">
            <span className="relative z-10">Service</span>
            <span className="absolute bottom-0 left-0 right-0 h-3 bg-cyan-600/20 z-0"></span>
          </h2>
          <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed text-muted-foreground">
            サービス紹介
          </p>
        </motion.div>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {serviceData.map((service, index) => (
            <motion.div
              key={service.name || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={service.url || "#"} className="block h-full">
                <div className="relative overflow-hidden rounded-xl shadow-lg h-full bg-white border-0 transition-all duration-300 hover:shadow-xl group-hover:translate-y-[-8px]">
                  {/* 画像部分 */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      alt={service.name || "Service Image"}
                      src={service.image}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* コンテンツ部分 */}
                  <div className="p-6">
                    {service.name && (
                      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-cyan-600 transition-colors">
                        {service.name}
                      </h3>
                    )}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {service.url && (
                      <div className="mt-4 pt-4 border-t border-gray-100 text-sm font-medium text-cyan-600 flex items-center justify-end">
                        詳細を見る
                        <svg
                          className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
