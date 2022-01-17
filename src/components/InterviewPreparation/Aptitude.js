import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {Cs_Fundamentals, Gen_aptitude,Coding_ques,Cs_languages} from './Aptitude_tabs';
import ResTable from './ResTable';
import './AboutUs.css';

function Aptitude() {
    return (
        <div>
            <h1><strong>A</strong>ptitude</h1>
            <div className='hr'></div><br/><br/>
            <div className='aptipara'>
                <h5><strong>W</strong>e have a huge numbers of choosen DSA practice questions for aptitude as well as the list of CS fundamental Multiple choice questions for software companies.<strong>A</strong>lso for the Product based company the aptitude pattern with English Comprehension, logical ability, Quantitive analysis and much more</h5>
            </div>
            <div className='aptiTab'>
                <Tabs   fill  defaultActiveKey="cs_fundamentls" transition={true} id="noanim-tab-example" className="tabs">
                    <Tab eventKey="cs_fundamentls" className='tabs_icon' title={<i class="fab fa-telegram-plane fa-2x" style={{color:"red"}}></i>}>
                        <Cs_Fundamentals/>
                    </Tab>
                    <Tab eventKey="cs_languages" title={<i class="fas fa-language fa-2x" style={{color:"#e73131"}}></i>}>
                        <Cs_languages/>
                    </Tab>
                    <Tab eventKey="coding_ques" title={<i class="fas fa-file-code fa-2x" style={{color:"#e73131"}}></i>}>
                        <Coding_ques/>
                    </Tab>
                    <Tab eventKey="gen_aptitude" title={<i class="fas fa-brain fa-2x" style={{color:"#e73131"}}></i>} >
                        <Gen_aptitude/>
                    </Tab>
                </Tabs>
            </div>
            <h2><strong>USEFUL RESOURCES :</strong> </h2>
            <div>
                <ResTable/>
            </div>
        </div>
    )
}

export default Aptitude;
