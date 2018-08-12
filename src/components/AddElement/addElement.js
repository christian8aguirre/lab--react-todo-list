import React, { Component } from 'react'
import './addElement.css'

class AddElement extends Component {
  render() {
    return [
      
      <div className='submit'>
        <input type="text"/>
          <button>
            <i class="fa fa-plus"></i>
          </button>
      </div>,
      <hr />
    ];
  }
}

export default AddElement