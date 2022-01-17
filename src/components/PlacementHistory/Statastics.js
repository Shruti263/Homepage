import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {Modal,Button} from 'react-bootstrap';

ChartJS.register(ArcElement, Tooltip, Legend);

export const chart1 = {
  labels: ['CSE', 'IT', 'Mechanical', 'Electronics', 'Electrical', 'Civil'],
  datasets: [
    {
      label: '# of Votes',
      data: [31.5, 18.1, 14.8, 13.9, 12.2, 9.5],
      backgroundColor: [
        '#5c7cb8',
        '#132d5e',
        '#e66b19',
        '#f2df2e',
        '#54596e',
        '#bdbfc9',
      ],
      borderColor: [
        '#5c7cb8',
        '#132d5e',
        '#e66b19',
        '#f2df2e',
        '#54596e',
        '#bdbfc9',
      ],
      borderWidth: 1,
    },
  ],
};

export const chart2 = {
      labels: ['CSE', 'IT', 'Mechanical', 'Electronics', 'Electrical', 'Civil'],
      datasets: [
      {
        label: '# of Votes',
        data: [31.2, 19.5, 14.6, 13.4, 12.1, 9.2],
        backgroundColor: [
          '#5c7cb8',
          '#132d5e',
          '#e66b19',
          '#f2df2e',
          '#54596e',
          '#bdbfc9',
        ],
        borderColor: [
          '#5c7cb8',
          '#132d5e',
          '#e66b19',
          '#f2df2e',
          '#54596e',
          '#bdbfc9',
        ],
        borderWidth: 1,
      },
    ],
  };

export const chart3 = {
    labels: ['CSE', 'IT', 'Mechanical', 'Electronics', 'Electrical', 'Civil'],
    datasets: [
      {
        label: '% of Votes',
        data: [29.9,20.0,15.4,13.7,12.1,9.0],
        backgroundColor: [
          '#5c7cb8',
          '#132d5e',
          '#e66b19',
          '#f2df2e',
          '#54596e',
          '#bdbfc9',
        ],
        borderColor: [
          '#5c7cb8',
          '#132d5e',
          '#e66b19',
          '#f2df2e',
          '#54596e',
          '#bdbfc9',
        ],
        borderWidth: 1,
      },
    ],
  };

export const chart4 = {
    labels: ['2019-20','2020-21'],
    datasets: [
      {
        label: '% of Votes',
        data: [60.7,62.3],
        backgroundColor: [
          '#54596e',
          '#bdbfc9',
        ],
        borderColor: [
          '#54596e',
          '#bdbfc9',
        ],
        borderWidth: 1,
      },
    ],
  };

function Statastics() {
    const h1 = {color:'#797a82',fontSize:'25px',textAlign:'center',fontWeight:'bolder'}
    return (
      <div class="chart-container" style= {{height:"50vh",padding:"30px"}} > 
        <p style={h1}>Branch wise placement 2020-21</p>
        <Pie data={chart1} 
              options={{ maintainAspectRatio: false ,
                plugins: {
                  legend: {
                    position:'right',
                    labels: {
                      render:'percentage',
                      color: "#797a82",
                      font : {size: 15},
                      fontColor: '#fff',
                    }
                  }
                },
              }}style= {{marginBottom:"50px"}} 
            />
        <p style={h1}>Branch wise placement 2019-20</p>
        <Pie data={chart2} 
              options={{ maintainAspectRatio: false ,
                plugins: {
                  legend: {
                    position:'right',
                    labels: {
                      render:'percentage',
                      color: "#797a82",
                      font : {size: 15},
                      fontColor: '#fff',
                    }
                  }
                },
              }}style= {{marginBottom:"50px"}} 
            />
        <p style={h1}>Branch wise placement 2018-19</p>
        <Pie data={chart3} 
              options={{ maintainAspectRatio: false ,
                plugins: {
                  legend: {
                    position:'right',
                    labels: {
                      render:'percentage',
                      color: "#797a82",
                      font : {size: 15},
                      fontColor: '#fff',
                    }
                  }
                },
              }}style= {{marginBottom:"50px"}} 
            />
        </div>
    )
}

 function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      fullscreen={true}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Placement Statastics
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {<Statastics/>}
      </Modal.Body>
    </Modal>
  );
}

export default function PieChartCentralModal(){
  const [modalShow, setModalShow] = React.useState(false);
  const style={ width:'30vw',marginBottom:'10vh',marginLeft:'25vw',marginRight:'25vw',fontSize:'15px',fontWeight:'600'}
  return (
    <>
      <Button variant="secondary" onClick={() => setModalShow(true)} style={style}>
         View Branchwise Placement Statastics
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}