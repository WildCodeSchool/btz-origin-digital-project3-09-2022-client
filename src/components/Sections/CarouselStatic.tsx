"use client";

import Link from "next/link";
import Carousel from "react-multi-carousel";
import { useAuth } from "../../context/UserContext";
import "react-multi-carousel/lib/styles.css";

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
  videos: any;
  title: string;
}

export default function CarouselStatic({ videos, title }: IProps) {
  const { isAuth } = useAuth();

  return (
    <div className="flex flex-col p-3">
      <p className="text-2xl p-3">{title}</p>
      <Carousel ssr={false} responsive={responsive}>
        {videos.map((video) => (
          <div key={video.id} className="relative">
            <video className="w-full h-full z-10 " src={video.videoUrl}>
              <track kind="captions" />
            </video>

            {isAuth === false && video.isPublic === false ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                <svg
                  width="80"
                  height="70"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35 30C35 28.6739 35.5268 27.4021 36.4645 26.4645C37.4021 25.5268 38.6739 25 40 25C41.3261 25 42.5979 25.5268 43.5355 26.4645C44.4732 27.4021 45 28.6739 45 30V35H35V30Z"
                    fill="#65647C"
                  />
                  <path
                    d="M60 0H20C17.3478 0 14.8043 1.05357 12.9289 2.92893C11.0536 4.8043 10 7.34784 10 10V70C10 72.6522 11.0536 75.1957 12.9289 77.0711C14.8043 78.9464 17.3478 80 20 80H60C62.6522 80 65.1957 78.9464 67.0711 77.0711C68.9464 75.1957 70 72.6522 70 70V10C70 7.34784 68.9464 4.8043 67.0711 2.92893C65.1957 1.05357 62.6522 0 60 0V0ZM50 30V35.38C52.7 36.21 55 38.365 55 41.5V53.5C55 57.58 51.095 60 47.5 60H32.5C28.905 60 25 57.58 25 53.5V41.5C25 38.365 27.3 36.21 30 35.38V30C30 27.3478 31.0536 24.8043 32.9289 22.9289C34.8043 21.0536 37.3478 20 40 20C42.6522 20 45.1957 21.0536 47.0711 22.9289C48.9464 24.8043 50 27.3478 50 30Z"
                    fill="#65647C"
                  />
                </svg>
              </div>
            ) : (
              ""
            )}
            <div className="absolute bottom-0 left-0 right-0 p-2  bg-gray-700 bg-opacity-25">
              {isAuth === false && video.isPublic === false ? (
                <p>{video.title}</p>
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
