import React from 'react';
import { ProgressBar,Button } from 'react-bootstrap';
import './AboutUs.css'

function Practice() {
    return (
        <div >
            <section id="service">
            <div class="container">
                <div class="heading">
                    <h1 style={{textAlign:'center',color:'black'}}><strong>P</strong>ractice</h1>
                    <div className='hr'></div>
                </div>
                <div class="row">
                    <div class="col-md-4 ">
                        <div class="media service-box">
                            <div class="pull-left"> <i class="fa fa-chart-line"></i> </div>
                            <div class="media-body">
                            <h4 class="media-heading">CS Core Subjects</h4>
                            <h5>We provide you the "To the point" CS Core subject Knowledge through the various notes and Quik revisions.</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 " >
                        <div class="media service-box">
                            <div class="pull-left"> <i class="fa fa-cubes"></i> </div>
                            <div class="media-body">
                            <h4 class="media-heading">DAS(Data structures and Algorithms)</h4>
                            <h5>DSA is heart of product based companies here we make sure to provide all necessary Practice.</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 " >
                        <div class="media service-box">
                            <div class="pull-left"> <i class="fa fa-chart-pie"></i> </div>
                            <div class="media-body">
                            <h4 class="media-heading">Project Questions</h4>
                            <h5>The most frequently asked Project Questions and their ideal appropriate answers.</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="experience">
                    <strong>Past Performace by alumina....</strong>
                    <div class='row'>
                        <div className='col-md-6'>
                            <div className='progbar'>
                                <h5>DSA Rounds Clarification</h5>
                                <ProgressBar variant='danger' now={95.5} label={'95.5%'} />
                            </div>
                            <div className='progbar'>
                                <h5>CS fundamental clearance</h5>
                                <ProgressBar variant='danger' now={90} label={'90%'} />
                            </div>
                            <div className='progbar'>
                                <h5>Puzzle</h5>
                                <ProgressBar variant='danger' now={70} label={'70%'} />
                            </div>
                            <div className='progbar'>
                                <h5>Clarification in Explaining the code</h5>
                                <ProgressBar variant='danger' now={86} label={'86%'} />
                            </div> 
                        </div>
                        <div className='col-md-6 ' >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRERYRVfcir6BmHQh3-nSwQk6MtYufPnQ8_lw&usqp=CAU" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Practice;