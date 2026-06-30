"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 120], ["rgba(0,0,0,0.5)", "rgba(0,0,0,0.8)"]);
  const navBorder = useTransform(scrollY, [0, 120], ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.25)"]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[url('/bck.jpg')] bg-cover bg-center bg-fixed text-white">
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-10 px-8 pb-8 pt-24 md:px-20 md:pt-28">
      {/* Navbar */}
      <motion.nav
        className="fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-4 py-4 md:px-8 backdrop-blur-md border-b"
        style={{
          backgroundColor: navBackground,
          borderColor: navBorder,
        }}
      >
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
              className="absolute top-20 left-0 w-full bg-gray-900/95 p-8 flex flex-col items-center space-y-6 md:hidden rounded-lg z-40 border border-cyan-500/20"
            >
              {['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-xl font-medium hover:text-cyan-400">
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-32">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">
            Hi, I'm <br></br><span className="text-cyan-400">Charuka Prabhasha Herath</span>
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

      {/* Education Section */}
      <section id="education" className="mb-24">
        <div className="text-center mb-10">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">Education</p>
          <h2 className="text-4xl font-bold">Academic Journey</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              institution: "SLIIT",
              degree: "BSc (Hons) in Information Technology Specialization",
              duration: "2023 May - Present",
              description: "Studying software engineering, UI/UX, web technologies, and modern application development with a strong focus on user-centered design.",
            },
            {
              institution: "IMBS Green Campus",
              degree: "Diploma in Information Technology",
              duration: "2026 April - Present",
              description: "Completed studies in Physical Science stream with a strong academic foundation in problem-solving and analytical thinking.",
            },
            {
              institution: "Aquinas College of Higher Studies",
              degree: "Certificate in Information & Communication Technology Technician",
              duration: "2025 Jan - 2025 Aug",
              description: "Built a strong base in academics, leadership, and extracurricular participation during secondary education.",
            },
            {
              institution: "Cisco Network Academy",
              degree: "Introduction to Cybersecurity",
              duration: "2026",
              description: "Built a strong base in academics, leadership, and extracurricular participation during secondary education.",
            },
            {
              institution: "Cisco Network Academy",
              degree: "Getting Started with Cisco Packet Tracer",
              duration: "2026",
              description: "Built a strong base in academics, leadership, and extracurricular participation during secondary education.",
            },
            {
              institution: "Sri Saranankara National College, Bingiriya.",
              degree: "G.C.E. Advanced Level",
              duration: "2021(2022)",
              description: "G.C.E. Advanced Level in Art stream",
            },
            {
              institution: "Sri Saranankara National College, Bingiriya.",
              degree: "G.C.E. Ordinary Level",
              duration: "2018",
              description: "G.C.E. Ordinary Level",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.01, borderColor: "#22d3ee" }}
              className="rounded-2xl border border-gray-800 bg-gray-900/90 p-7 shadow-lg shadow-black/20 transition-all"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16.5v3a2 2 0 005 0v-3" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-cyan-400">{item.institution}</h3>
              <p className="mb-3 text-sm font-medium text-gray-300">{item.degree}</p>
              <p className="mb-4 text-sm text-cyan-300">{item.duration}</p>
              <p className="text-sm leading-relaxed text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-24">
        <div className="text-center mb-10">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">Skills</p>
          <h2 className="text-4xl font-bold">What I Work With</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              title: "Frontend",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 3H5a2 2 0 00-2 2v3m0 10v3a2 2 0 002 2h3m8-18h3a2 2 0 012 2v3m0 10v3a2 2 0 01-2 2h-3" />
                  <rect x="8" y="8" width="8" height="8" rx="2" />
                </svg>
              ),
              skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
            },
            {
              title: "Backend",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 8h8M8 12h5M8 16h3" />
                </svg>
              ),
              skills: ["Node.js", "Express", "REST APIs", "MongoDB", "Firebase"],
            },
            {
              title: "Tools",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 4H6a2 2 0 00-2 2v4m10-6h4a2 2 0 012 2v4M4 14v4a2 2 0 002 2h4m10-6v4a2 2 0 01-2 2h-4" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              ),
              skills: ["Git", "GitHub", "Figma", "VS Code", "Postman"],
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.01, borderColor: "#22d3ee", boxShadow: "0 0 0 1px rgba(34,211,238,0.15), 0 0 24px rgba(34,211,238,0.15)" }}
              className="rounded-2xl border border-gray-800 bg-gray-900/90 p-6 shadow-lg shadow-black/20 transition-all"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-cyan-400">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-sm text-gray-200 transition-all hover:border-cyan-400 hover:bg-cyan-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Air Ticket Reservation System', desc: 'Airline reservation system with search filters.' },
            { title: 'Spare Parts Selling System', desc: 'Spare parts selling platform with inventory management.' },
            { title: 'Online Grocery Store', desc: 'Online grocery shopping platform with real-time inventory updates.' },
            { title: 'Financial Tracking Application', desc: 'Application for tracking financial transactions and reports.' },
            { title: 'Restaurant Mobile Application', desc: 'Mobile application for restaurant ordering and management.' },
            { title: 'Redesign MD Foods Website', desc: 'Fixed website design and layout.' },
            { title: 'Student Collaboration & Support System', desc: 'Student Collaboration & Support System.' },
            { title: 'Library Seat Booking System', desc: 'Library Seat Booking System.' },
          ].map((proj, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-cyan-500 transition-all">
              <h3 className="text-2xl font-bold text-cyan-400">{proj.title}</h3>
              <p className="mt-4 text-gray-400">{proj.desc}</p>
              <button className="mt-6 text-cyan-400 hover:underline">View Details →</button>
            </div>
          ))}
        </div>
      </section>
      </div>
    </main>
  );
}