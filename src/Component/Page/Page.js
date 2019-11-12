import React, { Component } from 'react';
import "./Page.css";
import Like from "./Like/Like";
import Profil from "./Profil/Profil";


class Page extends Component {


  render() {

    // const author = this.props.tweetData.author;
    // const content = this.props.tweetData.content;
    // const image = this.props.tweetData.image; 

    // SAME
    const { profil, like } = this.props.pageData;

    return(
      <div className="tweet-container">

        <Profil profil={profil} />

        <Like like={like} functionAjoutLike={this.props.jelike}/>

        
        
      </div>
    )
  }
}

export default Page;