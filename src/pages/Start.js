import React, { Component } from 'react'
import { Database } from '../store/Database';


export class Start extends Component {
  constructor(props) {
    super();
    this.state = {
      movies: Database(),
    };
  }
  render() {
    return (
      <div>
        <div className="text-center">
          <br />
          <h2>TRD Skill Development</h2>
           <h3>Nagpur Division (C.R.)</h3>
          <p>
            <img className="home-logo" src="indian-railways-image-big.png" alt="Indian Railways" />
          </p>
          <br/>
        </div>
      </div>
    )
  }
}

export default Start
