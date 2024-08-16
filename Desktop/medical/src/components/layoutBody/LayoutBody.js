import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Services from "../../pages/Services";
import OurPractice from "../../pages/OurPractice";
import News from "../../pages/News";
import Contact from "../../pages/Contact";
import Opd from "../../Opd";
import Surgeons from "../../Surgeons";
import MensHealth from "../../pages/MensHealth";
import ChildrensHealth from "../../pages/ChildrensHealth";
import ChronicDiseaseManagement from "../../pages/ChronicDiseaseManagement";
import PreventativeHealth from "../../pages/PreventativeHealth";
import Immunisations from "../../pages/Immunisations";
import TravelMedicine from "../../pages/TravelMedicine";
import CorporateFluClinics from "../../pages/CorporateFluClinics";
import IronInfusions from "../../pages/IronInfusions";
import ShinglesVaccine from "../../pages/ShinglesVaccine";
import ContraceptiveImplant from "../../pages/ContraceptiveImplant";
import AppointmentModal from "../../AppointmentModal";

const LayoutBody = () => {
  return (
    <>
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
          <Route
            path="/Preventative-health"
            element={<PreventativeHealth />}
          />
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
      <AppointmentModal />
    </>
  );
};

export default LayoutBody;
