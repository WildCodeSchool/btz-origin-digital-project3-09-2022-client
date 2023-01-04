import React, { ReactNode } from "react";
import "../styles/globals.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

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
      {}
      <head />
      <body>
        <Navbar pages={pages} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
