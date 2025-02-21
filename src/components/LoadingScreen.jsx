import React, { useEffect } from "react";
import Logo from "./Logo";

const LoadingScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 1000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="w-24 h-24 bg-white rounded-lg animate-fadeIn">
        <Logo />
      </div>
    </div>
  );
};

export default LoadingScreen;
