import React, { Component } from 'react'
import { Link, IndexLink, withRouter } from 'react-router'

import './css/App.css'

class NavItem extends Component {
  render () {
    const { router } = this.props
    const { index, to, children, ...props } = this.props

    let isActive
    if( router.isActive(to,true) && index ) isActive = true
    else  isActive = router.isActive(to)
    const LinkComponent = index ?  IndexLink : Link

    return (
      <li className={isActive ? 'selected' : ''}>
        <LinkComponent to={to} {...props}>{children}</LinkComponent>
      </li>
    )
  }
}

NavItem = withRouter(NavItem)

export default NavItem