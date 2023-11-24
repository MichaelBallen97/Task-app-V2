import { useContext } from "react"
import Task from "./Task"
import TaskSearch from "./TaskSearch"
import { TasksGlobalContext } from "../context/TaksContext"

function TaskList() {
  const {tasks} = useContext(TasksGlobalContext)

  return (
    <section className="px-2 flex flex-col gap-5 overflow-auto">
      <TaskSearch />

      <section>
        <ul className="flex flex-col gap-2">
          {tasks.length < 1 ? <p> Tasks empty... </p> : 
            tasks.map(ts => <Task key={ts.id} task={ts} />)
          }
        </ul>
      </section>
    </section>
  )
}

export default TaskList