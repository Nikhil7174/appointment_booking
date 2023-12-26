const Navbar = () => {
  return (
    <div className='bg-white z-20 h-14 lg:h-[5rem] items-center flex justify-around shadow-md sticky'>
      <div className='bg-red-400 rounded-[50%] p-4 cursor-pointer shadow-2xl'>
        MD
      </div>
      <div className='text-xl p-2 cursor-pointer'>
        Help?
      </div>
    </div>
  )
}

export default Navbar