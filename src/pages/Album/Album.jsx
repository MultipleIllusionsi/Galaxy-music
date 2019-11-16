import React, { Component } from "react";
import axios from "axios";

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
      console.log("res", res.data);
    } catch (err) {
      console.log("error:", err);
    }
  }

  render() {
    const { album } = this.state;
    return <ObjectOverview data={album} />;
  }
}

export default Album;
