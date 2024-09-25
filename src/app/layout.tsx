import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Acierto - Production House, Videographer, and Photographer in Indonesia",
  description:
    "Acierto is a professional production house offering videography and photography services in Indonesia. Based in Jakarta, we create stunning visuals for commercials, events, and corporate projects.",
  keywords:
    "production house Indonesia, videographer Jakarta, photographer Indonesia, commercial videos, event videography, corporate photography",
  openGraph: {
    title: "Acierto - Professional Production House in Indonesia",
    description:
      "Acierto offers top-notch videography and photography services in Jakarta and across Indonesia. We specialize in corporate videos, event photography, and more.",
    url: "https://www.acierto.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <Header />
        </header>
        <main>{children}</main>
        <footer className="footer" id="contact">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
