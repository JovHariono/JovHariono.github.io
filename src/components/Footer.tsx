"use-client";

import FooterCard from "@/cards/FooterCard";
import * as React from "react";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

interface IFooterProps {}

const FooterCards = [
  {
    link: "/",
    ikon: faInstagram,
    deskripsi: "@sosmed",
  },
  {
    link: "/",
    ikon: faTwitter,
    deskripsi: "@sosmed",
  },
  {
    link: "/",
    ikon: faFacebook,
    deskripsi: "@sosmed",
  },
  {
    link: "/",
    ikon: faTiktok,
    deskripsi: "@sosmed",
  },
];

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <>
      <h2>Alamat</h2>

      {/* social media */}
      <div className="containerFooterSosmed">
        {FooterCards.map((data, index) => {
          return (
            <FooterCard
              key={index}
              link={data.link}
              ikon={data.ikon}
              deskripsi={data.deskripsi}
            />
          );
        })}
      </div>
    </>
  );
};

export default Footer;
