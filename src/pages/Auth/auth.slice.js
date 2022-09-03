import { createSlice } from '@reduxjs/toolkit'
// const auth = createSlice({ name: 'auth', initialState: {} })

// const authReducer = auth.reducer
// export default authReducer
const counterSlice = createSlice({
  name: 'auth',
  initialState: {}
  // reducers: {
  //   increment: state => ({
  //     ...state,
  //     count: state.count + 1
  //   })
  // }
})

export default counterSlice.reducer
