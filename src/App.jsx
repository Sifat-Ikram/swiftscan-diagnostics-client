import { Outlet } from 'react-router-dom'
import Header from './components/shared/header/Header';
import Footer from './components/shared/footer/Footer';

function App() {

  return (
    <div className='font-lato'>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
