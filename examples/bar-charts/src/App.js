import React, { Component } from 'react';
import './App.css';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BarChart/>
        <LineChart/>
        <PieChart/>
      </div>
    );
  }
}

export default App;
