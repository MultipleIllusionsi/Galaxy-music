import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Search from "./components/tracks/Search";
import Lyrics from "./components/tracks/Lyrics";
import Charts from "./components/tracks/Charts";
import Genre from "./components/tracks/Genre";
import GenreType from "./components/tracks/GenreType";

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
            <Route exact path="/genre/:type/:id" component={GenreType} />
            <Route exact path="/lyrics/track/:id" component={Lyrics} />
            <Route path="*">empty section</Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
