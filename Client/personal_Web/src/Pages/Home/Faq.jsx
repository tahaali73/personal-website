import React, { useState, useRef, useEffect } from 'react';
import BookaCall_btn from '../../Components/BookaCall-btn';
import FAQSection from '../../Components/FaqComp';

function Faq() {
  const faqContainerRef = useRef(null);
  const [showScrollArrow, setShowScrollArrow] = useState(false);
  
  const faqs = [
    {
      question: 'What is the meaning of life?',
      answer: 'The meaning of life is a philosophical question.',
    },
    {
      question: 'How do I get started?',
      answer: 'You can get started by reading our documentation.',
    },
    {
      question: 'What services do you offer?',
      answer: 'I offer a full range of web design services including UI/UX design, responsive development, and e-commerce solutions.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity, but most websites take 4-8 weeks from concept to launch.',
    },
    {
      question: 'Do you offer ongoing maintenance?',
      answer: 'Yes, I offer monthly maintenance plans to keep your website secure, updated, and performing optimally.',
    },
    {
      question: 'What is your pricing structure?',
      answer: 'I offer both project-based pricing and retainer options depending on your needs.',
    },
    {
      question: 'Can you redesign my existing website?',
      answer: 'Absolutely! I specialize in modernizing outdated websites with improved design and functionality.',
    },
    {
      question: 'Do you provide hosting services?',
      answer: 'While I don\'t provide hosting directly, I can recommend reliable hosting providers and help with setup.',
    },
  ];

  // Check if FAQ content overflows its container
  useEffect(() => {
    const checkOverflow = () => {
      if (faqContainerRef.current) {
        const hasOverflow = faqContainerRef.current.scrollHeight > faqContainerRef.current.clientHeight;
        setShowScrollArrow(hasOverflow);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    
    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, []);

  const scrollDown = () => {
    if (faqContainerRef.current) {
      faqContainerRef.current.scrollBy({
        top: 200,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="font-semibold font-manrope text-2xl sm:text-3xl md:text-4xl lg:text-[38px] text-[#333333] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="font-normal font-manrope text-base md:text-lg text-[#4D4D4D] max-w-3xl mx-auto">
            Here are answers to some common questions
          </p>
        </div>

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* FAQ Section - Scrollable */}
          <div className="w-full lg:w-2/3 relative">
            <div 
              ref={faqContainerRef}
              className="overflow-y-auto hide-scrollbar max-h-[600px]"
            >
              <FAQSection faqs={faqs} />
            </div>
            
            {/* Scroll Down Arrow */}
            {showScrollArrow && (
              <div className="absolute bottom-0 left-0 right-0 flex justify-center pt-4 bg-gradient-to-t from-[#faf9f7] to-transparent">
                <button 
                  onClick={scrollDown}
                  className="animate-bounce bg-[#5700FF] rounded-full p-2 shadow-lg"
                  aria-label="Scroll down"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            )}
          </div>
          
          {/* "Still have questions" Panel - Fixed */}
          <div className="w-full lg:w-1/3">
            <div className="bg-[#F7F6F3] rounded-xl p-6 md:p-8 shadow-lg h-full">
              <div className="flex flex-col justify-between h-full">
                <div className="mb-6 flex justify-center">
                  <div className="bg-[#5700FF] rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="font-manrope font-semibold text-xl md:text-2xl text-[#333333] mb-4">
                    Still have any Questions?
                  </h3>
                  <p className="font-manrope font-normal text-base text-[#4D4D4D]">
                    Let's collaborate to create an exceptional website that sets you apart from the competition. Contact me today to discuss your web design needs and bring your digital vision to life!
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <BookaCall_btn 
                    btn_name="Contact Me" 
                    className="w-full max-w-[200px] h-[49px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default Faq;