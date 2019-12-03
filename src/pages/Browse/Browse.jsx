import React, { useState } from "react";

import Spinner from "../../components/spinner/Spinner";
import BrowserForm from "./BrowseForm";
import Player from "../../components/track/Player";

import "./Browse.scss";

const Browse = () => {
  const [tab, setTab] = useState("search");
  const [filterData, setFilterData] = useState(null);
  const [searchData, setSearchData] = useState(null);
  const [playingTrack, setPlayingTrack] = useState(0);
  const [loading, setLoading] = useState(false);
  console.log("searchData", searchData);

  return (
    <main className="browse-page">
      <div className="secondary-bc"></div>
      <BrowserForm
        setTabFromParent={setTab}
        setFilterData={setFilterData}
        setSearchData={setSearchData}
        setLoading={setLoading}
      />

      {loading && <Spinner />}
      {searchData && tab === "search" && (
        <ul className="tracks-list">
          {searchData.map(track => (
            <Player
              isPlaying={track.id === playingTrack ? true : false}
              handler={setPlayingTrack}
              key={track.id}
              cover={track.album.cover_medium}
              track={track}
            />
          ))}
        </ul>
      )}

      {filterData && tab === "filter" && (
        <ul className="tracks-list">
          {filterData.tracks.data.map(track => (
            <Player
              isPlaying={track.id === playingTrack ? true : false}
              handler={setPlayingTrack}
              key={track.id}
              cover={track.album.cover_medium}
              track={track}
            />
          ))}
        </ul>
      )}
    </main>
  );
};

export default Browse;
