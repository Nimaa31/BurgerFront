import React from 'react'
import Logo from '../../../media/svg/Logo-burger-house.svg'


export default function Headers() {
  return (
    <div className='flex items-center justify-between py-5 pl-5 bg-black' >

        <div className='bg-red-500 h-20 w-full'>
                <img src={Logo} alt='Burger House' className='w-64'/>    
         </div>
        <div className='bg-green-500 h-20 w-full'>
            
         </div>

    </div>
  )
}
