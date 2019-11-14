import React from "react";
import spinner from "../../assets/spinner.svg";

const Spinner = () => (
  <div>
    <img
      src={spinner}
      alt="Loading..."
      style={{
        width: "100px",
        margin: "40px auto",
        display: "block",
      }}
    />
  </div>
);

export default Spinner;
