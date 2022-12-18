import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/auth/Login/Login'
import NotFound from './components/errors/NotFound/NotFound'

/**
 * Main app
 * @return {JSX.Element} a JSX Eliment
 */
function App() {
  return (
    <div className='background h-screen'>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
