import React, { Component } from 'react';

class AjouterCours extends Component {

    state = {
        modules:[]
    }

    componentDidMount(){
        this.fetchModules();
    }

    render() { 
        
        return (
            <div className="col-3" style={{padding:"5px"}}>
                <button type="button" className="btn btn-danger col-12" data-toggle="modal" data-target="#exampleModalCenter">
                    Ajouter Cours
                </button>

                
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Ajouter Cours</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Titre</label>
                            <input type="text" className="form-control"  placeholder="Titre du cours" ref="nom_cour"/>
                        </div>

                        {/* <div className="form-group">
                            <label>Module</label>
                            <select className="form-control" ref="code_module">
                                {
                                    this.state.modules.map((module)=>{
                                        return <option value={module.code_module}>{module.nom_module}</option>
                                    })
                                }
                            </select>
                        </div> */}

                            <div className="form-group ">
                                <div className="custom-file">
                                    <input type="file" className="form-control custom-file-input" id="customFile" ref="image"/>
                                    <label className="custom-file-label" htmlFor="customFile">Image</label>
                                </div>
                            </div>

                            <div className="form-group">
                            <label>video</label>
                            <input type="text" className="form-control"  placeholder="Titre du cours" ref="video"/>
                        </div>

                            <div className="form-group">
                                <div className="custom-file">
                                    <input type="file" className="form-control custom-file-input" id="customFile1" ref="fichier"/>
                                    <label className="custom-file-label" htmlFor="customFile1">PDF</label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Contenu</label>
                                <textarea rows="10" className="form-control" ref="contenue"></textarea>
                            </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={this.handleAjouter.bind(this)}>Ajouter</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }

    async fetchModules(){
        console.log("fetching modules");
        
        let response = await fetch('http://localhost:5000/modules/all');
        let resultat = await response.json();

        this.setState({
            modules:resultat.modules
        });
        
    }

    async handleAjouter(){
        
        let {nom_cour,image,fichier,video,contenue} = this.refs;
        
        let data = new FormData();
        data.append('image',image.files[0]);
        data.append('fichier',fichier.files[0]);
        data.append('nom_cour',nom_cour.value);
        data.append('contenue',contenue.value);
        data.append('video',video.value);
        // data.append('code_module',code_module.value);
        data.append('prof_id',this.props.user.id);

        let response = await fetch('http://localhost:5000/cours/ajouter',
                            {method:"POST",headers : {'Accept':'application/json'},
                            body: data});

        let resultat = await response.json();
        console.log(resultat);
        
        if(resultat.added){
            console.log('added');
        }
        else{
            console.log('Ooops');
        }
    }
}

export default AjouterCours;