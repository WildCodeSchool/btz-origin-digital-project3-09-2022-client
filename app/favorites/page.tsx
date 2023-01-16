import { cookies } from "next/headers"; // Import cookies
import Grid from "../../src/components/Sections/Grid";
import { Tvideo } from "../../src/types/apiTypes";

const getFavoriteVideos = async () => {
  const token = cookies().get("token");
  const res = await fetch(
    `${process.env.API_URL}/videos?favorite=true` || "apiurl",
    {
      credentials: "include",
      headers: {
        Authorization: token?.value as string,
      },
    }
  );
  const pageJson = await res.json();
  return pageJson as Tvideo[];
};

export default async function Favorites() {
  const videos = await getFavoriteVideos();
  console.log(videos);

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      <div className="bg-primary_bg h-20"> </div>
      <div className="text-primary_font flex">
        <Grid videos={videos} title="Favorites" />
      </div>
    </div>
  );
}
