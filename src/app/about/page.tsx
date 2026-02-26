import Image from "next/image";
import { MapPin, User, Briefcase, Calendar } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getSEOTags } from "@/lib/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: "運営概要 | " + config.appName,
  description: config.appName + "の運営概要・メンバー紹介ページです。",
  openGraph: {
    title: "運営概要 | " + config.appName,
    description: config.appName + "の運営概要・メンバー紹介ページです。",
  },
});

const members = [
  {
    name: "ナガムラ ショウヘイ",
    nameEn: "Shohei Nagamura",
    role: "代表 / Webエンジニア・DX推進",
    description: "ベンチャー・スタートアップ企業にてWebエンジニアとして従事。",
    image: "/myprofileimage.PNG",
    skills: ["Web開発", "DX推進", "学ぶ", "業務改善"],
  },
];

const companyInfoData = {
  name: "IKI Digital Lab.",
  location: "長崎県壱岐市",
  established: "2026年1月",
  president: "永村 奨平",
  business:
    "DX・AI活用の伴走支援／Web制作・受託開発／IT研修・プログラミング教育",
};

const infoItems = [
  {
    icon: <MapPin className="w-4 h-4" />,
    label: "所在地",
    value: companyInfoData.location,
  },
  {
    icon: <User className="w-4 h-4" />,
    label: "代表者",
    value: companyInfoData.president,
  },
  {
    icon: <Calendar className="w-4 h-4" />,
    label: "設立",
    value: companyInfoData.established,
  },
  {
    icon: <Briefcase className="w-4 h-4" />,
    label: "提供内容",
    value: companyInfoData.business,
  },
];

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      {/* ページヘッダー */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-24 pb-12">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">トップ</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>運営概要</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-cyan-600" />
            <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">
              About
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-950">
            運営概要
          </h1>
        </div>
      </div>

      {/* 運営概要 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* マップ */}
            <div className="w-full lg:w-1/2 shrink-0">
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6635.037567898468!2d129.67908911499234!3d33.74725761365943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356a152dd77d1c2b%3A0xf76c730b62764b90!2z44CSODExLTUxMzUg6ZW35bSO55yM5aOx5bKQ5biC6YO344OO5rWm55S66YO344OO5rWm!5e0!3m2!1sja!2sjp!4v1723188274913!5m2!1sja!2sjp"
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* 情報 */}
            <div className="flex flex-col gap-6 justify-center">
              <h2 className="text-2xl font-bold text-gray-950">
                {companyInfoData.name}
              </h2>
              <dl className="flex flex-col divide-y divide-gray-100">
                {infoItems.map((item) => (
                  <div key={item.label} className="flex gap-4 py-4">
                    <dt className="shrink-0 flex items-center gap-2 w-28 text-sm font-medium text-gray-500">
                      <span className="text-cyan-600">{item.icon}</span>
                      {item.label}
                    </dt>
                    <dd className="text-sm text-gray-700 leading-relaxed">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 運営メンバー */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-cyan-600" />
              <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">
                Member
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-950 leading-tight">
              運営メンバー
            </h2>
          </div>

          <div className="space-y-8">
            {members.map((member) => (
              <div
                key={member.name}
                className="flex flex-col md:flex-row gap-8 md:gap-12 items-start bg-white rounded-2xl p-8 border border-gray-100"
              >
                {/* 画像 */}
                <div className="shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      alt={member.name}
                      src={member.image}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* テキスト */}
                <div className="flex flex-col gap-4 flex-1">
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-cyan-600 uppercase mb-1">
                      {member.role}
                    </p>
                    <p className="text-xl font-bold text-gray-950">
                      {member.name}
                    </p>
                    <p className="text-sm text-gray-400">{member.nameEn}</p>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-prose">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
