import React from "react";

const Intro = ({ info = [] }) => (
  <>
    <section className="quick-intro">
      <div className="quick-intro__icon">
        <span></span>
      </div>
      <h2 className="heading-primary">{info.name}</h2>
      <p className="quick-intro__genre"></p>
    </section>
    <section className="full-intro">
      <div className="full-intro__img">
        <img src={info.picture_big} alt="img" />
      </div>
      <div className="full-intro__bio">
        <h3>{info.name}</h3>
        <p>Number of albums: {info.nb_album}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Est, quis magni? At, magni a! Adipisci assumenda quidem
          suscipit pariatur voluptate, maiores doloribus architecto
          placeat corporis at omnis aut molestias nemo.
        </p>
      </div>
    </section>
  </>
);

export default Intro;
