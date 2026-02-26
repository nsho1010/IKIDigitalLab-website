import Hero from "@/components/Hero";
import News from "@/components/News";
import Problem from "@/components/Problem";
import Benefits from "@/components/Benefits";
import Service from "@/components/Service";
import CtaBanner from "@/components/CtaBanner";
import Member from "@/components/Member";
import CompanyInfo from "@/components/CompanyInfo";
import Contact from "@/components/Contact";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Problem />
      <Benefits />
      <Service />
      <CtaBanner />
      <Suspense fallback={<div>Loading...</div>}>
        <News />
        <Member />
      </Suspense>
      <CompanyInfo />
      <Contact />
    </main>
  );
}
