import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Search from "./components/search/Search";
import Lyrics from "./components/track/Lyrics";
import Charts from "./components/charts/Charts";
import Genre from "./components/genre/Genre";
import GenreType from "./components/genre/GenreType";
import GenreArtist from "./components/genre/GenreArtist";
import SeparAlbum from "./components/album/SeparAlbum";
import StartPage from "./components/layout/StartPage";
import Playlist from "./components/playlist/Playlist";
import Artist from "./components/artist/Artist";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={StartPage} />
            <Route exact path="/search" component={Search} />
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
            <Route exact path="/playlist/:id" component={Playlist} />
            <Route exact path="/artist/:id" component={Artist} />
            <Route path="*">empty section</Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
