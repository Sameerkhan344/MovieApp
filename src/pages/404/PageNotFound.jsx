import React from "react";

import "./style.css";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const PageNotFound = () => {
  return (
    <div className="pageNotFound h-[700px] pt-[200px]">
      <ContentWrapper>
        <span className="bigText">404</span>
        <span className="smallText">Page not found!</span>
      </ContentWrapper>
    </div>
  );
};

export default PageNotFound;
