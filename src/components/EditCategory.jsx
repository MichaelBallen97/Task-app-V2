import React from 'react'
import { useContext } from 'react'
import { CategoryGlobalContext } from '../context/CategoryContext'
import EditCategoryItem from './EditCategoryItem'

function EditCategory({open, setOpen}) {
  const {categories} = useContext(CategoryGlobalContext)

  return (
    <section className="absolute w-full p-2 h-screen z-40">
      <span 
        className="absolute right-0 top-0 rounded-full p-2 bg-white flex justify-center items-center cursor-pointer"
        onClick={()=> setOpen(!open)}
      >
        <box-icon name='x'></box-icon>
      </span>

      <ul className="bg-gray-500 h-full flex flex-col gap-5 p-8 list-none">
        {categories.map(category => <EditCategoryItem key={category.id} category={category} setOpen={setOpen} />)}
      </ul>
    </section>
  )
}

export default EditCategory