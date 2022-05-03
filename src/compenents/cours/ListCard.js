import React, { Component } from 'react';
import Card from './CardCours';
import AjouterCours from './AjouterCours';

class ListCard extends Component {

    render() {
    let list = this.props.data.map((cours,index) => {
        return <Card details={this.props.affiche} key={index} cours={cours} image="220" />
    });
    console.log('card',this.props.user);
    
    return (

    <div style={this.css} id="hello">
        <div id="hello" className="container"><br/>
            <div className="row">
                <div className='col-8' style={{padding:"5px"}}>
                    <input  type="text" onChange={this.props.recherche} className="form-control"/>
                </div>
                <AjouterCours user = {this.props.user} />
                {this.user ? <AjouterCours user = {this.props.user} /> : ''}
               
                
            </div>
            <div className="row">
                {list}
            </div>
        </div>
    </div>
    );

}


}

export default ListCard;
