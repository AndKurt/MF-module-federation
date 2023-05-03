import React from 'react'
import { useStore } from 'store/useStore'

export const Cart = () => {
  const { count, clear } = useStore()
  return (
    <div className='p-5 flex justify-center flex-col items-center h-screen bg-gray-100'>
      <div className='flex text-7xl'>
        Number of items to buy:
        <div className='text-7xl'>{count}</div>
      </div>
      <button onClick={clear} className='bg-yellow-600 text-white font-bold py-2 px-4 rounded'>
        Remove all
      </button>
    </div>
  )
}
