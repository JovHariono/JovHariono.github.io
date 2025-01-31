// import ComponentSwiper from "@/components/Swiper";
import MainPageCard from "@/cards/MainPageCard";

import wash1 from "../../public/wash1.jpeg";
import gedung1 from "../../public/gedung1.jpeg";
import wash3 from "../../public/wash3.jpeg";
import AboutUs from "@/components/AboutUs";
import ComponentsVideoPlayer from "@/components/VideoPlayer";

const contentMains = [
  {
    link: "",
    gambar: wash1,
    judul: "judul",
    deskripsi: "deskripsi",
  },
  {
    link: "",
    gambar: gedung1,
    judul: "judul",
    deskripsi: "deskripsi",
  },
  {
    link: "",
    gambar: wash3,
    judul: "judul",
    deskripsi: "deskripsi",
  },
  {
    link: "",
    gambar: wash1,
    judul: "judul",
    deskripsi: "deskripsi",
  },
  {
    link: "",
    gambar: gedung1,
    judul: "judul",
    deskripsi: "deskripsi",
  },
  {
    link: "",
    gambar: wash3,
    judul: "judul",
    deskripsi: "deskripsi",
  },
];

export default function Home() {
  return (
    <>
      <div className="containerMain">
        <ComponentsVideoPlayer />
        {/* <ComponentSwiper /> */}

        <AboutUs />

        <h1 id="our-project" className="judulMainPage">Our Projects</h1>
        <div className="containerMainPage">          
          {contentMains.map((data, index) => {
            return (
              <MainPageCard
                key={index}
                link={data.link}
                gambar={data.gambar}
                judul={data.judul}
                deskripsi={data.deskripsi}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
