import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-200 h-14 items-center flex justify-around'>
      <div className='bg-red-400 rounded-[50%] p-2 cursor-pointer'>
        MD
      </div>
      <div className=' p-2 cursor-pointer'>
        Help?
      </div>
    </div>
  )
}

export default Navbar