import React, { useState } from "react";

import "./CustomSelect.scss";

const CustomSelect = ({ option }) => {
  const [open, setOpen] = useState(false);
  const [currOption, setCurrOption] = useState("All");

  const chooseSelectOption = ({
    target: {
      dataset: { value },
    },
  }) => {
    setCurrOption(value);
    option(value);
    setOpen(!open);
  };

  return (
    <ul className="select">
      <div onClick={() => setOpen(!open)} className="checked-option">
        <p>{currOption}</p>
        <p>&#9662;</p>
      </div>
      <ol
        className={`option-list ${open === true ? "open" : "close"}`}
        onClick={e => chooseSelectOption(e)}
      >
        <li data-value="Track" className="option-list__item">
          Track
        </li>
        <li data-value="Artist" className="option-list__item">
          Artist
        </li>
        <li data-value="Label" className="option-list__item">
          Label
        </li>
        <li data-value="All" className="option-list__item">
          All
        </li>
      </ol>
    </ul>
  );
};

export default CustomSelect;
