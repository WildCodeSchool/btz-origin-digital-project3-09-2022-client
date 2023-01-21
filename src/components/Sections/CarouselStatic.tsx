"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tvideo } from "../../types/apiTypes";
import Thumbnail from "./Thumbnail";
import VideoCard from "./VideoCard";

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
  displayFavorite: boolean;
  title: string;
}

export default function CarouselStatic({
  videos,
  displayFavorite,
  title,
}: IProps) {
  return (
    <div className="flex flex-col p-3">
      <p className="text-2xl p-3">{title}</p>
      <Carousel ssr={false} responsive={responsive}>
        {videos
          .filter((video) => video.display === true)
          .map((video) => (
            <div key={video.id} className="relative m-2">
              <Thumbnail video={video} />
              <VideoCard video={video} displayFavorite={displayFavorite} />
            </div>
          ))}
      </Carousel>
    </div>
  );
}
