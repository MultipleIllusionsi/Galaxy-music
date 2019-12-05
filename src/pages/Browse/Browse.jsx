import React, { useState } from "react";

import Spinner from "../../components/spinner/Spinner";
import BrowserForm from "./BrowseForm";
import TracksList from "../../components/TracksList/TracksList";

import "./Browse.scss";

const Browse = () => {
  const [tab, setTabs] = useState("search");
  const [filterData, setFilterData] = useState(null);
  const [searchData, setSearchData] = useState(null);
  const [playingTrack, setPlayingTrack] = useState(0);
  const [loading, setLoading] = useState(false);

  const handlers = {
    setTabs,
    setFilterData,
    setSearchData,
    setLoading,
  };

  return (
    <main className="browse-page">
      <div className="secondary-bc"></div>
      <BrowserForm handlers={handlers} />

      {loading && <Spinner />}

      {searchData && tab === "search" && (
        <TracksList
          data={searchData}
          playingTrack={playingTrack}
          setTrack={setPlayingTrack}
        />
      )}

      {filterData && tab === "filter" && (
        <TracksList
          data={filterData.tracks.data}
          playingTrack={playingTrack}
          setTrack={setPlayingTrack}
        />
      )}
    </main>
  );
};

export default Browse;
