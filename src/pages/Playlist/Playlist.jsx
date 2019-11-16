import React, { Component } from "react";
import axios from "axios";

import ObjectOverview from "../../components/ObjectOverview/ObjectOverview";

const cors = `https://cors-anywhere.herokuapp.com/`;
const api = `http://api.deezer.com/`;

class Playlist extends Component {
  state = {
    playlist: null,
  };

  async componentDidMount() {
    try {
      const res = await axios.get(
        `${cors}${api}playlist/${this.props.match.params.id}`
      );
      this.setState({ playlist: res.data });
      console.log("res", this.state.playlist);
    } catch (err) {
      console.log("error:", err);
    }
  }

  render() {
    const { playlist } = this.state;
    return <ObjectOverview data={playlist} />;
  }
}

export default Playlist;
