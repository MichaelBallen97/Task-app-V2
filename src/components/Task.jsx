import { useContext } from "react"
import { TasksGlobalContext } from "../context/TaksContext"
import { useState } from "react";
import { toast } from 'sonner'

function Task({task}) {
  const {handleDeleteTask, handleCompleteTask, handleEditTask} = useContext(TasksGlobalContext)
  const [newTitle, setNewTitle] = useState(task.title);
  const [editMode, setEditMode] = useState(false)

  const handleInputChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setEditMode(false)
    handleEditTask(task.id, newTitle)
    toast('Task Edited')
  }


  return (
    <li className="py-1">
      <article className="flex justify-between items-center">
        {editMode ? (
          <form className="flex gap-0 w-full" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="new-title" 
              id="new-title" 
              value={newTitle} 
              className="bg-gray-700 w-full p-1"
              onChange={handleInputChange}
            />
            <button type="submit" className="flex justify-center items-center">
              <box-icon type='solid' name='check-square' color="rgb(22 163 74)" size="md"></box-icon>
            </button>
          </form>
        ) : (
          <article className="flex gap-3 items-center">
            <span onClick={()=>handleCompleteTask(task.id)} className="cursor-pointer flex items-center justify-center">
              {task.done ? <box-icon name='task' color="rgb(22 163 74)" /> : <box-icon name='task-x' color="rgb(239 68 68)"/> }
            </span>
            <p className={`text-left ${task.done && "text-decoration-line: line-through text-gray-400 decoration-gray-200"}`}> {task.title} </p>
          </article>
        )}

        {
          editMode || 
          <div className="flex gap-2">
            <button className="p-1 border border-red-500 flex" onClick={()=>handleDeleteTask(task.id)}> 
              <box-icon name='trash-alt' color="rgb(239 68 68)" />
            </button>
            <button className="p-1 border border-green-500 flex" onClick={()=> setEditMode(true)}>
              <box-icon name='edit-alt' color="rgb(22 163 74)" /> 
            </button>
          </div>
        }
      </article>
    </li>
  )
}

export default Task