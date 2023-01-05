"use client";

import Link from "next/link";
import Carousel from "react-multi-carousel";
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
  title: any;
}

export default function CarouselStatic({ videos, title }) {
  return (
    <div className="flex flex-col">
      <p>{title}</p>
      <Carousel ssr={false} responsive={responsive}>
        {videos.map((video) => (
          <div className="relative">
            <Link
              className="absolute px-2 text-lg m-5 z-50"
              key={video.id}
              href={`/videos/${video.id}`}
            >
              {video.title}
            </Link>
            <video className="p-3" key={video.id} src={video.videoUrl} controls>
              <track kind="captions" />
            </video>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
