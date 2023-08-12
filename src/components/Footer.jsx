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
                Indulge your taste buds with our exquisite RecipeBook app, your
                gateway to a world of culinary delights. Discover a curated
                collection of mouthwatering recipes spanning diverse cuisines
                and skill levels, tailored to satisfy beginners and seasoned
                chefs alike. With stunning visuals and step-by-step
                instructions, embark on a culinary journey that promises to
                transform your kitchen into a haven of flavors. From delectable
                appetizers to sumptuous main courses and irresistible desserts,
                our RecipeBook app is your trusted companion for culinary
                inspiration. Unleash your inner chef, create unforgettable
                dining experiences, and savor the joy of cooking like never
                before. Welcome to a realm where passion meets palate – welcome
                to RecipeBook.
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
                      href="https://Instagram.com/"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-decoration-none text-dark"
                      href="https://amazon.com/"
                    >
                      Amazon
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
