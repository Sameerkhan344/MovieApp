import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "./style.css";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Corousel from "../../../components/carousel/Carousel";

const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/popular`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="corouselSection">
      <ContentWrapper>
        <span className="corouselTitle">What's Popular</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Corousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default Popular;
