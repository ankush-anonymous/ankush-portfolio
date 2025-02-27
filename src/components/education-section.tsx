"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    id: "bachelor",
    degree: "Bachelor's in Computer Science",
    institution: "XYZ University",
    duration: "2018 - 2022",
    description:
      "Specialized in Full Stack Development, Data Structures, and Algorithms. Worked on multiple projects in AI and Web Development.",
  },
  {
    id: "highschool",
    degree: "High School",
    institution: "ABC International School",
    duration: "2016 - 2018",
    description:
      "Completed coursework in Mathematics, Physics, and Computer Science. Developed strong analytical and programming skills.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl font-extrabold text-gray-800 mb-12"
        >
          Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-xl shadow-lg flex flex-col space-y-4 border-l-4 border-indigo-500"
            >
              <div className="flex items-center space-x-4">
                <GraduationCap size={30} className="text-indigo-600" />
                <h3 className="text-2xl font-bold">{edu.degree}</h3>
              </div>
              <p className="text-lg text-gray-700">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.duration}</p>
              <p className="text-gray-700">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
