import React, { Component } from 'react';
import './App.css';
import BarChart from './BarChart';
import LineChart from './LineChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BarChart/>
        <LineChart/>
      </div>
    );
  }
}

export default App;
