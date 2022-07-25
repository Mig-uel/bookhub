import { createSlice } from '@reduxjs/toolkit'

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: false,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
  },
})

export const { setLoading } = loadingSlice.actions

export default loadingSlice.reducer
