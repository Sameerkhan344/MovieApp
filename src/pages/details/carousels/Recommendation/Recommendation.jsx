import React from "react";

import Carousel from "../../../../components/carousel/Carousel";
import useFetch from "../../../../hooks/useFetch";
import "./style.css";
const Recommendation = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );

  return (
    <div className="Recommendation">
      <Carousel
        title="Recommendations"
        data={data?.results}
        loading={loading}
        endpoint={mediaType}
      />
    </div>
  );
};

export default Recommendation;
