import Courses from "../components/Courses/Courses";
import Faculty from "../components/Faculty/Faculty";
import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
// import CourseSection from "@/components/courses/CourseSection";

export default function Home() {
  return (
    <div className="bg-light">
      <div className="container pb-4">
        <div className="block"><Hero/></div>
       <div className="block"> <Courses/></div>
        <div className="block"><Services/></div>
       <div className="block"> <div className="my-2 text-[10px] lg:text-[15px]">
          <h2 className="text-success font-bold text-xl text-center mt-4 pt-4 mb-1">Gallery</h2>
          Explore to our Bright Future Classes with some captured moments</div>
        <Gallery/></div>
       <div className="block"><div className="my-4">
          <h2 className="text-success font-bold text-xl text-center mt-4 pt-4">Faculty for You</h2>
        </div>
        <Faculty/></div>
         <div className="block"><div className="my-4 text-[11px] lg:text-[15px]">
          <h2 className="text-success font-bold text-xl text-center mt-4 pt-4 mb-1">Testimonials</h2>
          Here are some students scored great achievements studying with Bright Future Classes
        </div>
        <Testimonials/></div>
      </div>
    </div>
  );
}
