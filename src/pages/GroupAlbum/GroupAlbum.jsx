import React, { useState, useEffect } from "react";
import axios from "axios";

import Spinner from "../../components/spinner/Spinner";
import GroupList from "../../components/GroupList/GroupList";

import "./GroupAlbum.scss";

const cors = `https://cors-anywhere.herokuapp.com/`;
const api = `http://api.deezer.com/`;

const Album = () => {
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${cors}${api}editorial/0/releases`
        );
        setAlbums(res.data.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="groupAlbum-page">
      <h3 className="text--big-space pt-md">New Albums</h3>
      {!albums ? (
        <Spinner />
      ) : (
        <GroupList to="album" data={albums} provideInfo />
      )}
    </main>
  );
};

export default Album;
