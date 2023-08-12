import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYelp,
  faInstagram,
  faFacebook,
  faTwitter,
  faAmazon,
} from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <div
      className="container-fluid d-flex justify-content-center"
      style={{ margin: "0", padding: "0" }}
    >
      <nav
        className="navbar navbar-expand-lg row w-100"
        style={{ background: "orange" }}
      >
        <div className="col-auto">
          <Link to="/" className="nav-link text-decoration-none text-light">
            RecipeBook
          </Link>
        </div>

        <div className="col"></div>

        <div className="col-auto" id="collapseNav">
          <a
            href="https://www.yelp.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="m-2 navIcon"
          >
            <FontAwesomeIcon icon={faYelp} style={{ color: "black" }} />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="m-2 navIcon"
          >
            <FontAwesomeIcon icon={faInstagram} style={{ color: "black" }} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="m-2 navIcon"
          >
            <FontAwesomeIcon icon={faFacebook} style={{ color: "black" }} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="m-2 navIcon"
          >
            <FontAwesomeIcon icon={faTwitter} style={{ color: "black" }} />
          </a>
          <a
            href="https://amazon.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="m-2 navIcon"
          >
            <FontAwesomeIcon icon={faAmazon} style={{ color: "black" }} />
          </a>
        </div>
      </nav>
    </div>
  );
}
