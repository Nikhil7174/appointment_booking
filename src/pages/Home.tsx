import React from 'react'
import Navbar from '../components/Navbar'
import profile_doc from '../img/profile_doctor.png'

const Home = () => {
  return (
    <div className='mt-0 p-0'>
        <Navbar />

      <div className='bg-gray-300 h-screen flex'>
      <div className='bg-white h-screen flex w-full max-w-[1024px] mx-auto'>
        <div className='w-full'>
        <div className='flex flex-row ml-10 mt-5'>
          <div className='bg-yellow-400 rounded-[50%] w-[5.5rem] h-[5.4rem]  '>
            <img className='w-[6rem] h-fit items-center justify-center ' src={profile_doc}></img>
          </div>
          <div className='flex justify-start flex-col ml-11'>
            <div className='font-bold justify-start flex'>Dr. Manik Dalvi</div>
            <div>Obstetrics & Gynecology</div>
            <div>
              <button className='bg-white border-[1px] px-2 justify-start flex border-blue-500 text-blue-500 rounded-md py-1 mt-2'>View Profile</button>
            </div>
          </div>
        </div>
        <div className='bg-gray-400 h-1 w-full m-5 items-center justify-center' ></div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home