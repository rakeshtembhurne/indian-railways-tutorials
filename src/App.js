import React, { Component } from 'react';
import './App.scss';
import Start from './pages/Start';
import Details from './pages/Details';
import MenuPage from './pages/MenuPage';
// import SearchPage from './pages/SearchPage';
import Downloads from './pages/Downloads';
import TutorialsPage from './pages/TutorialsPage';
import { Splash } from './pages/Splash';
import { Home, Video, Info } from 'react-feather';
import { context } from './store/MyContext.js';


class App extends Component {
  static contextType = context;
  state = {};

  constructor(props) {
    super();
    this.state = {
      showSplash: true,
      fadeOut: false
    };

    setTimeout(() => {
      this.setState({ fadeOut: true });
    }, 3000);
    setTimeout(() => {
      this.setState({ showSplash: false });
    }, 4000);
  }

  render() {
    let View;
    switch (this.context.view) {
      case "HOME":
        View = <div className="animated fadeIn faster"><Start /></div>;
        break;
      case "DETAILS":
        View = <Details />;
        break;
      case "MENU":
        View = <MenuPage />
        break;
      case "TUTORIALS":
        View = <TutorialsPage />
        break;
      case "CREDITS":
        View = <Downloads />
        break;
      default:
        View = <Start />;
    }

    const splash = this.state.showSplash ? <Splash fadeOut={this.state.fadeOut} /> : "";

    return (
      <div>
        <div className="App">

          {splash}

          {View}



          <br /><br />

          <footer>
            <div onClick={() => this.context.dispatch({ type: "SET_VIEW", payload: "HOME" })}>
              <Home color={this.context.view === "HOME" || this.context.view === "DETAILS" ? "white" : "grey"} />
              <span>Home</span>
            </div>
            <div onClick={() => this.context.dispatch({ type: "SET_VIEW", payload: "TUTORIALS" })}>
              <Video color={this.context.view === "TUTORIALS" ? "white" : "grey"} />
              <span>Tutorials</span>
            </div>
            <div onClick={() => this.context.dispatch({ type: "SET_VIEW", payload: "CREDITS" })}>
              <Info color={this.context.view === "CREDITS" ? "white" : "grey"} />
              <span>Credits</span>
            </div>
            {/* <div onClick={() => this.context.dispatch({ type: "SET_VIEW", payload: "MENU" })}>
              <Menu color={this.context.view === "MENU" ? "white" : "grey"} />
              <span>Menu</span>
            </div> */}
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
