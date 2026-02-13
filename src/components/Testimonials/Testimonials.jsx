"use client";

import Image from "next/image";
import { FaPenAlt } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import React, { useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const testimonial = [
    {
      title: "Krish Mittal",
      url: "/krish-mittal-grade.jpg",
      class: "10th",
      marks: "96.2%",
    },
    {
      title: "Arnav Singla",
      url: "/arnav-singla-grade.jpg",
      class: "10th",
      marks: "95.8%",
    },
    {
      title: "Harsh Singla",
      url: "/Harsh singla3.jpeg",
      class: "10th",
      marks: "96.4%",
    },
  ];

  const scrollRef = useRef(null);
  const [preview, setPreview] = useState(null);

  // ✅ Auto scroll on mobile
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let index = 0;

    const interval = setInterval(() => {
      if (window.innerWidth >= 1024) return; // stop on lg

      index = (index + 1) % testimonial.length;
      el.scrollTo({
        left: el.clientWidth * index,
        behavior: "smooth",
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        ref={scrollRef}
        className="
          flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth
          lg:grid lg:grid-cols-3 lg:overflow-visible
        "
      >
        {testimonial.map((item, index) => (
          <div
            key={index}
            onClick={() => setPreview(item)}
            className="
              min-w-[90%] snap-center cursor-pointer
              flex flex-row bg-white border rounded-lg border-gray-300
              lg:min-w-0
            "
          >
            <Image
              src={item.url}
              width={200}
              height={250}
              alt={item.title}
            />

            <div className="flex flex-col mt-3 lg:mt-6 mx-2 lg:mx-5">
              <span className="text-[12px] lg:text-[20px] p-2 lg:p-3 bg-green-200 rounded-2xl">
                {item.title}
              </span>

              <span className="p-2 text-[12px] lg:text-[15px] flex gap-1 items-center">
                <FaGraduationCap /> Class-{item.class}
              </span>

              <span className="pl-2 text-[12px] lg:text-[15px] flex gap-1 items-center">
                <FaPenAlt /> Percentage-{item.marks}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Preview Modal */}
      {preview && (
        <div
          onClick={() => setPreview(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-4 rounded-xl max-w-md w-[90%]"
          >
            <Image
              src={preview.url}
              width={400}
              height={500}
              alt={preview.title}
              className="rounded"
            />

            <h2 className="text-lg font-semibold mt-3">
              {preview.title}
            </h2>

            <p className="text-sm mt-1">
              Class {preview.class} • {preview.marks}
            </p>

            <button
              onClick={() => setPreview(null)}
              className="mt-4 px-4 py-2 bg-gray-200 rounded-full w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
