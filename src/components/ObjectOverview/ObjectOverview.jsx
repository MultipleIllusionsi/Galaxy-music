import React from "react";
import Spinner from "../../components/spinner/Spinner";

import "./ObjectOverview.scss";
import Track from "../../components/track/Track";

const ObjectOverview = ({ data }) => {
  console.log("render from ObjOverw");
  return (
    <main className="Overview-page">
      {data === null ? (
        <Spinner />
      ) : (
        <>
          <section className="Overview-wrapper">
            <div
              className="blur-bc"
              style={{
                backgroundImage: `url(${data.picture_small ||
                  data.cover_small}`,
              }}
            ></div>
            <div className="Overview-content">
              <div className="Overview-cover">
                <img
                  src={data.picture_big || data.cover_big}
                  alt="Overview-img"
                />
              </div>
              <div className="Overview-info">
                <h2>{data.title}</h2>
                <p>
                  <span>Created by </span>
                  {data.artist ? data.artist.name : data.title}
                </p>
                <p>{data.nb_tracks} Songs</p>
                <p>
                  <span>Runtime: </span>
                  {Math.floor(data.duration / 60)} min
                </p>
                <p>
                  <span>Released:</span>
                  {data.creation_date || data.release_date}
                </p>
                {data.description && <p>{data.description}</p>}
              </div>
            </div>
          </section>

          <section>
            <ul className="tracks-list">
              {data.tracks.data.map(dataItem => (
                <Track
                  key={`${dataItem.id}`}
                  cover={data.picture_small || data.cover_small}
                  track={dataItem}
                />
              ))}
            </ul>
          </section>
        </>
      )}
    </main>
  );
};
export default ObjectOverview;
