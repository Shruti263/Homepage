import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import './Calender.css'
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 function refreshPage() {
  window.location.reload(false);
}

 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/record/`);
 
     if (!response.ok) {
       const message = `An error occured: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     console.log(records);
     setRecords(records);
   }
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }

 
 
 // This method will map out the records on the table
 function recordList() {

    if(records.length==0)
    return ('No upcoming events');
    else
    {
      return records.map((record) => {
        return (
         <tr key={record._id}>
           <td>{record.event_date}</td>
           <td>{record.event_compName}</td>
           <td>
             <Link className="btn btn-link" to={`/edit/${record._id}`}>Edit</Link> |
             <button className="btn btn-link"
               onClick={() => {
                 deleteRecord(record._id);
                 refreshPage();
               }}
             >
               Delete
             </button>
           </td>
         </tr>
        );
      });
    }
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div className="recordTable">
     <h3 style={{ textAlign:'left' }}>Record List</h3> <i className="fas fa-sync-alt" onClick={refreshPage}></i>
      <div className="row">
         <div className="col-md-8">
          <Table striped responsive hover bordered variant="secondary" style={{ marginTop: 20 ,overflow:'scroll'}} >
            <thead>
              <tr>
                <th>Date</th>
                <th>Company Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{recordList()}</tbody>
          </Table>
        </div>
      </div>
     
   </div>
 );
}

// tileClassName={({ date}) => {
//   if(moment('', 'YYYY-MM-DD', true).isValid){
//    return  'highlight'
//   }
// }}

