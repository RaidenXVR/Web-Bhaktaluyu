import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LogBookPage from './pages/LogBookPage'

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/logs/:day' element={<LogBookPage />} />
      </Routes>
    </div >
  )
}

export default App
