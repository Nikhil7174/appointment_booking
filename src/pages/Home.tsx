import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import profile_doc from '../img/profile_doctor.png'
import { FaClinicMedical } from "react-icons/fa";
import { IoCall, IoVideocam } from "react-icons/io5";
import Clinic from '../components/Clinic';
import Video from '../components/Video';
import Audio from '../components/Audio';
import FrequentlyAsked from '../components/FrequentlyAsked';

const Home = () => {

  const [iconColor1, setIconColor1] = useState('black');
  const [iconColor2, setIconColor2] = useState('black');
  const [iconColor3, setIconColor3] = useState('black');
  const [bg1, setBgColor1] = useState('white');
  const [bg2, setBgColor2] = useState('white');
  const [bg3, setBgColor3] = useState('white');
  const [text1, setTextColor1] = useState('black');
  const [text2, setTextColor2] = useState('black');
  const [text3, setTextColor3] = useState('black');
  const [compVisible, setCompVisible] = useState('clinic');
  // const [audioVisible, setAudioVisible] = useState('hidden');
  // const [videoVisible, setVideoVisible] = useState('hidden');

  const handleIconClick1 = () => {
    const newColor = iconColor1 === 'black' ? 'white' : 'black';
    setIconColor1(newColor);
    setIconColor2("black");
    setIconColor3("black");
    setBgColor1("green-600");
    setBgColor2("white");
    setBgColor3("white");
    setTextColor1("white");
    setTextColor2("black");
    setTextColor3("black");
    setCompVisible('clinic');
  };
  const handleIconClick2 = () => {
    const newColor = iconColor2 === 'black' ? 'white' : 'black';
    setIconColor2(newColor);
    setIconColor1("black");
    setIconColor3("black");
    setBgColor1("white");
    setBgColor2("green-600");
    setBgColor3("white");
    setTextColor1("black");
    setTextColor2("white");
    setTextColor3("black");
    setCompVisible('audio');
  };
  const handleIconClick3 = () => {
    const newColor = iconColor3 === 'black' ? 'white' : 'black';
    setIconColor3(newColor);
    setIconColor2("black");
    setIconColor1("black");
    setBgColor1("white");
    setBgColor2("white");
    setBgColor3("green-600");
    setTextColor1("black");
    setTextColor2("black");
    setTextColor3("white");
    setCompVisible('video');
  };

  return (
    <div className='mt-0 p-0'>
      <Navbar />

      <div style={{height:"fit-content"}} className='bg-gray-300  flex z-10'>
        <div className='bg-white h-screen flex w-full max-w-[1024px] lg:max-w-[1380px] mx-auto'>
          <div className='w-full'>
            <div className='flex flex-row ml-10 mt-7 lg:mt-12'>
              <div className='bg-yellow-400 rounded-[50%] w-[5.5rem] h-[5.4rem] lg:w-[6rem] lg:h-[6rem]  shadow-lg'>
                <img className='w-[6rem] h-fit items-center justify-center ' src={profile_doc}></img>
              </div>
              <div className='flex justify-start flex-col ml-11'>
                <div className='font-bold justify-start flex text-lg'><h2>Dr. Manik Dalvi</h2></div>
                <div className='text-gray-700 text-sm'>Obstetrics & Gynecology</div>
                <div>
                  <button className='bg-white border-[1px] px-2 justify-start flex border-blue-500 text-blue-500 rounded-md py-1 mt-2'>View Profile</button>
                </div>
              </div>
            </div>
            <div className='bg-gray-400 h-[0.5px] w-full my-6 items-center justify-center flex mt-10' ></div>

            <div className='flex flex-col md:flex-row justify-between px-10'>
              <div className='flex flex-row md:flex-col justify-between'>
                <div className='font-bold justify-start flex lg:text-2xl'> Book Appointment</div>
                <div className='flex flex-col'>
                <div className='text-gray-500 text-sm flex justify-start lg:text-xl'> Select Your Consultation Type</div>
                <div className='text-green-600 text-sm flex justify-start lg:text-lg'> Fees approx ₹ 500</div>
                <div className='text-purple-600 text-sm flex justify-start lg:text-lg lg:-mt-1'> (pay at clinic)</div>
                </div>
              </div>
              <div className='flex flex-row space-x-6 mt-10 md:mt-0'>
                <div onClick={handleIconClick1} className={`bg-${bg1} shadow-md cursor-pointer lg:w-[7rem] lg:h-[7rem] rounded-lg w-[5rem] h-[5rem] items-center justify-center flex flex-col`} >
                  <div>
                    <FaClinicMedical color={iconColor1} size={40} />
                  </div>
                  <div className={`text-sm text-${text1}`}>In-Clinic</div>
                </div>
                <div onClick={handleIconClick2} className={`bg-${bg2} shadow-md cursor-pointer lg:w-[7rem] lg:h-[7rem] rounded-lg w-[5rem] h-[5rem] items-center justify-center flex flex-col`} >
                  <div>
                    <IoCall color={iconColor2} size={40} />
                  </div>
                  <div className={`text-sm text-${text2}`}>Audio</div>
                </div>
                <div onClick={handleIconClick3} className={`bg-${bg3} shadow-md cursor-pointer lg:w-[7rem] lg:h-[7rem] rounded-lg w-[5rem] h-[5rem] items-center justify-center flex flex-col`} >
                  <div>
                    <IoVideocam color={iconColor3} size={40} />
                  </div>
                  <div className={`text-sm text-${text3}`}>Video</div>
                </div>
              </div>

            </div>
            <div>
              <div className=' my-10'>
                {compVisible === 'clinic' ? <Clinic /> : null}
                {compVisible === 'audio' ? <Audio /> : null}
                {compVisible === 'video' ? <Video /> : null}
              </div>
            </div>
            <FrequentlyAsked/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home