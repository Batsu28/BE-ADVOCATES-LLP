import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "./svg/logo";
import { siteConfig } from "../data/siteData";
import CustomLink from "./common/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const router = useLocation();

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  return (
    <header
      role="banner"
      className="fixed top-0 w-full z-50 bg-secondary-dark shadow-sm text-white"
    >
      <div className="container mx-auto">
        <nav role="navigation" aria-label="Main navigation">
          <div className=" flex items-center justify-between p-2">
            {/* Logo */}

            <CustomLink to="/" aria-label="Go to homepage">
              <div className="flex items-center gap-0 hover:opacity-90 duration-100 transition-opacity">
                <div className={`w-12 h-10 rounded-xl`}>
                  <Logo text={false} />
                </div>
                <div className="h-10 w-32">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    height="100%"
                    viewBox="0 0 46 18"
                    // className="bg-black"
                  >
                    <text
                      x="50%"
                      y="11.5"
                      font-family="Times New Roman, serif"
                      font-size="5.5"
                      // fill="black"
                      fill={"currentColor"}
                      stroke={"currentColor"}
                      strokeWidth={0}
                      text-anchor="middle"
                    >
                      ADVOCATES LLP
                    </text>
                  </svg>
                </div>
                {/* <span className={`lg:text-xl font-semibold `}>
                  ADVOCATES LLP
                </span> */}
              </div>
            </CustomLink>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8 ">
              {siteConfig.navigation.map((item) => (
                <CustomLink
                  key={item.path}
                  to={item.path}
                  aria-current={
                    router.pathname === item.path ? "page" : undefined
                  }
                  className={`relative py-1 px-2 text-base font-medium transition-all duration-300
                    ${
                      router.pathname === item.path
                        ? "scale-105"
                        : "text-gray-200 hover:text-white"
                    }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300
                      bg-white
                      ${
                        router.pathname === item.path
                          ? "scale-x-100"
                          : "scale-x-0"
                      }`}
                  />
                </CustomLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={buttonRef}
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">
                {isMenuOpen ? "Close menu" : "Open menu"}
              </span>
              {/* Hamburger icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-16 6h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            ref={menuRef}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="mobile-menu-button"
            className={`lg:hidden transition-all duration-300 ease-in-out 
              ${isMenuOpen ? "max-h-96" : "max-h-0"} overflow-hidden`}
          >
            {siteConfig.navigation.map((item) => (
              <CustomLink
                key={item.path}
                to={item.path}
                role="menuitem"
                aria-current={
                  router.pathname === item.path ? "page" : undefined
                }
                className="block px-4 py-2 text-base font-medium text-gray-600 
              hover:bg-gray-50 hover:text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </CustomLink>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
