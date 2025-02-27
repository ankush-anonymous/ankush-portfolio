"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const workExperiences = [
  {
    id: "lenze",
    company: "Lenze",
    role: "Software Engineer",
    duration: "2018 - 2021",
    description:
      "Developed high-performance applications focusing on industrial automation and IoT. Integrated cloud-based solutions with real-time analytics.",
    logo: "/logos/lenze.png",
    badge: "Top Innovator Award - 2020",
  },
  {
    id: "honeywell",
    company: "Honeywell",
    role: "Frontend Developer",
    duration: "2021 - 2022",
    description:
      "Designed and implemented highly scalable UI components with React and Tailwind. Led a team in improving accessibility and user experience.",
    logo: "/logos/honeywell.png",
    badge: "Employee of the Month - July 2021",
  },
  {
    id: "causecode",
    company: "CauseCode",
    role: "Full Stack Developer",
    duration: "2022 - Present",
    description:
      "Building full-stack web applications with modern technologies like Next.js, GraphQL, and Serverless Architecture.",
    logo: "/logos/causecode.png",
    badge: "Best Tech Lead - 2023",
  },
  {
    id: "ibm",
    company: "IBM",
    role: "Associate System Engineer",
    duration: "2016 - 2017",
    description:
      "Developed business applications using Microsoft technologies. Transitioned to Node.js and cloud-based architecture.",
    logo: "/logos/ibm.png",
    badge: "IBM APMM Diamond Awards - Emerging Techie",
  },
];

export default function Work() {
  const [selectedWork, setSelectedWork] = useState(workExperiences[0]);

  return (
    <section id="work" className="py-20 bg-gray-200 text-gray-900">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl font-extrabold text-gray-800 mb-12"
        >
          Work Experience
        </motion.h2>

        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Left Sidebar (Company Logos & Names) */}
          <div className="w-full md:w-1/3 bg-gray-900 rounded-l-2xl p-6 space-y-4">
            {workExperiences.map((work) => (
              <motion.button
                key={work.id}
                onClick={() => setSelectedWork(work)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`relative p-4 flex items-center space-x-4 rounded-lg w-full transition-all ${
                  selectedWork.id === work.id
                    ? "bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-lg relative"
                    : "bg-transparent hover:bg-gray-800 text-gray-300"
                }`}
              >
                {/* Neon Glow Effect */}
                {selectedWork.id === work.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg"
                    transition={{ duration: 0.3 }}
                  />
                )}

                {/* Logo & Name */}
                <Image
                  src={work.logo}
                  alt={work.company}
                  width={40}
                  height={40}
                  className="relative z-10 rounded-full"
                />
                <span className="relative z-10 font-semibold text-lg">{work.company}</span>
              </motion.button>
            ))}
          </div>

          {/* Right Side (Job Details) */}
          <motion.div
            key={selectedWork.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-2/3 p-10 rounded-r-2xl bg-gradient-to-br from-gray-100 to-gray-300 shadow-md"
          >
            <h3 className="text-4xl font-bold">{selectedWork.company}</h3>
            <p className="text-indigo-600 text-lg font-semibold mt-2">{selectedWork.role}</p>
            <p className="text-gray-600 text-sm">{selectedWork.duration}</p>
            <p className="mt-6 text-lg leading-relaxed text-gray-800">{selectedWork.description}</p>

            {/* Badge (Achievement) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 inline-flex items-center bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-lg"
            >
              ⭐ {selectedWork.badge}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
