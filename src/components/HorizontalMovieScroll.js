import React, { Component } from 'react'
import { Movie } from './Movie'

export default class HorizontalMovieScroll extends Component {
    render() {
        const skipId = this.props.skipMovieId;
        const movies = this.props.movies
            .filter((m) => !skipId || (skipId && m.videoId !== skipId))
            .map((m) => {
                return <Movie info={m} key={Math.random()}></Movie>
            });

        return (
            <div>
                <p className="movie-container-header">{this.props.type}</p>
                <div className="movie-container">
                    {movies}
                </div>

            </div>
        )
    }
}
