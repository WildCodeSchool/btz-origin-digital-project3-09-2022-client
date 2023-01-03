/* eslint-disable @typescript-eslint/no-explicit-any */
const getPageData = async () => {
  const res = await fetch("http://localhost:3000/api/onepage");
  const json = await res.json();
  return json;
};

// Here i call the api from Next.JS but in your case you will call your own Node.Js API
export default async function Page() {
  const pageData = await getPageData();

  const header = pageData.components.find(
    (component: any) => component.type === "header"
  );

  const image = pageData.components.find(
    (component: any) => component.type === "image"
  );

  const text = pageData.components.find(
    (component: any) => component.type === "paragraph"
  );

  return (
    <div>
      <p>{pageData.title}</p>
      <header>
        <p>{header.props.title}</p>
        <img src={image.props.src} alt={image.props.alt} />
        <p>{text.props.text}</p>
      </header>
    </div>
  );
}
