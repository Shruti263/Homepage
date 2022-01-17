import React, { useState } from "react";
import { useNavigate } from "react-router";
import './Calender.css'

 
export default function Create() {
 const [form, setForm] = useState({
   date: "",
   compName: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newRec = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newRec),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
   
   alert('Event added successfully!')
   setForm({ date: "", compName: ""});
   navigate("/calender");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div className="addDate">
     <h3 style={{textAlign:'center'}}>Create New Record</h3>
     <form onSubmit={onSubmit} >
       <div className="form-group">
         <label htmlFor="name">Date</label>
         <input
           type="date"
           className="form-control"
           id="name"
           value={form.date}
           onChange={(e) => updateForm({ date: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="position">Company Name</label>
         <input
           type="text"
           className="form-control"
           id="position"
           value={form.compName}
           placeholder="Enter company name"
           onChange={(e) => updateForm({ compName: e.target.value })}
         />
       </div>
       
       <div className="form-group">
         <input
           type="submit"
           value="Add"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
} 