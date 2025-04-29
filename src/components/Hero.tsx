"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link as Scroll } from "react-scroll";
import { Button } from "@/components/ui/button";

const Hero = () => {
  // テキストアニメーションさせたい文字
  const words = "デジタル化";
  // 分割する
  const word = words.split("");

  const textanimate = word.map((word, index) => {
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: index * 0.15 }}
        key={index}
      >
        {word}
      </motion.span>
    );
  });

  return (
    <motion.section
      id="hero"
      className="flex flex-col-reverse lg:flex-row items-center justify-center max-w-7xl mx-auto sm:gap-8 md:gap-16 lg:gap-24 pt-16 lg:pt-28 pb-0 px-4 lg:px-8 min-h-[70vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col gap-6 lg:gap-8 items-center justify-center text-center lg:text-left lg:items-start p-4 md:p-0 max-w-2xl">
        <h1 className="font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-tight text-balance">
          離島の未来を
          <span className="inline-block bg-foreground mx-1 px-3 -rotate-1">
            <span className="inline-block text-background rotate-1">
              {textanimate}
            </span>
          </span>
          で加速する
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
          私たちは、IT研修とスキル習得プログラムを通じて、地域の人材を育成し、壱岐島のDX推進をサポートします。
        </p>
        <Scroll to="contact" smooth={true} offset={-100}>
          <Button
            size="lg"
            className="bg-cyan-600 text-white hover:bg-cyan-700 transition-all duration-300 mt-2"
          >
            お問い合わせ
          </Button>
        </Scroll>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full max-w-2xl"
      >
        <Image
          src="/hero.png"
          alt="Hero画像"
          className="w-full transform -rotate-3"
          priority={true}
          width={1000}
          height={750}
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
