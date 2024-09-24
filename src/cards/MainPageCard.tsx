import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import * as React from "react";

interface IMainPageCardProps {
  link: string;
  gambar: StaticImageData;
  judul: string;
  deskripsi: string;
}

const MainPageCard: React.FunctionComponent<IMainPageCardProps> = (props) => {
  return (
    <div className="mainPageCard">
      <Link href={props.link}>
        <Image quality={100} src={props.gambar} alt=""></Image>
      </Link>

      <h2>{props.judul}</h2>
      <p>{props.deskripsi}</p>
    </div>
  );
};

export default MainPageCard;
