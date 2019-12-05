import React, { useState, useEffect } from "react";
import axios from "axios";

import Spinner from "../../components/spinner/Spinner";
import Intro from "./Intro";
import TracksList from "../../components/TracksList/TracksList";

import "./Artist.scss";

const cors = `https://cors-anywhere.herokuapp.com/`;
const api = `http://api.deezer.com/`;

const Artist = props => {
  const [data, setData] = useState({
    artistInfo: null,
    artistTrack: null,
  });

  const [playingTrack, setPlayingTrack] = useState(0);

  useEffect(() => {
    const { artist_id } = props.match.params;
    const fetchData = async () => {
      try {
        let [artistInfo, artistTrack] = await Promise.all([
          axios.get(`${cors}${api}artist/${artist_id}`),
          axios.get(`${cors}${api}artist/${artist_id}/top?limit=25`),
        ]);
        setData({
          artistInfo: artistInfo.data,
          artistTrack: artistTrack.data,
        });
      } catch (err) {
        console.log("err", err);
      }
    };
    fetchData();
  }, [props.match.params]);

  const { artistInfo, artistTrack } = data;

  return (
    <main className="artist-page">
      {artistInfo === null ? (
        <Spinner />
      ) : (
        <>
          <div className="secondary-bc"></div>
          <Intro info={artistInfo} />

          {artistTrack && (
            <TracksList
              data={artistTrack.data}
              playingTrack={playingTrack}
              setTrack={setPlayingTrack}
            />
          )}
        </>
      )}
    </main>
  );
};

export default Artist;
