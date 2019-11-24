import React, { useState } from "react";

import CustomSelect from "../../components/CustomSelect/CustomSelect";

const BrowseForm = props => {
  return (
    <div className="browse-form">
      <form onSubmit={props.findTrack}>
        <ul className="browse-form__tabs">
          <li className="browse-form__tabs-item">
            <input
              id="filter"
              className="display-none"
              type="radio"
              name="query"
              value="filter"
              onChange={props.handleTabs}
              checked={props.currentTab === "filter" && true}
            />
            <label htmlFor="filter">Filter</label>
          </li>

          <li className="browse-form__tabs-item">
            <input
              className="display-none"
              type="radio"
              id="search"
              name="query"
              value="search"
              onChange={props.handleTabs}
              checked={props.currentTab === "search" && true}
            />
            <label htmlFor="search">Search</label>
          </li>
        </ul>
        {props.currentTab === "search" ? (
          <div className="browse-form--wrapper">
            <div className="browse-form__search">
              <div className="browse-form__search-input">
                <button
                  className="search-button"
                  type="submit"
                  aria-label="search button"
                ></button>
                <input
                  type="text"
                  placeholder="Title..."
                  name="queryTitle"
                  value={props.queryTitle}
                  onChange={props.onChangeSearchInput}
                />
              </div>

              <CustomSelect option={props.currentSelectOption} />
            </div>
          </div>
        ) : (
          <div className="browse-form--wrapper center-page">
            <ul className="genre-list" onClick={props.onChangeGenre}>
              {props.genres &&
                props.genres.map(genre => (
                  <li
                    id={genre.id}
                    className="genre-list__item"
                    key={genre.id}
                  >
                    {genre.name}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
};

export default BrowseForm;
