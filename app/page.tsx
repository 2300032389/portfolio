"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#0f172a] text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex justify-between px-10 py-6">
        <h1 className="text-blue-500 font-bold text-lg">Portfolio</h1>

        <div className="space-x-6 text-gray-300">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#achievements" className="hover:text-blue-500">Achievements</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I'm <span className="text-blue-500">V Jayasimha</span> 👋
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            Computer Science Student | DSA | Python | SQL | Projects Building
          </p>

          <a
            href="/resume.pdf"
            className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded mt-5 inline-block"
          >
            Download Resume
          </a>
        </div>

        <Image
          src="/profile.jpg"
          alt="profile"
          width={160}
          height={160}
          className="rounded-full mt-8 md:mt-0 border-4 border-blue-500"
        />
      </section>

      {/* ABOUT */}
      <section id="about" className="px-10 py-16">
        <h2 className="text-2xl border-b-2 border-blue-500 inline-block">
          About
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl">
          I am a Computer Science Engineering student at KL University (2023–2027)
          with strong problem-solving skills and a passion for building efficient
          software solutions. I actively practice Data Structures & Algorithms and
          work on real-world projects.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-10 py-16">
        <h2 className="text-2xl border-b-2 border-blue-500 inline-block">
          Skills
        </h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {["Python", "DSA", "SQL", "C", "Java (Basic)", "GitHub"].map(skill => (
            <span key={skill} className="bg-blue-500 px-3 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-10 py-16">
        <h2 className="text-2xl border-b-2 border-blue-500 inline-block">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div className="bg-[#1e293b] p-5 rounded-lg hover:scale-105 transition">
            <h3 className="font-semibold text-lg">Student Data Analyzer</h3>
            <p className="text-gray-400 mt-2">
              Built a Python-based system to analyze student datasets and generate insights.
            </p>
          </div>

          <div className="bg-[#1e293b] p-5 rounded-lg hover:scale-105 transition">
            <h3 className="font-semibold text-lg">Portfolio Website</h3>
            <p className="text-gray-400 mt-2">
              Designed and deployed a personal portfolio using Next.js and Tailwind CSS.
            </p>
          </div>

          <div className="bg-[#1e293b] p-5 rounded-lg hover:scale-105 transition">
            <h3 className="font-semibold text-lg">File Organizer Script</h3>
            <p className="text-gray-400 mt-2">
              Automated file organization using Python, improving efficiency.
            </p>
          </div>

        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="px-10 py-16">
        <h2 className="text-2xl border-b-2 border-blue-500 inline-block">
          Achievements
        </h2>

        <ul className="mt-6 text-gray-400 space-y-2">
          <li>✔ Oracle Cloud Certified Architect Associate</li>
          <li>✔ Solved 1000+ coding problems</li>
          <li>✔ Python Certification</li>
          <li>✔ Active competitive programmer</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-10 py-16">
        <h2 className="text-2xl border-b-2 border-blue-500 inline-block">
          Contact
        </h2>

        <div className="mt-6 text-gray-400 space-y-3">

          <div className="space-x-4">
            <span>📞 +91 9505931456</span>
            <a href="mailto:2300032389cseh1@gmail.com" className="hover:text-blue-500">
              ✉️ Email
            </a>
          </div>

          <div className="space-x-4">
            <a href="https://www.linkedin.com/in/jayasimha-v-020783312/" target="_blank" className="hover:text-blue-500">LinkedIn</a>
            <a href="https://www.codechef.com/users/klu2300032389" target="_blank" className="hover:text-blue-500">CodeChef</a>
            <a href="https://codeforces.com/profile/klu2300032389" target="_blank" className="hover:text-blue-500">Codeforces</a>
            <a href="https://leetcode.com/u/2300032389/" target="_blank" className="hover:text-blue-500">LeetCode</a>
          </div>

        </div>
      </section>

      <section className="px-10 py-20 flex justify-center">
  <div className="w-full max-w-xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-lg">

    <h2 className="text-2xl font-semibold border-b-2 border-blue-500 inline-block">
      Work With Me
    </h2>

    <p className="text-gray-400 mt-3">
      Have a project idea or opportunity? Let’s connect 🚀
    </p>

    <form
    
      action="https://formsubmit.co/2300032389cseh1@gmail.com"
      method="POST"
      className="mt-6 flex flex-col gap-4"
    >

      {/* Name */}
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="p-3 rounded-lg bg-[#1e293b] border border-transparent focus:border-blue-500 focus:outline-none transition"
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="p-3 rounded-lg bg-[#1e293b] border border-transparent focus:border-blue-500 focus:outline-none transition"
      />

      {/* Message */}
      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows={4}
        className="p-3 rounded-lg bg-[#1e293b] border border-transparent focus:border-blue-500 focus:outline-none transition"
      />

      {/* Hidden config */}
      <input type="hidden" name="_captcha" value="false" />

      {/* Button */}
      <button
        type="submit"
        className="mt-2 bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-medium transition hover:shadow-lg hover:shadow-blue-500/40"
      >
        Send Message 🚀
      </button>

    </form>

  </div>
</section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500">
        © 2023 - 2027 V Jayasimha
      </footer>

    </main>
  );
}