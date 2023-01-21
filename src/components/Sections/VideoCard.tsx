"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../../context/UserContext";
import { Tvideo } from "../../types/apiTypes";

interface IProps {
  video: Tvideo;
}

export default function VideoCard({ video }: IProps) {
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

      <div className="absolute bottom-0 left-0 right-0 bg-gray-700 bg-opacity-25 m-2 px-2">
        <Link href={`/videos/${video.id}`}>{video.title}</Link>
      </div>
    </>
  );
}
