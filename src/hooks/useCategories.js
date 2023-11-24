import { useReducer } from "react";
import { v4 } from "uuid";
import { toast } from 'sonner'

function useCategories () {
  const initialCategories = window.localStorage.getItem("categories") ? 
  JSON.parse(window.localStorage.getItem("categories")) : []

  const categoriesReducer = (state, action) => {
    if(action.type === 'CREATE_CATEGORY') {
      const newCategories = [...state, action.payload]
      window.localStorage.setItem("categories", JSON.stringify(newCategories))
      return newCategories
    }

    if(action.type === 'DELETE_CATEGORY') {
      const newCategories = state.filter(category => category.id != action.payload)
      window.localStorage.setItem("categories", JSON.stringify(newCategories))
      return newCategories
    }

    if(action.type === 'EDIT_CATEGORY') {
      const newCategories = state.map(category => {
        if(category.id === action.payload.id) {
          return {...category, title: action.payload.title}
        }
        return category
      })
      window.localStorage.setItem("categories", JSON.stringify(newCategories))
      return newCategories
    }
  }

  const [categories, dispatch] = useReducer(categoriesReducer, initialCategories)

  const handleCreateCategory = (category)=> {
    console.log(category)
    dispatch({
      type: 'CREATE_CATEGORY',
      payload: {...category, id: v4()}
    })
  }

  const handleDeleteCategory = (id)=> {
    dispatch({
      type: 'DELETE_CATEGORY',
      payload: id
    })

    toast('Category deleted')
  }

  const handleEditCategory = (id, title)=> {
    dispatch({
      type: 'EDIT_CATEGORY',
      payload: {id, title}
    })
  }

  return {
    categories,
    handleCreateCategory,
    handleDeleteCategory,
    handleEditCategory
  }
}

export default useCategories;