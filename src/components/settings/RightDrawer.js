import { Cog6ToothIcon } from '@heroicons/react/24/solid'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme, closeDrawer, openDrawer } from '../../features/theme/theme'
import { LIGHT, DARK } from './../../features/theme/theme.const'


const RightDrawer = () => {
  const theme = useSelector((state) => state.theme.value.theme)
  const drawerOpened = useSelector((state) => state.theme.value.drawerOpen)
  const dispatch = useDispatch()

  const onCheckChange = (e) => {
    dispatch(changeTheme(theme === LIGHT ? DARK : LIGHT))
  }

  const toggleDrawer = () => {
    if (drawerOpened) {
      dispatch(closeDrawer())
    } else {
      dispatch(openDrawer())
    }
  }

  return (
    <div className={`fixed right-0 inset-y-1/4 h-min z-20 flex flex-row duration-500 ease-in-out transition-width overflow-x-hidden
        ${drawerOpened ? 'w-2/12' : 'w-8'}`}>
      <div onClick={toggleDrawer} className='bg-slate-50 dark:bg-slate-800 rounded-l h-min p-1 shadow cursor-pointer
          hover:bg-slate-100 dark:hover:bg-slate-700'>
        <Cog6ToothIcon className='w-6 dark:text-white'></Cog6ToothIcon>
      </div>
      <div className={`bg-white dark:bg-slate-800 w-11/12 h-full shadow`}>
        <div className="px-4 py-4 flex flex-col">
          <div className="font-bold text-center dark:text-white">
            Theme Settings
          </div>
          <div className="mt-4">
            <label className="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" onChange={onCheckChange} checked={theme !== LIGHT} className="sr-only peer"></input>
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4
              peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700
              peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute
              after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full
              after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span>
            </label>
          </div>
        </div>
      </div>
    </div>

  )
}

export default RightDrawer
