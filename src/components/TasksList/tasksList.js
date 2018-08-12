import React, { Component } from 'react'
import './tasksList.css'

class TasksList extends Component {
  render() {
    return [
      <div className='taskList'>
        <div class="taskText">
          <label class="radiocheck-group">
            <input type="checkbox" value="on"/>
            <span>wash cat</span>
          </label>
        </div>
        <div class="taskX">
          <i class="fa fa-remove fa-2x"></i>
        </div>
      </div>,
      <div className='taskList'>
      <div class="taskText">
        <label class="radiocheck-group">
        <input type="checkbox" value="on"/>
        <span>wash cat</span>
        </label>
      </div>
      <div class="taskX">
        <i class="fa fa-remove fa-2x"></i>
      </div>
    </div>
    ]
  }
}

export default TasksList