import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { About } from './components/about/About'
import { Background } from './components/Background'

function App() {

  return (
    <BrowserRouter>
      <div className='text-text flex flex-col pt-20'>
        <Navbar />
        <div className='grow min-h-screen relative'>
          <Background/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/stars' element={<Background/>} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
