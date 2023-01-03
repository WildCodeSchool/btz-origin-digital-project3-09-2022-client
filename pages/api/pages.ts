import { NextApiRequest, NextApiResponse } from "next";

const fakePages = [
  { slug: "home", title: "Home" },
  { slug: "about", title: "About" },
  { slug: "contact", title: "Contact" },
  { slug: "contact", title: "Contact" },
  { slug: "contact", title: "Contact" },
];

const getAllPages = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(fakePages);
};

export default getAllPages;
