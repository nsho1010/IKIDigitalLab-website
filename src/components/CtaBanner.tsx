"use client";
import { motion } from "framer-motion";
import { Link as Scroll } from "react-scroll";
import { Button } from "@/components/ui/button";

const CtaBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl bg-gray-950 px-8 py-16 md:px-16 text-center flex flex-col items-center gap-8 relative overflow-hidden">
          {/* 背景装飾 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-4">
            <span className="text-xs font-semibold tracking-widest text-cyan-500 uppercase">
              Contact
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              まずはご相談ください
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed">
              「何から始めればいいか分からない」という段階でも大丈夫です。
              壱岐の皆さまの課題を一緒に整理します。
            </p>
          </div>

          <Scroll to="contact" smooth={true} offset={-100} className="relative z-10">
            <Button
              size="lg"
              className="bg-cyan-600 text-white hover:bg-cyan-500 font-semibold transition-all duration-300 px-10 rounded-full"
            >
              ご相談はこちら
            </Button>
          </Scroll>
        </div>
      </div>
    </motion.section>
  );
};

export default CtaBanner;
