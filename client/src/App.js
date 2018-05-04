import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Doctors from './components/Doctors'
import SingleDoctor from './components/SingleDoctor'
import LogIn from './components/LogIn';
import { injectGlobal } from 'styled-components'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Sacramento');
@import url('https://fonts.googleapis.com/css?family=Bree+Serif');

`

class App extends Component {
 
 
  render() {
    

    
  return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Doctors} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/doctors/:id" component={SingleDoctor} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App
