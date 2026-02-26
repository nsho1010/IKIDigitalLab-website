"use client";

import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import { usePathname } from "next/navigation";
import config from "@/config";
import Image from "next/image";

const navLinks = [
  { label: "トップ", to: "hero", href: "/" },
  { label: "サービス", to: "service", href: "/#service" },
  { label: "学ぶ", to: null, href: "/coming-soon" },
  { label: "お知らせ", to: "news", href: "/news" },
  { label: "運営概要", to: "company-info", href: "/#company-info" },
  { label: "お問い合わせ", to: "contact", href: "/#contact" },
];

const legalLinks = [
  { label: "利用規約", href: "/tos" },
  { label: "プライバシーポリシー", href: "/privacy-policy" },
];

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* ブランド */}
          <div className="flex flex-col gap-4 md:w-64 shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2.5"
            >
              <Image
                alt="Logo"
                src="/logo-preview-white.png"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="font-extrabold text-base tracking-tight text-white">
                IKI Digital Lab.
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              {config.appDescription}
            </p>
          </div>

          {/* ナビゲーション */}
          <div className="flex-1 flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-1">
                Menu
              </p>
              {navLinks.map(({ label, to, href }) => {
                const linkClass =
                  "text-sm text-gray-400 hover:text-white transition-colors duration-200";
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
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase mb-1">
                Legal
              </p>
              {legalLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ボトムバー */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} IKI Digital Lab. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">長崎県壱岐市</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
