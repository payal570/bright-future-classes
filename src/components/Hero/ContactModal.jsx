"use client";
import { IoLogoWhatsapp } from "react-icons/io";
import { CgPhone } from "react-icons/cg";

export default function ContactModal({ open, setOpen }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-md rounded-xl p-6 relative animate-fadeIn">

        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black">
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">
          Get in Touch
        </h2>

        <div>
          <p>Get connect through a call</p>
           <a
              href="tel:7206404241"
              className="flex items-center w-full px-4 py-2 text-sm text-black hover:bg-gray-100"><CgPhone size={20} className="mr-2"/>
              7206404241
            </a>
            <p>Drop a message</p>
            <a
              href="https://wa.me/917206404241"
              className="flex items-center w-full px-4 py-2 text-sm text-black hover:bg-gray-100">
             <IoLogoWhatsapp size={20} className="mr-2"/>  Whatsapp
            </a>
        </div>

      </div>
    </div>
  );
}
