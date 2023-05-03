import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      if (state.count === 0) {
        state.count = 0
      } else {
        state.count -= 1
      }
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload
    },
    clear: (state) => {
      state.count = 0
    },
  },
})

export const { increment, decrement, incrementByAmount, clear } = counterSlice.actions

export default counterSlice.reducer
