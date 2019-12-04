import React, { useState } from "react";
import axios from "axios";

import BrowseTabs from "./BrowseTabs";
import SearchTab from "./SearchTab";
import FilterTab from "./FilterTab";

const cors = `https://cors-anywhere.herokuapp.com/`;
const api = `http://api.deezer.com/`;

const BrowseForm = props => {
  const {
    setTabFromParent,
    setFilterData,
    setSearchData,
    setLoading,
  } = props;

  const [queryTitle, setQueryTitle] = useState("");
  const [queryType, setQueryType] = useState("");
  const [genres, setGenres] = useState(null);
  const [tab, setTab] = useState("search");

  const findTrack = async e => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await axios.get(
        `${cors}${api}search?q=${queryType}:"${queryTitle}"&limit=10`
      );
      setLoading(false);
      setSearchData(res.data.data);
      setQueryTitle("");
    } catch (error) {
      console.log("error", error);
    }
  };

  const onChangeGenre = async e => {
    if (e.target.id) {
      try {
        setLoading(true);
        const res = await axios.get(
          `${cors}${api}editorial/${e.target.id}/charts`
        );
        setLoading(false);
        setFilterData(res.data);
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  const handleTabs = ({ target: { value } }) => {
    setTab(value);
    setTabFromParent(value);
    if (value === "filter" && genres === null) {
      console.log("genres were fetched");
      fetchGenres();
    }
  };

  const fetchGenres = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${cors}${api}genre`);

      if (window.innerWidth > 600) {
        const resFull = res.data.data.slice(0, 25);
        setGenres(resFull);
      } else {
        const resCutted = res.data.data.slice(0, 9);
        setGenres(resCutted);
      }

      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="browse-form">
      <form onSubmit={findTrack}>
        <BrowseTabs handleTabs={handleTabs} tab={tab} />
        {tab === "search" ? (
          <SearchTab
            queryTitle={queryTitle}
            setQueryTitle={setQueryTitle}
            setQueryType={setQueryType}
          />
        ) : (
          <FilterTab genres={genres} onChangeGenre={onChangeGenre} />
        )}
      </form>
    </div>
  );
};

export default BrowseForm;
