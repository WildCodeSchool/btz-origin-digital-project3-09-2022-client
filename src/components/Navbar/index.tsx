"use client";

import Link from "next/link";

type Props = {
  pages: any;
};

export default function Navbar({ pages }: Props) {
  return (
    <div className="w-full bg-black text-white">
      {pages.map((page: any) => (
        <Link href={page.slug}>{page.title}</Link>
      ))}
    </div>
  );
}
