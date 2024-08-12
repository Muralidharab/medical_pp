import React from 'react';
import '.././styles/Immunisations.css'; // Create this CSS file for styling

function Immunisations() {
  return (
    <div className="immunisations-container mt-3 ml-3">
      <h2>Immunisations</h2>
      <p>
        Immunisation is a cornerstone of public health in Australia, playing a critical role in safeguarding individuals, particularly children, from a range of serious diseases. It is the safest and most effective method for providing protection against various infectious diseases, including tetanus, whooping cough, measles, and hepatitis.
      </p>

      <h3>The Role of Immunisations</h3>
      <ol>
        <li>
          <strong>Protection Against Serious Diseases:</strong>
          <p>
            Vaccines are designed to provide immunity against specific diseases by stimulating the body's natural defense mechanisms. This proactive approach prevents the onset of illness and reduces the risk of severe complications associated with diseases such as:
          </p>
          <ul>
            <li><strong>Tetanus:</strong> A serious bacterial infection affecting the nervous system and causing muscle stiffness and spasms.</li>
            <li><strong>Whooping Cough (Pertussis):</strong> A highly contagious respiratory disease known for severe coughing fits that can be dangerous for young children.</li>
            <li><strong>Measles:</strong> A highly contagious viral infection that can lead to serious complications, including pneumonia, encephalitis, and permanent vision loss.</li>
            <li><strong>Hepatitis B:</strong> A viral infection that can lead to chronic liver disease and increases the risk of liver cancer.</li>
          </ul>
        </li>
        <li>
          <strong>Community Immunity:</strong>
          <p>
            Immunisation contributes to community immunity (herd immunity), which helps protect those who are unable to be vaccinated due to medical reasons, such as infants, pregnant women, and individuals with compromised immune systems. High vaccination rates across the population help prevent outbreaks and ensure that diseases do not spread.
          </p>
        </li>
      </ol>

      <h3>Vaccination Schedule in Australia</h3>
      <h4>1. Infant Vaccinations:</h4>
      <ul>
        <li><strong>At Birth:</strong> Hepatitis B vaccine.</li>
        <li><strong>2 Months:</strong> DTPa (Diphtheria, Tetanus, Pertussis), Hib (Haemophilus influenzae type b), IPV (Inactivated Polio Vaccine), and PCV (Pneumococcal Conjugate Vaccine).</li>
        <li><strong>4 Months:</strong> DTPa, Hib, IPV, and PCV.</li>
        <li><strong>6 Months:</strong> DTPa, Hib, IPV, and PCV.</li>
        <li><strong>12 Months:</strong> MMR (Measles, Mumps, Rubella), Hib, PCV, and MenC (Meningococcal C).</li>
        <li><strong>18 Months:</strong> DTPa and Hib.</li>
      </ul>

      <h4>2. Childhood and Adolescent Vaccinations:</h4>
      <ul>
        <li><strong>4 Years:</strong> DTPa, IPV, and MMR.</li>
        <li><strong>12-13 Years:</strong> HPV (Human Papillomavirus) and Boostrix (diphtheria, tetanus, and pertussis booster).</li>
        <li><strong>14-15 Years:</strong> MenACWY (Meningococcal ACWY) vaccine.</li>
      </ul>

      <h4>3. Adult Vaccinations:</h4>
      <ul>
        <li><strong>Every 10 Years:</strong> Boostrix (diphtheria, tetanus, and pertussis booster).</li>
        <li><strong>50 Years and Older:</strong> Shingles vaccine.</li>
        <li><strong>65 Years and Older:</strong> Pneumococcal vaccine and annual influenza vaccine.</li>
      </ul>

      <h3>Benefits of Vaccinations</h3>
      <ol>
        <li><strong>Safety and Efficacy:</strong>
          <p>
            Vaccines undergo rigorous testing and continuous monitoring to ensure they are safe and effective. Common side effects are typically mild and self-limiting, such as a slight fever or tenderness at the injection site. Serious adverse reactions are extremely rare, and the benefits of vaccination far outweigh these minimal risks.
          </p>
        </li>
        <li><strong>Prevention of Disease Complications:</strong>
          <p>
            By preventing diseases, vaccinations protect against serious health complications and long-term effects that can result from these illnesses. For instance, measles can lead to pneumonia, encephalitis, and other severe complications if not prevented through vaccination.
          </p>
        </li>
        <li><strong>Cost-Effectiveness:</strong>
          <p>
            Vaccination is a cost-effective health intervention. By preventing diseases, vaccines reduce the need for medical treatments, hospitalizations, and long-term care, ultimately saving healthcare costs and resources.
          </p>
        </li>
        <li><strong>Enhanced Quality of Life:</strong>
          <p>
            Immunisations contribute to a higher quality of life by preventing illness and its associated complications, allowing individuals to live healthier, more active lives.
          </p>
        </li>
      </ol>

      <h3>Getting Vaccinated</h3>
      <p>
        In Australia, vaccines are widely available through public health clinics, general practices, and community health centres. The Australian Government provides free vaccines for eligible individuals under the National Immunisation Program.
      </p>
      <p>
        It is important to stay up-to-date with the immunisation schedule and ensure that both children and adults receive the necessary vaccinations. For more information on vaccines, to schedule an appointment, or to address any questions or concerns, contact your local health service or visit the Australian Government's Department of Health website.
      </p>
      <p>
        By participating in immunisation programs, you contribute to a healthier community and protect yourself and those around you from preventable diseases.
      </p>
    </div>
  );
}

export default Immunisations;
