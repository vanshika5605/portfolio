import React from 'react';
import { Twitter, Linkedin, Mail } from 'lucide-react';

const Contact = ({contactRef}) => {
  return (
    <section
      className="text-lightText dark:text-darkText theme-transition"
      ref={contactRef}
    >
    <div className="min-h-[400px] bg-lightTertiaryColor text-lightText dark:bg-darkTertiaryColor dark:text-darkText p-20 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h1 className="text-6xl font-bold mb-8">
            Hey there!
          </h1>
          
          <p className="text-2xl font-light">
            I'm always up for a chat.
          </p>
          
          <div className="space-y-2">
            <p className="text-xl">
              Pop me an email at{' '}
              <a 
                href="mailto:vanshikaagrawal56@gmail.com" 
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                vanshikaagrawal56@gmail.com
              </a>
            </p>
            <p className="text-xl">
              or give me a shout on social media.
            </p>
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-4 pt-4">
            <a 
              href="#twitter" 
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vanshika-agrawal-438463188/" 
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:vanshikaagrawal56@gmail.com" 
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {/* Decorative Circle with Avatar */}
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] mt-8 md:mt-0">
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <div className="w-[300px] h-[300px] bg-lightPrimaryColor dark:bg-darkPrimaryColor rounded-full flex items-center justify-center">
              {/* You can replace this with your own avatar image */}
              <div className="w-48 h-48 bg-lightTertiaryColor dark:bg-darkTertiaryColor rounded-full flex items-center justify-center">
                <span className="text-6xl">👋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-2/3 h-full">
        <div className="absolute inset-0 bg-lightPrimaryColor dark:bg-darkPrimaryColor opacity-60 rounded-l-full transform translate-x-1/4"></div>
      </div>
    </div></section>
  );
};

export default Contact;