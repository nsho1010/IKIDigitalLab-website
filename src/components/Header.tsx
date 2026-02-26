"use client";

import { useState, useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import { Link as Scroll } from "react-scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "トップ", to: "hero", href: "/" },
  { label: "サービス", to: "service", href: "/#service" },
  { label: "学ぶ", to: null, href: "/coming-soon" },
  { label: "お知らせ", to: "news", href: "/news" },
  { label: "運営概要", to: null, href: "/about" },
];

const Header = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = async () => {
    setIsOpen((prev) => !prev);
    setClicked((prev) => !prev);
    await Promise.all([
      controls1.start({
        rotate: clicked ? 0 : 45,
        y: clicked ? 0 : 4,
        transition: { duration: 0.3 },
      }),
      controls2.start({
        rotate: clicked ? 0 : -45,
        y: clicked ? 0 : -4,
        transition: { duration: 0.3 },
      }),
    ]);
  };

  const closeMenu = () => {
    if (isOpen) toggleMenu();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-6xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16"
          aria-label="Global"
        >
          {/* ロゴ */}
          <Link
            href="/"
            title={config.appName}
            className="flex items-center gap-2 shrink-0"
          >
            <Image
              alt="Logo"
              src="/logo-preview.png"
              width={48}
              height={48}
              className="object-contain"
            />
            <span className="font-extrabold text-xl tracking-tight text-gray-950">
              IKI Digital Lab.
            </span>
          </Link>

          {/* デスクトップナビ */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, to, href }) => {
              const linkClass =
                "text-sm font-medium text-gray-600 hover:text-gray-950 transition-colors duration-200";
              if (to && pathname === "/") {
                return (
                  <Scroll
                    key={label}
                    to={to}
                    smooth={true}
                    offset={-100}
                    className={`${linkClass} cursor-pointer`}
                  >
                    {label}
                  </Scroll>
                );
              }
              return (
                <Link key={label} href={href} className={linkClass}>
                  {label}
                </Link>
              );
            })}

            {pathname === "/" ? (
              <Scroll to="contact" smooth={true} offset={-100}>
                <Button
                  size="sm"
                  className="rounded-xl px-5 bg-gray-950 text-white hover:bg-gray-800 transition-all duration-300 font-semibold"
                >
                  お問い合わせ
                </Button>
              </Scroll>
            ) : (
              <Link href="/#contact">
                <Button
                  size="sm"
                  className="rounded-xl px-5 bg-gray-950 text-white hover:bg-gray-800 transition-all duration-300 font-semibold"
                >
                  お問い合わせ
                </Button>
              </Link>
            )}
          </div>
        </nav>
      </header>

      {/* モバイルハンバーガー（headerの外に配置してz-indexが正しく機能するようにする） */}
      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-0 right-0 z-[70] flex flex-col justify-center gap-1.5 p-1 mr-6 h-16"
        aria-label="メニューを開く"
      >
        <motion.span
          className={`block w-6 h-0.5 ${isOpen ? "bg-white" : "bg-gray-950"}`}
          animate={controls1}
          style={{ transformOrigin: "50% 50%" }}
        />
        <motion.span
          className={`block w-6 h-0.5 ${isOpen ? "bg-white" : "bg-gray-950"}`}
          animate={controls2}
          style={{ transformOrigin: "50% 50%" }}
        />
      </button>

      {/* モバイルメニュー（headerの外に配置してbackdrop-blurの影響を受けないようにする） */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-gray-950 flex flex-col"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* モバイルメニューヘッダー */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-gray-800">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={closeMenu}
              >
                <Image
                  alt="Logo"
                  src="/logo-preview-white.png"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span className="font-extrabold text-base tracking-tight text-white">
                  IKI Digital Lab.
                </span>
              </Link>
            </div>

            {/* モバイルメニューリンク */}
            <nav className="flex flex-col px-6 pt-8 gap-1">
              {navLinks.map(({ label, to, href }, i) => {
                const linkClass =
                  "flex items-center py-4 text-lg font-semibold text-gray-200 hover:text-white border-b border-gray-800 transition-colors duration-200";
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    {to && pathname === "/" ? (
                      <Scroll
                        to={to}
                        smooth={true}
                        offset={-40}
                        onClick={closeMenu}
                        className={`${linkClass} cursor-pointer`}
                      >
                        {label}
                      </Scroll>
                    ) : (
                      <Link
                        href={href}
                        className={linkClass}
                        onClick={closeMenu}
                      >
                        {label}
                      </Link>
                    )}
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + navLinks.length * 0.05 }}
                className="pt-6"
              >
                {pathname === "/" ? (
                  <Scroll
                    to="contact"
                    smooth={true}
                    offset={-40}
                    onClick={closeMenu}
                  >
                    <Button className="w-full rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-all duration-300">
                      お問い合わせ
                    </Button>
                  </Scroll>
                ) : (
                  <Link href="/#contact" onClick={closeMenu}>
                    <Button className="w-full rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-all duration-300">
                      お問い合わせ
                    </Button>
                  </Link>
                )}
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
