import React, { Component } from 'react'
import './body.css'
import AddElement from '../AddElement/addElement'
import TasksList from '../TasksList/tasksList.js'
import { tasksDefault } from '../../data/tasksDefault'



class Body extends Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log(this);
    return (
      <section>
        <AddElement />
        { tasksDefault.map(function (element) {
        return <TasksList data = {element}/>  
        })
        }
      </section>
    )
  }
}

export default Body