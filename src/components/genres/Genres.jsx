import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);

  return (
    <div className="genres z-10 flex gap-[5px] flex-wrap flex hidden md:flex">
      {data?.map((g) => {
        if (!genres[g]?.name) return;
        return (
          <div
            key={g}
            className="genre bg-[#da2f68] px-[5px] py-[3px] text-[12px] rounded-[4px] text-white whitespace-nowrap"
          >
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
