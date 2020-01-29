import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Container } from '@material-ui/core';

class App extends Component {
  render() {
    return (
    <div>
      <NavBar/>
      <Container>
        <h1>Church Management App</h1>
      </Container>
    </div>
    )
  }
}

export default App;