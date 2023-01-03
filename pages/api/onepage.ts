import { NextApiRequest, NextApiResponse } from "next";

const fakeComponents = [
  {
    id: 1,
    name: "Header",
    type: "header",
    props: {
      text: "Hello World",
    },
  },
  {
    id: 2,
    type: "paragraph",
    name: "Paragraph",
    props: {
      text: "This is a paragraph",
    },
  },
  {
    id: 3,
    type: "image",
    name: "Image",
    props: {
      src: "https://picsum.photos/200",
      alt: "Random image",
    },
  },
];

const getOnePage = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.body;

  return res.status(200).json({
    title: "Fake Page",
    components: fakeComponents,
  });
};

export default getOnePage;
