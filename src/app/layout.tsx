import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Acierto",
  description: "Acierto",
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
