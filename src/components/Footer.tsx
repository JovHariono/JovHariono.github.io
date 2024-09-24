"use-client";

import FooterCard from "@/cards/FooterCard";
import * as React from "react";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const FooterCards = [
  {
    link: "https://www.google.com/",
    ikon: faInstagram,
    deskripsi: "@sosmed",
  },
  {
    link: "https://www.google.com/",
    ikon: faTwitter,
    deskripsi: "@sosmed",
  },
  {
    link: "https://www.google.com/",
    ikon: faFacebook,
    deskripsi: "@sosmed",
  },
  {
    link: "https://www.google.com/",
    ikon: faTiktok,
    deskripsi: "@sosmed",
  },
];

const Footer: React.FunctionComponent = () => {
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
