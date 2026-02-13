import Image from "next/image";
import { FiDownload } from "react-icons/fi";


export default function Class10Notes() {
  return (
    <section className="bg-green-50 py-12">
      <h2>Coming Soon....</h2>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT CONTENT */}
        {/* <div>
          <h1 className="text-4xl font-bold mb-4">Class 10th Notes</h1>

          <h2 className="text-2xl text-green-600 mb-3">Science</h2>
          <ul className="list-disc ml-6 space-y-1 mb-6">
            <li className="flex flex-row gap-2">01.
                <a href="/pdfs/class10/science/1. Solutions (1).pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
              <a href="/pdfs/class10/science/1. Solutions (1).pdf">Solutions</a>
             </li>
            <li className="flex flex-row gap-2">02.
                <a href="/pdfs/class10/science/Chemical Reaction And Equations.pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
              <a href="/pdfs/class10/science/Chemical Reaction And Equations.pdf" target="_blank" className="no-underline text-black">
                Chemical Reactions and Equations
              </a>
            </li>
            <li className="flex flex-row gap-2">03.
                <a href="/pdfs/class10/science/Acids Bases Salts.pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
              <a href="/pdfs/class10/science/Acids Bases Salts.pdf" target="_blank" className="text-black"> Acids, Bases and Salts </a>
            </li>
            <li className="flex flex-row gap-2">04.
                <a href="/pdfs/class10/science/Metals and non-Metals.pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
              <a href="/pdfs/class10/science/Metals and non-Metals.pdf" className="text-black">Metals and Non-Metals</a>
            </li>
           <li className="flex flex-row gap-2">05.
              <a href="/pdfs/class10/science/metals.pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
            <a href="/pdfs/class10/science/metals.pdf" className="text-black">Metals</a>
           </li>

           <li className="flex flex-row gap-2">06.
              <a href="/pdfs/class10/science/6-LIFE PROCESSES (1) (1).pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
            <a href="/pdfs/class10/science/6-LIFE PROCESSES (1) (1).pdf" className="text-black">Life Processes</a>
           </li>

           <li className="flex flex-row gap-2">07.
              <a href="/pdfs/class10/science/Control & coordination FARREY + CYQ (1).pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
            <a href="/pdfs/class10/science/Control & coordination FARREY + CYQ (1).pdf" className="text-black">Control and Cordination</a>
           </li>

           <li className="flex flex-row gap-2">08.
              <a href="/pdfs/class10/science/8-HOW DO ORGANISMS REPRODUCE.pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
            <a href="/pdfs/class10/science/8-HOW DO ORGANISMS REPRODUCE.pdf"className="text-black">How Do Organisms Reproduce</a>
           </li>
           <li className="flex flex-row gap-2">09.
              <a href="/pdfs/class10/science/10-Sci-Heredity-and-Evolution-Notes.pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
            <a href="/pdfs/class10/science/10-Sci-Heredity-and-Evolution-Notes.pdf" className="text-black">Heredity and Evolution</a>
           </li>
           <li className="flex flex-row gap-2">10.
              <a href="/pdfs/class10/science/10-Sci-The-Human-Eye-and-The-Colourful-World-Notes.pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
            <a href="/pdfs/class10/science/10-Sci-The-Human-Eye-and-The-Colourful-World-Notes.pdf" className="text-black">The Human Eye and The Colourful World</a>
           </li>
           <li className="flex flex-row gap-2">11.
              <a href="/pdfs/class10/science/Electricity.pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
            <a href="/pdfs/class10/science/Electricity.pdf" className="text-black">Electricity</a>
           </li>
           <li className="flex flex-row gap-2">12.
              <a href="/pdfs/class10/science/10-Sci-Magnetic-Effects-of-Electric-Current-Notes.pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
            <a href="/pdfs/class10/science/10-Sci-Magnetic-Effects-of-Electric-Current-Notes.pdf" className="text-black">Magnitic Effects of Electric Current</a>
           </li>
           <li className="flex flex-row gap-2">13.
              <a href="/pdfs/class10/science/light farrey.pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
            <a href="/pdfs/class10/science/light farrey.pdf" className="text-black">Light</a>
           </li>
           <li className="flex flex-row gap-2">14.
              <a href="/pdfs/class10/science/10-Sci-Our-Environment-Notes.pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
            <a href="/pdfs/class10/science/10-Sci-Our-Environment-Notes.pdf" className="text-black">Our Enviornment</a>
           </li>
          </ul>

          <h2 className="text-2xl text-green-600 mb-3">Mathematics</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li className="flex flex-row gap-2">01. 
             <a href="/pdfs/class10/maths/real numbers.pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
              <a href="/pdfs/class10/maths/real numbers.pdf" target="_blank" className="text-black"> Real Numbers</a>
            </li>
            <li className="flex flex-row gap-2">02.  
              <a href="/pdfs/class10/maths/polyniomials.pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
              <a href="/pdfs/class10/maths/polyniomials.pdf" target="_blank" className="text-black"> Polynomials </a>
            </li>
            <li className="flex flex-row gap-2">03.  
              <a href="/pdfs/class10/maths/pair of linear equation.pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
              <a href="/pdfs/class10/maths/pair of linear equation.pdf" className="text-black">Pair of Linear Equations in Two Variables</a>
            </li>
            <li className="flex flex-row gap-2">04.  
              <a href="/pdfs/class10/maths/quadric equation.pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
              <a href="/pdfs/class10/maths/quadric equation.pdf" className="text-black">Quadric Equations</a>
            </li>
           <li className="flex flex-row gap-2">05.  
            <a href="/pdfs/class10/maths/arithmatic progression.pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
            <a href="/pdfs/class10/maths/arithmatic progression.pdf" className="text-black">Arithmetic Progression</a>
           </li>
           <li className="flex flex-row gap-2">06.  
            <a href="/pdfs/class10/maths/triangles.pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
            <a href="/pdfs/class10/maths/triangles.pdf" className="text-black">Triangles</a>
           </li>
           <li className="flex flex-row gap-2">07.  
            <a href="/pdfs/class10/maths/coordinating geometry.pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
            <a href="/pdfs/class10/maths/coordinating geometry.pdf" className="text-black">Cordinate Geometry</a>
           </li>
           <li className="flex flex-row gap-2">08.  
            <a href="/pdfs/class10/maths/introduction+to+trigonometry.pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
            <a href="/pdfs/class10/maths/introduction+to+trigonometry.pdf" className="text-black">Introduction to Trigonometry</a>
           </li>
           <li className="flex flex-row gap-2">09.  
            <a href="/pdfs/class10/maths/applicaations  to trigonometry.pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
            <a href="/pdfs/class10/maths/applicaations  to trigonometry.pdf" className="text-black">Applications to Trigonometry</a>
           </li>
           <li className="flex flex-row gap-2">10.  
            <a href="/pdfs/class10/maths/areas+related+to+circles.pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
            <a href="/pdfs/class10/maths/areas+related+to+circles.pdf" className="text-black">Areas Related to Circles</a>
           </li>
           <li className="flex flex-row gap-2">11.
            <a href="/pdfs/class10/maths/circle.pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
            <a href="/pdfs/class10/maths/circle.pdf" className="text-black">Circles</a>
           </li>
           <li className="flex flex-row gap-2">12. 
            <a href="/pdfs/class10/maths/surface area and volume.pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
            <a href="/pdfs/class10/maths/surface area and volume.pdf" className="text-black">Surface Area and Volume</a>
           </li>
           <li className="flex flex-row gap-2">13.  
            <a href="/pdfs/class10/maths/statistics.pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
            <a href="/pdfs/class10/maths/statistics.pdf" className="text-black">Statistic</a>
           </li>
            <li className="flex flex-row gap-2">14.
              <a href="/pdfs/class10/maths/probability.pdf" download className="text-green-600 hover:text-green-800" title="Download PDF"><FiDownload size={20} /> </a>
              <a href="/pdfs/class10/maths/probability.pdf" className="text-black">Probability</a>
            </li>
          </ul>
        </div> */}

        {/* RIGHT IMAGE */}
        <div>
          <Image
            src="/notes-img.jpg"
            alt="Class 10 Notes"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>

      </div>
    </section>
  );
}
