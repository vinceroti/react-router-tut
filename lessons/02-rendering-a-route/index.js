import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import About from './modules/About'
import Repos from './modules/Repos'
import App from './modules/App'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/repos" component={Repos}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'))


// We're using hashHistory--it manages the routing history with the hash portion of the url. It's got that extra junk to shim some behavior the browser has natively when using real urls. We'll change this to use real urls later and lose the junk, but for now, this works great because it doesn't require any server-side configuration.
