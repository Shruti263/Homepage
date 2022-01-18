import React,{useState} from 'react';
import {Tabs,Tab,Form} from 'react-bootstrap'
import './Calender.css'
import Create from './create';
import Drawer from './navbar';
import RecordList from './recordList';

function Calender() {
    
    return (
        <div className='calender'>
            <Drawer/>
            <div className='row'>
                <Tabs defaultActiveKey="edit" transition={true} className="tabs" style={{marginRight:'70vw'}}>          
                    <Tab eventKey="home" title="Add">
                        <Create/>
                    </Tab>
                    <Tab eventKey="edit" title="List">
                        <RecordList/>
                    </Tab >
                </Tabs>
            </div>
            
        </div>
    )
}

export default Calender
