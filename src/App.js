import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Spinner from "./components/spinner/Spinner";

import "./App.scss";

const Search = lazy(() => import("./components/search/Search"));
const Track = lazy(() => import("./components/track/Track"));
const Charts = lazy(() => import("./components/charts/Charts"));
const Genre = lazy(() => import("./components/genre/Genre"));
const GenreType = lazy(() => import("./components/genre/GenreType"));
const Album = lazy(() => import("./pages/Album/Album"));
const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Playlist = lazy(() => import("./pages/Playlist/Playlist"));
const Artist = lazy(() => import("./pages/Artist/Artist"));

const App = () => (
  <>
    <Navbar />
    {/* add withRouter to navbar  */}
    <Switch>
      <Suspense fallback={<Spinner />}>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/charts" component={Charts} />
        <Route exact path="/charts/:top" component={Charts} />
        <Route exact path="/genre" component={Genre} />
        <Route exact path="/genre/:id" component={GenreType} />
        <Route
          exact
          path="/genre/:id/artist/:artist_id"
          component={Artist}
        />
        <Route exact path="/track/:id" component={Track} />
        <Route exact path="/album/:id" component={Album} />
        <Route exact path="/playlist/:id" component={Playlist} />
        <Route exact path="/artist/:artist_id" component={Artist} />
      </Suspense>
    </Switch>
  </>
);

export default App;
