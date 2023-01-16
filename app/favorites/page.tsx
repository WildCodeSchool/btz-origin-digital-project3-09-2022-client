// import { useAuth } from "../../src/context/UserContext";

const getUser = async (id: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${id}` || "apiurl"
  );
  const pageJson = await res.json();

  return pageJson;
};

export default async function Favorites() {
  //   User forced to test
  const user = await getUser("de03c1e1-57c6-4e9e-a0b6-ea9c295b8c4b");

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)]">
      <div className="bg-primary_bg h-20"> </div>
      <div className="text-primary_font flex">
        FAVORITES
        {user.favorites_videos.map((video) => (
          <p>{video.title}</p>
        ))}
      </div>
    </div>
  );
}
