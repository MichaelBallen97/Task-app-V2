import './App.css'
import CategoriesList from './components/CategoriesList'
import Footer from './components/Footer'
import Header from './components/Header'
import TaskList from './components/TaskList'
import CategoryContext from './context/CategoryContext'
import TaksContext from './context/TaksContext'
import { Toaster } from 'sonner'

function App() {

  return (
    <TaksContext>
      <CategoryContext>
        <main className=' w-full max-w-md shadow-md shadow-blue-950 mx-auto flex flex-col gap-8 relative overflow-hidden h-screen'>
          <Toaster />
          <Header />
          <CategoriesList />
          <TaskList />
          <Footer />
        </main>
      </CategoryContext>
    </TaksContext>
  )
}

export default App
