"use client"
import { Button } from '@radix-ui/themes';
import React, { useEffect, useState } from 'react'
import { Download } from 'lucide-react';
import { personalInfo } from '@/data/mock';

function Header() {
   const [isScrolled, setIsScrolled] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
     };
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);
 
   const scrollToSection = (sectionId) => {
     const element = document.getElementById(sectionId);
     if (element) {
       element.scrollIntoView({ behavior: 'smooth' });
     }
   };
 
   return (
     <header
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
         isScrolled ? 'bg-white shadow-sm' : 'bg-white'
       }`}
     >
       <div className="max-w-7xl mx-auto px-6 py-4">
         <div className="flex items-center justify-between">
           <button
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="text-xl font-bold text-black hover:text-gray-700 transition-colors"
           >
             DS
           </button>
 
           <nav className="hidden md:flex items-center gap-8">
             <button
               onClick={() => scrollToSection('about')}
               className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
             >
               About
             </button>
             <button
               onClick={() => scrollToSection('experience')}
               className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
             >
               Experience
             </button>
             <button
               onClick={() => scrollToSection('projects')}
               className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
             >
               Projects
             </button>
             <button
               onClick={() => scrollToSection('skills')}
               className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
             >
               Skills
             </button>
             <button
               onClick={() => scrollToSection('contact')}
               className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
             >
               Contact
             </button>
           </nav>
 
           <Button
             className="bg-black text-white hover:bg-gray-800"
             size="2"
             onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
           >
             <Download className="w-4 h-4 mr-2" />
             Resume
           </Button>
         </div>
       </div>
     </header>
   );
}

export default Header