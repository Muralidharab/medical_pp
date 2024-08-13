// NavHeader.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./NavHeader.css";
import OurPractice from "./pages/OurPractice";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Opd from "../Opd";
import Surgeons from "../Surgeons";
import AppointmentModal from "../AppointmentModal";
import MensHealth from "./pages/MensHealth";
import ChildrensHealth from "./pages/ChildrensHealth";
import ChronicDiseaseManagement from "./pages/ChronicDiseaseManagement";
import PreventativeHealth from "./pages/PreventativeHealth";
import Immunisations from "./pages/Immunisations";
import TravelMedicine from "./pages/TravelMedicine";
import CorporateFluClinics from "./pages/CorporateFluClinics";
import IronInfusions from "./pages/IronInfusions";
import ShinglesVaccine from "./pages/ShinglesVaccine";
import ContraceptiveImplant from "./pages/ContraceptiveImplant";

function NavHeader() {
  const [first, setfirst] = useState(false);

  const handleModal = () => {
    console.log("1");

    setfirst(true);
  };
  const handleDropdownClick = (e) => {
    e.preventDefault();
    window.location.href = "/services";
  };

  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true); // State to track navbar collapse

  const handleNavItemClick = () => {
    setIsNavbarCollapsed(true); // Collapse the navbar when an item is clicked
  };

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed); // Toggle the collapse state
  };  

  return (
    <Router>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-blue fixed-top">
          <div className="container-fluid ml-3">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-label="Toggle navigation"
              aria-expanded={!isNavbarCollapsed}
              onClick={toggleNavbar}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ml-2 ${isNavbarCollapsed ? '' : 'show'}`} id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link header-style" to="/" onClick={handleNavItemClick}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link header-style" to="/ourPractice" onClick={handleNavItemClick}>
                    Our Practice
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle header-style"
                    to="/services"
                    id="servicesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={handleDropdownClick} // Added this line
        
                  >
                    Services
                  </Link>
                  <ul
                    className="dropdown-menu bg-white"
                    aria-labelledby="servicesDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item text-dark"
                        to="/Telehealth"
                        style={{ color: "black" }}
                      >
                        Tele health
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-dark"
                        to="/Women’"
                        style={{ color: "black" }}
                      >
                        Women’s Health
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-dark"
                        to="/mens-health"
                        style={{ color: "black" }}
                      >
                        Men’s Health
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-dark"
                        to="/childrens-health"
                        style={{ color: "black" }}
                      >
                        Children’s Health
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-dark"
                        to="/chronic-disease-management"
                        style={{ color: "black" }}
                      >
                        Chronic Disease Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-dark"
                        to="/Preventative-health"
                        style={{ color: "black" }}
                      >
                        Preventative Health
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-dark"
                        to="/immunisations"
                        style={{ color: "black" }}
                      >
                        Immunisations
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-dark"
                        to="/travel-medicine"
                        style={{ color: "black" }}
                      >
                        Travel Medicine in Australia
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-dark"
                        to="/corporate-flu-clinics"
                        style={{ color: "black" }}
                      >
                        Corporate Flu Clinics
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-dark"
                        to="/iron-infusions"
                        style={{ color: "black" }}
                      >
                        Iron Infusions
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-dark"
                        to="/shingles-vaccine"
                        style={{ color: "black" }}
                      >
                        Shingles Vaccine
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-dark"
                        to="/contraceptive-implant"
                        style={{ color: "black" }}
                      >
                        Contraceptive Implant
                      </Link>
                    </li>

                    {/* Add more items as needed */}
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link header-style" to="/news" onClick={handleNavItemClick}>
                    News
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link header-style" to="/contact" onClick={handleNavItemClick}>
                    Contact Us
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                className="btn btn-outline-light ms-lg-auto my-2 my-lg-0"
                onClick={handleModal}
              >
                Book Your Appointment
              </button>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-grow-1 mt-5 pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourPractice" element={<OurPractice />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Telehealth" element={<Opd />} />
          <Route path="/Women’" element={<Surgeons />} />
          <Route path="/mens-health" element={<MensHealth />} />
          <Route path="/childrens-health" element={<ChildrensHealth />} />
          <Route
            path="/chronic-disease-management"
            element={<ChronicDiseaseManagement />}
          />
          <Route path="/Preventative-health" element={<PreventativeHealth />} />
          <Route path="/immunisations" element={<Immunisations />} />
          <Route path="/travel-medicine" element={<TravelMedicine />} />
          <Route
            path="/corporate-flu-clinics"
            element={<CorporateFluClinics />}
          />
          <Route path="/iron-infusions" element={<IronInfusions />} />
          <Route path="/shingles-vaccine" element={<ShinglesVaccine />} />
          <Route
            path="/contraceptive-implant"
            element={<ContraceptiveImplant />}
          />
          {/* Add more routes as needed */}
        </Routes>
      </main>
      {first && <AppointmentModal />}
    </Router>
  );
}

export default NavHeader;
