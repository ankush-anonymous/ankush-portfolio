"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal website showcasing my work, built with Next.js and Tailwind CSS.",
    image: "/projects/portfolio.png", // Replace with actual path
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com",
  },
  {
    title: "E-commerce Store",
    description: "A fully functional e-commerce platform with payment integration.",
    image: "/projects/ecommerce.png",
    tech: ["React.js", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://yourecommerce.com",
  },
  {
    title: "AI Chatbot",
    description: "An AI-powered chatbot using OpenAI API for automated conversations.",
    image: "/projects/chatbot.png",
    tech: ["Python", "OpenAI", "Flask"],
    github: "https://github.com/yourusername/chatbot",
    live: "https://yourchatbot.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl font-extrabold text-white mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:border-indigo-500"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-700 text-gray-200 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white"
                    >
                      <Github size={20} />
                      <span>GitHub</span>
                    </motion.div>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </motion.div>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
