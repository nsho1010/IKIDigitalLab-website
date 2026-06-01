"use client";

import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import { usePathname } from "next/navigation";
import config from "@/config";
import Image from "next/image";
import LineAddFriendButton from "@/components/LineAddFriendButton";

const navLinks = [
  { label: "ホーム", to: "hero", href: "/" },
  { label: "サービス", to: "service", href: "/#service" },
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
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-12">
        {/* メインコンテンツ */}
        <div className="mb-12">
          {/* Menu 行 */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-6">
            <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase w-16 shrink-0">
              Menu
            </p>
            {navLinks.map(({ label, to, href }) => {
              const linkClass =
                "text-sm text-gray-300 hover:text-white transition-colors duration-200";
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

          {/* LINE 行 */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase w-16 shrink-0">
              LINE
            </p>
            <LineAddFriendButton />
          </div>
        </div>

        {/* ボトムバー */}
        <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase w-16 shrink-0">
              Legal
            </p>
            {legalLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-xs text-gray-400 hover:text-white transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} IKI Digital Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
