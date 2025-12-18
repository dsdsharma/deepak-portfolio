import { skills } from '@/data/mock'
import { Card } from '@radix-ui/themes'
import Image from 'next/image'
import React from 'react'

function Skills() {
  return (
   <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-black"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <Card size={"2"} key={category} className="p-8 bg-gray-50 border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-black mb-6">{category}</h3>
              <div className="grid grid-cols-4 gap-6">
                {items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center group cursor-pointer"
                    title={skill.name}
                  >
                    <div className="w-12 h-12 flex items-center justify-center mb-2 transition-transform group-hover:scale-110">
                      <Image
                      height={10}
                      width={10}
                        src={skill.logo}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-xs text-gray-600 text-center group-hover:text-black transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills