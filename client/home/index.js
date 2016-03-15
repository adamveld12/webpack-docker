import React from 'react'
import { Brand, Copyright } from '../components'

import './home.less'

export default class extends React.Component {
  render(){
    return (
      <section className="home-page">
        <div className="overlay"></div>
        <section className="home-container animated flipInX">
          <Brand showLogo={ true } />
        </section>
        <Copyright />
      </section>
      )
  }
}
