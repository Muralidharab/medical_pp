import React, { useEffect } from "react";
import photodune from "../../../assets/photodune.jpg";
import HomeCardContent from "../../HomeCardContent";
import "../styles/Carosule.css";
import AdditinalInfo from "./AdditinalInfo";
// import "../styles/"

function Home() {
  useEffect(() => {}, []);

  return (
    <main>
      <div className="image-container">
        <img src={photodune} alt="doctor" className="image" />
        <div className="overlay">
          <h2 className="overlay-text">Health Care</h2>
          <p className="overlay-subtext">For Whole Family</p>
          <p className="discription">
            In healthcare sector, service excellence is the facility of{" "}
          </p>
          <p className="discription">
            {" "}
            the hospital as healthcare service provider to consistently.{" "}
          </p>
          <button className="btn btn-outline-light">Book an Appointment</button>
        </div>
      </div>
      <AdditinalInfo />
      <HomeCardContent />
    </main>
  );
}

export default Home;
