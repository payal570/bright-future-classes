"use client";

import { useState } from "react";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { CgPhone } from "react-icons/cg";

export default function Navbar() {
  const [contactOpen, setContactOpen] = useState(false);


  return (
    <nav className="bg-green-800 text-white sticky top-0 z-50">
      <div className=" container max-w-8xl mx-auto px-4">

        {/* Top bar */}
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex items-center gap-3">
           <Image src="/bright-future-cls-logo (1).jpg" alt="logo" width={120} height={50} className="w-20 h-auto transition-all duration-300"/>
            <span className="hidden lg:inline font-semibold text-lg content-center">BrightFuture Classes</span>
          </div>

         {/* Contact dropdown */}
            <div className="relative mr-2">
              <button
                onClick={() => setContactOpen(!contactOpen)}
                className="bg-white text-green-700 px-4 py-1 rounded-full font-medium">
                Contact
              </button>

              {contactOpen && (
               <div className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-lg overflow-hidden">
              <a
                href="tel:7206404241"
                className="flex items-center w-full px-4 py-2 text-sm text-black hover:bg-gray-100"><CgPhone size={20} className="mr-2"/>
                7206404241
              </a>
              <a
                href="https://wa.me/917206404241"
                className="flex items-center w-full px-4 py-2 text-sm text-black hover:bg-gray-100">
              <IoLogoWhatsapp size={20} className="mr-2"/>  Whatsapp
              </a>
              <a
                href="mailto:info@brightfuture.com"
                className="flex items-center w-full px-4 py-2 text-sm text-black hover:bg-gray-100"><MdEmail size={20} className="mr-2"/>
                mittaltarun712@gmail.com
              </a>
            </div>

                          )}
                </div>
              </div>
          

      </div>
    </nav>
  );
}
