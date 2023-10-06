import React from "react";
import Link from "next/link";

export const ProjectCard = ({ imgUrl, title, description, previewUrl }) => {
  return (
    <div className="shadow-xl shadow-black rounded-xl cursor-pointer">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 group-hover:rounded-t-xl transition-all duration-500">
          <Link
            href={previewUrl}
            target="_blank"
            className="h-full w-full "
          ></Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};
