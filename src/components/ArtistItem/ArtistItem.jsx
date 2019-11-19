import React, { memo } from "react";
import { Link } from "react-router-dom";

import CtaButton from "../../components/CtaButton/CtaButton";
import PlayButton from "../../components/PlayButton/PlayButton";

import "./ArtistItem.scss";

const ArtistItem = ({ data, sliderClass }) => {
  console.log("render from ArtistItem");
  return (
    <div className={`ArtistItem ${sliderClass}`}>
      <img
        className="ArtistItem__img"
        src={data.picture_xl}
        alt="img"
      />
      <span className="abs-center">
        <PlayButton to={`/artist/${data.id}`} />
        <h2 className="artist-name">{data.name}</h2>
        <div className="mt-md">
          <CtaButton>
            <Link to={`/artist/${data.id}`}>
              More from this artist
            </Link>
          </CtaButton>
        </div>
      </span>
    </div>
  );
};

export default memo(ArtistItem);
