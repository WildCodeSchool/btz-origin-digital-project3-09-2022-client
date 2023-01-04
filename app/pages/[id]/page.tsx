const getOnePage = async (id: any) => {
  const res = await fetch(`${process.env.API_URL}/pages/${id}` || "apiurl");
  const pageJson = await res.json();

  return pageJson;
};

export default async function Page({ params }) {
  const page = await getOnePage(params.id);
  return (
    <div className="flex fixed top-20 bg-primary_bg text-primary_font h-screen w-screen">
      {page.title} - {page.id} - {page.createdAt}
    </div>
  );
}
