import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Table from './components/Table';
import { Container } from '@material-ui/core';
import SignIn from './components/SignIn';

const initialState = {
  isSignedIn: false,
  members: [],
  route: 'signin',
  user: {
    id: '',
    username: '',
    
  }
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

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      username: data.username,
      isAdmin: data.is_admin
    }})
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, route, members } = this.state;
    return (
    <div>
      { route === 'home'
        ? <div>
            <NavBar onRouteChange={this.onRouteChange} />
            <Container>
              <Table members={ members }/>
            </Container>
          </div>

        : (
            <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          )
      }
      
        
    </div>
    )
  }
}

export default App;