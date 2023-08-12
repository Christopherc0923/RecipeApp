import React, { useState, useEffect } from "react";

export default function Footer() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const indent = {
    textIndent: "50px",
  };
  return (
    <div className="container-fluid text-center">
      <footer className="site-footer footer mt-auto py-3">
        <hr />
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col-md-3 text-center vertical-align">
              <h3>Current Time:</h3>
              <h4>{date.toLocaleTimeString()}</h4>
            </div>

            <div className="col-md-6">
              <h3>About</h3>
              <p className="text-justify" style={indent}>
                Welcome to our online shop, where simplicity meets elegance. We
                specialize in offering a curated selection of just one product,
                a true embodiment of minimalism. Our philosophy revolves around
                the idea that sometimes, less is truly more. We believe in the
                power of a single item to make a statement and enhance your
                lifestyle. With meticulous attention to detail, we have
                handpicked a product that encapsulates the essence of
                minimalistic design, functionality, and quality. Each item in
                our collection is a testament to the beauty of simplicity,
                allowing you to embrace a clutter-free lifestyle and find joy in
                the essence of one remarkable product.
              </p>
            </div>

            <div className="col-md-3 ">
              <h3>Social Links</h3>
              <div className="container-fluid d-flex align-items-center justify-content-center">
                <ul className="footer-links list-unstyled no-color">
                  <li>
                    <a
                      className="text-decoration-none text-dark"
                      href="https://www.facebook.com/HelloWrongPage/"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-decoration-none text-dark"
                      href="https://twitter.com/?lang=en"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-decoration-none text-dark"
                      href="https://discord.com/"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="container">
          <div className="row">
            <p className="copyright-text">
              Copyright &copy; 2023 All Rights Reserved by Chris
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
