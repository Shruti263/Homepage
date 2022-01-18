import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import './Response.css'
import { useParams } from "react-router-dom";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const params= useParams();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
      <>
        <form onSubmit={handleSubmit} id='form'>
          <div className="formfield">
              <label htmlFor="name" className="label">Name:</label><br />
              <input type="text" id="name" required />
          </div>
          <div className="formfield">
              <label htmlFor="email" className="label">Email:</label><br />
              <input type="email" id="email" required />
          </div>
          <div className="formfield">
              <label htmlFor="message" className="label">Message:</label><br />
              <textarea id="message" required />
          </div>
          <Button type="submit" variant="secondary" id='submitbutton'>{status}</Button>
        </form>
      </>
  );
};
export default ContactForm;