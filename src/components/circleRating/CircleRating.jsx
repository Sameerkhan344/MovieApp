import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./style.css";

const CircleRating = ({ rating }) => {
  return (
    <div className="circleRating w-[40px] h-[40px] relative top-[30px] bg-white shrink-0 md:w-[50px] md:h-[50px]">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
        })}
      />
    </div>
  );
};

export default CircleRating;
