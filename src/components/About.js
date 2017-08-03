import React, {Component} from 'react';
import BaseLayout from './BaseLayout';
import '../styles/App.css';



export default class About extends Component {
  render() {
    return (
      <div className="about">
      <BaseLayout />
      <h1>Portfolio</h1>
      <p>This is a portfolio</p>
      </div>
    );
  }
}
