import { createSlice } from '@reduxjs/toolkit'
import { LIGHT } from './theme.const'

const initialStateValue = {
  theme: LIGHT,
  drawerOpen: false,
}

const theme = createSlice({
  name: 'theme',
  initialState: { value: initialStateValue },
  reducers: {
    changeTheme: (state, action) => {
      state.value.theme = action.payload
    },
    openDrawer: (state) => {
      state.value.drawerOpen = true
    },
    closeDrawer: (state) => {
      state.value.drawerOpen = false
    },
  },
})

export const { changeTheme, openDrawer, closeDrawer } = theme.actions

export default theme.reducer
