import React, { Component } from 'react';
import Jewel from './component.app/Jewel';
import './App.css';

// const arr = [
//   [undefined,]
// ];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jewel color="" />
        <Jewel color="red" />
        <Jewel color="orange" />
        <Jewel color="pink" />
        <Jewel color="green" />
        <Jewel color="rainbow" />
      </div>
    );
  }
}

export default App;
