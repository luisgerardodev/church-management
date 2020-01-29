import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Table from './components/Table';
import { Container } from '@material-ui/core';

const initialState = {
  isSignedIn: false
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount() {
    fetch('http://localhost:3000/', {
            method: 'get',
            headers: {'Content-Type': 'application/json'},
        })
            .then(res => res.json())
            .then(members => {
              console.log(members)
            })
  }

  render() {
    return (
    <div>
      <NavBar/>
      <Container>
        <Table />
      </Container>
        
    </div>
    )
  }
}

export default App;