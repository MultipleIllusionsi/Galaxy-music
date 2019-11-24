import React from "react";

const BrowseTabs = ({ handleTabs, tab }) => (
  <ul className="browse-form__tabs">
    <li className="browse-form__tabs-item">
      <input
        id="filter"
        type="radio"
        value="filter"
        onChange={handleTabs}
        checked={tab === "filter" && true}
      />
      <label htmlFor="filter">Filter</label>
    </li>

    <li className="browse-form__tabs-item">
      <input
        type="radio"
        id="search"
        value="search"
        onChange={handleTabs}
        checked={tab === "search" && true}
      />
      <label htmlFor="search">Search</label>
    </li>
  </ul>
);

export default BrowseTabs;
