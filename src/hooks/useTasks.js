import { useReducer } from "react"
import { v4 } from "uuid";
import { toast } from 'sonner'
import { useContext } from "react";
import { CategoryGlobalContext } from "../context/CategoryContext";

function useTasks () {
  const initialTasks = window.localStorage.getItem("tasks") ? JSON.parse(window.localStorage.getItem("tasks")) : []
  const {selectedCategory, setSelectedCategory} = useContext(CategoryGlobalContext)
  
  const taskReducer = (state, action) => {
    if(action.type === 'ADD_TASK') {
      const newTasks = [...initialTasks, action.payload]
      window.localStorage.setItem("tasks", JSON.stringify(newTasks))
      
      return newTasks.filter(task => task.category.includes(selectedCategory))
    } 

    if(action.type === 'DELETE_TASK') {
      const newTasks = [...initialTasks].filter(task => task.id != action.payload)
      window.localStorage.setItem("tasks", JSON.stringify(newTasks))
      return newTasks.filter(task => task.category.includes(selectedCategory))
    } 

    if(action.type === 'EDIT_TASK') {
      const newTasks = [...initialTasks].map(task => {
        if(task.id === action.payload.id) {
          return {...task, title: action.payload.title}
        }
        return task
      })
      window.localStorage.setItem("tasks", JSON.stringify(newTasks))
      return newTasks.filter(task => task.category.includes(selectedCategory))
    }

    if(action.type === 'COMPLETE_TASK') {
      const newStateTasks = state.map(task => {
        if(task.id === action.payload) {
          return {...task, done: !task.done}
        }
        return task
      })

      const selectedTask = newStateTasks.filter(task => task.id === action.payload);

      const newTasks = [...initialTasks].map(task => {
        if(task.id === selectedTask[0].id) {
          return {...task, done: selectedTask[0].done}
        }
        return task
      })

      window.localStorage.setItem("tasks", JSON.stringify(newTasks))
      return newTasks.filter(task => task.category.includes(selectedCategory))
    }

    if(action.type === 'FILTER_TASKS_CATEGORY') {
      const filteredTasks = initialTasks.filter(task => task.category.includes(action.payload))
      return filteredTasks
    }

    if(action.type === 'FILTER_TASKS') {
      const filteredTasks = initialTasks.filter(task => task.title.toLowerCase().includes(action.payload.toLowerCase()))
      return filteredTasks
    }
  }
  
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks)

  const handleAddTask = (task) => {
    dispatch({
      type: 'ADD_TASK',
      payload: {...task, id: v4()}
    })
  }

  const handleDeleteTask = (id) => {
    dispatch({
      type: 'DELETE_TASK',
      payload: id
    })

    toast('Task Deleted')
  }

  const handleEditTask = (id, title) => {
    dispatch({
      type: 'EDIT_TASK',
      payload: {id, title}
    })
  }

  const handleCompleteTask = (id) => {
    dispatch({
      type: 'COMPLETE_TASK',
      payload: id
    })
  }

  const handlefilterTasksCategory = (categoryId) => {
    dispatch({
      type: 'FILTER_TASKS_CATEGORY',
      payload: categoryId
    })
  }

  const handlefilterTasks = (value) => {
    dispatch({
      type: 'FILTER_TASKS',
      payload: value
    })
  }

  return {
    tasks,
    handleAddTask,
    handleDeleteTask,
    handleEditTask,
    handleCompleteTask,
    handlefilterTasksCategory,
    handlefilterTasks
  }
}

export default useTasks;