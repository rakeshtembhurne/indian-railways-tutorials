import React, { Component } from 'react'
import { context } from '../store/MyContext';

export class Movie extends Component {
    static contextType = context;
    handleClick = () => {
        this.context.dispatch({type: "SET_VIEW", payload: "DETAILS"});
        this.context.dispatch({type: "SET_MOVIE", payload: {...this.props.info}});
    } 
    render() {
        return (
            <div className="movie-item">
                <div className="movie-thumb" onClick={this.handleClick} id={this.props.featured ? "featured" : ""} >
                    <img src={this.props.info.url} title={this.props.info.title} desc={this.props.info.desc} alt="movie"/>
                </div>
                <div className="movie-desc text-left">
                    <p>{this.props.info.titleHindi}
                    <br />
                    {this.props.info.desc}</p>
                </div>
            </div>
          )
    }

}

export default Movie
