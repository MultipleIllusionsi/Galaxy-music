import React, { useState, useEffect } from "react";
import axios from "axios";

import Spinner from "../../components/spinner/Spinner";
import ObjectOverview from "../../components/ObjectOverview/ObjectOverview";

const cors = `https://cors-anywhere.herokuapp.com/`;
const api = `http://api.deezer.com/`;

const Playlist = props => {
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    const { id } = props.match.params;
    const fetchData = async () => {
      try {
        const res = await axios.get(`${cors}${api}playlist/${id}`);
        setPlaylist(res.data);
      } catch (err) {
        console.log("error:", err);
      }
    };

    fetchData();
  }, [props.match.params]);

  return (
    <>
      {!playlist ? <Spinner /> : <ObjectOverview data={playlist} />}
    </>
  );
};

export default Playlist;
