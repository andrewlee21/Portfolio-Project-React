import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { SocialIcon } from "react-social-icons";

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-4 col-sm-2 offset-1">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/directory">Directory</Link>
              </li>
              <li>
                <Link to="/aboutus">About</Link>
              </li>
              <li>
                <Link to="/contactus">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-4 col-sm-2 text-center">
            <h5>Social</h5>
            <a href="http://www.facebook.com/" className="fa fa-facebook"></a>
            <a href="http://www.twitter.com/" className="fa fa-twitter"></a>

            <FontAwesomeIcon icon={faFacebook} size="2x" className="m-1" />
            <FontAwesomeIcon icon={faInstagram} size="2x" className="m-1" />
            <FontAwesomeIcon icon={faYoutube} size="2x" className="m-1" />
            <FontAwesomeIcon icon={faTwitter} size="2x" className="m-1" />

          </div>
          <div className="col-4 col-sm-2 text-center">
            <a role="button" className="btn btn-link" href="tel:+12065551234">
              <i className="fa fa-phone" /> 1-206-555-1234
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:notreal@notreal.co"
            >
              <i className="fa fa-envelope-o" /> campsites@nucamp.co
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
