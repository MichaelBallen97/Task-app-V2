import { useContext } from "react"
import { TasksGlobalContext } from "../context/TaksContext"
import { CategoryGlobalContext } from "../context/CategoryContext"
import { toast } from 'sonner'

function CreateTask({open, setOpen}) {
  const {handleAddTask} = useContext(TasksGlobalContext)
  const {categories} = useContext(CategoryGlobalContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const task = {title: formData.get("task-name"), done: false, category: ["All", formData.get("task-category")]}

    handleAddTask(task)
    setOpen(false)
    toast('Task created')
  }

  return (
    <section className="absolute w-full p-2 h-screen z-40">
      <span 
        className="absolute right-0 top-0 rounded-full p-2 bg-white flex justify-center items-center cursor-pointer"
        onClick={()=> setOpen(!open)}
      >
        <box-icon name='x'></box-icon>
      </span>

      <form className="bg-gray-500 h-full flex flex-col gap-5 p-8" onSubmit={handleSubmit}>
        <fieldset className="flex flex-col gap-2 text-left">
          <label htmlFor="task-name"> Task Title </label>
          <input type="text" name="task-name" id="task-name" className="bg-gray-700 rounded-lg px-1 py-2" required />
        </fieldset>

        <fieldset className="flex flex-col gap-2 text-left">
          <label htmlFor="task-category"> Category </label>
          <select name="task-category" id="task-category" className="bg-gray-700 rounded-lg px-1 py-2" required>
            {categories.map(category => <option key={category.id} value={category.id}>{ category.title }</option> )}
          </select>
        </fieldset>

        <button type="submit" className="bg-gray-700 borde shadow-md shadow-black p-3"> Create Task </button>
      </form>
    </section>
  )
}

export default CreateTask