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

  window.addEventListener("scroll", changeColor);

  return (
    <nav
      className={
        color
          ? "fixed top:0 bg-primary_bg z-50 h-20 flex justify-between w-full text-primary_font text-lg"
          : "fixed top:0 bg-transparent z-50 h-20 flex justify-between w-full text-primary_font text-lg"
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
            <svg
              width="15"
              height="15"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 26.5714H9.375V16.2857H20.625V26.5714H26.25V11.1429L15 3.42857L3.75 11.1429V26.5714ZM3.75 30C2.71875 30 1.83625 29.6646 1.1025 28.9937C0.3675 28.3217 0 27.5143 0 26.5714V11.1429C0 10.6 0.133125 10.0857 0.399375 9.6C0.664375 9.11429 1.03125 8.71428 1.5 8.4L12.75 0.685714C13.0938 0.457143 13.4531 0.285714 13.8281 0.171428C14.2031 0.0571427 14.5938 0 15 0C15.4062 0 15.7969 0.0571427 16.1719 0.171428C16.5469 0.285714 16.9062 0.457143 17.25 0.685714L28.5 8.4C28.9688 8.71428 29.3363 9.11429 29.6025 9.6C29.8675 10.0857 30 10.6 30 11.1429V26.5714C30 27.5143 29.6331 28.3217 28.8994 28.9937C28.1644 29.6646 27.2812 30 26.25 30H16.875V19.7143H13.125V30H3.75Z"
                fill="#F1D3B3"
              />
            </svg>
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
          LOG IN
        </div>
      </div>
    </nav>
  );
}
