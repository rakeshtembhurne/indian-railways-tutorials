import React, { Component } from 'react'
import { context } from '../store/MyContext.js';
import CloseButton from '../components/CloseButton.js';
import Youtube from '../components/Youtube.js';
import { Database } from '../store/Database';
import HorizontalMovieScroll from '../components/HorizontalMovieScroll';

export class Details extends Component {
  static contextType = context;
  constructor(props) {
    super(props);
    this.state = {
      movies: Database(),
      movie: {},
      prevMovie: null,
      nextMovie: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.setNextPrev(this.context.movie);
  }

  setNextPrev = (thisMovie) => {
    let currentIndex = null;
    this.context.movies.forEach((m, i) => {
      if (m.videoId === thisMovie.videoId) {
        currentIndex = i;
      }
    })
    let prevIndex = currentIndex - 1;
    let nextIndex = currentIndex + 1;
    if (currentIndex === 0) {
      prevIndex = this.state.movies.length - 1;
    } else if (currentIndex === this.state.movies.length - 1) {
      nextIndex = 0;
    } else {
      prevIndex = currentIndex - 1;
      nextIndex = currentIndex + 1;
    }

    const newState = {
      prevMovie: this.context.movies[prevIndex],
      nextMovie: this.context.movies[nextIndex],
    };
    this.setState(newState)
  }

  handleClick = (m) => {
    this.context.dispatch({type: "SET_MOVIE", payload: m}, () => {
      this.setNextPrev(this.context.movie)
    });
    
  }

  render() {
    return (
      <div>
        <CloseButton />
        <br />
        <h5 className="text-center">{this.context.movie.title}</h5>
        <div className="video-embed-container">
          <Youtube videoId={this.context.movie.videoId} title={this.context.movie.title} />

          <div className="container" data-movie-id={this.context.movie.videoId}>
            <div className="row">
              <button disabled={!this.state.prevMovie} onClick={() => this.handleClick(this.state.prevMovie)} className="btnLeft pull-left col"> &lt;&lt; Prev </button>
              <button disabled={!this.state.nextMovie} onClick={() => this.handleClick(this.state.nextMovie)} className="btnRight pull-right col"> Next &gt;&gt; </button>
            </div>
          </div>
          <br />
          
        </div>

        <HorizontalMovieScroll skipMovieId={this.context.movie.videoId} type="Other Related Tutorials" movies={this.context.movies} />
      </div>
    )
  }
}

export default Details
