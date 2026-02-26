import { MapPin, User, Briefcase, Calendar } from "lucide-react";

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

const CompanyInfo = () => {
  return (
    <section id="company-info" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* ヘッダー */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-cyan-600" />
            <span className="text-xs font-semibold tracking-widest text-cyan-600 uppercase">
              About
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-950 leading-tight">
            運営概要
          </h2>
        </div>

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
            <h3 className="text-2xl font-bold text-gray-950">
              {companyInfoData.name}
            </h3>

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
  );
};

export default CompanyInfo;
