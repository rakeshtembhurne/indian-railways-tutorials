import React from 'react';
import { Database } from '../store/Database';
import HorizontalMovieScroll from '../components/HorizontalMovieScroll';


export class TutorialsPage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            movies: Database(),
        };
    }

    render() {
        return (
            <div>
                <br />
                <div className="text-center">
                    <HorizontalMovieScroll type="TRD SAFETY TUTORIALS" movies={this.state.movies} />
                </div>
            </div>
        )
    }
}

export default TutorialsPage;