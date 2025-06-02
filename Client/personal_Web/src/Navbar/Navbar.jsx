import React, { useState, useEffect } from 'react';
import BookaCall_btn from '../Components/BookaCall-btn';

function Navbar({ name }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen && isMobile) setIsOpen(false);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen, isMobile]);

  return (
    <nav className="w-full top-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[181px] h-auto">
              <span className="font-manrope font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-[#5700FF]">
                {name}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <ul className="flex items-center font-manrope font-medium text-[16px] xl:text-[18px] text-gray-700">
              {['Home', 'About Me', 'Portfolio', 'Contact Me'].map((item) => (
                <li key={item}>
                  <button className="hover:bg-[#F5F3F0] px-4 py-3 xl:px-6 xl:py-4 rounded-md transition-all duration-200">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            <div className="ml-4">
              <BookaCall_btn btn_name="Book a Call" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-[#F5F3F0]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'About Me', 'Portfolio', 'Contact Me'].map((item) => (
              <button
                key={item}
                className="w-full text-left hover:bg-[#F5F3F0] block px-4 py-3 rounded-md text-gray-700 font-manrope font-medium text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </button>
            ))}
            <div className="px-4 py-3">
              <BookaCall_btn btn_name="Book a Call" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
