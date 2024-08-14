import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import im from '../../assets/im.jpeg';
import t from '../../assets/t.jpg';
import p from '../../assets/p.jpg';
import wallpapers from '../../assets/wallpapers.jpg';
import k from '../../assets/k.jpg';
import l from '../../assets/l.jpg';

function CarouselComponent() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel " data-bs-interval="2000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={p} className="d-block" style={{ width: '100%', height: '600px  ' }} alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={t} className="d-block" style={{ width: '100%', height: '600px  ' }} alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={wallpapers} className="d-block" style={{ width: '100%', height: '600px ' }} alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img src={k} className="d-block" style={{ width: '100%', height: '600px  ' }}   alt="Slide 4" />
        </div>
        <div className="carousel-item">
          <img src={l} className="d-block" style={{ width: '100%', height: '600px  ' }}   alt="Slide 4" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default CarouselComponent;
