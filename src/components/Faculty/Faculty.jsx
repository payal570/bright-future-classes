import Image from 'next/image'
import { FcBusinessman } from "react-icons/fc";
import { CgPhone } from "react-icons/cg";
import { FaGraduationCap } from "react-icons/fa6";
import React from 'react'

export default function Faculty() {

    const faculty = [
        {
            title:'Tarun Mittal',
            url:'/tarun-mittal.jpg',
            edu:'B-Tech in Mechanical Engineering',
            post:' Lecturer in Hindu College of Engineering, Sonipat, Haryana',
            phn:'7206404241',
        },
          {
            title:'Shilpi Gupta',
            url:'/Shilpi Gupta.jpg',
            edu:'MSc, MCA and B.Ed Master in Python',
            post:'PGT in Sunrise Public School, Gharaunda, Karnal, Haryana',
            phn:'9306078554',
        },
    ]

  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
        {faculty.map((item,index)=>(
           <div key={index} className="flex flex-row bg-white border rounded-lg border-gray-300">
             <div>
                <Image src={item.url} width={200} height={250} alt={item.title}/>
            </div>
           <div className='flex flex-col mt-6 mx-5'>
            <span className='text-[14px] lg:text-[20px] p-1.5 lg:p-3 bg-green-200 rounded-2xl'>{item.title}</span>
            <span className='p-2 text-[10px] lg:text-[14px] md:text-[12px] flex flex-row'><FaGraduationCap size={20} className='mr-2 mt-1'/>{item.edu}</span>
            <span className='pl-2 text-gray-500 text-[9px] md:text-[12px] lg:text-[14px] flex flex-row'><FcBusinessman size={30} className='mr-2 mt-1'/>{item.post}</span>
            <span className='p-2 text-[11px] lg:text-[14px] flex flex-row'><CgPhone className='mr-2 mt-1'/>{item.phn}</span>
           </div>
           </div>
        ))
        }
    </div>
  )
}
