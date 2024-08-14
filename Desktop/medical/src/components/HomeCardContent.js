import React from "react";
import h from "../assets/h.png";
import d from "../assets/d.jpeg";
import im from "../assets/im.jpeg";
import k from "../assets/k.jpg";
import l from "../assets/l.jpg";
import opd from "../assets/opd.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";

function HomeCardContent() {
  const cardContent = [
    {
      contntIm: h,
      heading: "Dental Care",
      cont: "When askerted from f reporting, we must present a balanced picture. A positive story like this is important for me because it depicts other aspects of life in Shopian as well, it shows the other issues that common people have to face apart from conflict. And when someone is doing something good, they also need to be appreciated.”",
    },
    {
      contntIm: d,
      heading: "Children's Specialist",
      cont: "When asked wh  must present a balanced picture. A positive story like this is important for me because it depicts other aspects of life in Shopian as well, it shows the other issues that common people have to face apart from conflict. And when someone is doing something good, they also need to be appreciated.”",
    },
    {
      contntIm: im,
      heading: "Physician",
      cont: "When askecare s we must present a balanced picture. A positive story like this is important for me because it depicts other aspects of life in Shopian as well, it shows the other issues that common people have to face apart from conflict. And when someone is doing something good, they also need to be appreciated.”",
    },
    {
      contntIm: k,
      heading: "Laboratory",
      cont: "Basharat says, “of reporting, we must present a balanced picture. A positive story like this is important for me because it depicts other aspects of life in Shopian as well, it shows the other issues that common people have to face apart from conflict. And when someone is doing something good, they also need to be appreciated.”",
    },
    {
      contntIm: l,
      heading: "AI Scanning",
      cont: "When asked why ays, “It is abust present a balanced picture. A positive story like this is important for me because it depicts other aspects of life in Shopian as well, it shows the other issues that common people have to face apart from conflict. And when someone is doing something good, they also need to be appreciated.”",
    },
    {
      contntIm: opd,
      heading: "Emergency",
      cont: "When asked whut the ethics of reporting, we mubalanced picture. A positive story like this is important for me because it depicts other aspects of life in Shopian as well, it shows the other issues that common people have to face apart from conflict. And when someone is doing something good, they also need to be appreciated.”",
    },
  ];

  return (
    <div className="container-fluid px-0 pd-4 mt-5">
      <div className="row mx-0">
        <div className="col-lg-7 col-12 d-flex justify-content-center align-items-center">
          <img src={h} alt="home logo" className="img-fluid" />
        </div>
        <div className="col-lg-5 col-12">
          <h3>Welcome to Docmed</h3>
          <div
            style={{
              width: "100px",
              height: "4px",
              borderRadius: "1px",
              backgroundColor: "#9ab9da",
              margin: "2px auto",
            }}
          ></div>
          <h1 className="mt-4" style={{ textAlign: "start" }}>
            Best Care For Your Good Health
          </h1>
          <span
            style={{
              display: "block",
              width: "100%",
              maxWidth: "400px",
              textAlign: "start",
              fontSize: "16px",
              color: "#727272",
              lineHeight: "28px",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
            }}
          >
            Esteem spirit temper too say adieus who direct esteem. It esteems
            luckily or picture placing drawing. Apartments frequently or
            motionless on reasonable projecting expression.
          </span>
        </div>
      </div>
      <div
        className="container-fluid mt-5 pt-5 px-0"
        style={{ background: "#F5FBFF" }}
      >
        <h1 className="mt-4 text-center">Our Departments</h1>
        <div
          style={{
            width: "100px",
            height: "4px",
            borderRadius: "1px",
            backgroundColor: "#9ab9da",
            margin: "5px auto",
          }}
        ></div>
        <span
          style={{
            display: "block",
            width: "100%",
            maxWidth: "450px",
            textAlign: "center",
            fontSize: "16px",
            color: "#727272",
            lineHeight: "28px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "300",
            margin: "30px auto",
          }}
        >
          Esteem spirit temper too say adieus who direct esteem. It esteems
          luckily or picture placing drawing.
        </span>
        <div className="row mx-0">
          {cardContent.map((item, index) => (
            <div className="col-md-4 mb-4 px-3" key={index}>
              <div className="card" style={{ height: '600px', marginBottom: '30px' }}>
                {item.contntIm ? (
                  <img
                    src={item.contntIm}
                    className="card-img-top"
                    alt=""
                    style={{
                      width: "100%",
                      height: "300px", // Adjust the height as needed
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div
                    className="card-img-top"
                    style={{
                      width: "100%",
                      height: "300px", // Adjust the height as needed
                      backgroundColor: "#f0f0f0",
                    }}
                  />
                )}
                <div className="card-body">
                  <h3>{item.heading}</h3>
                  <p className="card-text">{item.cont}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeCardContent;
