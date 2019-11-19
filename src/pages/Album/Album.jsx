import React, { Component } from "react";
import axios from "axios";

import Spinner from "../../components/spinner/Spinner";
import ObjectOverview from "../../components/ObjectOverview/ObjectOverview";

const cors = `https://cors-anywhere.herokuapp.com/`;
const api = `http://api.deezer.com/`;

class Album extends Component {
  state = {
    album: null,
  };

  async componentDidMount() {
    try {
      const res = await axios.get(
        `${cors}${api}album/${this.props.match.params.id}`
      );
      this.setState({ album: res.data });
    } catch (err) {
      console.log("error:", err);
    }
  }

  render() {
    const { album } = this.state;
    console.log("render from album solo");
    return (
      <>{!album ? <Spinner /> : <ObjectOverview data={album} />}</>
    );
  }
}

export default Album;
