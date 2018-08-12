import React, { Component } from 'react'
import './body.css'
import AddElement from '../AddElement/addElement'
import TasksList from '../TasksList/tasksList.js'

class Body extends Component {
  render() {
    return (
      <section>
        <AddElement />
        <TasksList />
      </section>
    )
  }
}

export default Body