import { achievements, education, personalInfo } from "@/data/mock";
import { Card } from "@radix-ui/themes";
import { Award, GraduationCap } from "lucide-react";
import Image from "next/image";
import React from "react";

function About() {
  return (
    <section id="about" className="pt-20 pb-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-black"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex-col content-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I&apos;m a passionate Full Stack Developer based in{" "}
              {personalInfo.location} with over 3 years of experience in
              building scalable web and mobile applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My expertise spans across modern technologies including React,
              Next.js, NestJS, and Flutter. I&apos;ve successfully led
              development teams and delivered high-impact projects.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I&apos;m committed to writing clean, maintainable code and
              creating exceptional user experiences. I thrive in collaborative
              environments and enjoy mentoring junior developers.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center relative" >
              <Image src={"/deepak.webp"} fill={true} className="object-cover rounded-lg" alt="Deepak Sharma photo" />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-black" />
            <h3 className="text-2xl font-bold text-black">Education</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu) => (
              <Card
              size={"2"}
                key={edu.id}
                className="p-6 bg-white border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-lg text-black mb-2">
                  {edu.degree}
                </h4>
                <p className="text-gray-700 font-medium mb-2">
                  {edu.institution}
                </p>
                <p className="text-gray-500 text-sm">CGPA: {edu.cgpa}</p>
                <p className="text-gray-500 text-sm">{edu.duration}</p>
                <p className="text-gray-500 text-sm">{edu.location}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-black" />
            <h3 className="text-2xl font-bold text-black">Key Achievements</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 shrink-0"></div>
                <p className="text-gray-700">{achievement}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default About;
