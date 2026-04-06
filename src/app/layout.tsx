import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroScreen from "@/components/IntroScreen";
import { featureFlags } from "@/lib/featureFlags";
import { ThemeProvider } from "next-themes";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Noto_Sans_JP } from "next/font/google";
import { getSEOTags } from "@/lib/seo";
import config from "@/config";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata = getSEOTags();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={
          notoSansJP.className +
          "flex flex-col container  mx-auto space-y-0 lg:space-y-0"
        }
      >
        <ThemeProvider
          defaultTheme="light"
          attribute="class"
          disableTransitionOnChange
        >
          {featureFlags.introScreen && <IntroScreen />}
          <Suspense>
            <Header />
          </Suspense>
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={config.googleAnalyticsId} />
    </html>
  );
}
