import React from "react";

import "./Contact.scss";

const Contact = () => (
  <div className="contact-page">
    <section className="contact-page__background">
      <div className="contact-page__card--wrapper">
        <div className="contact-page__card">
          <h2>Galaxy</h2>
          <address>Russia, Yekaterinburg</address>
          <address>Pushkin street, Kolotushkin house</address>
        </div>
      </div>
    </section>
    <section className="contact-page__list">
      <h2>Give us a shout.</h2>
      <ul>
        <li className="contact-page__list-item">
          <i className="icon-flashlight" />
          <h3>Creative Projects</h3>
          <p>
            Contact us to find the perfect song for your project, get
            a licensing quote, or create an original score.
          </p>
          <a href="mailto:creative@galaxy.com">creative@galaxy.com</a>
        </li>
        <li className="contact-page__list-item">
          <i className="icon-compass" />
          <h3>Support</h3>
          <p>
            Questions about our site? Trouble logging in? We can help!
            Our regular hours of support are between 8am to 5pm PST,
            Monday through Friday.
          </p>
          <a href="mailto:support@galaxy.com">support@galaxy.com</a>
        </li>
        <li className="contact-page__list-item">
          <i className="icon-magic" />
          <h3>Artist Inquiries</h3>
          <p>
            Interested in joining our roster? We’d love to hear your
            music to see if it’s a good fit for our current music
            licensing needs.
          </p>
          <a href="mailto:creative@galaxy.com">
            Music Submission Form
          </a>
        </li>
        <li className="contact-page__list-item">
          <i className="icon-community" />
          <h3>Composer Inquiries</h3>
          <p>
            Have experience composing to picture? Our Original Music
            Team wants to hear from you.
          </p>
          <a href="mailto:creative@galaxy.com">
            Composer Submission Form
          </a>
        </li>
      </ul>
      <p className="contact-page__connect">
        We’re always happy to connect! <br /> For career and
        internship opportunities, introduce yourself at at
        <a href="mailto:opportunities@galaxy.com">
          opportunities@galaxy.com.
        </a>
      </p>
    </section>
  </div>
);

export default Contact;
