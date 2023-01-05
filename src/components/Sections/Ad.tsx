"use client";

interface IProps {
  section: any;
}

export default function Ad({ section }: IProps) {
  return (
    <div>
      <p>{section.advertisings.title}</p>
      <a target="_blank" rel="noreferrer" href={section.advertisings.linkTo}>
        <img className="w-full" src={section.advertisings.imageUrl} alt="ad" />
      </a>
    </div>
  );
}
