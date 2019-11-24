import React from "react";

const FilterTab = ({ onChangeGenre, genres }) => (
  <div className="browse-form--wrapper center-page">
    <ul className="genre-list" onClick={onChangeGenre}>
      {genres &&
        genres.map(genre => (
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
);

export default FilterTab;
