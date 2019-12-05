import React, { useState, useEffect } from "react";
import axios from "axios";

import Spinner from "../../components/spinner/Spinner";
import ObjectOverview from "../../components/ObjectOverview/ObjectOverview";

const cors = `https://cors-anywhere.herokuapp.com/`;
const api = `http://api.deezer.com/`;

const Album = props => {
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const { id } = props.match.params;
    const fetchData = async () => {
      try {
        const res = await axios.get(`${cors}${api}album/${id}`);
        setAlbum(res.data);
      } catch (err) {
        console.log("error:", err);
      }
    };
    fetchData();
  }, [props.match.params]);

  return (
    <>{!album ? <Spinner /> : <ObjectOverview data={album} />}</>
  );
};

export default Album;
