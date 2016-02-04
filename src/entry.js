import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory, Route, IndexRoute, Redirect } from 'react-router'

import Home from './home/home.js'

import './entry.less'

const pages = {
  Home: (l, cb) => require.ensure(['./home/home.js'], () => cb(null, require('./home/home.js').default)),
}

class App extends React.Component {
  render(){
    return (
      <section id="main">
        { this.props.children }
      </section>
    )
  }
}

render(
<Router history={browserHistory}>
  <Route path="/" component={ App }>
    <IndexRoute getComponent={ pages.Home } />
    <Route path="/home" getComponent={ pages.Home } />

    <Redirect from="*" to="/" />
  </Route>
</Router>
, document.getElementById("app_container"))
