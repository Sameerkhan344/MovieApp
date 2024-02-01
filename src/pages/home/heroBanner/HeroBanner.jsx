import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "./style.css";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 10)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const SearchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="w-[100%] h-[450px] md:h-[700px] bg-#04152d flex items-center relative ">
      {!loading && (
        <div className="backdrop_img w-full h-full absolute top-0 left-0 overflow-hidden opacity-50">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer w-full h-[250px] absolute bottom-0 left-0"></div>
      <ContentWrapper>
        <div className="heroBannerContent flex flex-col items-center text-[#fff] text-center relative max-w-[800px] m-auto">
          <span className="title text-[50px] font-bold md:mb-0 md:text-[90px] ">
            Welcome.
          </span>
          <span className="Subtitile text-[18px] font-medium mb-[40px] md:text-[24px]">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput flex items-center w-[100%]">
            <input
              className="w-[calc(100%-100px)] 
              h-[50px] bg-white outline-none border-none rounded-l-[30px] py-0 px-[15px] text-[14px] md:w-[calc(100%-150px)] md:h-[60px] md:text-[20px] md:py-0 px-[30px] text-[#000]"
              type="text"
              placeholder="Search for a movie or tv show..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={SearchQueryHandler}
            />
            <button className="w-[100px] h-[50px] md:w-[150px] md:h-[60px] md:text-[18px]">
              Search
            </button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
