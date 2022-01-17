import React, { Component } from 'react';
import './Placement.css'
import {Container,Row } from 'react-bootstrap';
import  PieChartCentralModal from './Statastics';
import { TopRecruiters,BranchWisePlacement, Packages ,Links ,PackageRange} from './Tables';

export default class Placement extends Component {

    render() {
        return (
            <div id='main'>
                <Container id='container'>
                    <h1>Walchand College of Engineering, Sangli Placements - Salary Trends, Highest, Average & Median Salary, Top Companies</h1>
                    <Row className='box'>
                        <h2>Placements at Walchand College of Engineering, Sangli</h2>
                        <p>The institute has a training and placement office that is responsible for the placements of students. Walchand College of Engineering Sangli placement drive is conducted by the T&P office. It ensures maximum companies participate in the placement drive and provide jobs to students. The training and placement office also prepares students for the WCE Sangli placement drive. It conducts guest lectures, seminars, workshops etc. for students to prepare them for the placement drive. Companies that participate in Walchand College of Engineering Sangli placements also conduct pre-placement talks for the students. They brief students about the job opportunities. </p>
                        <p>As per the Walchand College of Engineering Sangli placement report 2021-22 available on the official website, a total of 226 students from B.Tech programmes are placed. The average salary offered to them in 2021-22 is Rs. 9,78,000 per annum. The maximum number of students are placed from the Computer Science and Engineering branch. </p>
                        <h5>Also read:</h5>
                        <Links/>
                        <PieChartCentralModal/>
                        <Packages/>
                        <h4>Walchand College of Engineering Sangli Placement - B.Tech Branch Wise (2021-22)</h4>
                        <BranchWisePlacement/>
                        <h4>Walchand College of Engineering Sangli Top Recruiters</h4>
                        <TopRecruiters/>
                        <h4>Computer Science of Engineering Package-wise Placement</h4>
                        <PackageRange/>
                        <Row className='readmore'>
                            <h5>Read more:</h5>
                            <ul className='list'>
                                <li>B.Tech Computer Science and Engineering at Walchand College of Engineering, Sangli had the highest placement percentage of 100%</li>
                                <li>M.Tech Control Systems Engineering at Walchand College of Engineering, Sangli saw an increase in placements compared to previous year of 29%</li>
                            </ul>
                        </Row>
                    </Row>
                </Container>
            </div>
        )
    }
}
