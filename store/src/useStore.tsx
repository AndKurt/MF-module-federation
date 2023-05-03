import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, clear } from './counterSlice'
import { RootState } from './store'

export const useStore = () => {
  const count = useSelector<RootState, number>((state) => state.counter.count)
  const dispatch = useDispatch()

  return {
    count,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    clear: () => dispatch(clear()),
  }
}
