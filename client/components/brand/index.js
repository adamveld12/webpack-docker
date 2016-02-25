import React from 'react'

import './brand.less'


import whiteLogo from './p4logo-white.png'
import blackLogo from './p4logo.png'

export default class Brand extends React.Component{
  render(){
    const { showLogo, invert } = this.props
    const logo = (<p>The Street Team. Simplified.</p>)

    return (
      <div className="brand">
        <img src={ invert ? blackLogo : whiteLogo  } />
        <h1>&nbsp;Promote4Me</h1>
        { showLogo && logo }
      </div>
    )
  }
}


Brand.propTypes = {
  showLogo: React.PropTypes.bool,
  invert: React.PropTypes.bool,
}

Brand.defaultProps = {
  showLogo: false,
  invert: false,
}
