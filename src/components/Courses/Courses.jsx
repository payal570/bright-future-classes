"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const courses = [
  { id: 1, 
    title: "Course1", 
    desc: "Bright Future Classes", 
    image: "/bright-future-banner-class 1-10.jpg",
    details:"Bright Future Classes offers quality academic seeving for school students, focusing on strong fundamentals, exam-oriented teaching, and personal attention.",
    Offered:"3rd to 8th - All Subjects,  9th & 10th - Science &Mathematics",
    Subjects:"Subjects - Mathematics, Science, All core school Subjects(for classes 3-8)",
    Features:"Weekend Classes Available, Structured learning with experienced educators"
  },
  { id: 2, title: "Course2", 
    desc: "Bright Future Classes – Classes V to XII", 
    image: "/brightclasses-v-xii.jpg",
    details:"Bright Future Classes provides a friendly, disciplined, and concept-based learning environment for school students, helping them build strong academic foundations and achieve consistent results.",
    Offered:"5th to 10th - All Subjects,  11th & 12th - PCM(Physics, Chemistry, Mathematics).",
    Subjects:"Mathematics, Science, Physics, Chemistry, All core school Subjects(for classes 5-10).",
    Features:"Weekend Classes Available, Structured learning with experienced educators."
   },
  { id: 3, title: "Course3", 
    desc: "Bright Future Classes", 
    image: "/brightclasses-sci,maths,eng.jpg",
    details:"Bright Future Classes offers quality academic seeving for school students, focusing on strong fundamentals, exam-oriented teaching, and personal attention.",
    Offered:"3rd to 10th - All core Subjects,  9th & 12th - Science, Mathematics, English",
    Subjects:"Mathematics, Science, English, All core school Subjects(for classes 3-8)",
    Features:"Expert Teacher, Weekly Test, Study Material Included"
   },
  { id: 4, title: "Course4", 
    desc: "Bright Future Classes – NEET | IIT-JEE",
    image: "/bright-classes-neet-iit.jpg",
    details:"Bright Future Classes offers focused and result-oriented coaching for students preparing for NEET and IIT-JEE, with strong emphasis on concepts, problem-solving, and competitive exam readiness.",
    Offered:"11th & 12th, Medical and Engineering aspirants",
    Subjects:"Mathematics, Physics, Chemistry",
    Features:"NCERT-based teaching, Exempler & Objective questions, Previous Year Question(PYQs), Concept-based notes, Regular Mock Tests"
   },
  { id: 5, title: "Course5", 
    desc: "Bright Future Classes-(CBSE, ICSE, HBSE)", 
    image: "/bright-future-classes-banner.jpg",
   details:"Bright Future Classes provides comprehensive academic coaching for students across multiple boards (CBSE, ICSE, HBSE), focusing on strong concepts, excellent results, and exam success.",
    Offered:"3rd to 10th - All Subjects,  9th to 12th - Science, Mathematics & English",
    Subjects:"Mathematics, Science, English, All core school Subjects(for classes 3-10)",
    Features:"Speacial Batches for Engineering & Diploma students are also welcome, Result-oriented teaching approach, Highly recommended by parents"
   },
  { id: 6, title: "Course6", 
    desc: "Spoken English – Speak with Confidence", 
    image: "/Spoken-english1.jpg",
    details:"Our Spoken English program is designed to help students  communicate confidently in English, improve fluency, and develop strong speaking skills for everyday life, and academics.",
    Offered:"Spoken English basics to advanced, Grammar for daily conversation Vocaboulary building, Prnunciation & accent improvement, Publick speaking & confidence building",
    Subjects:"Skills you will Develop- Confident English speaking, Clear pronunciation, Better listening & understanding, Improved communication skills",
    Features:"Class Mode- Interactive session, Practice-oriented learning, Friendly and supportive enviornment"
  },
];

export default function CourseSlider() {
  const [previewImg, setPreviewImg] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <>
      {/* SECTION */}
      <section className="py-16 px-6 md:px-10">
        <h2 className="text-success font-bold text-xl text-center">
          COURSES AVAILABLE
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={25}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              {/* CARD */}
              <div
                onClick={() => setPreviewImg(course.image)}
                className="relative h-85 rounded-[18px] overflow-hidden cursor-pointer"
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />

                {/* CARD OVERLAY */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-black/20 flex flex-col justify-end p-5 text-white">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCourse(course);
                    }}
                    className="bg-lime-500 text-white rounded-full px-4 py-1 text-xs w-fit mb-2"
                  >
                    EXPLORE NOW
                  </button>

                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <p className="text-sm opacity-90">{course.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* IMAGE PREVIEW MODAL */}
      {previewImg && (
        <div
          onClick={() => setPreviewImg(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[85%] max-w-3xl h-[70vh] rounded-2xl overflow-hidden"
          >
            <Image src={previewImg} alt="Preview" fill className="object-cover" />
          </div>
        </div>
      )}

      {/* COURSE DETAILS OVERLAY */}
      {selectedCourse && (
        <div
          onClick={() => setSelectedCourse(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden"
          >
            {/* IMAGE */}
            <div className="relative h-60">
              <Image
                src={selectedCourse.image}
                alt={selectedCourse.title}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 text-gray-800">
              <h2 className="text-[12px] lg:text-xl font-bold mb-2">
                {selectedCourse.desc}
              </h2>

              {/* <p className="text-sm mb-4">
                {selectedCourse.desc}
              </p> */}

             <div className="flex flex-col">
              <div className="text-[10px] lg:text-[13px]">{selectedCourse.details}</div>
              <div className="text-[10px] lg:text-[13px]"><span className="font-semibold">Course/Clases offered-</span>{selectedCourse.Offered}</div>
              <div className="text-[10px] lg:text-[13px]"><span className="font-semibold">Subjects to study-</span>{selectedCourse.Subjects}</div>
              <div className="text-[10px] lg:text-[13px]"><span className="font-semibold">Additional Features-</span>{selectedCourse.Features}</div>
             </div>

              <button
                onClick={() => setSelectedCourse(null)}
                className="mt-3 bg-lime-500 text-white px-4 py-1.5 rounded text-sm">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
