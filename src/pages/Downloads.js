import React, { Component } from 'react'
import { context } from '../store/MyContext';

export default class Downloads extends Component {
    static contextType = context;
    handleClick = () => {
        this.context.dispatch({type: "SET_VIEW", view: "HOME"});
    }
  render() {
    return (
      <div className="downloads-container">
        <br />
        <h1>Credits</h1>
        <img className="imgCred" alt="Credits" src="credit_1.jpeg" />
        <img className="imgCred" alt="Credits" src="credit_3.jpg" />
        <img className="imgCred" alt="Credits" src="credit_2.jpeg" />
        
      </div>
    )
  }
}
