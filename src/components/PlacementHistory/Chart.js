import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function PackageChart() {
    const dataHorBar = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        
      };
    return (
        <div>
            <Bar 
                data={dataHorBar} 
                height={400}
                width={600}
            />
            
        </div>
    )
}