import React, { Component } from 'react';
import Page from "./Component/Page/Page";
import Cameleon from './Image/go.jpg';
import Raphael from './Image/raf.jpg';
import Boutton from "./Component/Boutton/Boutton";
import './App.css';


// MES DONNEES



class App extends Component {

  constructor (props) {

    super (props);

  this.state= {

        page1 : {

    id: 1,
     profil: {
      prenom: "Loic",
      nom: "B.",
      image: Cameleon,
      alt: "Caméléon"
      
    },
    boutton: "Loic B.",
    like: 0
  },
  
  page2 : {
    id:2,
    profil: {
      prenom: "Bernard",
      nom: "N.",
      image: Raphael,
      alt: "lalalala"
    },
    boutton: "Bernard N.",
    like: 0
  },
  
  page3 : {
    id:3,
    profil:  {
      prenom: "Henry",
      nom: "H.",
      image: "https://i.imgur.com/NPto19s.jpg",
      alt: "Caméléon"
    },
    boutton: "Henry H.",
    like: 0
  },

  pageactu : ""

  };

  this.state.pageactu=this.state.page1;

}

ChangeActuelProfil = (idpage) => {

  if (idpage==1)
  {
  this.setState ({pageactu : this.state.page1});
  }
  else if (idpage==2)
  {
  this.setState ({pageactu : this.state.page2});
  }
  else if (idpage==3)
  {
  this.setState ({pageactu : this.state.page3});
  }

}

like = () => {
 
  this.setState ({like : this.state.pageactu.like++ });
 

}

  render() {
    return (
      <div className="mapageweb">
        <h2>MA PAGE WEB</h2>

        <Boutton boutton= {this.state.page1.boutton} id={this.state.page1.id} functioncallback={this.ChangeActuelProfil} />
        <Boutton boutton= {this.state.page2.boutton} id={this.state.page2.id} functioncallback={this.ChangeActuelProfil}/>
        <Boutton boutton= {this.state.page3.boutton} id={this.state.page3.id} functioncallback={this.ChangeActuelProfil}/>

        <Page pageData={this.state.pageactu} jelike={this.like} />
       
      
      </div>
    );
  }
}

export default App;