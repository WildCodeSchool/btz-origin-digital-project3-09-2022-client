/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import { useState } from "react";
import { TPage } from "../../types/apiTypes";

interface IProps {
  pages: TPage[];
}

export default function Menuburger({ pages }: IProps) {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  return (
    <Menu
      width={150}
      noOverlay
      className=""
      isOpen={isOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
    >
      {pages.filter((page: TPage) => page.title !== "Homepage").length > 0 ? (
        <Link
          onClick={closeSideBar}
          href={`/pages/${
            pages.filter((page: TPage) => page!.title === "Homepage")[0]!.id
          }`}
        >
          Homepage
        </Link>
      ) : (
        ""
      )}

      {pages
        .filter((page: TPage) => page.title !== "Homepage")
        .map((page: TPage) => (
          <Link
            onClick={closeSideBar}
            className="px-2"
            key={page.id}
            href={`/pages/${page.id}`}
          >
            {page.title}
          </Link>
        ))}
    </Menu>
  );
}
