import React from 'react'
import { useStore } from 'store/useStore'

export const Main = () => {
  const { count, increment, decrement } = useStore()

  return (
    <div className='text-3xl mx-auto'>
      <div className='p-10'>
        <div>Page: MAIN</div>
        <div className='flex'>
          Count: <p className='ml-2 text-red-600'>{count}</p>
        </div>
        <div>
          <button onClick={increment} className='bg-green-600 text-white font-bold py-2 px-4 rounded'>
            Add To Cart
          </button>
          <button onClick={decrement} className='bg-red-200 text-white font-bold py-2 px-4 rounded ml-4'>
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  )
}
