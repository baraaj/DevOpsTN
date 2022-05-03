import React, { Component } from 'react';
import LoginModal from './compenents/LoginModal';
import RegisterModal from './compenents/RegisterModal';
import './App.css';
import logo from './logo.png';


class Navbar extends Component {
    state={
      mv:"true"
    }
    
  style2={
         backgroundColor:"#003293",
  };
  render() {
    
    return (
      <div style={{backgroundColor:"#003293"}}>

<nav className="navbar bg-dark navbar-dark navbar-expand-sm" >
        <div className="container" >
            <div className="navbar-brand ">
              <a href="/" className="text-white" onClick={(e)=>this.props.home(e)}>
                <img src={logo} alt="Logo" />
              </a>
            </div>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav">
                  <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between " id="navbarNav">
                <div className="navbar-nav">
                    {this.props.user ?
                      <span className="d-inline-flex">
                        <a href="/" className="nav-item nav-link" onClick={(e)=>this.props.cours(e)}><span className="fas fa-book-open"></span> Cours</a>
                        <a href="/" className="nav-item nav-link" onClick={(e)=>this.props.exercice(e)}><span className="fas fa-book-reader"></span> Exercices </a>
                        <a href="/" className="nav-item nav-link" onClick={(e)=>this.props.question(e)}><span className="far fa-comment"></span> Question</a>
                      </span>
                      :
                      ''
                    }
                    <a href="/" className="nav-item nav-link" onClick={(e)=>this.props.about(e)}><span className=" fas fa-edit"></span> About?</a>
                </div>
                  <div className="navbar-nav">
                    {
                      this.props.user ? 
                      <button className="btn btn-secondary" onClick={this.props.logout}>Deconnecter</button>
                      :
                      <span className="d-inline-flex">
                      {/* Register Modal */}
                      <RegisterModal 
                        inscrireProf={this.props.inscrireProf}
                        inscrireEtudiant={this.props.inscrireEtudiant}
                        email={this.props.email} nom={this.props.nom} prenom={this.props.nom} 
                        pwd ={this.props.pwd} rpwd={this.props.rpwd} cne={this.props.cne} 
                        cin={this.props.cin} specialite={this.props.specialite} niveau={this.props.niveau} 
                        date={this.props.date} />
  
                      {/* //Login modal */}
                      <LoginModal onLogin={this.props.onLogin} loginError={this.props.loginError}
                                  email={this.props.email} pwd={this.props.pwd}/>
                      </span>
                      }
                  </div>
</div>
</div>
</nav>
      </div>
    );
  }

}

export default Navbar;