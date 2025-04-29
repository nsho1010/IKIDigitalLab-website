import { MapPin, User, Briefcase } from "lucide-react";

const companyInfoData = {
  name: "IKI DX CAMP",
  location: "長崎県壱岐市郷ノ浦町",
  established: "2024年8月",
  president: "永村 奨平",
  business: "Web制作・アプリ開発・DX人材教育・IT研修",
};

const CompanyInfo = () => {
  return (
    <section id="company-info" className="py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col items-center justify-center space-y-8 mb-10">
          <h2 className="relative inline-block text-4xl font-bold tracking-tight">
            <span className="relative z-10">運営情報</span>
            <span className="absolute bottom-0 left-0 right-0 h-3 bg-cyan-600/20 z-0"></span>
          </h2>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-sm">
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

          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6">{companyInfoData.name}</h3>

            <dl className="space-y-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-cyan-600" />
                <div>
                  <dt className="font-medium">所在地</dt>
                  <dd className="text-gray-600">{companyInfoData.location}</dd>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-cyan-600" />
                <div>
                  <dt className="font-medium">代表者</dt>
                  <dd className="text-gray-600">{companyInfoData.president}</dd>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-cyan-600" />
                <div>
                  <dt className="font-medium">活動内容</dt>
                  <dd className="text-gray-600">{companyInfoData.business}</dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
