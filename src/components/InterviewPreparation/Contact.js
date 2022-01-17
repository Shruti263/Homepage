import React, { useState } from 'react';
import {Form,Row,Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './AboutUs.css';

function Contact() {
    const [form,setForm]=useState({
        nm:'',
        email:'',
        subject:'',
        message:'',
    }
    );

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
        return { ...prev, ...value };
        });
    }

    async function onSubmit(e){
        e.preventDefault();
        const newResponse = {...form};
        await fetch("http://localhost:5000/formresponse",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newResponse),
        }).catch(error => {
            window.alert(error);
            return;
          });

          alert('Your response sent successfully, kindly wait for reply!!')
          setForm({ nm: "", email: "",subject:"",message:""});
    }

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
                <div className='form ' onSubmit={onSubmit}>
                    <h3>For any queries,contact us</h3>
                    <div className='col-md-6'>
                        <label className="form-label">Name</label>
                        <input className="form-control" id="inputName" type="text" placeholder="Enter your name" onChange={(e)=>updateForm({nm: e.target.value})}/>
                    </div>
                    <div className='col-md-6'>
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="name@example.com"  onChange={(e)=>updateForm({email: e.target.value})}></input>
                    </div>   
                    <label className="form-label">Subject</label>
                    <input className="form-control"  id="inputSubject" type="text" placeholder="Enter subject"  onChange={(e)=>updateForm({subject: e.target.value})}/>
                    <label className="form-label">Message</label>
                    <textarea className="form-control" id="inputDetail" rows="3" placeholder='Enter your message'  onChange={(e)=>updateForm({message: e.target.value})}></textarea>
                    <Button variant="danger" type="submit" className='submit-btn' onClick={ onSubmit}> Submit</Button> 
                </div>                           
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