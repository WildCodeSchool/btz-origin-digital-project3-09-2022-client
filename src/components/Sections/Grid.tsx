"use client";

import { Tvideo } from "../../types/apiTypes";
import Thumbnail from "./Thumbnail";
import VideoCard from "./VideoCard";

interface IProps {
  videos: Tvideo[];
  displayFavorite: boolean;
  title: string;
}

export default function Grid({ videos, displayFavorite, title }: IProps) {
  return (
    <div className="flex flex-col p-3">
      <p className="text-2xl p-3">{title}</p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
        {videos
          .filter((video: Tvideo) => video.display === true)
          .map((video: Tvideo) => (
            <div key={video.id} className="relative">
              <Thumbnail video={video} />
              <VideoCard video={video} displayFavorite={displayFavorite} />
            </div>
          ))}
      </div>
    </div>
  );
}
