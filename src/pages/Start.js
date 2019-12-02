import React, { Component } from 'react'
import { Database } from '../store/Database'
import { Movie } from '../components/Movie'
import HorizontalMovieScroll from '../components/HorizontalMovieScroll';


export class Start extends Component {
  constructor(props) {
    super();
    this.state = {
      movies: Database(),
    };
  }
  render() {
    const featured = this.state.movies
      .filter((m) => m.type === "featured")
      .map((m) => {
        return <Movie featured={true} info={m} key={Math.random()}></Movie>
      });
    return (
      <div>
        <div className="text-center">
          <br />
          <p>Welcome</p>

          <p>
            <img src="logo.png" alt="Indian Railways" />
          </p>

          <p>Please select options below</p>


          {/* {featured} */}

          {/* <HorizontalMovieScroll type="Tutorials" movies={this.state.movies} /> */}

          <br/>
        </div>
      </div>
    )
  }
}

export default Start
