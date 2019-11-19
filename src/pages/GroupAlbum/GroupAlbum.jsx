import React, { Component } from "react";
import axios from "axios";

import Spinner from "../../components/spinner/Spinner";
import GroupList from "../../components/GroupList/GroupList";

import "./GroupAlbum.scss";

const cors = `https://cors-anywhere.herokuapp.com/`;
const api = `http://api.deezer.com/`;

class Album extends Component {
  state = {
    albums: null,
  };

  async componentDidMount() {
    try {
      const res = await axios.get(
        `${cors}${api}editorial/0/releases`
      );
      this.setState({ albums: res.data.data });
    } catch (err) {
      console.log("error:", err);
    }
  }

  render() {
    const { albums } = this.state;
    console.log("render from groupAlbum");
    return (
      <main className="groupAlbum-page">
        <h3 className="text--big-space pt-md">New Albums</h3>
        {!albums ? (
          <Spinner />
        ) : (
          <GroupList to="album" data={albums} provideInfo />
        )}
      </main>
    );
  }
}

export default Album;
