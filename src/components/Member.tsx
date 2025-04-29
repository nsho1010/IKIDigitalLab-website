import Image from "next/image";
import { Code } from "lucide-react";

const members = [
  {
    name: "ナガムラ ショウヘイ",
    description: "ベンチャー・スタートアップ企業でWebエンジニアとして従事。",
    image: "/myprofileimage.PNG",
    skills: ["Web開発", "プログラミング", "DX推進"],
  },
];

const Member = () => {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="relative inline-block text-4xl font-bold tracking-tight">
            <span className="relative z-10">Member</span>
            <span className="absolute bottom-0 left-0 right-0 h-3 bg-cyan-600/20 z-0"></span>
          </h2>
          <p className="text-xl text-muted-foreground">メンバー</p>
        </div>

        <div className="w-full">
          {members.map((member) => (
            <div
              key={member.name}
              className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg"
            >
              <div className="relative">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    alt={member.name}
                    className="aspect-square object-cover"
                    src={member.image}
                    width={240}
                    height={240}
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-cyan-600 text-white rounded-full p-2">
                  <Code className="w-5 h-5" />
                </div>
              </div>

              <div className="flex flex-col space-y-4 md:text-left">
                <h3 className="text-2xl font-bold text-gray-900">
                  {member.name}
                </h3>

                <p className="text-gray-600">{member.description}</p>

                {member.skills && (
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Member;
