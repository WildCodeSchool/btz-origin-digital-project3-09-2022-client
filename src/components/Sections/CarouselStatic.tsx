"use client";

import Link from "next/link";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import { useAuth } from "../../context/UserContext";
import "react-multi-carousel/lib/styles.css";
import { Tvideo } from "../../types/apiTypes";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface IProps {
  videos: Tvideo[];
  title: string;
}

export default function CarouselStatic({ videos, title }: IProps) {
  const { isAuth } = useAuth();

  return (
    <div className="flex flex-col p-3">
      <p className="text-2xl p-3">{title}</p>
      <Carousel ssr={false} responsive={responsive}>
        {videos
          .filter((video) => video.display === true)
          .map((video) => (
            <div key={video.id} className="relative p-2">
              <video className="w-full h-full z-10" src={video.videoUrl}>
                <track kind="captions" />
              </video>
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
                {isAuth === false && video.isPublic === false ? (
                  <span>{video.title}</span>
                ) : (
                  <Link href={`/videos/${video.id}`}>{video.title}</Link>
                )}
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
}
