import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Main } from './Main'
import { Cart } from 'cart/Cart'
import { About } from 'about/About'

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/about' element={<About />} />
    </Routes>
  )
}
