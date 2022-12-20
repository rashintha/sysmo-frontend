import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid'
import { useDispatch, useSelector } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/auth/Login/Login'
import NotFound from './components/errors/NotFound/NotFound'
import { openDrawer, closeDrawer } from './features/theme/theme'

/**
 * Main app
 * @return {JSX.Element} a JSX Eliment
 */
function App() {
  const drawerOpened = useSelector((state) => state.theme.value.drawerOpen)
  const dispatch = useDispatch()

  const toggleDrawer = () => {
    if (drawerOpened) {
      dispatch(closeDrawer())
    } else {
      dispatch(openDrawer())
    }
  }

  return (
    <div className='background h-screen'>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>

      <div className={`fixed right-0 inset-y-1/4 h-2/6 z-20 flex flex-row duration-500 ease-in-out transition-width
        ${drawerOpened ? 'w-2/12' : 'w-8'}`}>
        <div onClick={toggleDrawer} className='bg-slate-50 rounded-l h-min p-1 shadow cursor-pointer hover:bg-slate-100'>
          <ArrowsRightLeftIcon className='w-6'></ArrowsRightLeftIcon>
        </div>
        <div className={`bg-white w-11/12 h-full shadow duration-500 ease-in-out transition-all transform 
          ${drawerOpened ? 'translate-x-0' : 'translate-x-full'}`}></div>
      </div>
    </div>
  )
}

export default App
