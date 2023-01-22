"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../../context/UserContext";
import { Tvideo } from "../../types/apiTypes";
import Favorite from "../Favorite";

interface IProps {
  video: Tvideo;
  displayFavorite: boolean;
}

export default function VideoCard({ video, displayFavorite }: IProps) {
  const { isAuth } = useAuth();

  return (
    <>
      {isAuth === false && video.isPublic === false ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <Image src="/lock_logo.svg" alt="logo share" width="80" height="80" />
        </div>
      ) : (
        ""
      )}

      <div className="absolute bottom-0 left-0 right-0 bg-gray-700 bg-opacity-25 px-2 flex justify-between items-center">
        <Link href={`/videos/${video.id}`}>{video.title}</Link>
        {displayFavorite ? <Favorite id={video.id} /> : ""}
      </div>
    </>
  );
}
