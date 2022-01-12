import React,{Component} from "react";
import home from "../components/Images/home.jpg";
import './Maincontent.css';
import image from '../components/Images/college.jpg';

class Maincontent extends Component{
    render() {
        return (
             <div className="all">
                 <div className="Maincontent">
                 <h1>WCE Placement Portol</h1>
                 </div>
                 <div className="pic">
                 <img src={image} alt="pic"/>                     
                </div>
             </div>
        );
    }
}

export default Maincontent
