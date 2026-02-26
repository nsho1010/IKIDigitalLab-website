import Image from "next/image";

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

const Member = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* ヘッダー */}
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
  );
};

export default Member;
