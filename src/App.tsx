import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/Footer'
import { About } from './components/about/About'
import { Background } from './components/Background'
import { Reachout } from './components/Reachout'

function App() {

  return (
    <BrowserRouter>
      <div className='text-text flex flex-col pt-20 min-h-dvh max-w-5xl mx-auto'>
        <Navbar />
        <Background/>
        <div className='grow relative' >
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/stars' element={<Background/>} />
            <Route path='/reach-out' element={<Reachout/>} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
