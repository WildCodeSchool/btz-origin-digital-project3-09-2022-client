const getOneVideo = async (id: any) => {
  const res = await fetch(`${process.env.API_URL}/videos/${id}` || "apiurl");
  const videoJson = await res.json();

  return videoJson;
};

export default async function Page({ params }) {
  const video = await getOneVideo(params.id);

  return (
    <div className="grid grid-cols-2 gap-4 top-20 bg-primary_bg text-primary_font w-screen">
      <div>
        {video.title} - {video.description}
      </div>
      <div>
        <video
          className="w-screen"
          key={video.id}
          src={video.videoUrl}
          controls
        >
          <track kind="captions" />
        </video>
      </div>
    </div>
  );
}
