import React from "react";
import { Link } from "react-router-dom";

import CtaButton from "../../components/cta-button/CtaButton";

import "./Homepage.scss";

const Homepage = () => (
  <main className="homepage">
    <section className="homepage__section1">
      <div className="homepage__section1-content">
        <h1>Meticulously curated music for licensing</h1>
        <p>
          Browse our roster of rare and emerging independent artists,
          bands and record labels
        </p>
        <CtaButton>
          <Link class="" to="/charts">
            Browse Music
          </Link>
        </CtaButton>
      </div>
    </section>
  </main>
);

export default Homepage;
