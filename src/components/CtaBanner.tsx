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
      className="bg-cyan-600 py-14 px-4"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          まずはご相談ください
        </h2>
        <p className="text-cyan-100 text-base md:text-lg max-w-xl">
          「何から始めればいいか分からない」という段階でも大丈夫です。
          <br />
          壱岐の皆さまの課題を一緒に整理します。
        </p>
        <Scroll to="contact" smooth={true} offset={-100}>
          <Button
            size="lg"
            className="bg-white text-cyan-600 hover:bg-cyan-50 font-semibold transition-all duration-300"
          >
            ご相談はこちら
          </Button>
        </Scroll>
      </div>
    </motion.section>
  );
};

export default CtaBanner;
