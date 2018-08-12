import React, { Component } from 'react'
import './addElement.css'

class AddElement extends Component {
  render() {
    return (
      <div>
      <div className='submit'>
        <input type="text"/>
          <button>
            <i className="fa fa-plus"></i>
          </button>
      </div>
      <hr />
      </div>
    )
  }
}

export default AddElement