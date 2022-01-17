import React from 'react';
import Table from 'react-bootstrap/Table';
import { header,TableLinks } from './MenuItem';

function ResTable() {

    return (
        <div>
            <Table responsive striped bordered hover variant="danger">
            <thead>
                <tr>
                    {header.map((item,index)=>{
                            return(
                                <th key={index}>
                                    <a>{item.col}</a>
                                </th>
                            )
                        })}
                </tr>
            </thead>
            <tbody>
            {TableLinks.map((item)=>{
                        return(
                            <tr>
                            <td>
                                    <a href={item.link1}>{item.name1}</a>
                                </td>
                                <td>
                                    <a href={item.link2}>{item.name2}</a>
                                </td>
                                <td>
                                    <a href={item.link3}>{item.name3}</a>
                                </td>
                            </tr>
                        )
                    })}   
            </tbody>
            </Table>
        </div>
    )
}

export default ResTable;