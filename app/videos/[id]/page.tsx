import Image from "next/image";
import { cookies } from "next/headers"; // Import cookies
import Favorite from "../../../src/components/Favorite";

const getOneVideo = async (id: any) => {
  const res = await fetch(`${process.env.API_URL}/videos/${id}` || "apiurl", {
    credentials: "include",
  });
  const videoJson = await res.json();

  return videoJson;
};

export default async function VideoDetails({ params }) {
  const video = await getOneVideo(params.id);

  const token = cookies().get("token");
  const changeDate = (dateISO: Date) => {
    const date = new Date(dateISO);
    return date.toLocaleDateString();
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      <div className="bg-primary_bg h-20"> </div>
      <div className="text-primary_font flex">
        <div className="flex flex-col w-1/2 p-4">
          {!video.isPublic ? (
            <div className="text-xl pb-3 border-b border-primary_font flex items-center ">
              <Image
                src="/lock_full_logo.svg"
                alt="logo share"
                width="40"
                height="40"
              />
              Content reserved for discovery and Premium pass subscription.
            </div>
          ) : (
            ""
          )}
          <div className="text-xl py-2 flex justify-between">
            {video.title}{" "}
            <div className="flex">
              {token ? <Favorite id={video.id} /> : ""}
              <Image
                src="/share_logo.svg"
                alt="logo share"
                width="40"
                height="40"
              />
            </div>
          </div>
          <div className="py-2 border-b border-primary_font">
            {video.description}{" "}
          </div>
          <div className="py-2">
            INFORMATIONS - published on {changeDate(video.updatedAt)}
          </div>
        </div>
        {token || video.isPublic ? (
          <div className="relative w-1/2 p-4">
            <video key={video.id} src={video.videoUrl} controls>
              {" "}
              <track kind="captions" />
            </video>
          </div>
        ) : (
          <div className="relative w-1/2 p-4">
            <Image
              className="absolute inset-0 flex flex-col w-full"
              src={video.thumbnailUrl}
              alt="thumbnail"
              width="200"
              height="200"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
              <Image
                src="/lock_logo.svg"
                alt="logo share"
                width="80"
                height="80"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
