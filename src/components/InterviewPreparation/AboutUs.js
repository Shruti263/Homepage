import React from 'react';
import './AboutUs.css';
import image2 from './assets/college1.jpg';

export default function AboutUs() {
    return (
        <div id="aboutusMain">
            <h1>About <strong>Us</strong></h1>
            <div className='hr'></div>
            <p><span><strong>W</strong></span>alchand College of Engineering is situated midway between Sangli and Miraj cities at Vishrambag, Sangli. The WCE campus is located on about 90 acres of land on southern side of Sangli – Miraj road.</p>
            <div className="row">
                <div className="col-md-6">
                    <h2><strong>P</strong>roduce capable graduate engineers with an aptitude for research and leadership</h2><br />
                    <div id='list' style={{listStyle:'outside'}}><span><strong><h5> MISSION </h5> </strong></span>
                        <ul>
                            <li>
                                To impart quality education through demanding academic programmes.
                            </li>
                            <li>
                                To enhance career opportunities for students through exposure to industry.
                            </li>
                            <li>
                                To promote excellence by encouraging creativity, critical thinking and discipline.
                            </li>
                            <li>
                                To inculcate sensitivity toward society and a respect for the environment.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 image">
                    <img width="300px" src={image2} />
                </div>
            </div>
        </div>
      
    )
}
