import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import "./style.css";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper.jsx";
import useFetch from "../../../hooks/useFetch";
import Genres from "../../../components/genres/Genres";
import CircleRating from "../../../components/circleRating/CircleRating";
import Img from "../../../components/lazyLoadImage/Img.jsx";
import PosterFallback from "../../../assets/__MACOSX/no-poster.png";
import { PlayIcon } from "../Playbtn.jsx";
import VideoPopup from "../../../components/videoPopup/VideoPopup";

const DetailsBanner = ({ video, crew }) => {
  //these 2 state show or videoId for video popup
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  const { url } = useSelector((state) => state.home);

  const _genres = data?.genres?.map((g) => g.id);

  //this data for crew members its API comes from details page
  const director = crew?.filter((f) => f.job === "Director");
  const writer = crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="detailsBanner md:mb-0 md:pt-[120px] md:min-h-[700px]">
      {!loading ? (
        <>
          {!!data && (
            <React.Fragment>
              {/* <div> */}
              <div className="backdrop-img w-full h-full absolute top-0 left-0 opacity-10 overflow-hidden">
                <Img src={url.backdrop + data.backdrop_path} />
              </div>
              <div className="opacity-layer w-full h-[250px] absolute bottom-0 left-0"></div>
              <ContentWrapper>
                <div className="content flex relative flex-col gap-[25px] md:gap-[50px] md:flex-row">
                  <div className="left shrink-0">
                    {data.poster_path ? (
                      <Img
                        className="posterImg w-full block  rounded-[12px] md:max-w-[350px]"
                        src={url.backdrop + data.poster_path}
                      />
                    ) : (
                      <Img
                        className="posterImg w-full block  rounded-[12px] md:max-w-[350px]"
                        src={PosterFallback}
                      />
                    )}
                  </div>

                  <div className="right text-white">
                    <div className="title text-[28px] leading-[40px] md:text-[34px] md:leading-[44px]">{`${
                      data.name || data.title
                    } (${dayjs(data?.release_date).format("YYYY")})`}</div>
                    <div className="subtitle md:text-[20px] leading-[28px]">
                      {data.tagline}
                    </div>
                    <Genres
                      data={_genres}
                      className="genres md:justify-start mb-[25px]"
                    />
                    <div className="row">
                      <CircleRating
                        rating={data.vote_average.toFixed(1)}
                        className="circleRating md:max-w-[90px]"
                      />
                      <div
                        className="playbtn"
                        onClick={() => {
                          setShow(true);
                          setVideoId(video.key);
                        }}
                      >
                        <PlayIcon className="md:w-[80px]" />
                        <span className="text">Watch Trailer</span>
                      </div>
                    </div>
                    <div className="overview mb-[25px]">
                      <div className="heading text-[24px] mb-[10px]">
                        Overview
                      </div>
                      <div className="description leading-[24px] md:pr-[100px]">
                        {data.overview}
                      </div>
                    </div>
                    <div className="info">
                      {data.status && (
                        <div className="infoItem">
                          <span className="text txtbold">Status: {""}</span>
                          <span className="text">{data.status}</span>
                        </div>
                      )}
                      {data.release_date && (
                        <div className="infoItem">
                          <span className="text txtbold">
                            Release Data: {""}
                          </span>
                          <span className="text">
                            {dayjs(data.release_date).format("MMM D, YYYY")}
                          </span>
                        </div>
                      )}
                      {data.runtime && (
                        <div className="infoItem">
                          <span className="text txtbold">Runtime: {""}</span>
                          <span className="text">
                            {toHoursAndMinutes(data.runtime)}
                          </span>
                        </div>
                      )}
                    </div>
                    {director?.length > 0 && (
                      <div className="info">
                        <span className="text txtbold">Director: </span>
                        <span className="text">
                          {director.map((d, i) => (
                            <span key={i}>
                              {d.name} {director.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}

                    {writer?.length > 0 && (
                      <div className="info">
                        <span className="text txtbold">Writer: </span>
                        <span className="text">
                          {writer.map((d, i) => (
                            <span key={i}>
                              {d.name} {writer.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}

                    {data?.created_by?.length > 0 && (
                      <div className="info">
                        <span className="text txtbold">Creator: </span>
                        <span className="text">
                          {data?.created_by.map((d, i) => (
                            <span key={i}>
                              {d.name}{" "}
                              {data?.created_by.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </ContentWrapper>
              <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
              />
              {/* </div> */}
            </React.Fragment>
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton md:gap-[50px] md:flex-row">
          <ContentWrapper>
            <div className="left skeleton md:max-w-[350px]"></div>
            <div className="right w-full">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
