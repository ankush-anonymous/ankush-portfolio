"use client";
import { motion } from "framer-motion";
import { Home, User, Code, Briefcase, Settings, Mail } from "lucide-react";

const navItems = [
  { id: "home", icon: <Home size={22} />, label: "Home" },
  { id: "about", icon: <User size={22} />, label: "About" },
  { id: "contributions", icon: <Code size={22} />, label: "Contributions" },
  { id: "projects", icon: <Briefcase size={22} />, label: "Projects" },
  { id: "services", icon: <Settings size={22} />, label: "Services" },
  { id: "contact", icon: <Mail size={22} />, label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 inset-x-0 flex justify-center z-50"
    >
      <div className="flex space-x-4 bg-white shadow-lg border border-gray-300 rounded-full px-4 py-2 backdrop-blur-md">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="flex items-center justify-center w-10 h-10 rounded-full transition-all hover:bg-gray-200"
            title={item.label}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
