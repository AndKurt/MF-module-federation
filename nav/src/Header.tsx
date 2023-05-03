import React, { ReactNode } from 'react'

interface IProps {
  count: number
  onClear: () => void
  pages: { path: string; element: ReactNode }[]
}

export const Header = ({ count, onClear, pages }: IProps) => (
  <header className='bg-gray-600 text-white font-bold text-3xl p-5 flex'>
    <div className='flex-grow pt-2 flex'>
      MicroFrontend
      <p className='ml-2 text-yellow-200'>DEMO CART</p>
    </div>
    <div className='flex mr-10 mt-2'>
      {pages.map(({ path, element }) => (
        <React.Fragment key={path}>{element}</React.Fragment>
      ))}
    </div>
    <div className='mt-2 mr-5 text-red-600'>{count}</div>
    <button onClick={onClear} className='bg-yellow-600 text-white font-bold py-2 px-4 rounded'>
      Clear Cart
    </button>
  </header>
)
