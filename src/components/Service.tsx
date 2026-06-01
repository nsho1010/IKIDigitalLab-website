"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { featureFlags, getServiceUrl } from "@/lib/featureFlags";

const serviceData = [
  {
    name: "DX・AI伴走支援",
    description:
      "業務改善からAI活用、運用の定着まで。現場に合わせて小さく始め、成果が出る形に整える伴走型サポートです。",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: getServiceUrl(featureFlags.dxAiSupport, "/services/dx-ai-support"),
    tag: "推奨",
  },
  {
    name: "Web制作・開発",
    description:
      "コーポレートサイトから業務用Webアプリまで。目的設計→制作→公開後の改善まで、壱岐の事業に合う形でスピーディに実装します。",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: getServiceUrl(
      featureFlags.webDevelopment,
      "/services/web-development",
    ),
    tag: null,
  },
  {
    name: "IT・AI教育",
    description:
      "学びの場も提供しています。基礎から実務まで、壱岐で使えるスキルを身につけたい方向け。",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: getServiceUrl(
      featureFlags.programmingSchool,
      "/services/programming-school",
    ),
    tag: null,
  },
  {
    name: "企業・団体向けIT研修",
    description:
      "必要なテーマだけを短時間で。DX・AI活用を現場に落とし込むための研修を、伴走支援の一部として提供します。",
    image:
      "https://images.unsplash.com/photo-1614064548237-096f735f344f?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: getServiceUrl(featureFlags.itTraining, "/services/it-training"),
    tag: null,
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof serviceData)[0];
  index: number;
}) => {
  const isEven = index % 2 === 0;

  const imageBlock = (
    <div className="relative w-full md:w-1/2 shrink-0 overflow-hidden bg-gray-100" style={{ minHeight: "320px" }}>
      <Image
        alt={service.name}
        src={service.image}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority={index === 0}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent" />
      {service.tag && (
        <span className="absolute top-4 left-4 text-xs font-semibold bg-cyan-600 text-white px-3 py-1.5 rounded-full">
          {service.tag}
        </span>
      )}
      <span className="absolute bottom-4 left-4 text-5xl font-black text-white/20 leading-none select-none tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );

  const textBlock = (
    <div className="flex flex-col justify-center gap-5 w-full md:w-1/2 px-2 md:px-8 py-8 md:py-0">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-950 leading-snug group-hover:text-cyan-600 transition-colors duration-300">
        {service.name}
      </h3>
      <p className="text-sm md:text-base text-gray-500 leading-relaxed">
        {service.description}
      </p>
      {service.url && (
        <div className="flex items-center gap-1.5 text-sm font-semibold text-cyan-600">
          <span>サービスページへ</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      )}
    </div>
  );

  const inner = (
    <div
      className={`group flex flex-col md:flex-row ${isEven ? "" : "md:flex-row-reverse"} items-stretch gap-0 md:gap-8 bg-white overflow-hidden border border-gray-100 hover:border-cyan-100 hover:shadow-2xl hover:shadow-cyan-50/60 transition-all duration-500 p-6 md:p-8`}
    >
      {imageBlock}
      {textBlock}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -32 : 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {service.url ? (
        <Link href={service.url} className="block">
          {inner}
        </Link>
      ) : (
        inner
      )}
    </motion.div>
  );
};

const Service = () => {
  return (
    <section id="service" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-cyan-600" />
              <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">
                Service
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-950 leading-tight">
              提供サービス
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm leading-relaxed text-sm md:text-base">
            DX・AI活用とWeb制作・開発、
            <br />
            プログラミング教育をご提供。
          </p>
        </motion.div>

        {/* 交互レイアウト */}
        <div className="flex flex-col gap-6">
          {serviceData.map((service, index) => (
            <ServiceCard key={service.name || index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
