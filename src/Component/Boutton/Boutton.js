import React, { Component } from 'react';
import './Boutton.css';

class Boutton extends Component {

change = () => {
    this.props.functioncallback(this.props.id);
};

  render() {
    const boutton = this.props.boutton;

    // PAREIL QUE
    // const { content } = this.props;
    return (
      <div className="tweet-content-container">
       <button onClick={() => this.change()} type="button">
          {boutton}

        </button>
      </div>
    );
  }
}

export default Boutton;