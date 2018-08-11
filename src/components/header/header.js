import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className= 'container__Header'>
        <h2>
          Todo List
          <small> Normal Mode</small>
        </h2>
      </div>
    )
  }
}

export default Header