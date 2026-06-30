export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8 md:p-20">
      {/* Navbar */}
      <nav className="flex justify-end space-x-8 text-lg mb-20">
        {['Home', 'About', 'Education', 'Skills', 'Portfolio', 'Contact'].map((item) => (
          <a key={item} href="#" className="hover:text-purple-500 transition-colors">
            {item}
          </a>
        ))}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between mb-32">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-bold">
            Hi, I'm <span className="text-purple-400">Charuka Prabhasha Herath</span>
          </h1>
          <h2 className="text-3xl mt-4 text-blue-300">Undergraduate</h2>
          <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-lg">
           I am an IT undergraduate at SLIIT, driven by a love for UI/UX design and development. I enjoy the process of turning complex requirements into simple, efficient interfaces. My background in both design tools (Figma, Adobe Suite) and development (React, PERN/MERN stack) allows me to think critically about how design impacts the final product. I am highly motivated to contribute to team-based projects and gain hands-on experience in the industry.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all">Hire Me</button>
            <button className="border border-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-900 transition-all">MY CV</button>
          </div>
        </div>
        {/* Placeholder for Profile Art */}
        <div className="mt-12 md:mt-0 w-64 h-64 md:w-80 md:h-80 bg-gray-900 rounded-full flex items-center justify-center border-4 border-purple-500">
          <span className="text-gray-500">Profile Image</span>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'CS Air', desc: 'Airline reservation system with search filters.' },
            { title: 'Hadora', desc: 'Minimal streetwear apparel branding.' },
            { title: 'Event Invites', desc: 'Interactive event invitation system.' },
          ].map((proj, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-2xl hover:border hover:border-purple-500 transition-all">
              <h3 className="text-2xl font-bold text-purple-400">{proj.title}</h3>
              <p className="mt-4 text-gray-400">{proj.desc}</p>
              <button className="mt-6 text-purple-400 hover:underline">View Details →</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}