"use client";

import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import { usePathname } from "next/navigation";
import config from "@/config";
import Image from "next/image";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="border-t border-base-content/10 mt-8 lg:mt-16 footer-bg-color text-white">
      <div className="py-12 md:py-24 p-8">
        <div className="flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/#"
              aria-current="page"
              className="flex gap-2 justify-center md:justify-start items-center"
            >
              <Image
                alt="Logo"
                src="/logo-preview-white.png"
                width={80}
                height={80}
              />

              <div className="flex flex-col">
                <strong className="font-extrabold tracking-tight text-base md:text-lg leading-tight">
                  DX・AIサポート
                </strong>
                <strong className="font-extrabold tracking-tight text-base md:text-lg leading-tight">
                  IKI | DAIVe
                </strong>
              </div>
            </Link>

            <p className="mt-3 text-sm text-base-content/80">
              {config.appDescription}
            </p>
          </div>
          <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-base">
                {pathname == "/" ? (
                  <Scroll
                    to="hero"
                    smooth={true}
                    offset={-100}
                    className="hover:cursor-pointer hover:underline"
                  >
                    トップ
                  </Scroll>
                ) : (
                  <Link href="/" className="hover:underline">
                    トップ
                  </Link>
                )}
                {pathname == "/" ? (
                  <Scroll
                    to="service"
                    smooth={true}
                    offset={-100}
                    className="hover:cursor-pointer hover:underline"
                  >
                    サービス
                  </Scroll>
                ) : (
                  <Link href="/" className="hover:underline">
                    サービス
                  </Link>
                )}
                <Link
                  href="/coming-soon"
                  target="_brank"
                  className="hover:underline"
                >
                  スキル習得
                </Link>
                {pathname == "/" ? (
                  <Scroll
                    to="news"
                    smooth={true}
                    offset={-100}
                    className="hover:cursor-pointer hover:underline"
                  >
                    お知らせ
                  </Scroll>
                ) : (
                  <Link href="/news" className="hover:underline">
                    お知らせ
                  </Link>
                )}
                {pathname == "/" ? (
                  <Scroll
                    to="company-info"
                    smooth={true}
                    offset={-100}
                    className="hover:cursor-pointer hover:underline"
                  >
                    運営概要
                  </Scroll>
                ) : (
                  <Link href="/#company-info" className="hover:underline">
                    運営概要
                  </Link>
                )}

                {pathname == "/" ? (
                  <Scroll
                    to="contact"
                    smooth={true}
                    offset={-100}
                    className="hover:cursor-pointer hover:underline"
                  >
                    お問い合わせ
                  </Scroll>
                ) : (
                  <Link href="/#contact" className="hover:underline">
                    お問い合わせ
                  </Link>
                )}
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-4 text-base ">
                <Link href="/tos" className="link link-hover">
                  利用規約
                </Link>
                <Link href="/privacy-policy" className="link link-hover">
                  プライバシーポリシー
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="mt-3 mb-8 text-sm text-base-content/60">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
