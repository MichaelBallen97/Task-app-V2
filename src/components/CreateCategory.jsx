import { useContext } from "react"
import CategoryIcons from "./CategoryIcons"
import { CategoryGlobalContext } from "../context/CategoryContext"
import { toast } from 'sonner'

function CreateCategory({open, setOpen}) {
  const {handleCreateCategory} = useContext(CategoryGlobalContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const name = formData.get("category-name")
    const imageId = formData.get("category-image")
    const category = {
      title: name,
      image_id: imageId
    }

    handleCreateCategory(category)
    setOpen(false)
    toast('Category created')
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
        <label htmlFor="category-name"> Category Title </label>
        <input type="text" name="category-name" id="category-name" className="bg-gray-700 rounded-lg px-1 py-2" required />
      </fieldset>

      <CategoryIcons />

      <button type="submit" className="bg-gray-700 borde shadow-md shadow-black p-3"> Create Category </button>
    </form>
  </section>
  )
}

export default CreateCategory