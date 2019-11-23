import React from "react";
import { Link } from "react-router-dom";

import CtaButton from "../../components/CtaButton/CtaButton";

import "./LineList.scss";

const sliceStr = (str, maxStrInTheRow) => {
  if (str.length > maxStrInTheRow) {
    return `${str.slice(0, maxStrInTheRow)}...`;
  } else {
    return str;
  }
};

const LineList = ({ data }) => {
  console.log("---render from LINELIST---");
  return (
    <div className="center-page">
      <>
        <ul className="LineList mt-md">
          {data.map(dataItem => (
            <Link key={dataItem.id} to={`/album/${dataItem.id}`}>
              <li className="LineList__item">
                <span>{sliceStr(dataItem.title, 35)}</span>
                <span className="LineList__item-artist">
                  <span>by </span>
                  {dataItem.artist.name}
                </span>
              </li>
            </Link>
          ))}
        </ul>
        <CtaButton to="/charts">Get more albums</CtaButton>
      </>
    </div>
  );
};

export default LineList;
