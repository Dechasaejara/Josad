import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Header from "@/components/layout/Headers/Header1";
import "./globals.css";
import Footer from "@/components/layout/Footers/Footer";
// import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
// import { NextAuthProvider } from "@/components/AuthProvider/AuthProvider";
// import Toast from "@/components/Toast/Toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Josad | Wellcome",
  description: "Develop your career in tech.  ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={poppins.className}>
        {/* <NextAuthProvider>
          <ThemeProvider>
            <Toast /> */}
        <main className="font-normal flex flex-col justify-between h-screen w-full py-1 px-4 ">
          <Header />
          <section className="">{children}</section>
          <Footer />
        </main>
        {/* </ThemeProvider>
        </NextAuthProvider> */}
      </body>
    </html>
  );
}
