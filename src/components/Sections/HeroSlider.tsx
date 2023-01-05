"use client";

import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsiveHero = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
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

export default function HeroSlider({ videos, title }: IProps) {
  return (
    <div className="flex flex-col">
      <p>{title}</p>
      <Carousel ssr={false} responsive={responsiveHero}>
        {videos.map((video) => (
          <div className="relative">
            <Link
              className="absolute px-2 text-2xl z-50"
              key={video.id}
              href={`/videos/${video.id}`}
            >
              {video.title}
            </Link>
            <video
              className="w-screen"
              key={video.id}
              src={video.videoUrl}
              controls
            >
              <track kind="captions" />
            </video>
            {/* <ReactPlayer
              controls
              style={{ width: "500px", height: "500px" }}
              url={video.videoUrl}
              // url="https://www.youtube.com/watch?v=8EKlDCwsyR0"
            /> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
