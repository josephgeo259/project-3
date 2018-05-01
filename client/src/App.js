import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Doctors from './components/Doctors'
import SingleDoctor from './components/SingleDoctor'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Doctors} />
            <Route path="/:id" component={SingleDoctor} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
