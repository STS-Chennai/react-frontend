import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>ReactJS</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </Router>
    );
  }
}
 
export default App;