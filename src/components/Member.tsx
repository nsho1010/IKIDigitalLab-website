import Image from "next/image";
import { Code } from "lucide-react";

const members = [
  {
    name: "ナガムラ ショウヘイ",
    role: "代表 / Webエンジニア・DX推進",
    description: "ベンチャー・スタートアップ企業にてWebエンジニアとして従事。",
    image: "/myprofileimage.PNG",
    skills: ["Web開発", "DX推進", "スキル習得", "業務改善"],
  },
];

const Member = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="relative inline-block text-4xl font-bold tracking-tight">
            <span className="relative z-10">Member</span>
            <span className="absolute bottom-0 left-0 right-0 h-3 bg-cyan-600/20 z-0" />
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            運営・開発メンバー
          </p>
        </div>

        <div className="w-full space-y-8">
          {members.map((member) => (
            <div
              key={member.name}
              className="flex flex-col md:flex-row items-center gap-8
                         bg-gradient-to-br from-gray-50 to-white
                         p-6 rounded-lg"
            >
              <div className="relative">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    alt={member.name}
                    src={member.image}
                    width={220}
                    height={220}
                    className="aspect-square object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-cyan-600 text-white rounded-full p-2">
                  <Code className="w-5 h-5" />
                </div>
              </div>

              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <p className="text-lg font-bold text-gray-900">
                    {member.name}
                  </p>
                  <p className="text-cyan-700 font-medium">{member.role}</p>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>

                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-md"
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
  );
};

export default Member;
