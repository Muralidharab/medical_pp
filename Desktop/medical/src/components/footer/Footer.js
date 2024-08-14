import React from "react";
import logo from "../../assets/logo.png";
import "../../landingPage/LandingPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="bg-light ">
      <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img
                src={logo}
                className="d-block"
                alt="logo"
                style={{ color: "#ffffff" }}
              />
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 300,
                  lineheight: "28px",
                  color: "#dbdbdb",
                  marginBottom: "13px",
                  fontfamily: "Poppins, sans-serif", 
                  position:'relative',
                  top:'5px',
                  maxWidth:"330px"
                }}
              >
                Firmament morning sixth subdue darkness creeping gathered
                divide.
              </p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#home" className="text-light">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-light">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-light">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-light">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Contact Us</h5>
              <p className="text-light">
                Email:{" "}
                <a href="mailto:info@gnmedical.com" className="text-light">
                info@gnmedical.com
                </a>
                <br />
                Phone: +1 (00) 000-000
              </p>
            </div>
          </div>
        </div>
       {/*  <div className="text-center py-3 MT-3">
          <small>&copy; All Rights Reserved.</small>
        </div> */}
      </footer>
    </footer>
  );
}

export default Footer;
