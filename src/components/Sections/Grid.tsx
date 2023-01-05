"use client";

import Link from "next/link";

interface IProps {
  videos: any;
  title: string;
}

export default function Grid({ videos, title }: IProps) {
  return (
    <div className="flex flex-col">
      <p>{title}</p>
      <div className="grid grid-cols-4 gap-4">
        {videos.map((video) => (
          <div className="relative">
            <Link
              className="absolute px-2 text-lg z-50 m-5"
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
      </div>
    </div>
  );
}
