import React, { Component } from 'react'
import { context } from '../store/MyContext.js';
import CloseButton from '../components/CloseButton.js';
import Youtube from '../components/Youtube.js';

export class Details extends Component {
  static contextType = context;
  componentDidMount = () => {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <CloseButton />
        <div>
          <Youtube videoId={this.context.movie.videoId} title={this.context.movie.title} />
        </div>
      </div>
    )
  }
}

export default Details
