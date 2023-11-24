import { createContext } from "react"
import useCategories from "../hooks/useCategories";
import { useState } from "react";

export const CategoryGlobalContext = createContext()

function CategoryContext({children}) {
  const {categories, handleCreateCategory, handleDeleteCategory, handleEditCategory} = useCategories()
  const [selectedCategory, setSelectedCategory] = useState("All")

  return (
    <CategoryGlobalContext.Provider 
    value={{
      categories, 
      handleCreateCategory, 
      handleDeleteCategory, 
      handleEditCategory,
      selectedCategory,
      setSelectedCategory
      }}
    >
      {children}
    </CategoryGlobalContext.Provider>
  )
}

export default CategoryContext