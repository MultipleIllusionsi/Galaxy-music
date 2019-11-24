import React from "react";

import CustomSelect from "../../components/CustomSelect/CustomSelect";

const SearchTab = ({ queryTitle, setQueryTitle, setQueryType }) => (
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
          value={queryTitle}
          onChange={e => setQueryTitle(e.target.value)}
        />
      </div>
      <CustomSelect
        option={value => setQueryType(value.toLowerCase())}
      />
    </div>
  </div>
);

export default SearchTab;
