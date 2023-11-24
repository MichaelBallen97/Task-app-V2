import { createContext } from "react"
import useTasks from "../hooks/useTasks";

export const TasksGlobalContext = createContext()

function TaksContext({children}) {
  const {tasks, handleAddTask, handleDeleteTask, handleEditTask, handleCompleteTask, handlefilterTasksCategory, handlefilterTasks} = useTasks();

  return (
    <TasksGlobalContext.Provider 
      value={{
        tasks,
        handleAddTask,
        handleDeleteTask,
        handleEditTask, 
        handleCompleteTask,
        handlefilterTasksCategory,
        handlefilterTasks
      }}>
      {children}
    </TasksGlobalContext.Provider>
  )
}

export default TaksContext