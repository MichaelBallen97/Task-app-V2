import { useContext } from "react"
import { TasksGlobalContext } from "../context/TaksContext"

function TaskSearch() {
  const {handlefilterTasks} = useContext(TasksGlobalContext)

  const handleSearch = (e) => {
    handlefilterTasks(e.target.value)
  }

  return (
    <section className="sticky top-0 bg-black">
      <input 
        type="search" 
        className="w-full bg-gray-700 rounded-lg p-2" 
        placeholder="Search your task..."
        onChange={handleSearch}
      />
      <span className="absolute right-3 top-0 bottom-0 flex items-center">
        <box-icon name='search' color="rgb(156, 163, 175)"></box-icon>
      </span>
    </section>
  )
}

export default TaskSearch