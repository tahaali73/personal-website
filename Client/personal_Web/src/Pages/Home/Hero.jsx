import React from 'react';
import BookaCall_btn from '../../Components/BookaCall-btn';

function Hero() {
  return (
    <div className="w-full min-h-screen flex flex-col-reverse md:flex-col lg:flex-row items-center justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Content Section */}
      <div className="w-full lg:w-1/2 max-w-4xl flex flex-col items-center lg:items-start justify-between gap-8 lg:gap-16 mt-10 md:mt-0 lg:pr-8">
        {/* Greeting */}
        <div className="w-full max-w-[150px] sm:max-w-[172px] h-10 sm:h-[49px] flex items-center justify-center font-manrope font-normal text-base sm:text-lg md:text-xl rounded-xl bg-[#F5F3F0]">
          Hello There 🤗
        </div>
        
        {/* Main Content */}
        <div className="w-full flex flex-col justify-between gap-5 md:gap-8">
          <h1 className="font-manrope font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight text-[#1A1A1A] text-center lg:text-left">
            Taha Ali Welcome's You!
          </h1>
          
          <p className="font-manrope font-normal text-sm sm:text-base md:text-lg text-[#4D4D4D] max-w-3xl text-center lg:text-left">
            I am a passionate and experienced web designer, dedicated to creating visually stunning and highly functional websites. Explore my portfolio to see the power of effective design in action.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-4">
            <BookaCall_btn btn_name='Book a Call' className="w-[132px] h-[49px] text-sm sm:text-base" />
            <a href="#" className="font-manrope font-medium text-sm sm:text-base text-[#1A1A1A] hover:text-[#5700FF] transition-colors flex items-center">
              View Portfolio <span className="ml-1 sm:ml-2 text-lg sm:text-xl">→</span>
            </a>
          </div>
        </div>

        {/* Stats Section - Mobile optimized layout */}
        <div className="w-full mt-6 sm:mt-8">
          {/* Desktop/Tablet Layout (3 columns) */}
          <div className="hidden sm:grid grid-cols-3 gap-4 sm:gap-6">
            {[
              { value: "55+", label: "Completed Projects" },
              { value: "20+", label: "Happy Customers" },
              { value: "08+", label: "Years of Experience" }
            ].map((stat, index) => (
              <div key={`desktop-${index}`} className="flex flex-col justify-between items-center sm:items-start p-3 sm:p-0">
                <span className="font-manrope font-bold text-2xl sm:text-3xl md:text-4xl text-[#333333]">
                  {stat.value.split('+')[0]}
                  <span className='text-[#5700FF]'>+</span>
                </span>
                <span className="font-manrope font-medium text-xs sm:text-sm md:text-base text-[#4D4D4D] mt-1 sm:mt-2 text-center sm:text-left">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          
          {/* Mobile Layout (2 columns) */}
          <div className="sm:hidden grid grid-cols-2 gap-4">
            {/* First Column (Completed Projects - full width) */}
            <div className="col-span-2 flex flex-col justify-between items-center p-3">
              <span className="font-manrope font-bold text-3xl text-[#333333]">
                55<span className='text-[#5700FF]'>+</span>
              </span>
              <span className="font-manrope font-medium text-sm text-[#4D4D4D] mt-2 text-center">
                Completed Projects
              </span>
            </div>
            
            {/* Second Column (Happy Customers + Years of Experience) */}
            <div className="flex flex-col justify-between items-center p-3">
              <span className="font-manrope font-bold text-3xl text-[#333333]">
                20<span className='text-[#5700FF]'>+</span>
              </span>
              <span className="font-manrope font-medium text-sm text-[#4D4D4D] mt-2 text-center">
                Happy Customers
              </span>
            </div>
            
            <div className="flex flex-col justify-between items-center p-3">
              <span className="font-manrope font-bold text-3xl text-[#333333]">
                08<span className='text-[#5700FF]'>+</span>
              </span>
              <span className="font-manrope font-medium text-sm text-[#4D4D4D] mt-2 text-center">
                Years of Experience
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 max-w-2xl relative flex justify-center mb-8 sm:mb-12 lg:mb-0 lg:justify-end">
        <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[442px] h-auto aspect-[0.65] sm:aspect-[0.6] lg:aspect-[0.7]">
          {/* Main Image */}
          <div className="bg-[#f7f7f7] relative w-full h-full overflow-hidden rounded-[20px] sm:rounded-[20px] shadow-lg sm:shadow-xl lg:shadow-2xl ">
            <img 
              src='src/assets/Image.png' 
              alt="Taha Ali" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;