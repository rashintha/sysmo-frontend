import { useSelector } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/auth/Login/Login'
import NotFound from './components/errors/NotFound/NotFound'
import RightDrawer from './components/settings/RightDrawer'

/**
 * Main app
 * @return {JSX.Element} a JSX Eliment
 */
function App() {
  const theme = useSelector((state) => state.theme.value.theme)
  const logged = useSelector((state) => state.auth.value.logged)

  if (!logged) {
    return (<div className={`background h-screen ${theme}`}>
      <Login></Login>
      <RightDrawer />
    </div>
    )
  }

  return (
    <div className={`background h-screen ${theme}`}>
      <Router>
        <Routes>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>

      <RightDrawer />
    </div>
  )
}

export default App
