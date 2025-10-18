import React from 'react'
const Nave = () => {
  return (
    <div>
      <div className='flex items-center p-5 border-b-[1px]'>
        <div className='w-[30%] pl-5 text-2xl cursor-pointer font-bold text-center '>Hiredesk</div>
        <div className='flex justify-evenly text-l font-semibold pr-5 w-[70%]'>
        <div className='hover:border-b cursor-pointer '>Home</div>
        <div className='hover:border-b cursor-pointer '>Features</div>
        <div className='hover:border-b cursor-pointer '>Pricing</div>
        <div className='hover:border-b cursor-pointer '>About</div>
        </div>
      </div>
    </div>
  )
}

export default Nave
