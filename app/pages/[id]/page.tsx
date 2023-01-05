import Ad from "../../../src/components/Sections/Ad";
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

const extractSections = (page) => {
  const sections = [];

  page.pagesAdvertisings.map((section) => sections.push(section));
  page.pagesSectionsDynamic.map((section) => sections.push(section));
  page.pagesSectionsStatic.map((section) => sections.push(section));

  sections.sort((a, b) => a.position - b.position);

  return sections;
};

export default async function Page({ params }) {
  const page = await getOnePage(params.id);
  const sections = extractSections(page);

  return (
    <div className="top-20 bg-primary_bg text-primary_font  w-screen">
      {sections.map((section) => {
        if (section.advertisingId) return <Ad section={section} />;
        if (section.sectionsStatics) {
          if (section.sectionsStatics.isHero)
            return (
              <HeroSlider
                videos={section.sectionsStatics.videos}
                title={section.sectionsStatics.title}
              />
            );

          return (
            <CarouselStatic
              videos={section.sectionsStatics.videos}
              title={section.sectionsStatics.title}
            />
          );
        }
        if (section.sectionsDynamic) {
          if (section.sectionsDynamic.isGrid)
            return (
              <Grid
                videos={getMultipleRandom(
                  section.sectionsDynamic.categories.videos,
                  section.sectionsDynamic.max
                )}
                title={section.sectionsDynamic.title}
              />
            );

          return (
            <CarouselStatic
              videos={getMultipleRandom(
                section.sectionsDynamic.categories.videos,
                section.sectionsDynamic.max
              )}
              title={section.sectionsDynamic.title}
            />
          );
        }
        return "";
      })}
    </div>
  );
}
