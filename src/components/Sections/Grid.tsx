"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../../context/UserContext";
import { Tvideo } from "../../types/apiTypes";
import Thumbnail from "./Thumbnail";

interface IProps {
  videos: Tvideo[];
  title: string;
}

export default function Grid({ videos, title }: IProps) {
  const { isAuth } = useAuth();

  return (
    <div className="flex flex-col p-3">
      <p className="text-2xl p-3">{title}</p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
        {videos
          .filter((video: Tvideo) => video.display === true)
          .map((video: Tvideo) => (
            <div key={video.id} className="relative">
              <Thumbnail video={video} />

              {isAuth === false && video.isPublic === false ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                  <Image
                    src="/lock_logo.svg"
                    alt="logo share"
                    width="80"
                    height="80"
                  />
                </div>
              ) : (
                ""
              )}

              <div className="absolute bottom-0 left-0 right-0 bg-gray-700 bg-opacity-25 m-2 px-2">
                <Link href={`/videos/${video.id}`}>{video.title}</Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
