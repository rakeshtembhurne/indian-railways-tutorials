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
      </div>
    )
  }
}
