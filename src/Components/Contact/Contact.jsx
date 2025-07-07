import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact-form">
        <p>Please fill thi form in a deccent manner</p>
        <form action="#">
          <h2>Contact Us</h2>
          <div>
            <label htmlFor="firstName"> Full name *</label>
            <div className="names">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div>
            <label htmlFor="email"> Emai *</label>
            <input type="email" placeholder="exaple@gmail.com" required />
          </div>
          <div>
            <label htmlFor="message"> Message *</label>
            <textarea name="message" id="message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
