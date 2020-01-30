import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Table from './components/Table';
import { Container } from '@material-ui/core';

const initialState = {
  isSignedIn: false,
  members: []
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
              .then(members => this.setState({ members }));
}

  render() {
    return (
    <div>
      <NavBar/>
      <Container>
        <Table members={this.state.members}/>
      </Container>
        
    </div>
    )
  }
}

export default App;