import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
  logged: false,
}

const auth = createSlice({
  name: 'auth',
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      console.log(action.payload)
      state.value.logged = true
    },
  },
})

export const { login } = auth.actions

export default auth.reducer
