"use client";

import Image from "next/image";
import { useState } from "react";
import { useAuth } from "../../context/UserContext";
import { Tvideo } from "../../types/apiTypes";

interface IProps {
  video: Tvideo;
}

export default function Thumbnail({ video }: IProps) {
  const { isAuth } = useAuth();
  const [teaser, setTeaser] = useState(false);

  return (
    <Image
      className="w-full h-full z-50"
      src={teaser ? video.teaserUrl : video.thumbnailUrl}
      alt="thumbnail"
      width="80"
      height="80"
      onMouseEnter={() => setTeaser(true)}
      onMouseLeave={() => setTeaser(false)}
    />
  );
}
