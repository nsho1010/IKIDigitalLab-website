"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link as Scroll } from "react-scroll";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const words = "デジタル化";
  const word = words.split("");

  const textanimate = word.map((word, index) => {
    return (
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
        key={index}
      >
        {word}
      </motion.span>
    );
  });

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-white"
    >
      {/* 背景の装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/60" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-50/80 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24 lg:pt-28">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* テキスト側 */}
          <div className="flex-1 flex flex-col gap-8 items-start">
            {/* タグライン */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="w-8 h-px bg-cyan-600" />
              <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">
                IKI Digital Lab.
              </span>
            </motion.div>

            {/* メインコピー */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] text-gray-950"
            >
              離島の未来を
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-cyan-600">{textanimate}</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="absolute bottom-1 left-0 right-0 h-3 bg-cyan-100 z-0 origin-left"
                />
              </span>
              <span className="block mt-2">で加速する</span>
            </motion.h1>

            {/* サブコピー */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-gray-500 leading-relaxed max-w-lg"
            >
              業務改善・AI活用・内製化から、必要に応じたWeb受託開発まで、壱岐の事業者に寄り添って伴走します。
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Scroll to="contact" smooth={true} offset={-100}>
                <Button
                  size="lg"
                  className="bg-gray-950 text-white hover:bg-gray-800 transition-all duration-300 px-8 rounded-xl font-semibold tracking-wide"
                >
                  お問い合わせ
                </Button>
              </Scroll>
              <Scroll to="service" smooth={true} offset={-80}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:border-gray-950 hover:text-gray-950 transition-all duration-300 px-8 rounded-xl"
                >
                  サービスを見る
                </Button>
              </Scroll>
            </motion.div>

            {/* 数値指標 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-8 pt-4 border-t border-gray-100 w-full"
            >
              {[
                { value: "4", label: "サービス提供" },
                { value: "壱岐", label: "を拠点に活動" },
                { value: "伴走", label: "型サポート" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl font-extrabold text-gray-950">{stat.value}</span>
                  <span className="text-xs text-gray-400 mt-0.5">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* 画像側 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full max-w-xl lg:max-w-none"
          >
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden bg-gray-50">
                <Image
                  src="/hero.png"
                  alt="Hero画像"
                  className="w-full object-cover"
                  priority={true}
                  width={1000}
                  height={750}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
