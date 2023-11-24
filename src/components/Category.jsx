import { useContext } from "react"
import CategoryIcon from "./CategoryIcon"
import { TasksGlobalContext } from "../context/TaksContext"
import { CategoryGlobalContext } from "../context/CategoryContext"

function Category({ category }) {
  const {handlefilterTasksCategory} = useContext(TasksGlobalContext)
  const {selectedCategory, setSelectedCategory} = useContext(CategoryGlobalContext)

  const handleClick = () => {
    if(category) {
      handlefilterTasksCategory(category.id)
      setSelectedCategory(category.id)
    } else {
      handlefilterTasksCategory("All")
      setSelectedCategory("All")
    }
  }

  const active = selectedCategory === category?.id

  return (
    <li className={`p-2 rounded-lg cursor-pointer ${active ? "bg-gray-500" : "bg-gray-700" }`} onClick={handleClick}>
      <article className="flex gap-1 justify-center items-center">
        { category ?
          <>
            <CategoryIcon id={category.image_id} />
            <span> {category.title} </span>
          </>
          : 
          <>
            <CategoryIcon id="All" />
            <span> All </span>
          </>
        }
      </article>
    </li>
  )
}

export default Category