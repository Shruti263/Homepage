import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ContactForm from './ContactForm';
import './AboutUs.css';

function Contact() {
    const [status, setStatus] = useState("Submit form");
    const [form,setForm]=useState({
        nm:'',
        email:'',
        subject:'',
        message:'',
    });

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
        return { ...prev, ...value };
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        let details = {
          name: form.nm,
          subject: form.subject,
          email: form.email,
          message: form.message,
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
        // let result = await response.json();
        // alert(result.status);
        setForm({ nm: "", email: "",subject:"",message:""});
      };

    const SocialMedia=[
        {
            link:"https://www.facebook.com/walchandsangli/",
            cName:'facebook social',
            tag:<i className="fab fa-facebook fa-3x" ></i>
        },
        {
            link:"https://in.linkedin.com/company/walchand-college-of-engineering-sangli",
            cName:'linkedin social',
            tag:<i className="fab fa-linkedin fa-3x" ></i>
        },
        {
            link:'http://www.walchandsangli.ac.in/">',
            cName:'google-plus social',
            tag:<i className="fab fa-google-plus-square fa-3x" ></i>
        },
        {
            link:'https://www.youtube.com/watch?v=q5AhadxWPJM',
            cName:'youtube social',
            tag:<i className="fab fa-youtube fa-3x" ></i>
        },
        {
            link:'https://www.instagram.com/explore/locations/250004863/india/sangli/walchand-college-of-engineering-sangli/?hl=en',
            cName:'instagram social',
            tag:<i className="fab fa-instagram fa-3x"></i>
        }
    ]


    return (
        <>
        <div>
            <h1>Contact <strong>Us</strong></h1>
            <div className='hr'></div>
            <p>An appropriate direction always leads to a good success path. We promise to provide you the best we can !</p>
                <ul className="contact-form">
                    <li>
                        <i className="fa fa-map-marker-alt fa-2x" style={{color:"rgb(247, 82, 82)"}}></i><h6>Address: Walchand College of Engineering, Sangli - Miraj Rd, Vishrambag, Sangli, Maharashtra 416415</h6>
                    </li>
                    <li>
                        <i className="fa fa-envelope fa-2x" style={{color:"rgb(247, 82, 82)"}}></i><h6>Mail Us: <a href="director@walchandsangli.ac.in">director@walchandsangli.ac.in</a></h6>
                    </li>
                    <li>
                        <i className="fa fa-phone fa-2x" style={{color:"rgb(247, 82, 82)"}}></i><h6>Phone: 0233 230 0383 </h6>
                    </li>
                    <li>
                        <i className="fas fa-globe fa-2x" style={{color:"rgb(247, 82, 82)"}}></i><h6>Website: <a href="http://www.walchandsangli.ac.in/">http://www.walchandsangli.ac.in/</a> </h6>
                    </li>
                </ul>
        </div>

        <h1 >Follow us on</h1>
        <div className='hr'></div>
        <div className="social-container">
            {SocialMedia.map((item)=>{
                return(
                    <a className={item.cName} href={item.link}>
                        {item.tag}
                    </a>
                )
            })}
        </div>

        
        </>
    )
}

export default Contact;

// const alertFunction = () => {
//     var name = document.getElementById("inputName").value;
//     var email = document.getElementById("inputEmail").value;
//     var purpose = document.getElementById("inputSubject").value;
//     var msg = document.getElementById("inputDetail").value;
//     if (!ValidateEmail(email)) return;
//     if (name === "" && purpose === "") alert("Enter Name and Purpose");
//     else if(msg=== "") alert("Enter details!!!")
//     else if (name === "") alert("Enter Valid Name");
//     else if (purpose === "") alert("Enter Messege");
//     // else alert("Form submitted successfully");
//   };

//   const ValidateEmail = (email) => {
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
//       return true;
//     }
//     alert("You have entered an invalid email address!");
//     return false;
//   };