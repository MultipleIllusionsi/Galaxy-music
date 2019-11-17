import React, { Component } from "react";

import "./CustomSelect.scss";

class CustomSelect extends Component {
  state = {
    expanded: false,
    currentOption: "All",
  };

  toggleSelect = () => {
    let smth = this.state.expanded;
    this.setState({ expanded: !smth });
  };

  chooseOption = e => {
    this.setState({ currentOption: e.target.dataset.value });
    this.toggleSelect();
  };

  sendOption(e) {
    e.stopPropagation();
    this.props.option(e.target.dataset.value);
  }

  render() {
    const { expanded, currentOption } = this.state;
    return (
      <ul className="select">
        <div onClick={this.toggleSelect} className="checked-option">
          <p>{currentOption}</p>
          <p>&#9662;</p>
        </div>
        <ol
          className={`option-list ${
            expanded === true ? "open" : "close"
          }`}
          onClick={e => {
            this.chooseOption(e);
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
