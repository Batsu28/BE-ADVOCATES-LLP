import React from "react";
import { Link } from "react-router-dom";
import Logo from "./svg/logo";
// import { ReactComponent as LawIcon } from "../assets/icons/law-icon.svg"; // Import your SVG icon

const CoverSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-dark to-secondary-dark text-white h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute top-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl"></div>

      <div className="relative z-10 text-center max-w-2xl px-4">
        {/* <LawIcon className="w-24 h-24 mx-auto mb-6" aria-label="Law Icon" /> */}
        <div className="w-56 h-56 mx-auto text-yellow-500">
          <Logo stroke={"white"} />
        </div>
        {/* <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-500 stroke-white">
          Advocates LLP
        </h1> */}
        <p className="text-lg md:text-xl mb-8">
          Хууль зүйн үйлчилгээний итгэлтэй түнш, мэргэжлийн зөвлөгөө, төлөөлөл
          үзүүлнэ.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-4 bg-secondary-light text-white font-semibold rounded-lg 
          hover:bg-secondary transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default CoverSection;
