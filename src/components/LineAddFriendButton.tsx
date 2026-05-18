import Image from "next/image";

type Props = {
  height?: number;
};

const LineAddFriendButton = ({ height = 28 }: Props) => {
  const width = Math.round((104 / 28) * height);

  return (
    <a href="https://lin.ee/qK9z3Wk" target="_blank" rel="noopener noreferrer">
      <Image
        src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
        alt="友だち追加"
        width={width}
        height={height}
        unoptimized
      />
    </a>
  );
};

export default LineAddFriendButton;
