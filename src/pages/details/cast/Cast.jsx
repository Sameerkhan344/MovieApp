import React from "react";
import { useSelector } from "react-redux";

import "./style.css";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";
import avatar from "../../../assets/avatar.png";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton md:w-[175px] md:h-[175px] md:mb-[25px]"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="castSection">
      <ContentWrapper>
        <div className="sectionHeading">Top Cast</div>

        {!loading ? (
          <div className="listItems md:m-0 md:p-0">
            {data?.map((item) => {
              let imgUrl = item.profile_path
                ? url.profile + item.profile_path
                : avatar;
              return (
                <div key={item.id} className="listItem">
                  <div className="profileImg md:w-[175px] md:h-[175px] md:mb-[25px]">
                    <Img src={imgUrl} />
                  </div>
                  <div className="name md:text-[18px] md:leading-[24px]">
                    {item.name}
                  </div>
                  <div className="character md:text-[16px] md:leading-[24px]">
                    {item.character}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="castSkeleton md:m-0 md:p-0">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Cast;
