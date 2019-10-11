import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sudoku from './components/Sudoku';
import Database from './components/Database';
import About from './components/About';
import SudokuList from './components/SudokuList';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <h2>This is HEROKU version of the page.</h2>
          <Route path='/' exact component={Sudoku} />
          <Route path='/about' component={About} />
          <Route path='/database' component={Database} />
          {/*<Route path='/list' component={SudokuList} />*/}
        </div>
      </Router>
    );
  }
}

export default App;
