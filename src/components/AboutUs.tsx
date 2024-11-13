import Image from "next/image";
import * as React from "react";

import gedung1 from "../../public/gedung1.jpeg";

const AboutUs: React.FunctionComponent = () => {
  return (
    <>
      <div className="containerau" id="about-us">
        <h1 className="judulAboutUs">Hello!</h1>
        <div className="containerAboutUs">
          <Image quality={100} alt="Acierto's Asset" src={gedung1} />

          <div className="containerKontenAboutUs">
            {/* <h2>Judul</h2> */}
            <p>
              Acierto Visuals brings brands to life through captivating digital
              ads, powerful company profiles and other creative contents.
              Specializing in high-quality video production, we’re here to
              amplify your brand’s story with creative, impactful visuals. Our
              team is dedicated to delivering content that connects, engages,
              and drives results.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
