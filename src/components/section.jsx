import { useRef } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Section = ({ title, children }) => {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={`transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-full flex flex-col items-center gap-4 mb-12">
        <h1 className="text-3xl font-bold text-center tracking-tight">
          {title}
        </h1>
        <div className="h-1 w-24 bg-black rounded"></div>
      </div>
      {children}
    </section>
  );
};

export default Section;
