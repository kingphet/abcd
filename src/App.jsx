
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Abouts from './pages/Abouts'
import Work from './pages/Work'
import Contect from './pages/Contact'


function App() {

  return (
  <>
    <BrowserRouter>
         <Header />
            <Routes>
                 <Route path='/' element={<Home />} />
                 <Route path='/work' element={<Work />} />
                 <Route path='/about' element={<Abouts />} />
                 <Route path='/contect' element={<Contect />} />
            </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
