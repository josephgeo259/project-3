import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Doctors from './components/Doctors'
import SingleDoctor from './components/SingleDoctor'
import LogIn from './components/LogIn';
import { Redirect } from 'react-router-dom'


class App extends Component {
  state = {
    currentUser:{
      userName: "Geo",
      password: "WhatItIs"
    }
  }
  docLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser }
    newUser.userName = logInInfo.userName
    this.setState({ currentUser: newUser })
    console.log("Yo mock login", this.state)

  }
    
  render() {
  const DoctorsComponent = () => <Doctors
      currentUser={this.state.currentUser}  {...this.props} />

    if (this.state.redirect) {
      return (<Redirect to="/doctors" />)
    }
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={DoctorsComponent} />
            <Route exact path="/login" component={LogIn} />
            <Route path="/:id" component={SingleDoctor} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
