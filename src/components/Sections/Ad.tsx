"use client";

import { TPageAdvertising } from "../../types/apiTypes";

interface IProps {
  section: TPageAdvertising;
}

export default function Ad({ section }: IProps) {
  return (
    <div className=" p-3">
      <p className="text-2xl p-3">{section.advertisings.title}</p>
      <a target="_blank" rel="noreferrer" href={section.advertisings.linkTo}>
        <img className="w-full" src={section.advertisings.imageUrl} alt="ad" />
      </a>
    </div>
  );
}
