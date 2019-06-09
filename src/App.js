import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Search from "./components/tracks/Search";
import Lyrics from "./components/tracks/Lyrics";
import Charts from "./components/tracks/Charts";
import Genre from "./components/tracks/Genre";
import GenreType from "./components/tracks/GenreType";
import GenreArtist from "./components/tracks/GenreArtist";
import Album from "./components/tracks/Album";
import SeparAlbum from "./components/tracks/SeparAlbum";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/charts" component={Charts} />
            <Route exact path="/charts/:top" component={Charts} />
            <Route exact path="/genre" component={Genre} />
            <Route exact path="/genre/:id" component={GenreType} />
            <Route
              exact
              path="/genre/:id/artist/:artist_id"
              component={GenreArtist}
            />
            <Route exact path="/track/:id" component={Lyrics} />
            <Route exact path="/album/:id" component={SeparAlbum} />
            <Route path="*">empty section</Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
