import React, { Component } from 'react';
import './Profil.css';

class Profil extends Component {
  render() {
    const profil = this.props.profil;
    // PAREIL QUE
    // const { author } = this.props;

    return (
      <div className="monprofil">
        <h4>{profil.nom}</h4>
        <p>{profil.prenom}</p>
        <img src= {profil.image} alt={profil.alt}/>
        
      </div>
    );
  }
}

export default Profil;