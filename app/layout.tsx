import React, { ReactNode } from "react";
import "../styles/globals.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import UserContextProvider from "../src/context/UserContext";

type Props = {
  children: ReactNode;
};

const getAllPages = async () => {
  const pages = await fetch(`${process.env.API_URL}/pages` || "apiurl");
  const pagesJson = await pages.json();

  return pagesJson;
};

export default async function Layout({ children }: Props) {
  const pages = await getAllPages();
  return (
    <html lang="en">
      <head />
      <UserContextProvider>
        <body className="min-h-screen bg-primary_bg flex flex-col align-middle items-start justify-start">
          <Navbar pages={pages} />
          <main className="flex-grow flex">{children}</main>
          <Footer />
        </body>
      </UserContextProvider>
    </html>
  );
}
