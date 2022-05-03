import React, { Component } from 'react';

class RegisterModal extends Component {
    style1={
        "font-size":"150px",
        "color":"red",
        "margin":"2.5rem"
    }
    render() { 
        return (
            <div>
                <a href="/" className="nav-item nav-link" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">
                    <span className="far fa-clock"></span> Register</a>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a className="nav-item nav-link active fas fa-user-tie text-dark" id="nav-etudiant-tab" data-toggle="tab" href="#nav-etudiant" role="tab" aria-controls="nav-etudiant" aria-selected="true">Etduiant</a>
                                        <a className="nav-item nav-link fas fa-user-graduate text-dark" id="nav-prof-tab" data-toggle="tab" href="#nav-prof" role="tab" aria-controls="nav-prof" aria-selected="true">Professeur</a>
                                    </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-etudiant" role="tabpanel" aria-labelledby="nav-etudiant-tab">
                                    <div className="form-group">

                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label htmlFor="recipient-name" className="col-form-label">Nom:</label>
                                                <input type="text" className="form-control" id="recipient-Nom" onChange={(e)=>this.props.nom(e)}/>
                                            </div>
                                            <div className="form-group col-6">
                                                <label htmlFor="recipient-name" className="col-form-label">Prenom:</label>
                                                <input type="text" className="form-control" id="recipient-Prenom" onChange={(e)=>this.props.prenom(e)}/>
                                            </div>
                                        </div>
                                        <label htmlFor="recipient-name" className="col-form-label">Email:</label>
                                        <input type="text" className="form-control" id="recipient-Email" onChange={(e)=>this.props.email(e)}/>
                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label htmlFor="recipient-name" className="col-form-label">mote de passe:</label>
                                                <input type="text" className="form-control" id="recipient-pwd" onChange={(e)=>this.props.pwd(e)}/>
                                            </div>
                                            <div className="form-group col-6">
                                                <label htmlFor="recipient-name" className="col-form-label">Repeter mote de passe:</label>
                                                <input type="text" className="form-control" id="recipient-rpwd" onChange={(e)=>this.props.rpwd(e)}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label htmlFor="recipient-name" className="col-form-label">CNE</label>
                                                <input type="text" className="form-control" id="recipient-CNE" onChange={(e)=>this.props.cne(e)}/>
                                            </div>
                                            <div className="form-group col-6">
                                                <label htmlFor="recipient-name" className="col-form-label">CIN</label>
                                                <input type="text" className="form-control" id="recipient-CIN" onChange={(e)=>this.props.cin(e)}/>
                                            </div>
                                        </div>
                                        <label htmlFor="recipient-name" className="col-form-label">Niveu Scolaire</label>
                                        <input type="text" className="form-control" id="recipient-NiveuScolaire" onChange={(e)=>this.props.niveau(e)}/>
                                        
                                        <button onClick={this.props.inscrireEtudiant}
                                        style={{marginTop:"10px",float:"left"}}className="btn btn-primary">Inscrire</button>
                                    </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-prof" role="tabpanel" aria-labelledby="nav-prof-tab">
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label htmlFor="recipient-name" className="col-form-label">Nom:</label>
                                                <input type="text" className="form-control" id="recipient-Nom" onChange={(e)=>this.props.nom(e)}/>
                                            </div>
                                            <div className="form-group col-6">
                                                <label htmlFor="recipient-name" className="col-form-label">Prenom:</label>
                                                <input type="text" className="form-control" id="recipient-Prenom" onChange={(e)=>this.props.prenom(e)}/>
                                            </div>
                                        </div>
                                        
                                        
                                        <label htmlFor="recipient-name" className="col-form-label">Email:</label>
                                        <input type="text" className="form-control" id="recipient-Email" onChange={(e)=>this.props.email(e)}/>

                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label htmlFor="recipient-name" className="col-form-label">mote de passe:</label>
                                                <input type="text" className="form-control" id="recipient-pwd" onChange={(e)=>this.props.pwd(e)}/>        
                                            </div>
                                            <div className="form-group col-6">
                                                <label htmlFor="recipient-name" className="col-form-label">Repeter mote de passe:</label>
                                                <input type="text" className="form-control" id="recipient-rpwd" onChange={(e)=>this.props.rpwd(e)}/>        
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label htmlFor="recipient-name" className="col-form-label">CIN</label>
                                                <input type="text" className="form-control" id="recipient-CIN" onChange={(e)=>this.props.cni(e)}/>        
                                            </div>
                                            <div className="form-group col-6">
                                                <label htmlFor="recipient-name" className="col-form-label">Specialite</label>
                                                <input type="text" className="form-control" id="recipient-Specialite" onChange={(e)=>this.props.specialite(e)}/>        
                                            </div>
                                        </div>
                                        <label htmlFor="recipient-name" className="col-form-label">Date Embauche</label>
                                        <input type="date" className="form-control" id="recipient-Date" onChange={(e)=>this.props.date(e)}/>
                                        <button onClick={this.props.inscrireProf}
                                        style={{marginTop:"10px",float:"left"}}className="btn btn-primary">Inscrire</button>
                                    </div>
                                    </div>
                                </div>

                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterModal;