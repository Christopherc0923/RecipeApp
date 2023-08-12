import React, { useState, useEffect } from "react";

const CookieModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    localStorage.setItem("cookieAccepted", "true"); // Store the flag in local storage
  };

  useEffect(() => {
    const isCookieAccepted = localStorage.getItem("cookieAccepted");
    if (!isCookieAccepted) {
      setShowModal(true);
    }
  }, []);

  if (!showModal) {
    return null; // If modal is not to be shown, return null to prevent rendering
  }

  return (
    <div
      className={`modal ${showModal ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: showModal ? "block" : "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Cookie Consent</h5>
          </div>
          <div className="modal-body">
            <p>
              This website uses cookies to ensure you get the best experience on
              our website.
            </p>
            <p>
              By using this website, you consent to the use of cookies as
              described in our <a href="/privacy-policy">Privacy Policy</a>.
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Reject
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleClose}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;
