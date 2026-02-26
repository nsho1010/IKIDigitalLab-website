"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* 背景の装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/60" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-50/80 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        {/* タグライン */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <span className="w-8 h-px bg-cyan-600" />
          <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">
            Coming Soon
          </span>
          <span className="w-8 h-px bg-cyan-600" />
        </motion.div>

        {/* メインコピー */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-extrabold text-3xl md:text-4xl tracking-tight leading-[1.1] text-gray-950"
        >
          準備中です
        </motion.h1>

        {/* サブコピー */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-gray-500 leading-relaxed max-w-md"
        >
          現在、このページを準備中です。
          <br />
          公開までしばらくお待ちください。
        </motion.p>

        {/* ボタン */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <Link href="/">
            <Button
              size="lg"
              className="bg-gray-950 text-white hover:bg-gray-800 transition-all duration-300 px-8 rounded-xl font-semibold tracking-wide inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              トップページへ
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoon;
