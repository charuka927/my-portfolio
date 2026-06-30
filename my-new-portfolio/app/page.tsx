"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-20">
      {/* Navbar */}
      <nav className="flex items-center justify-between mb-20 px-4 md:px-8 relative">
        <div className="text-2xl font-bold tracking-tighter text-purple-400">Portfolio.</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-lg">
          {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
            <motion.a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="relative px-2 py-1 cursor-pointer font-medium"
              whileHover={{ color: "#22d3ee" }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button className="md:hidden text-2xl z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 w-full bg-gray-900 p-8 flex flex-col items-center space-y-6 md:hidden rounded-lg z-40 border border-cyan-500/20"
            >
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-xl font-medium hover:text-cyan-400">
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-32">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">
            Hi, I'm <span className="text-cyan-400">Charuka Prabhasha Herath</span>
          </h1>
          <h2 className="text-3xl mt-4 text-blue-300">Undergraduate</h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
            I am a motivated IT undergraduate at SLIIT with a deep passion for UI/UX design and user-centered development. I specialize in bridging the gap between technical functionality and aesthetic design, ensuring that every interface I build is clean, intuitive, and user-friendly. With a solid foundation in modern web frameworks and design tools like Figma, I am eager to apply my skills to real-world projects and grow as a UI/UX professional.
          </p>
          <div className="flex gap-4">
            <button className="bg-cyan-900/30 border border-cyan-500 px-8 py-3 rounded-full font-semibold hover:bg-cyan-500 transition-all">Hire Me</button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="border border-purple-500 px-8 py-3 rounded-full font-semibold hover:bg-purple-900 transition-all"
            >
              MY CV
            </button>
          </div>
        </div>

        {/* Profile Image with Glow Effect */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-cyan-500/30 p-2 shadow-[0_0_60px_-10px_rgba(34,211,238,0.6)]"
        >
          <Image
            src="/photo.png" 
            alt="Charuka Prabhasha Herath"
            fill
            className="rounded-full object-cover"
          />
        </motion.div>
      </section>

      {/* CV Download Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 p-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.9, opacity: 0 }} 
              className="bg-gray-900 p-8 rounded-2xl border border-cyan-500 max-w-sm w-full"
            >
              <h3 className="text-xl font-bold mb-6 text-center">Select Download Format</h3>
              <div className="flex flex-col gap-4">
                <a href="/cv.pdf" download="Charuka_CV.pdf" className="bg-cyan-600 p-3 text-center rounded-lg hover:bg-cyan-700 transition-all">Download as PDF</a>
                <a href="/cv.jpg" download="Charuka_CV.jpg" className="bg-gray-700 p-3 text-center rounded-lg hover:bg-gray-600 transition-all">Download as JPG</a>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-400 mt-2 hover:underline">Cancel</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'CS Air', desc: 'Airline reservation system with search filters.' },
            { title: 'Hadora', desc: 'Minimal streetwear apparel branding.' },
            { title: 'Event Invites', desc: 'Interactive event invitation system.' },
            { title: 'Event Invites', desc: 'Interactive event invitation system.' },
            { title: 'Event Invites', desc: 'Interactive event invitation system.' },
            { title: 'Event Invites', desc: 'Interactive event invitation system.' },
          ].map((proj, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-cyan-500 transition-all">
              <h3 className="text-2xl font-bold text-cyan-400">{proj.title}</h3>
              <p className="mt-4 text-gray-400">{proj.desc}</p>
              <button className="mt-6 text-cyan-400 hover:underline">View Details →</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}