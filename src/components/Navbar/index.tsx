/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { TPage } from "../../types/apiTypes";

export default function Navbar({ pages }: TPage[]) {
  // change nav color on scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeColor);
  }

  return (
    <nav
      className={
        color
          ? "fixed top:0 bg-primary_bg z-50 h-20 flex justify-between w-screen text-primary_font text-lg"
          : "fixed top:0 bg-transparent z-50 h-20 flex justify-between w-screen text-primary_font text-lg"
      }
    >
      {/* Check if one of the pages fetched as a title Homepage. If yes, it will appear as the first link using the "Home" icon */}

      <ul className="w-1/3 invisible flex items-center px-2 md:visible">
        {pages.filter((page: TPage) => page.title !== "Homepage").length > 0 ? (
          <Link
            href={`/pages/${
              pages.filter((page: TPage) => page.title === "Homepage")[0].id
            }`}
          >
            <Image src="/home_logo.svg" width={15} height={15} alt="logo WYW" />
          </Link>
        ) : (
          ""
        )}

        {pages
          .filter((page: TPage) => page.title !== "Homepage")
          .map((page: TPage) => (
            <Link className="px-2" key={page.id} href={`/pages/${page.id}`}>
              {page.title}
            </Link>
          ))}
      </ul>
      <Image src="/wyw_logo.svg" width={150} height={200} alt="logo" />
      <div className="w-1/3 flex">
        <ul className="w-2/3 flex items-center">
          <li className="hidden px-2 md:flex">Admin</li>
          <li className="hidden px-2 md:flex">My Favorites</li>
        </ul>
        <div className="w-1/3 grid place-items-center border-2 m-4 border-primary_font">
          <Link className="text-sm md:text-lg" href="/auth/signin">
            LOG IN
          </Link>
        </div>
      </div>
    </nav>
  );
}
