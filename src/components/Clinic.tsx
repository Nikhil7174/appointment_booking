import DateSelector from './DateSelector'

const Clinic = () => {
  return (
    <div className='bg-white pb-40'>
        <div className='font-bold text-2xl px-10'>
            Clinic Name
        </div>
        <div className='flex flex-row ml-10 mt-6 px-10'>
            <div className='bg-green-600 rounded-[50%] w-6 h-6 items-center flex justify-center mr-3'>
                <div className='bg-white rounded-[50%] w-3 h-3 z-20'></div>
            </div>
            <div className='text-lg'>
            Manik Dalvi's Clinic, Kalyan Naka, Rk Business Centre, Opp. Bopal Nagar, Maharashtra, 421302
            </div>
        </div>
        <div>
            <DateSelector />
        </div>
    </div>
  )
}

export default Clinic