import 'boxicons'
import { useState } from 'react'
import CreateTask from './CreateTask'
import CreateCategory from './CreateCategory'
import EditCategory from './EditCategory'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedModal, setSelectedModal] = useState('')
  const [openModal, setOpenModal] = useState(false)

  const handleClick = (id) => {
    if(id === 1) {
      setSelectedModal("createTask");
    }

    if(id === 2) {
      setSelectedModal("createCategory");
    }

    if(id === 3) {
      setSelectedModal("editCategory");
    }

    setOpenModal(true);
    setIsOpen(false)
  }

  return (
    <>
      <header className='flex justify-between px-2 py-3 bg-blue-950'>
        <h1 className=' text-xl font-bold'> Task List by: Mb </h1>

        <span className='cursor-pointer' onClick={()=> setIsOpen(!isOpen)}>
          <box-icon name='menu' color="white" animation="tada-hover" />
        </span>

        <nav className={`absolute ${!isOpen ? 'right-[-230px]' : 'right-0'} bottom-0 top-14 z-20 w-full max-w-[220px] transition-all bg-gray-500`}>
          <ul className=' text-left p-2 flex flex-col gap-2'>
            <li className='border-b border-blue-950 p-2 cursor-pointer' onClick={()=> handleClick(1)}> 
              Create Task 
            </li>
            <li className='border-b border-blue-950 p-2 cursor-pointer' onClick={()=> handleClick(2)}>
              Create Category 
            </li>
            <li className='border-b border-blue-950 p-2 cursor-pointer' onClick={()=> handleClick(3)}>
              Edit Category
            </li>
          </ul>
        </nav>
      </header>

      {openModal && selectedModal === 'createTask' && <CreateTask open={openModal} setOpen={setOpenModal} />}
      {openModal && selectedModal === 'createCategory' && <CreateCategory open={openModal} setOpen={setOpenModal} />}
      {openModal && selectedModal === 'editCategory' && <EditCategory open={openModal} setOpen={setOpenModal} />}
    </>
  )
}

export default Header