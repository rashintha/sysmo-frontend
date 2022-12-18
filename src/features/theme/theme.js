import { createSlice } from '@reduxjs/toolkit'
import { LIGHT } from './theme.const'

const initialStateValue = LIGHT

const theme = createSlice({
  name: 'theme',
  initialState: { value: initialStateValue },
  reducers: {
    changeTheme: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { changeTheme } = theme.actions

export default theme.reducer
