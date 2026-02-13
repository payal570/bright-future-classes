import Image from 'next/image'
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { CgPhone } from "react-icons/cg";
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-green-800 text-gray-300 py-8'>
      <div className='container grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
        <div className='flex flex-col text-[11px] lg:text-[14px]'>
         <div><Image src='/bright-future-cls-logo (1).jpg' width={100} height={100} alt='logo'/></div>
        <div className='mt-6 pt-3 flex flex-row gap-4'> <a
    href="https://t.me/https://t.me/bc1_4"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:scale-110 transition"
  >
    <FaTelegram size={50} color='white'/>
  </a>
    <a
    href="https://chat.whatsapp.com/https://whatsapp.com/channel/0029Vb7JsNAIN9igHVY9fl24"
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-500 hover:scale-110 transition">
    <IoLogoWhatsapp size={50} color='white'/>
  </a></div>
        </div>

        <div>
            <p className='text-xl lg:text-3xl text-gray-100'>Contact</p>
            <div>
                <p className='lg:text-[17px] text-gray-200 pb-0 mb-0 flex'><IoLocationSharp className='mr-2 mt-1'/>Address</p>
                <span className='text-[13px] mb-3'>House No.-742, Ward No.-3, Dharmveer Colony, Gharaunda,Karnal,Haryana</span>
            </div>
            <div>
                <p className='lg:text-[17px] text-gray-200 mb-0 mt-2 flex'><CgPhone className='mr-2 mt-1'/>Phone</p>
                <span className='text-[13px] mb-3 pb-2'>7206404241, 9306078554</span>
            </div>
            <div>
                <p className='lg:text-[17px] text-gray-200 mb-0 mt-2 flex'><MdEmail className='mr-2 mt-1'/>Email</p>
                <span className='text-[13px] mb-3 pb-2'>mittaltarun712@gmail.com</span>
            </div>
            <div>
                <p className='lg:text-[17px] text-gray-200 mb-0 mt-2 flex align-middle'><MdEmail className='mr-2 mt-1'/>Other Contact</p>
                <span className='text-[13px]'>mittal_tarun17@yahoo.co.in</span>
            </div>
        </div>

        <div className='flex flex-col lg:text-[15px] text-[13px]'>

            <span className='lg:mt-4'>Bright Future classes welcomes all students from school student to Engineering and Diploma Students.</span>
          <span className='my-0.5'>It is highly recommended by parents.</span>
          <span className='mb-3'> Weekend classes are also available</span>
            
         <span>Bright Future Classes provides Physics, Chemistry, Mathematics, 11th & 12th NCERT, Exampler, Objective PYQs Assertion and reasoning, Notes with concept, Mock tests.</span>

        </div>
      </div>
      <div className='bg-white h-px w-80% mt-3'></div>
      <div className='text-center mt-2'>© 2026 BrightFuture Classes</div>
    </div>
  )
}
