import React, { useState } from 'react'
import { Button,Table } from 'react-bootstrap';
import { useEffect } from 'react';
import './Response.css'
import Drawer from './navbar';
import { useNavigate } from "react-router-dom";

export default function Response() {
    const navigate = useNavigate();
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
                        <td><Button onClick={() => navigate(`/sendreply/: ${record.name}`)}>
                            Reply
                        </Button></td>
                    </tr>   
                )
            })
        }
    }

    return (
        <div className='table'>
            <Drawer/>
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
        </div>
    )
}
