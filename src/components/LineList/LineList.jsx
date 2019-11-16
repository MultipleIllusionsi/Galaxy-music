import React from "react";

import { Link } from "react-router-dom";

import Spinner from "../../components/spinner/Spinner";
import CtaButton from "../../components/CtaButton/CtaButton";

import "./LineList.scss";

const sliceStr = (str, num) => {
  if (str.length > num) {
    return `${str.slice(0, num)}...`;
  } else {
    return str;
  }
};

const LineList = ({ data }) => {
  console.log("data for LineList", data);
  return (
    <div className="center-page">
      {!data ? (
        <Spinner />
      ) : (
        <>
          <ul className="LineList mt-md">
            {data.map(dataItem => (
              <Link key={dataItem.id} to={`/album/${dataItem.id}`}>
                <li className="LineList__item">
                  <span>{sliceStr(dataItem.title, 35)}</span>
                  <span className="LineList-artist">
                    <span>by </span>
                    {dataItem.artist.name}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
          <CtaButton>
            <Link to="/charts">Get more albums</Link>
          </CtaButton>
        </>
      )}
    </div>
  );
};

export default LineList;
