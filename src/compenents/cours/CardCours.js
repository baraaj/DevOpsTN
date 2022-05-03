import React, { Component } from 'react';


class Card extends Component {
    state = {
      color:{ 
      background : "red"}
    }
   
  render() {
    console.log('card cours',this.props.cours.image);
    let image ='http://localhost:5000/'+this.props.cours.image;
    const color={
      background:"#CCCCCC",
   "margin":"5px",
    border : "1px solid #CCCCCC",
    transition:"1s",   
};  
    return (
      <div style={color} className="col-4" >
        <img src={image} alt="robot" width="50px"/>
        <br/>
        <h4 style={this.style1}>{this.props.cours.nom_cour}</h4>
        <div className="row">
        {/* <center><p style={this.style1} className="col-8" >
          {this.props.cours.contenue.substring(1,20) + '...'}
        </p></center> */}
        </div>
        <center>
          <input className="btn btn-danger" type="submit" value="lire la suite" onClick={(e)=>this.props.details(this.props.cours.cour_id)}/>
        </center>
        <br></br>
      </div> 
    )
  }

style1={
  
  "textAlign": "center",
  
}
  
}

export default Card;
