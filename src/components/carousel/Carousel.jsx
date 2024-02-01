import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/__MACOSX/no-poster.png";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";
import "./style.css";
import dayjs from "dayjs";

const Carousel = ({ data, loading, endpoint, title }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const navigation = (dir) => {
    const container = carouselContainer.current;
    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const skItem = () => {
    return (
      <div className="skeletonItem md:w-[calc(25%-15px)] lg:w-[calc(20%-16px)]">
        <div className="posterBlock skeleton w-full aspect-[1/1.5] mb-[30px] rounded-[12px]">
          <div className="textBlock flex flex-col">
            <div className="title skeleton mb-[10px] h-[20px] w-full"></div>
            <div className="date skeleton w-[75%] h-[20px]"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="carousel mb-[50px]">
      <ContentWrapper>
        {title && <div className="carouselTitle">{title}</div>}
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow opacity-50 cursor-pointer left-[30px] hidden md:flex hover:opacity-80"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRighttNav arrow opacity-50 cursor-pointer right-[30px] hidden md:flex hover:opacity-80"
          onClick={() => navigation("right")}
        />
        {!loading ? (
          <div
            className="carouselItems w-full flex gap-[10px] overflow-y-hidden ml-[-20px] mr-[-20px] overflow-x-auto py-0 px-[20px] md:gap-[20px] md:p-0 md:m-0"
            ref={carouselContainer}
          >
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              // console.log(posterUrl);
              return (
                <div
                  key={item.id}
                  className="carouselItem w-[125px] cursor-pointer md:w-[calc(25%-15px)] lg:w-[calc(20%-16px)] shrink-0"
                  onClick={() =>
                    navigate(`/${item.media_type || endpoint}/${item.id}`)
                  }
                >
                  <div className="posterBlack relative w-full aspect-[1/1.5] mb-[30px] bg-cover bg-center flex items-end justify-between p-[10px] ">
                    <Img src={posterUrl} />
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                    <Genres data={item.genre_ids.slice(0, 2)} />
                  </div>
                  <div className="textBlock text-white flex flex-col">
                    <span className="title text-[16px] mb-[10px] leading-[24px] md:text-[20px] whitespace-nowrap text-ellipsis overflow-hidden">
                      {item.title || item.name}
                    </span>
                    <span className="date text-[14px] opacity-50">
                      {dayjs(item.release_Date).format("MMM D, YYYY")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton flex gap-[10px] overflow-y-hidden ml-[-20px] mr-[-20px] px-[20px] py-0 shrink-0 ">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
