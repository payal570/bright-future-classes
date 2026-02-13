"use client"

import React, { useState } from 'react'
import { FaGraduationCap } from "react-icons/fa6";
import { MdLibraryBooks } from "react-icons/md";
import { MdClass } from "react-icons/md";
import NotesModal from '../NotesModel';

export default function Services() {

  const [open, setOpen] = useState(false);

  return (
    <section>
     <div>
        <header className='my-4'>
            <h2 className='text-success'>Why to choose</h2>
          <p className='text-[12px] lg:text-[15px]'>Our website provides best results for all level courses, by choosing our classes, <br/>students will gain a solid foundation and the skills necessory for success in NEET, JEE and beyond.</p>
        </header>

    
       <div className="row align-items-start bg-white border rounded-lg border-gray-300 py-2">
  <div className="col-md-4 mb-3">
    
   <div className='border border-gray-200 rounded-[50%] p-1 w-14 items-center'>
    <div className='border border-gray-200 rounded-[50%] p-2 w-12 items-center bg-green-100'> <FaGraduationCap size={25}/></div>
   </div>
    <h4>Facilities</h4>
    <ul className='text-gray-700 text-[15px]'>
      <li>Fully AC</li>
      <li>Digital Board</li>
      <li>Food & Drinking Water</li>
      <li>Parking</li>
      <li>Good Sitting</li>
    </ul>
  </div>

  <div className="col-md-4 mb-3">
   <div className='border border-gray-200 rounded-[50%] p-1 w-14 items-center'>
    <div className='border border-gray-200 rounded-[50%] p-2 w-12 items-center bg-green-200'> <MdLibraryBooks size={25}/></div>
   </div>
    <h4>Content</h4>
     <div className='text-gray-700 text-[15px]'>
       <p>Content for revision </p>
    <span>Free Downloadable Notes and Questions along with Mock Tests for practice.</span>
     </div>
    <div className='flex flex-row gap-1 mt-2'>

      <button
        className="btn btn-success"
        onClick={() => setOpen(true)}>
        Notes and Mock test
      </button> 

      {open && (
        <NotesModal open={open} onClose={() => setOpen(false)} />
      )}

    </div>
  </div>
  

  <div className="col-md-4">
    <div className='border border-gray-200 rounded-[50%] p-1 w-14 items-center'>
      <div className='border border-gray-200 rounded-[50%] p-2 w-12 items-center bg-green-200'><MdClass size={25}/></div>
    </div>
    <h4>Class and Services</h4>
   <div className='text-gray-700 text-[15px]'>
    <p>All classes courses are available from 5th ownwards,</p>
   <span> 5th to 10th - all courses,</span> <br/>
   <span>11th-12th - PCM and neet - jee along with English speaking courses.</span>
   </div>
  </div>
</div>

        </div>
    </section>
  )
}
