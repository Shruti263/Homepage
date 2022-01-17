// import React, { useState } from "react";
// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'shrutidesai1008',
//       pass: 'NikitDesai'
//     }
//   });

// const ContactForm = () => {
//   const [status, setStatus] = useState("Submit");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");
//     const { name, email, message } = e.target.elements;
//     let details = {
//       from:'shrutidesai1008',
//       name: name.value,
//       to: email.value,
//       text: message.value,

//     };
//     transporter.sendMail(details, function(error, info){
//         if (error) {
//           console.log(error);
//         } else {
//           console.log('Email sent: ' + info.response);
//         }
//       });
    
//     setStatus("Submit");
//     let result = await response.json();
//     alert(result.status);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" required />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" required />
//       </div>
//       <div>
//         <label htmlFor="message">Message:</label>
//         <textarea id="message" required />
//       </div>
//       <button type="submit">{status}</button>
//     </form>
//   );
// };

// export default ContactForm;