"use client"
import { personalInfo } from '@/data/mock';
import { Button } from '@radix-ui/themes';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import React from 'react'

function Hero() {
  const scrollToSection = (sectionId) => {
     const element = document.getElementById(sectionId);
     if (element) {
       element.scrollIntoView({ behavior: 'smooth' });
     }
   };
 
   return (
     <section className="min-h-screen flex items-center justify-center bg-white pt-20 relative overflow-hidden">
       {/* Abstract Grey Pattern Background */}
       <div className="absolute inset-0 opacity-30">
         <div className="absolute inset-0" style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
           backgroundSize: '60px 60px'
         }}></div>
       </div>
       
       <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
         <div className="max-w-3xl">
           <h1 className="text-6xl md:text-7xl font-bold text-black mb-6 leading-tight">
             {personalInfo.name}
           </h1>
           <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-8">
             {personalInfo.title}
           </h2>
           <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-2xl">
             {personalInfo.bio}
           </p>
 
           <div className="flex flex-wrap gap-4 mb-12">
             <Button
               className="bg-black text-white hover:bg-gray-800"
               size="3"
               onClick={() => scrollToSection('projects')}
             >
               View Projects
             </Button>
             <Button
               variant="outline"
               size="3"
               onClick={() => scrollToSection('contact')}
               className="border-black text-black hover:bg-gray-100"
             >
               Get In Touch
             </Button>
             <Button
               variant="outline"
               size="3"
               onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
               className="border-gray-300 text-gray-700 hover:bg-gray-100"
             >
               <Download className="w-4 h-4 mr-2" />
               Download Resume
             </Button>
           </div>
 
           <div className="flex gap-6">
             <a
               href={`mailto:${personalInfo.email}`}
               className="text-gray-600 hover:text-black transition-colors"
               aria-label="Email"
             >
               <Mail className="w-6 h-6" />
             </a>
             <a
               href={personalInfo.linkedin}
               target="_blank"
               rel="noopener noreferrer"
               className="text-gray-600 hover:text-black transition-colors"
               aria-label="LinkedIn"
             >
               <Linkedin className="w-6 h-6" />
             </a>
             <a
               href={personalInfo.github}
               target="_blank"
               rel="noopener noreferrer"
               className="text-gray-600 hover:text-black transition-colors"
               aria-label="GitHub"
             >
               <Github className="w-6 h-6" />
             </a>
           </div>
         </div>
       </div>
     </section>
   );
}

export default Hero