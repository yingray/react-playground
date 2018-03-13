// eslint-disable-next-line
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import Demo from './components/Demo'
import Demo2 from './components/Demo2'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/demo" component={Demo} />
      <Route exact path="/demo2" component={Demo2} />
    </Switch>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
