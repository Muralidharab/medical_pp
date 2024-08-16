import React from "react";

function Contact() {
  return (
    <div className="container mt-5 pt-4 pb-4">
      <h1>Contact Us</h1>
      <div className="contact-info mt-4">
        <h2>GN Medical Centre</h2>
        <p>248 Cambridge Road, Kilsyth 3137</p>
        <p>
          <strong>Phone:</strong> <a href="tel:+61390812122">+61 3 9081 2122</a>
        </p>
        <p>
          <strong>Fax:</strong> +61 3 9081 2124
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:info@gnmc.au">info@gnmc.au</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
