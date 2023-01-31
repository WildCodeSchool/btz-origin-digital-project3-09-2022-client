"use client";

import { TPageAdvertising } from "../../types/apiTypes";

interface IProps {
  section: TPageAdvertising;
}

export default function Ad({ section }: IProps) {
  return (
    <div className="p-3">
      <p className="text-lg md:text-2xl p-3">{section.advertisings.title}</p>
      <a target="_blank" rel="noreferrer" href={section.advertisings.linkTo}>
        <div className="p-7">
          {/* <img src={section.advertisings.imageUrl} alt="ad" className="p-52" /> */}
          <img
            className="w-screen"
            src={section.advertisings.imageUrl}
            alt="ad"
          />
        </div>
      </a>
    </div>
  );
}
