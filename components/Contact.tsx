"use client"
import { personalInfo } from '@/data/mock'
import { Button, Card } from '@radix-ui/themes'
import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'

function Contact() {
  return (
   <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card size={"2"} className="p-8 bg-white border-gray-200 hover:shadow-lg transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-black mb-2">Email</h3>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-700 hover:text-black transition-colors break-all"
              >
                {personalInfo.email}
              </a>
            </Card>

            <Card size={"2"} className="p-8 bg-white border-gray-200 hover:shadow-lg transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-4">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-black mb-2">LinkedIn</h3>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition-colors"
              >
                /in/dsdsharma
              </a>
            </Card>

            <Card size={"2"} className="p-8 bg-white border-gray-200 hover:shadow-lg transition-shadow text-center justify-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-full mb-4">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-black mb-2">GitHub</h3>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition-colors"
              >
                @dsdsharma
              </a>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="4"
              className="bg-black text-white hover:bg-gray-800"
              onClick={() => window.location.href = `mailto:${personalInfo.email}`}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send me an email
            </Button>
          </div>
        </div>
      </div>
    </section>  )
}

export default Contact