import React, { Component } from 'react';
import "./Like.css";

class Like extends Component {



  render() {
    const like  = this.props.like;
 
    // PAREIL QUE 
    // const src = this.props.image.src;
    // const alt = this.props.image.alt;



    return (
      <div className="tweet-image-container">
      Nombre de like: {like}
      <button onClick={ () => this.props.functionAjoutLike()} className="like" type="button">Jaime!
      
  
      
      </button>
      </div>
      
    );
  }
}


export default Like;