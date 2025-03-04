import React, { useEffect, useState } from "react";
import Logo from "./svg/logo";

const TransitionOverlay = ({ isVisible }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-secondary-dark/90 transition-opacity z-50 ${
        isVisible
          ? "opacity-100"
          : "opacity-0 pointer-events-none  duration-300"
      }`}
    >
      <div className="w-full h-full flex justify-center items-center ">
        <div className="w-48 h-48 text-white animate-pulse">
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default TransitionOverlay;
