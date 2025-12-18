"use client";
import { projects } from "@/data/mock";
import { Badge, Button, Card } from "@radix-ui/themes";
import { Code, ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";

function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Projects/ Work
          </h2>
          <div className="w-20 h-1 bg-black"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden bg-white border-gray-200 hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-56 bg-gray-200 overflow-hidden">
                <Image
                  height={500}
                  width={500}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-center group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-xs font-semibold rounded-full">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      // variant="secondary"
                      className="bg-gray-100 text-gray-700 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {project.liveUrl && (
                  <Button
                    variant="outline"
                    size="2"
                    className="w-full border-black text-black hover:bg-black hover:text-white"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                )}
                {!project.liveUrl && (
                  <div className="flex items-center justify-center gap-2 text-gray-400 text-sm py-2">
                    <Code className="w-4 h-4" />
                    <span>Internal Project</span>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
