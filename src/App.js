import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sudoku from './components/Sudoku';
import Database from './components/Database';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path='/' exact component={Sudoku} />
          <Route path='/about' component={About} />
          <Route path='/database' component={Database} />
        </div>
      </Router>
    );
  }
}

export default App;
