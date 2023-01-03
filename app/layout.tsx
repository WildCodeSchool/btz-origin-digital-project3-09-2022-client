import Navbar from "../src/components/Navbar";
import "../styles/globals.css";

// Here i call the api from Next.JS but in your case you will call your own Node.Js API
const getAllPages = async () => {
  const pages = await fetch("http://localhost:3000/api/pages");
  const pagesJson = await pages.json();

  return pagesJson;
};

export default async function Layout({ children }) {
  const pages = await getAllPages();

  return (
    <div>
      <Navbar pages={pages} />
      {children}
    </div>
  );
}
