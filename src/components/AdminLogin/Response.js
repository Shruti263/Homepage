import React, { useState } from 'react'
import { Button,Table,Modal } from 'react-bootstrap';
import { useEffect } from 'react';
import './Response.css'
import { useNavigate } from "react-router-dom";


function MyVerticallyCenteredModal(props) {
    const [status, setStatus] = useState("Submit");         
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
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Send email to 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" required />
                </div>
                {/* <button type="submit">{status}</button> */}
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button>{status}</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default function Response() {
    const navigate = useNavigate();
    const [modalShow, setModalShow] = React.useState(false);
    const [responses,setResponses]=useState([]);

    useEffect(() => {
        async function getResponses()
        {
            const response = await fetch('http://localhost:5000/responselist');
            if (!response.ok) {
                const message = `An error occured -: ${response.statusText}`;
                window.alert(message);
                return;
            }
            const records = await response.json();
            console.log(records);
            setResponses(records);
        }
        getResponses();
        return;
    }, [responses.length]);

    function resList(){
        if(responses.length==0)
        return ('No new form response..');
        else{
            return responses.map((record)=>{
                return(
                    <tr key={record._id}> 
                        <td>{record.name}</td>
                        <td>{record.mail}</td>
                        <td>{record.subject}</td>
                        <td>{record.msg}</td>
                        <td><Button onClick={() => setModalShow(true,record.email)}>
                            Reply
                        </Button></td>
                    </tr>   
                )
            })
        }
    }

    return (
        <div className='table'>
            <h3>Responses</h3>
            <Table >
                <thead>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Subject</td>
                    <td>Message</td>
                    <td>Reply</td>
                </thead>
                <tbody>
                    {resList()}
                </tbody>
            </Table>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}
