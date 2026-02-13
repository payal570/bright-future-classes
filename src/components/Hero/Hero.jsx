'use client'

import Image from "next/image";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Hero() {
    const [open, setOpen] = useState(false);

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">

        <div>
          <h1 className="text-3xl font-bold mb-4">
            Highly recommended by Parents
          </h1>
          <p className="text-gray-600 mb-6">
            Build your future bright with BrightFuture classes.
          </p>

          <nav className="navbar navbar-light bg-light mb-6 mt-8">
            <button
          onClick={() => setOpen(true)}
          className="px-6 py-2 bg-green-600 text-white rounded-2 hover:bg-green-700 transition">
          Get a free consultation
        </button>

      <ContactModal open={open} setOpen={setOpen} />
</nav>
          {/* <SearchBar /> */}
        </div>

        <div className="col-lg-6 text-center">
          <Image
            src="/bright-classes-neet-iit.jpg"
            alt="Bright Future Classes"
            width={500}
            height={500}
            className="img-fluid"
            priority/>
        </div>
      </div>
    </section>
  );
}


