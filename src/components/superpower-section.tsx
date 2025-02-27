"use client";
import { motion } from "framer-motion";
import { Code, Cloud, Database, Layers, Server, Terminal, Zap } from "lucide-react";

const superpowers = [
  {
    category: "Programming Languages & Frameworks",
    icon: <Terminal size={24} />,
    skills: ["TypeScript", "JavaScript", "Node.js", "Serverless"],
  },
  {
    category: "Client Side",
    icon: <Code size={24} />,
    skills: ["UI/UX Design", "React", "React Native", "Next.js", "Redux", "Tailwind"],
  },
  {
    category: "Backend",
    icon: <Server size={24} />,
    skills: ["Express.js", "GraphQL", "Microservices", "REST APIs"],
  },
  {
    category: "DevOps",
    icon: <Cloud size={24} />,
    skills: ["Docker", "Nginx", "Terraform", "Git", "CI/CD"],
  },
  {
    category: "Data Storage & Caching",
    icon: <Database size={24} />,
    skills: ["MongoDB", "ElasticSearch", "Redis", "MySQL", "PostgreSQL", "SQLite"],
  },
  {
    category: "Integrations",
    icon: <Layers size={24} />,
    skills: ["Stripe", "Firebase", "Twilio", "Google Maps", "In-App Payments"],
  },
  {
    category: "Identity Management",
    icon: <Zap size={24} />,
    skills: ["OAuth2", "Keycloak", "Passport.js", "Firebase Auth"],
  },
];

export default function Superpowers() {
  return (
    <section id="superpowers" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {/* Title & Description */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl font-extrabold text-white mb-6"
        >
          Superpowers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center text-gray-400 max-w-2xl mx-auto mb-12"
        >
          I consider all these as tools and instruments to create my art. I have worked with these technologies
          and enjoyed using them to solve problems.
        </motion.p>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {superpowers.map((power, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 hover:border-indigo-500"
            >
              <div className="flex items-center space-x-3 mb-4 text-indigo-400">
                {power.icon}
                <h3 className="text-lg font-bold">{power.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {power.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-700 text-gray-200 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
