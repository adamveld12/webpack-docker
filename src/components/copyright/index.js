import React from 'react'
import './copyright.less'

export default class Copyright extends React.Component {
  constructor(){
    super()
    this.state = { time: new Date() }
  }

  render() {
    const { time }  = this.state

    return (
      <section className="copyright">
        <p>Built with &hearts; by 4MeLabs © { time.getFullYear() || 2016 }</p>
      </section>
    )
  }
}
