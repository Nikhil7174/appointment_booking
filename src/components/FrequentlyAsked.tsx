import {useState} from 'react'
import { FaCircleArrowDown } from "react-icons/fa6";

const FrequentlyAsked = () => {

  let questions = ["What are the payment options available?","Do we serve all over India?","What are the walk-in options available?","Are online consultations available?","How long will my appointment take?","Is any referral required for appointments?", "How can I book an appointment?","Do I need to bring anything at my first appointment?"]

  let answers = ["E.g, You can pay using a variety of methods such as Internet Banking, Debit/Credit card, Wallet, UPI, and so on.","We are currently based in Bhiwandi, however, we offer services nationwide via online consultations.","We offer services at our clinics located at Bhiwandi", "Yes, we offer teleconsultation and onlineservices. Book an appointment at link provided.", "The length of your appointment is determined by the condition or injuries being treated, as well as whether or not x-rays or an MRI are required. Please allow at least one hour for doctors to provide personalized attention and high-quality care.","No, we do not require a referral for the appointments.","You can click on the book appointment link.","You may bring the following documents, if available: ID Proof Prior medication list Any prior diagnosis documentation X-RAY reports"]

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index: number) => {
    //@ts-ignore
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  return (
    <div className='px-10  bg-green-500 p-16  xs:w-full'>
        <div className='font-bold text-2xl flex items-center justify-center'>
            Frequently asked questions
        </div>
        <div>
        {questions.map((question, index) => (
          <div key={index} className="mb-4 text-center flex flex-col items-center">
            {/* <button
              className="text-lg font-semibold mb-2 focus:outline-none"
              onClick={() => handleToggle(index)}
            >
              {question}
            </button> */}
              <div className=' items-center px-4 py-3 flex flex-row justify-between w-[25rem] sm:w-[30rem] md:w-[70rem] max-w-[50rem] bg-white rounded-sm mt-5 cursor-pointer' onClick={() => handleToggle(index)}>
                <div className='text-lg md:mr-36'>{question}</div><div><FaCircleArrowDown style={{ fontSize: '24px', color: 'green', backgroundColor:"white" }}/></div>
            </div>
            {expandedIndex === index && (
              <div className="text-gray-700 flex-wrap px-4 py-3 flex flex-row justify-between  w-[25rem] sm:w-[30rem] md:w-[70rem] max-w-[50rem] bg-white rounded-sm border-t-2">{answers[index]}</div>
            )}
          </div>
        ))}

          

        </div>
    </div>
  )
}

export default FrequentlyAsked