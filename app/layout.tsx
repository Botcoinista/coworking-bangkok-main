import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import HomeBackground from "./components/HomeBackground";

import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import RentModal from "./components/modals/RentModal";

import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";
import Categories from "./components/navbar/Categories";
import Container from "./components/Container";
import Hero from "./components/Hero";
import Search from "./components/navbar/Search";
import SearchModal from "./components/modals/SearchModal";

export const metadata: Metadata = {
  title: "Coworking bangkok",
  description: "Coworking bangkok clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //Get the
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SearchModal />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        <HomeBackground />
        <Hero />
        <div className="pb-20 pt-10">{children}</div>
      </body>
    </html>
  );
}
