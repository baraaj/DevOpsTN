
import React from 'react';
import p1 from './p1.png';
import './cardcours.css';
export default function cardcours(props) {
  return (
    
    
        <div className='card'>
            <div className='card_body'>
                <img src={props.img} className='card_image'/>
                <a href={props.link}><h2 className='card_title'>{props.title}</h2></a>
                {/* <p className='card_descrption'>
                    {props.description}
                </p> */}

            </div>
            <button className='card_btn'>View more</button>
        </div>
    


    
  )
}
// function Card(props){
//     return(
//         <div className='card'>
//             <div className='card_body'>
//                 <img src={props.img} className='card_image'/>
//                 <h2 className='card_title'>{props.title}</h2>
//                 <p className='card_descrption'>
//                     {props.description}
//                 </p>

//             </div>
//             <button className='card_btn'>View more</button>
//         </div>
//     )
// }
