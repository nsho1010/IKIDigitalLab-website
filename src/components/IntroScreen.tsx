"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TERMINAL_LINES = [
  { type: "command", text: "iki $ analyze --target=iki-island" },
  { type: "info",    text: "壱岐島の課題を分析しています..." },
  { type: "success", text: "業務フロー スキャン完了 ✓" },
  { type: "success", text: "AI活用ポイント 検出完了 ✓" },
  { type: "success", text: "デジタル化余地 算出完了 ✓" },
  { type: "warning", text: "● 改善機会を3件検出しました" },
  { type: "detail",  text: "├─ 業務効率化:  手作業の自動化が可能" },
  { type: "detail",  text: "├─ AI導入:      問い合わせ対応を省力化" },
  { type: "detail",  text: "└─ Web内製化:   更新コストを削減できます" },
  { type: "done",    text: "→ IKI Digital Lab. が伴走します。" },
];

const COLOR_MAP: Record<string, string> = {
  command: "text-cyan-400",
  info:    "text-gray-300",
  success: "text-emerald-400",
  warning: "text-yellow-400 font-semibold",
  detail:  "text-gray-400",
  done:    "text-cyan-300 font-semibold",
};

export default function IntroScreen() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [done, setDone] = useState(false);
  const [exiting, setExiting] = useState(false);

  // タイピングアニメーション
  useEffect(() => {
    if (currentIndex >= TERMINAL_LINES.length) {
      // 全行完了 → 少し待ってからフェードアウト
      const t = setTimeout(() => setExiting(true), 800);
      return () => clearTimeout(t);
    }

    const line = TERMINAL_LINES[currentIndex];
    if (typedText.length < line.text.length) {
      const charDelay = line.type === "command" ? 45 : 16;
      const t = setTimeout(() => {
        setTypedText(line.text.slice(0, typedText.length + 1));
      }, charDelay);
      return () => clearTimeout(t);
    } else {
      // 行完了 → 次へ
      const pauseDelay = line.type === "command" ? 350 : 80;
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, line.text]);
        setCurrentIndex((i) => i + 1);
        setTypedText("");
      }, pauseDelay);
      return () => clearTimeout(t);
    }
  }, [typedText, currentIndex]);

  // フェードアウト完了後に非表示
  useEffect(() => {
    if (exiting) {
      const t = setTimeout(() => setDone(true), 700);
      return () => clearTimeout(t);
    }
  }, [exiting]);

  const skip = () => setExiting(true);

  if (done) return null;

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "#0a0f1e" }}
        >
          {/* 背景グロー */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

          {/* ターミナルウィンドウ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-full max-w-xl mx-4 rounded-lg overflow-hidden shadow-2xl border border-gray-700/60"
            style={{ background: "#0f172a" }}
          >
            {/* タイトルバー */}
            <div
              className="flex items-center gap-2 px-4 py-3 border-b border-gray-700/60"
              style={{ background: "#1e293b" }}
            >
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-xs text-gray-400 font-mono tracking-wide">
                iki — diagnosis
              </span>
            </div>

            {/* ターミナル本体 */}
            <div className="p-6 font-mono text-sm leading-7 min-h-[280px]">
              {visibleLines.map((text, i) => {
                const type = TERMINAL_LINES[i].type;
                return (
                  <div key={i} className={COLOR_MAP[type]}>
                    {text}
                  </div>
                );
              })}

              {/* タイピング中の行 */}
              {currentIndex < TERMINAL_LINES.length && (
                <div className={COLOR_MAP[TERMINAL_LINES[currentIndex].type]}>
                  {typedText}
                  <span className="inline-block w-2 h-[1em] bg-cyan-400 ml-0.5 align-middle animate-pulse" />
                </div>
              )}
            </div>
          </motion.div>

          {/* スキップボタン */}
          <button
            onClick={skip}
            className="absolute bottom-8 right-8 text-xs text-gray-500 hover:text-gray-300 font-mono transition-colors duration-200 border border-gray-700 hover:border-gray-500 px-4 py-2 rounded-lg"
          >
            スキップ →
          </button>
        </motion.div>
      )}

      {/* フェードアウト用のオーバーレイ（exiting 時だけ表示） */}
      {exiting && (
        <motion.div
          key="exit-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999]"
          style={{ background: "#0a0f1e" }}
          onAnimationComplete={() => setDone(true)}
        />
      )}
    </AnimatePresence>
  );
}
