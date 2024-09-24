import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import * as React from "react";

interface ISwiperCardProps {
  gambar: StaticImageData;
  link: string;
}

const SwiperCard: React.FunctionComponent<ISwiperCardProps> = (props) => {
  return (
    <Link href={props.link} className="swiperCard">
      <Image quality={100} src={props.gambar} alt="Acierto's Assets"></Image>
    </Link>
  );
};

export default SwiperCard;
