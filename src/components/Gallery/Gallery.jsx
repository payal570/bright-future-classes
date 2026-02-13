"use client";

import Image from "next/image";
import React, { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [index, setIndex] = useState(-1);

  const galleryImg = [
    { src: "/groupphoto-boys4.jpg" },
    { src: "/group-photo3.jpeg" },
    { src: "/groupphoto-with-cake.jpg" },
    { src: "/photo2.jpg" },
    { src: "/class-students3.jpeg" },
    { src: "/groupphoto-girls3.jpg" },
    { src: "/jr-class-students3.jpg" },
    { src: "/class-photo1.jpeg" },
    { src: "/center-building3.jpeg" },
  ];

  const visibleImages = showAll ? galleryImg : galleryImg.slice(0, 3);

  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        {visibleImages.map((item, i) => (
          <div
            key={i}
            className="relative border rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.src}
              width={400}
              height={400}
              alt=""
              className="w-full h-full object-cover"
            />

            {!showAll && i === 2 && galleryImg.length > 3 && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setShowAll(true);
                }}
                className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center"
              >
                <span className="text-white text-4xl font-bold">+</span>
                <span className="text-white text-sm mt-1">See more</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {showAll && (
        <div className="flex justify-center mt-5">
          <button
            onClick={() => setShowAll(false)}
            className="btn btn-success px-6 py-2 rounded-[10px] bg-green-700 hover:bg-green-800 text-white" >
            Show less
          </button>
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={galleryImg}
      />
    </div>
  );
}
