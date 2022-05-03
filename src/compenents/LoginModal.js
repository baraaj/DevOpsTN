import React, { Component } from 'react';

class LoginModal extends Component {
    render() { 
        
        return (
            <div>
                <a href="/" className="nav-item nav-link" data-toggle="modal" data-target="#exampleModal0" data-whatever="@getbootstrap">
                    <span className="fas fa-portrait"></span> login</a>
                <div className="modal fade" id="exampleModal0" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Connecter a votre compte</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="recipient-name" className="col-form-label">Email</label>
                                        <input type="text" className="form-control" id="recipient-email" onChange={(e)=>this.props.email(e)}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Mote de passe:</label>
                                        <input type="password" className="form-control" id="recipient-motedepass" onChange={(e)=>this.props.pwd(e)}/>
                                    </div>
                                </form>
                                {this.props.loginError ? <div className="alert alert-danger">Email ou mot de pass est incorrecte !!</div> : ''}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary exitLogin" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.props.onLogin}>Connecter</button>
                            </div>

                        </div>

                    </div>
                </div>
                

            </div>
        );
    }
}
export default LoginModal;