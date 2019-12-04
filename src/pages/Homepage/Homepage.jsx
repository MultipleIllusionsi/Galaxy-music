import React, { useState, useEffect } from "react";
import axios from "axios";
import LazyLoad from "react-lazyload";

import CtaButton from "../../components/CtaButton/CtaButton";
import GroupList from "../../components/GroupList/GroupList";
import LineList from "../../components/LineList/LineList";
import Slider from "../../components/Slider/Slider";

import "./Homepage.scss";

const cors = `https://cors-anywhere.herokuapp.com/`;
const api = `http://api.deezer.com/`;

const Homepage = () => {
  const [data, setData] = useState({
    artists: null,
    playlists: null,
    albums: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [artists, playlists, albums] = await Promise.all([
          axios.get(`${cors}${api}chart/0/artists&limit=3`),
          axios.get(`${cors}${api}chart/0/playlists?limit=8`),
          axios.get(`${cors}${api}editorial/0/releases?limit=6`),
        ]);
        setData({
          artists: artists.data.data,
          playlists: playlists.data.data,
          albums: albums.data.data,
        });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const { artists, playlists, albums } = data;

  return (
    <main className="homepage">
      <section className="homepage__section-hero">
        <div className="homepage__section-hero__content">
          <h1>Meticulously curated music for licensing</h1>
          <p>
            Browse our roster of rare and emerging independent
            artists, bands and record labels
          </p>
          <CtaButton to="/browse">Browse Music</CtaButton>
        </div>
      </section>

      <section className="homepage__section-artists">
        <h3 className="text--big-space pt-md">Featured Artist</h3>
        {artists && (
          <Slider initialObj={1} total={3} data={artists} />
        )}
      </section>

      <section className="homepage__section-playlists">
        <h3 className="text--big-space pt-md">Playlists</h3>
        <LazyLoad>
          {playlists && <GroupList to="playlist" data={playlists} />}
        </LazyLoad>
      </section>

      <section className="homepage__section-albums">
        <h3 className="text--big-space pt-md">New Albums</h3>
        <LazyLoad>{albums && <LineList data={albums} />}</LazyLoad>
      </section>
    </main>
  );
};
// }

export default Homepage;
