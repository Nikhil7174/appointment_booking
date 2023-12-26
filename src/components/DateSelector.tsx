import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from "react-icons/fa6";


const DateSelector = () => {
    let arr = ["10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45"]

    const [continueButton, setContinueButton] = useState("inactive")
    const [selectedSlot, setSelectedSlot] = useState(null);
    const handleSlotClick = (item: any) => {
        // event.preventDefault();
        setSelectedSlot(item);
        setContinueButton("active");
    };
    console.log(continueButton)
    return (
        <div className='bg-white relative'>
            <div className='flex flex-row justify-between mt-12 items-center px-10'>
                <FaChevronLeft />
                <div>

                    <div className='text-xl font-bold'>
                        Today
                    </div>
                    <div className='text-green-600'>
                        3 slots available
                    </div>
                </div>
                <div>
                    <div className='text-xl font-bold'>
                        Tommorow
                    </div>
                    <div className='text-green-600'>
                        8 slots available
                    </div>
                </div>
                <div>
                    <div className='text-xl font-bold'>
                        Wed 27 Dec
                    </div>
                    <div className='text-green-600'>
                        8 slots available
                    </div>
                </div>
                <FaChevronRight />

            </div>

            <div className='bg-gray-300 mt-4 h-[0.1px]'>

            </div>
            <div>

            </div>
            <div>
                {/* <div className='text-xl font-bold px-10 mt-4'>
                Select a time slot
            </div> */}
                <div className='flex flex-row px-10 mt-4 flex-wrap items-center justify-start '>
                    {arr.map((item) => (
                        <div className={`bg-white border-[1px] border-gray-300 cursor-pointer rounded-md px-44 py-2 mx-4 my-2 ml-5 ${selectedSlot === item ? 'bg-[#0bde24] text-black border-green-600' : ''
                            }`} onClick={() => handleSlotClick(item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div className="absolute right-0 m-5">
                <a href="https://remedoapp.com/rweb/doctors/drmanikdalvi/992acd41-dc20-4334-b7ce-9da565389754" target='_blank'>
                    <button className={`bg-blue-400 ${continueButton === 'active' && 'bg-blue-600 text-white'} text-white px-4 py-2 rounded `} disabled={continueButton === "inactive"} >Your Button</button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default DateSelector