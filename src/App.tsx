import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { About } from './components/About'

function App() {

  return (
    <BrowserRouter>
      <div className='text-text bg-background min-h-screen flex flex-col h-full'>
        <Navbar />
        <div className='grow'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
