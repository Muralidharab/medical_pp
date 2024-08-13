import React, { useState } from "react";
import JoinNow from "./components/join-now/join-now";
import NavHeader from "./components/NavComponent/NavHeader";
// import NavHeader from './NavHeader';
import './App.css'
import LandingPage from "./landingPage/LandingPage";
import 'bootstrap-icons/font/bootstrap-icons.css';


const App = () => {
  // const [isModalOpen, setModalOpen] = useState(false);

  // const openModal = () => setModalOpen(true);
  // const closeModal = () => setModalOpen(false);

  return (
    <div className="App">
      {/* <button onClick={openModal} className='join-now'>Join Now</button>
      <JoinNow isModalOpen={isModalOpen} closeModal={closeModal} /> */}
      {/* <NavHeader setModalOpen={setModalOpen} isModalOpen={isModalOpen}/> */}
      <LandingPage />
    </div>
  );
};

export default App;
