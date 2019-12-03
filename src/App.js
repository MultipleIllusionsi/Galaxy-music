import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Spinner from "./components/spinner/Spinner";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

import "./App.scss";

const Browse = lazy(() => import("./pages/Browse/Browse"));
const Album = lazy(() => import("./pages/Album/Album"));
const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Playlist = lazy(() => import("./pages/Playlist/Playlist"));
const Artist = lazy(() => import("./pages/Artist/Artist"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const GroupAlbum = lazy(() =>
  import("./pages/GroupAlbum/GroupAlbum")
);

const App = () => (
  <>
    <Navbar />
    <Switch>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/album/:id" component={Album} />
          <Route exact path="/charts" component={GroupAlbum} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/playlist/:id" component={Playlist} />
          <Route exact path="/artist/:artist_id" component={Artist} />
        </Suspense>
      </ErrorBoundary>
    </Switch>
    <Footer />
  </>
);

export default App;
