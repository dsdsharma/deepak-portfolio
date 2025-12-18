import { personalInfo } from '@/data/mock';
import { Github, Linkedin, Mail } from 'lucide-react';
import React from 'react'

function Footer() {
   const currentYear = new Date().getFullYear();
 
   return (
     <footer className="bg-black text-white py-12">
       <div className="max-w-7xl mx-auto px-6">
         <div className="flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-center md:text-left">
             <h3 className="text-2xl font-bold mb-2">{personalInfo.name}</h3>
             <p className="text-gray-400">{personalInfo.title}</p>
           </div>
 
           <div className="flex gap-6">
             <a
               href={`mailto:${personalInfo.email}`}
               className="text-gray-400 hover:text-white transition-colors"
               aria-label="Email"
             >
               <Mail className="w-6 h-6" />
             </a>
             <a
               href={personalInfo.linkedin}
               target="_blank"
               rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors"
               aria-label="LinkedIn"
             >
               <Linkedin className="w-6 h-6" />
             </a>
             <a
               href={personalInfo.github}
               target="_blank"
               rel="noopener noreferrer"
               className="text-gray-400 hover:text-white transition-colors"
               aria-label="GitHub"
             >
               <Github className="w-6 h-6" />
             </a>
           </div>
         </div>
 
         <div className="border-t border-gray-800 mt-8 pt-8 text-center">
           <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
             © {currentYear} {personalInfo.name}. All rights reserved.
           </p>
         </div>
       </div>
     </footer>
   );
}

export default Footer