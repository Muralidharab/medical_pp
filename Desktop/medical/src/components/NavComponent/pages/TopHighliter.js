import React from "react";

function TopHighliter() {
  return (
    <div
      className="fixed-top-div d-flex flex-column flex-md-row justify-content-between align-items-center mr-3 ml-3 ml-md-5 ml-lg-5 container-lg"
      style={{ backgroundColor: "#F5FBFF" }}
    >
      <div className="d-flex align-items-center mb-2 mb-md-0">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="me-3"
        >
          <i
            className="bi bi-linkedin"
            style={{ fontSize: "1.2rem", color: "#6c757d" }}
          ></i>
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="me-3"
        >
          <i
            className="bi bi-facebook"
            style={{ fontSize: "1.2rem", color: "#6c757d" }}
          ></i>
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="bi bi-google"
            style={{ fontSize: "1.2rem", color: "#6c757d" }}
          ></i>
        </a>
      </div>
      <div className="d-flex  flex-md-row align-items-center justify-content-between text-center text-md-start">
        <div className="d-flex align-items-center">
          <i
            className="bi bi-envelope-fill me-2"
            style={{ fontSize: "1.2rem", color: "#333" }}
          ></i>
          <span>info@gnmc.com</span>
        </div>
        <div className="d-flex align-items-center  mt-md-0">
          <i
            className="bi bi-telephone-fill me-2 ml-5"
            style={{ fontSize: "1.2rem", color: "#333" }}
          ></i>
          <span>+61 3 9812 122</span>
        </div>
      </div>
    </div>
  );
}

export default TopHighliter;
