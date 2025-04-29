"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 lg:gap-8 p-8 h-screen text-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold m-4">
          Coming Soon...
        </h2>
        <p className="lg:text-lg md:text-base font-medium text-center">
          現在、準備中です。
          <br />
          公開までおまちください。
        </p>
        <div className="flex justify-center ">
          <Link
            href="/"
            className="mt-4 text-xl text-blue-600 hover:underline "
          >
            <Button
              className="font-bold mt-4 bg-cyan-600 text-white hover:bg-cyan-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
              type="submit"
            >
              トップページへ
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
