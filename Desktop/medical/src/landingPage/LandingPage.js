import React from "react";
import NavHeader from "../components/NavComponent/NavHeader";
// import LayoutBody from "../components/layoutBody/LayoutBody";
import Footer from "../components/footer/Footer";

const LandingPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100 min-vw-100">
      <NavHeader />
      <div className="flex-grow-1"></div>
      <Footer />
    </div>
  );
};

export default LandingPage;
