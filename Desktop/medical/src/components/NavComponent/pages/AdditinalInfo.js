import React from "react";
import "../styles/AdditinalInfo.css";

function AdditinalInfo() {
  return (
    <div className="service_area">
      <div className="container p-0" style={{ marginTop: "0PX" }}>
        <div className="row no-gutter">
          <div className="col-xl-4 col-md-4">
            <div className="single_service">
              <div className="icon">
                <i className="flaticon-electrocardiogram"></i>
              </div>
              <h3>Hospitality</h3>
              <p>
                Clinical excellence must be the priority for any health care
                service provider.
              </p>
              <a href="" className="boxed-btn3-white">
                Apply For a Bed
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-md-4">
            <div className="single_service">
              <div className="icon">
                <i className="flaticon-emergency-call"></i>
              </div>
              <h3>Emergency Care</h3>
              <p>
                Clinical excellence must be the priority for any health care
                service provider.
              </p>
              <a href="#" class="boxed-btn3-white">
                +10 672 356 3567
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-md-4">
            <div className="single_service">
              <div className="icon">
                <i className="flaticon-first-aid-kit"></i>
              </div>
              <h3>Chamber Service</h3>
              <p>
                Clinical excellence must be the priority for any health care
                service provider.
              </p>
              <a href="#" className="boxed-btn3-white">
                Make an Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdditinalInfo;
