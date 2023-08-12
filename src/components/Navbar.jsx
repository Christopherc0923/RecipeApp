import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <div
      className="container-fluid d-flex justify-content-center"
      style={{ margin: "0", padding: "0" }}
    >
      <nav className="navbar navbar-expand-lg bg-dark row w-100">
        <div className="col-auto">
          <Link to="/" className="nav-link text-decoration-none text-light">
            Recipe App
          </Link>
        </div>

        <div className="col"></div>

        <div className="col-auto" id="collapseNav">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="m-2 navIcon"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="m-2 navIcon"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="m-2 navIcon"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="m-2 navIcon"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </nav>
    </div>
  );
}
