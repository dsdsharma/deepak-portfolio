import { experience } from "@/data/mock";
import { Card } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

function Experience() {
  return (
    <section id="experience" className="pb-24 pt-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-black"></div>
        </div>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div key={exp.id} className="relative">
              {index !== experience.length - 1 && (
                <div className="absolute left-10 top-24 bottom-0 w-px bg-gray-300 hidden md:block"></div>
              )}

              <Card  size={"3"} className="p-8 bg-white border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex gap-6">
                  <div className="shrink-0 hidden md:block">
                    <div className="w-20 h-20 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center overflow-hidden p-2">
                      <Image
                        width={100}
                        height={100}
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-fill"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-black mb-2">
                          {exp.position}
                        </h3>
                        <p className="text-lg font-medium text-gray-700 mb-1">
                          {exp.company}
                        </p>
                        <p className="text-sm text-gray-500">{exp.location}</p>
                      </div>
                      <span className="text-sm font-medium text-gray-600 bg-gray-100 px-4 py-2 rounded-full mt-4 md:mt-0 inline-block">
                        {exp.duration}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex gap-3 text-gray-700">
                          <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0"></span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
