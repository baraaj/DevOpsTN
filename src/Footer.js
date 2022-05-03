
import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
style={
    "color":"white",
    "color":"#003293"
}
    render() {
    return (
      <div >
    
<footer>
<div className="jumbotron bg-dark " style={this.style}>
   
    <div className="row">
        <div className="col-4">
        <a href="#" className="nav-item nav-link" onClick={(e)=>this.props.cours(e)}><span className="fas fa-book-open"></span> Cours</a>
                    <a href="#" className="nav-item nav-link" onClick={(e)=>this.props.exercice(e)}><span className="fas fa-book-reader"></span> Exercices </a>
                    <a href="/" className="nav-item nav-link" onClick={(e)=>this.props.question(e)}><span className=" fas fa-edit"></span> About?</a>
            <a href="#" className="nav-item nav-link" onClick={(e)=>this.props.about(e)}><span className="far fa-comment"></span> Question</a>
        
        </div>
        <div className="col-4">
            <ul className="list-unstyled">
            <a href="#" className="nav-item nav-link"><span className="fas fa-book-open"></span> Cours</a>
                    <a href="#" className="nav-item nav-link"><span className="fas fa-book-reader"></span> Exercices </a>
                    <a href="#" className="nav-item nav-link"><span className="far fa-comment"></span> Question</a>
                    <a href="/" className="nav-item nav-link" onClick={(e)=>this.props.about(e)}><span className=" fas fa-edit"></span> About?</a>

                

            </ul>
        </div>
        <div className="col-4">
            <ul className="list-unstyled">
            <a href="#" className="nav-item nav-link"><span className="fas fa-book-open"></span> Cours</a>
                    <a href="#" className="nav-item nav-link"><span className="fas fa-book-reader"></span> Exercices </a>
                    <a href="#" className="nav-item nav-link"><span className="far fa-comment"></span> Question</a>
                    <a href="/" className="nav-item nav-link" onClick={(e)=>this.props.about(e)}><span className=" fas fa-edit"></span> About?</a>


            </ul>
        </div>

    </div>
</div>
</footer>

      </div>
    );
  }
}

export default Footer;
