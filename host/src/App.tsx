import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link } from 'react-router-dom'

import { StoreProvider } from 'store/StoreProvider'
import { useStore } from 'store/useStore'
import { Header } from 'nav/Header'

import { Routing } from './Routing'
import './index.scss'

const pages = [
  {
    path: '/',
    element: (
      <Link to='/' className='mr-5 text-yellow-300'>
        Main
      </Link>
    ),
  },
  {
    path: '/cart',
    element: (
      <Link to='/cart' className='mr-5 text-yellow-300'>
        Cart
      </Link>
    ),
  },
  {
    path: '/about',
    element: (
      <Link to='/about' className='mr-5 text-yellow-300'>
        About
      </Link>
    ),
  },
]

const App = () => {
  const { count, clear } = useStore()

  return (
    <>
      <Header count={count} onClear={clear} pages={pages} />
      <Routing />
    </>
  )
}
ReactDOM.render(
  <BrowserRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('app')
)
