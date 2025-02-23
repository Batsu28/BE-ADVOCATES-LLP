import { useState } from "react";

const Image = ({ src, alt, className = "", ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
};

export default Image;
