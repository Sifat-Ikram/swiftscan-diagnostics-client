import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './components/pages/home_page/home/Home'
import ErrorPage from './components/shared/error_page/ErrorPage'

function App() {

  return (
    <div>
       <Outlet></Outlet>
    </div>
  )
}

export default App
