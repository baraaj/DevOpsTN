import React, { Component } from 'react';
import slide1 from './slide3.png';
import p1 from './images/p1.png';
import p2 from './images/p2.png';
import p3 from './images/p3.png';
import p4 from './images/p4.png';
import p5 from './images/p5.png';
import p6 from './images/p6.png';
import p7 from './images/p7.png';
import p8 from './images/p8.png';
import Cardcours from './compenents/cardcours';
import './compenents/cardcours.css';
import Category from './compenents/category';

import ReactPlayer from 'react-player';

class Home extends Component {
style={
    "padding":"25px",
    "margin":"30px"
}
 render() {
   
 return(
     
<div>
   
<div className=" jumbotron" style={{width:"100%"}}>

        <div className="row">
            
            <div className="col-8" style={{marginLeft:'100px'}}>
                {/* <h1> Welcome to Devops Learning</h1>
                    <h1>We are a worldwide community for online learning and teaching where anybody can aquire and accomplish their objectives by connecting wih others.</h1>
             */}
             <img src={slide1} ></img>
            </div>
            {/* <div className="col-4">
                <img src="este.png" className="img-responsive img-thumbnail"/>
        </div> */}
        
    </div>
</div>
<div className="container">
 

             </div>
             <div className='wrapper'>
            <Cardcours img={p1} title = 'Version Control System' link='#'/>
            <Cardcours img={p2} title = 'Docker for beginnerrs' link='#'/>
            <Cardcours img={p3} title = 'Container Orchestration' link='#'/>
            <Cardcours img={p4} title = 'Ansible from scratch' link='#'/>
            <Cardcours img={p5} title = 'It Automation' link='#'/>
            <Cardcours img={p6} title = 'Monitoring and visualization' link='#'/>
            <Cardcours img={p7} title = 'Collaboration' link='#'/>
            <Cardcours img={p8} title = 'Collaboration' link='#'/>
    </div>

<div className="row">
   <Category/>

            </div>

            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />

        </div>
       



 );  

  }
}
export default Home;

