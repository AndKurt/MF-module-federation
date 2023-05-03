import React from 'react'
import diagram from './diagram.png'

export const About = () => (
  <div className='flex justify-center flex-col items-center text-6xl p-5'>
    Application Diagram
    <div className='mt-5 flex justify-center max-w-5xl'>
      <img className='' src={diagram} alt='Application Diagram' />
    </div>
  </div>
)
