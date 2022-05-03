import React, { Component } from 'react';
import Com from './Commentaire';

import ReactPlayer from 'react-player'

class CoursDetails extends Component {
    state={
        cour:{},
        com:[]
    }


    componentDidMount(){
        this.fetchCour();
        this.fetchComm();
        console.log(this.state.com+"eeeeeeeeeeee");
        console.log(this.state.cour);
    }
    render() {
       const style={
            "backgroundImage": "url(http://localhost:5000/"+this.state.cour.image +")",
            "backgroundSize": "80% 100%",
            "backgroundRepeat": "no-repeat",
            "backgroundPosition": "center",
            "height":"250px"
        }
    let downloadUrl = `http://localhost:5000/${this.state.cour.fichier}`;
    let list = this.state.com.map((data,index) => {
        return <Com contenu={data.commentaire} key={index} jaime={data.evaluation}  />
    });
    return(
        <div>
            <div className="jumbotron" style={style}>
                {/* <h1>{this.state.cour.nom_cour}</h1> */}
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-5"> </div>
                    <h1>{this.state.cour.nom_cour}</h1>
                </div>
                <hr />
                <div className="row">
                <p>
                    {this.state.cour.contenue}
                </p>
                </div>
                <br />
                <div className="row">
                    <div className="col-5">
                     
                    <ReactPlayer url= {this.state.cour.video}  />  </div>
                    <a type="submit" className="btn btn-danger" href={downloadUrl}>Download pdf</a>
                </div>
                <br />
                <br />
                <div className="row" id="commenter">
                    <div className=" col-12 alert alert-secondary" role="alert"> Les commentaires :</div>
                </div>
                <div className="row">
                       {list}
                       </div>
            </div>

            <div className="form-group container">
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Ajouter un commenter : </label>
                                <div className="row">
                                    <div className="col-12"></div>
                                    <textarea ref="text" className="form-control col-12" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <br></br><button type="submit" onClick={this.addCommentaire.bind(this)} className="btn btn-primary">Ajouter</button>
                            </div>
                        </div>

        </div>

    )}

    async fetchCour(){
        console.log('fetchcours',this.props.id);
        let response = await fetch(`http://localhost:5000/cours/${this.props.id}`);
        
        let resultat = await response.json();

        this.setState({
            cour:resultat.resultat.cour
        });
        
    }

    
    async fetchComm(){
        let response = await fetch(`http://localhost:5000/commentaires/afficherTout`);
        let resultat = await response.json();

        this.setState({
            com:resultat.resultat.cour
        });
    }

    async addCommentaire(){
console.log('com',this.props)
        let commentaire = {
            text:this.refs.text.value,
            id_contenu:this.props.id
        };

        let options = {method:"POST",headers : {'Content-Type':'application/json'},body: JSON.stringify({commentaire})};
        let response = await fetch(`http://localhost:5000/commentaires/ajouter`,options);
        
        this.fetchComm();
    }
}
export default CoursDetails;

