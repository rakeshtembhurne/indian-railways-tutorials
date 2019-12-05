import React from 'react';
import { Database } from '../store/Database';
// import HorizontalMovieScroll from '../components/HorizontalMovieScroll';


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
                    <div>
                        {/* style={{padding:'56.25% 0 0 0', position:'relative'}} */}
                        <iframe src='https://vimeo.com/showcase/6631234/embed' allowFullScreen frameBorder='0' style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}}></iframe>
                    </div>
                    {/* <HorizontalMovieScroll type="TRD Safety Tutorials" movies={this.state.movies} /> */}
                </div>
            </div>
        )
    }
}

export default TutorialsPage;