import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/App.css';


export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Portfolio">Portfolio</Link>
          <Link to="/About">About</Link>
        </nav>
      </div>
    )
  }
};
