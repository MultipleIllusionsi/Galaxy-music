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
        <div onClick={this.toggleSelect} className="checked">
          {currentOption} &#x02228;
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
          <li data-value="Songs" className="option-list__item">
            Songs
          </li>
          <li data-value="Artists" className="option-list__item">
            Artists
          </li>
          <li data-value="Lyrics" className="option-list__item">
            Lyrics
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
