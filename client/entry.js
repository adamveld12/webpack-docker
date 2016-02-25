import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory, Route, IndexRoute, Redirect } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, combineReducers, compose } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import DevMonitor from './devtools.js'


const store = createStore(
  combineReducers({ routing: routerReducer }),
  compose(DevMonitor.instrument())
)

const history = syncHistoryWithStore(browserHistory, store)


import './entry.less'

const pages = {
  Home: (l, cb) => require.ensure(['./home'], () => cb(null, require('./home').default)),
}

class App extends React.Component {
  render(){
    return (
      <section id="main">
          <DevMonitor />
          { this.props.children }
      </section>
    )
  }
}

render(
<Provider store={store}>
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute getComponent={pages.Home}/>
      <Route path="/home" getComponent={pages.Home}/>
      <Redirect from="*" to="/" />
    </Route>
  </Router>
</Provider>
, document.getElementById("app"))
