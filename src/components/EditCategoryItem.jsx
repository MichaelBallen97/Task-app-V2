import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { CategoryGlobalContext } from '../context/CategoryContext';
import { toast } from 'sonner'

function EditCategoryItem({category, setOpen}) {
  const {handleDeleteCategory, handleEditCategory} = useContext(CategoryGlobalContext)

  const [newTitle, setNewTitle] = useState(category.title)

  const handleInputChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    handleEditCategory(category.id, newTitle)
    setOpen(false)
    toast('Category edited')
  }

  return (
    <li>
      <form className="flex gap-1 w-full" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="category-new-title" 
          id="category-new-title" 
          className="bg-gray-700 w-full p-1" 
          value={newTitle} 
          onChange={handleInputChange}
        />

        <div className="flex gap-2">
          <button type='submit' className="p-1 border-2 border-green-800 flex">
            <box-icon name='edit-alt' color="rgb(22 101 52)" /> 
          </button>
          <button type='button' className="p-1 border-2 border-red-800 flex" onClick={()=> handleDeleteCategory(category.id)}> 
            <box-icon name='trash-alt' color="rgb(153 27 27)" />
          </button>
        </div>
      </form>
    </li>
  )
}

export default EditCategoryItem