import CarouselStatic from "../../../src/components/Sections/CarouselStatic";
import Grid from "../../../src/components/Sections/Grid";
import HeroSlider from "../../../src/components/Sections/HeroSlider";

const getMultipleRandom = (arr, num) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const getOnePage = async (id: any) => {
  const res = await fetch(`${process.env.API_URL}/pages/${id}` || "apiurl");
  const pageJson = await res.json();

  return pageJson;
};

export default async function Page({ params }) {
  const page = await getOnePage(params.id);

  return (
    <div className="top-20 bg-primary_bg text-primary_font  w-screen">
      {page.pagesSectionsStatic.map((section) =>
        section.sectionsStatics.isHero ? (
          <HeroSlider
            videos={section.sectionsStatics.videos}
            title={section.sectionsStatics.title}
          />
        ) : (
          <CarouselStatic
            videos={section.sectionsStatics.videos}
            title={section.sectionsStatics.title}
          />
        )
      )}

      {page.pagesSectionsDynamic.map((section) =>
        section.sectionsDynamic.isGrid ? (
          <Grid
            videos={getMultipleRandom(
              section.sectionsDynamic.categories.videos,
              section.sectionsDynamic.max
            )}
            title={section.sectionsDynamic.title}
          />
        ) : (
          <CarouselStatic
            videos={getMultipleRandom(
              section.sectionsDynamic.categories.videos,
              section.sectionsDynamic.max
            )}
            title={section.sectionsDynamic.title}
          />
        )
      )}

      {page.pagesAdvertisings.map((section) => (
        <div>
          <p>{section.advertisings.title}</p>
          <img
            className="w-full"
            src={section.advertisings.imageUrl}
            alt="ad"
          />
        </div>
      ))}
    </div>
  );
}
