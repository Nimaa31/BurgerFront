import React from 'react'

export default function Container({children}) {
  return (
    <div className='max-w-6xl bg-gray-50 h-full m-auto'>
        {children}
    </div>

  )
}
