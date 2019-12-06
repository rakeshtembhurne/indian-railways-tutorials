import React, { Component } from 'react'
import { context } from '../store/MyContext.js';
import CloseButton from '../components/CloseButton.js';
import Youtube from '../components/Youtube.js';
import { Database } from '../store/Database';
import HorizontalMovieScroll from '../components/HorizontalMovieScroll';

export class Details extends Component {
  static contextType = context;
  constructor(props) {
    super();
    this.state = {
      movies: Database(),
      prevMovie: null,
      nextMovie: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount = () => {
    window.scrollTo(0, 0);
    let currentIndex = null;
    this.state.movies.forEach((m, i) => {
      if (m.videoId === this.context.movie.videoId) {
        currentIndex = i;
      }
    })
    if (currentIndex > 0) {
      this.setState({prevMovie: this.state.movies[currentIndex - 1]});
    }
    if (currentIndex < this.state.movies.length) {
      this.setState({nextMovie: this.state.movies[currentIndex + 1]});
    }
  }

  handleClick = (m) => {
    let currentIndex = null;
    this.state.movies.forEach((m, i) => {
      if (m.videoId === this.context.movie.videoId) {
        currentIndex = i;
      }
    })
    if (currentIndex > 0) {
      this.setState({prevMovie: this.state.movies[currentIndex - 1]});
    }
    if (currentIndex < this.state.movies.length) {
      this.setState({nextMovie: this.state.movies[currentIndex + 1]});
    }
    this.context.dispatch({type: "SET_VIEW", payload: "DETAILS"});
    this.context.dispatch({type: "SET_MOVIE", payload: {...m}});
  }

  render() {
    return (
      <div>
        <CloseButton />
        <br />
        <h5 className="text-center">{this.context.movie.title}</h5>
        <div className="video-embed-container">
          <Youtube videoId={this.context.movie.videoId} title={this.context.movie.title} />

          <div className="container">
            <div className="row">
              <button disabled={!this.state.prevMovie} onClick={() => this.handleClick(this.state.prevMovie)} className="btnLeft pull-left col"> &lt;&lt; Prev </button>
              <button disabled={!this.state.nextMovie} onClick={() => this.handleClick(this.state.nextMovie)} className="btnRight pull-right col"> Next &gt;&gt; </button>
            </div>
          </div>
          <br />
          
        </div>

        <HorizontalMovieScroll skipMovieId={this.context.movie.videoId} type="Other Related Tutorials" movies={this.state.movies} />
      </div>
    )
  }
}

export default Details
