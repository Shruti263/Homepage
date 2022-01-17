import React from 'react';
import { Table } from 'react-bootstrap';
import pdf1 from './Assets/WCE-PLACEMENT-2019-20.pdf';
import pdf2 from './Assets/WCE-PLACEMENT-2020-21.pdf';
import pdf3 from './Assets/WCE-PLACEMENT-2021-22_22nd October.pdf';

const style={ width:'70vw' ,fontSize:'15px',fontWeight:'bold',marginBottom:'7vh'}
export function TopRecruiters() {
    const companies =[
        {
            cmp1:'Google',
            cmp2:'Microsoft',
            cmp3:'Amazon',
        },
        {
            cmp1:'Dell',
            cmp2:'Infosys',
            cmp3:'TCS',
        },
        {
            cmp1:'Capgemini',
            cmp2:'JSW',
            cmp3:'Godrej',
        },
        {
            cmp1:'Tata Housing',
            cmp2:'ACC',
            cmp3:'Wipro',
        },
        {
            cmp1:'Adani Electricity',
            cmp2:'Aditya Birla Group',
            cmp3:'Mahindra',
        },
    ]

    return (
        <div>
            <Table  striped responsive bordered hover variant="secondary" style={style} className='tables'>
                <tbody>
                {companies.map((item,index)=>{
                    return(
                    <tr>
                        <td>
                            {item.cmp1}
                        </td>
                        <td>
                            {item.cmp2}
                        </td>
                        <td>
                            {item.cmp3}
                        </td>
                    </tr>
                    )
                })}
                </tbody>
            </Table> 
        </div>
    )
}

export function BranchWisePlacement(){
    const header=[
        {col:'Branch'},
        {col:'Batch Strength'},
        {col:'Students placed'},
        {col:'Placement %'}
    ]

    const data=[
        {
            branch:'Civil Engineering',
            strength:57,
            placed:3,
            percentage:5.26
        },
        {
            branch:'Mechanical Engineering',
            strength:72,
            placed:20,
            percentage:27.78,
        },
        {
            branch:'Electrical Engineering',
            strength:68,
            placed:18,
            percentage:26.47,
        },
        {
            branch:'Electronics Engineering',
            strength:70,
            placed:38,
            percentage:54.29,
        },
        {
            branch:'Computer Science Engineering',
            strength:110,
            placed:94,
            percentage:85.45,
        },
        {
            branch:'Information Technology Engineering',
            strength:70,
            placed:53,
            percentage:75.51,
        }
    ]

    return(
        <div>
            <Table striped responsive bordered hover variant="secondary" style={style}>
                <thead>
                    <tr>
                    {header.map((item)=>{
                        return(
                            <th>{item.col}</th>
                        )
                    })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item)=>{
                        return(
                        <tr>
                            <td>{item.branch}</td>
                            <td>{item.strength}</td>
                            <td>{item.placed}</td>
                            <td>{item.percentage}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export function Packages(){
    const data=[
        {
            year:'2019-20',
            nm:'Placement 2019-20',
            link:pdf1,
        },
        {
            year:'2020-21',
            nm:'Placement 2020-21',
            link:pdf2,
        },
        {
            year:'2021-22',
            nm:'Placement 2021-22',
            link:pdf3,
        },
    ]
    return(
        <div>
            <Table striped responsive bordered hover variant="secondary" style={style}>
                <thead>
                    <tr>
                        <td>Year</td>
                        <td>Link</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item)=>{
                        return(
                            <tr>
                                <td>{item.year}</td>
                                <td><a href={item.link} target='_blank'>{item.nm}</a></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export function Links(){
    const data=[
        {
            link1:'http://www.walchandsangli.ac.in/AllDept.asp',
            nm1:'Walchand College of Engineering Courses',
            link2:'https://www.careers360.com/colleges/walchand-college-of-engineering-sangli/facilities',
            nm2:'Walchand College of Engineering Facilities'
        },
        {
            link1:'https://www.collegedekho.com/colleges/cutoff-walchand-college-of-engineering',
            nm1:'Walchand College of Engineering Cutoff',
            link2:'http://walchandsangli.ac.in/Admissions.asp',
            nm2:'Walchand College of Engineering Admission'
        },
    ]

    return(
        <div>
            <Table  bordered hover style={style}>
                <tbody>
                {data.map((item,index)=>{
                    return(
                        <tr>
                            <td><a href={item.link1}>{item.nm1}</a></td>
                            <td><a href={item.link2}>{item.nm2}</a></td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
            
        </div>
    )
}

export function PackageRange(){

    const header=[
        {col:' '},
        {col:'2020-21'},
        {col:'2019-20'},
    ]

    const data=[
        {
            range:'3-6 LPA',
            strength:'60.7%',
            placed:'62.3%',
        },
        {
            range:'6-9 LPA',
            strength:'21%',
            placed:'24%',
        },
        {
            range:'9-12 LPA',
            strength:'9%',
            placed:'7.8%',
        },
        {
            range:'12-15 LPA',
            strength:'2.6%',
            placed:'7%',
        },
        {
            range:'15 & above LPA',
            strength:'4%',
            placed:'5%',
        },
    ]

    return(
        <div>
            <Table striped responsive bordered hover variant="secondary" style={style}>
                <thead>
                    <tr>
                    {header.map((item)=>{
                        return(
                            <th>{item.col}</th>
                        )
                    })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item)=>{
                        return(
                        <tr>
                            <td>{item.range}</td>
                            <td>{item.strength}</td>
                            <td>{item.placed}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}