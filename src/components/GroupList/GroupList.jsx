import React from "react";

import Spinner from "../../components/spinner/Spinner";

// import CtaButton from "../../components/CtaButton/CtaButton";
import PlayButton from "../../components/PlayButton/PlayButton";

import "./GroupList.scss";

const GroupList = ({ data, provideInfo, to }) => {
  return (
    <div className="center-page">
      {!data ? (
        <Spinner />
      ) : (
        <ul className="grouplist mt-md">
          {data.map(
            ({
              id,
              cover_medium,
              picture_medium,
              title,
              artist,
              user,
            }) => (
              <li
                className="grouplist__item"
                key={id}
                style={{
                  backgroundImage: `url(${cover_medium ||
                    picture_medium}`,
                }}
              >
                <div className="gradient-overlay">
                  <span className="abs-center">
                    <PlayButton to={`/${to}/${id}`} type="hover" />
                  </span>
                </div>

                {provideInfo && (
                  <div className="grouplist__info">
                    <p>{title}</p>
                    <p className="artist-name">
                      <span>by </span>
                      {artist && artist.name}
                      {user && user.name}
                    </p>
                  </div>
                )}
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default GroupList;
