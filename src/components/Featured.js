import React, { Component } from 'react'
import { context } from '../store/MyContext';

export class Featured extends Component {
    static contextType = context;
    handleClick = () => {
        this.context.dispatch({type: "SET_VIEW", payload: "DETAILS"});
        console.log({"INFO":this.props.info})
        this.context.dispatch({type: "SET_MOVIE", payload: {...this.props.info}});
    } 
    render() {
        return (
            <div>
                <div onClick={this.handleClick} id="featured" className="movie d-flex">
                    <img src={this.props.info.url} title={this.props.info.tssitle} desc={this.props.info.desc} alt="movie"/></div>
            </div>
          )
    }

}
// TODO REMOVE NOT USED
export default Featured