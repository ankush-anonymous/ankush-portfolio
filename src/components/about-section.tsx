"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code, Star } from "lucide-react";
import Image from "next/image";

const experiences = [
  { title: "Software Developer", company: "ABC Tech", year: "2022 - Present", icon: <Briefcase /> },
  { title: "Bachelor's in CS", company: "XYZ University", year: "2020 - 2024", icon: <GraduationCap /> },
  { title: "Open Source Contributor", company: "GitHub", year: "2021 - Present", icon: <Code /> },
  { title: "Best Developer Award", company: "International Hackathon", year: "2023", icon: <Star /> },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        {/* Left Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <Image 
            src="/profile.jpg" // Replace with your image
            alt="Ankush Choudhary"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
        </motion.div>

        {/* Right Side: Text + Experience */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-6 md:mt-0 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
          <p className="mt-4 text-lg text-gray-600">
            I am a passionate Full Stack Developer specializing in modern web technologies, 
            open-source contributions, and building scalable applications.
          </p>

          {/* Experience Cards */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-4 bg-white shadow-lg rounded-lg flex items-center space-x-4"
              >
                <div className="text-primary text-3xl">{exp.icon}</div>
                <div>
                  <h3 className="text-lg font-bold">{exp.title}</h3>
                  <p className="text-sm text-gray-600">{exp.company}</p>
                  <p className="text-xs text-gray-400">{exp.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
