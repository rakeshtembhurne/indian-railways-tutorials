import React, { Component } from 'react'
import { context } from '../store/MyContext.js';
import CloseButton from '../components/CloseButton.js';
import Youtube from '../components/Youtube.js';
import { Database } from '../store/Database';
import HorizontalMovieScroll from '../components/HorizontalMovieScroll';

export class Details extends Component {
  static contextType = context;
  componentDidMount = () => {
    window.scrollTo(0, 0);
  }
  constructor(props) {
      super();
      this.state = {
          movies: Database(),
      };
  }
  render() {
    return (
      <div>
        <CloseButton />
        <br />
        <div>
          <h5 className="text-center">{this.context.movie.title}</h5>
          
          <Youtube videoId={this.context.movie.videoId} title={this.context.movie.title} />
        </div>

        <HorizontalMovieScroll skipMovieId={this.context.movie.videoId} type="Other Related Tutorials" movies={this.state.movies} />
      </div>
    )
  }
}

export default Details
