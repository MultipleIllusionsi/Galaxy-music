import React, { Component } from "react";

import "./CustomSelect.scss";

class CustomSelect extends Component {
  state = {
    expanded: false,
    currentSelectOption: "All",
  };

  toggleSelect = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  chooseSelectOption = e => {
    this.setState({ currentSelectOption: e.target.dataset.value });
    this.toggleSelect();
  };

  sendOption(e) {
    e.stopPropagation();
    this.props.option(e.target.dataset.value);
  }

  render() {
    const { expanded, currentSelectOption } = this.state;
    console.log("render from customSelect");
    return (
      <ul className="select">
        <div onClick={this.toggleSelect} className="checked-option">
          <p>{currentSelectOption}</p>
          <p>&#9662;</p>
        </div>
        <ol
          className={`option-list ${
            expanded === true ? "open" : "close"
          }`}
          onClick={e => {
            this.chooseSelectOption(e);
            this.sendOption(e);
          }}
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
  }
}

export default CustomSelect;
