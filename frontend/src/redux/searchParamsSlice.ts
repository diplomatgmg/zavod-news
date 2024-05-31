import { type TSearchParams } from '../types/types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: TSearchParams = {
  page: 1
}

const searchParamsSlice = createSlice({
  name: 'searchParams',
  initialState,
  reducers: {
    setPage (state, action: PayloadAction<TSearchParams['page']>) {
      state.page = action.payload
    }
  }
})

export const {
  setPage
} = searchParamsSlice.actions

export default searchParamsSlice.reducer
