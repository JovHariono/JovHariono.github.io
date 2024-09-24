import Image from "next/image";
import * as React from "react";

import gedung1 from "../../public/gedung1.jpeg";

const AboutUs: React.FunctionComponent = () => {
  return (
    <>
      <div className="containerau" id="about-us">
        <h1 className="judulAboutUs">About Us</h1>
        <div className="containerAboutUs">
          <Image quality={100} alt="Acierto's Asset" src={gedung1}></Image>

          <div className="containerKontenAboutUs">
            <h2>Judul</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
