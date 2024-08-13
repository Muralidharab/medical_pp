import React, { useState } from "react";
import Opd from "../../Opd.js";
import ".././styles/Services.css";
import Surgeons from "../../Surgeons";
import MensHealth from "./MensHealth";
import ChildrensHealth from "./ChildrensHealth";
import ChronicDiseaseManagement from "./ChronicDiseaseManagement";
import PreventativeHealth from "./PreventativeHealth";
import Immunisations from "./Immunisations";
import TravelMedicine from "./TravelMedicine";
import CorporateFluClinics from "./CorporateFluClinics";
import IronInfusions from "./IronInfusions";
import ShinglesVaccine from "./ShinglesVaccine";
import ContraceptiveImplant from "./ContraceptiveImplant";

const serviceData = [
  {
    id: 1,
    title: "Telehealth",
    description: <Opd />,
  },
  {
    id: 2,
    title: "Women’s Health",
    description: <Surgeons />,
  },
  {
    id: 3,
    title: "Men’s Health",
    description: <MensHealth />,
  },
  {
    id: 4,
    title: "Children’s Health",
    description: <ChildrensHealth />,
  },
  {
    id: 5,
    title: "Chronic Disease Management",
    description: <ChronicDiseaseManagement />,
  },
  {
    id: 6,
    title: "Preventative Health",
    description: <PreventativeHealth />,
  },
  {
    id: 7,
    title: "Immunisations",
    description: <Immunisations />,
  },
  {
    id: 8,
    title: "Travel Medicine",
    description: <TravelMedicine />,
  },
  {
    id: 9,
    title: "Corporate Flu Clinics",
    description: <CorporateFluClinics />,
  },
  {
    id: 10,
    title: "Iron Infusions",
    description: <IronInfusions />,
  },
  {
    id: 11,
    title: "Shingles Vaccine",
    description: <ShinglesVaccine />,
  },
  {
    id: 12,
    title: "Contraceptive Implant",
    description: <ContraceptiveImplant />,
  },
];

function Services() {
  const [expandedRows, setExpandedRows] = useState([]);

  const toggleRow = (id) => {
    setExpandedRows((prevExpandedRows) =>
      prevExpandedRows.includes(id)
        ? prevExpandedRows.filter((rowId) => rowId !== id)
        : [...prevExpandedRows, id]
    );
  };

  return (
    <div className="container mt-5 pt-3">
      <h1>Our Services</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <tbody>
            {serviceData.map((service) => (
              <React.Fragment key={service.id}>
                <tr
                  onClick={() => toggleRow(service.id)}
                  style={{ cursor: "pointer" }}
                >
                  <td>
                    {service.title}
                    <span className="float-end">
                      {expandedRows.includes(service.id) ? (
                        <i className="bi bi-chevron-up"></i>
                      ) : (
                        <i className="bi bi-chevron-down"></i>
                      )}
                    </span>
                  </td>
                </tr>
                {expandedRows.includes(service.id) && (
                  <tr>
                    <td colSpan="2" className="expanded-content">
                      {service.description}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Services;
