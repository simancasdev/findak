import Image from "next/image";
import {CSSProperties} from "react";
import appStore from "../../../public/svg/app-store.svg";
import googlePlay from "../../../public/images/google-play.png";

interface DownloadProps {
  type: "iphone" | "android";
}
type Properties = {
  [K in DownloadProps["type"]]: {
    src: any;
    width: number;
    href: string;
    style?: CSSProperties;
  };
};

const properties: Properties = {
  android: {
    width: 220,
    src: googlePlay,
    href: "https://play.google.com/",
    style: {transform: "translateX(-14px)"},
  },
  iphone: {
    width: 180,
    src: appStore,
    href: "https://www.apple.com/la/app-store/",
  },
};

export const Download: React.FC<DownloadProps> = ({type}) => {
  const {src, width, style, href} = properties[type];
  return (
    <a href={href} referrerPolicy="no-referrer" target="_blank">
      <Image
        alt="get it on google play"
        src={src}
        width={width}
        style={style}
      />
    </a>
  );
};
