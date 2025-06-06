import React from "react";
import { Github, ExternalLink, Linkedin, Code2, Cloud, Database, GitBranch, Network, Users, Server } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.nav
        className="flex justify-center gap-6 text-sm md:text-base font-medium sticky top-0 z-50 bg-black/70 backdrop-blur py-4 shadow"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.a href="#about" whileHover={{ scale: 1.1 }} className="hover:text-purple-400">About</motion.a>
        <motion.a href="#experience" whileHover={{ scale: 1.1 }} className="hover:text-purple-400">Experience</motion.a>
        <motion.a href="#skills" whileHover={{ scale: 1.1 }} className="hover:text-purple-400">Skills</motion.a>
        <motion.a href="#projects" whileHover={{ scale: 1.1 }} className="hover:text-purple-400">Projects</motion.a>
        <motion.a href="#achievements" whileHover={{ scale: 1.1 }} className="hover:text-purple-400">Achievements</motion.a>
        <motion.a href="#education" whileHover={{ scale: 1.1 }} className="hover:text-purple-400">Education</motion.a>
        <motion.a href="/resume.pdf" download whileHover={{ scale: 1.1 }} className="hover:text-purple-400">Resume</motion.a>
      </motion.nav>

      <div className="w-full h-40 md:h-56 bg-cover bg-center" style={{ backgroundImage: 'url("/streak.png")' }}></div>

      <div className="relative z-10 p-6">
        <header className="text-center pt-6">
          <div className="flex justify-center mb-4">
            <motion.img
              src="/pic.png"
              alt="Profile"
              className="w-36 h-36 md:w-40 md:h-40 rounded-full border-4 border-white shadow-md"
              whileHover={{ scale: 1.05 }}
            />
          </div>

          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Prudvikar Donthagani
          </motion.h1>

          <motion.div
            className="flex justify-center gap-4 mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <a href="https://www.linkedin.com/in/prudvikar-donthagani-505070172/" target="_blank"><Linkedin /></a>
            <a href="https://leetcode.com/u/prudvikodi/" target="_blank">
              <img src="https://leetcode.com/favicon.ico" className="w-6 h-6" />
            </a>
            <a href="mailto:pxd72500@ucmo.edu">
              <motion.button
                className="border px-4 py-1.5 rounded border-white hover:bg-white hover:text-black transition text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Email Me
              </motion.button>
            </a>
          </motion.div>
        </header>

        <motion.section
          id="about"
          className="my-16 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-zinc-300 leading-relaxed text-lg">
            Software Engineer passionate about building cloud-native, scalable services. Strong foundation in system design, DevOps, and backend technologies. Awarded "Graduate Student Achievement Award" and ranked top 0.32% in CodeVita (800/250,000 globally).
          </p>
        </motion.section>

       <motion.section
  id="skills"
  className="mb-20 max-w-5xl mx-auto text-center"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <h2 className="text-3xl font-semibold mb-6">Skills</h2>
  <div className="space-y-12 text-zinc-300 text-sm">
    <div>
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 justify-center sm:justify-start">
        <Code2 className="w-6 h-6 text-purple-400" /> Programming Languages
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {[
          { name: "Python", icon: "python" },
          { name: "Java", icon: "java" },
          { name: "C", icon: "c" },
          { name: "C++", icon: "cplusplus" },
        ].map((skill, i) => (
          <motion.div key={i} className="flex items-center gap-3 text-base" whileHover={{ scale: 1.05 }}>
            {skill.icon && (
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                alt={skill.name}
                className="w-8 h-8"
              />
            )}
            {skill.name}
          </motion.div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 justify-center sm:justify-start">
        <Cloud className="w-6 h-6 text-purple-400" /> Cloud &amp; DevOps
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {[
          { name: "OpenStack" },
          { name: "Docker", icon: "docker" },
          { name: "Kubernetes", icon: "kubernetes" },
          { name: "Jenkins", icon: "jenkins" },
          { name: "CI/CD Pipelines" },
          { name: "Ansible", icon: "ansible" },
          { name: "Terraform", icon: "terraform" },
          { name: "Git", icon: "git" },
          { name: "Gerrit", icon: "gerrit" },
          { name: "REST APIs" },
        ].map((skill, i) => (
          <motion.div key={i} className="flex items-center gap-3 text-base" whileHover={{ scale: 1.05 }}>
            {skill.icon && (
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                alt={skill.name}
                className="w-8 h-8"
              />
            )}
            {skill.name}
          </motion.div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 justify-center sm:justify-start">
        <Database className="w-6 h-6 text-purple-400" /> Databases
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {[
          { name: "SQL", icon: "mysql" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "Query Optimization" },
          { name: "Indexing" },
        ].map((skill, i) => (
          <motion.div key={i} className="flex items-center gap-3 text-base" whileHover={{ scale: 1.05 }}>
            {skill.icon && (
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                alt={skill.name}
                className="w-8 h-8"
              />
            )}
            {skill.name}
          </motion.div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 justify-center sm:justify-start">
        <Network className="w-6 h-6 text-purple-400" /> Networking
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {[
          { name: "Network Security" },
          { name: "SSL/TLS" },
          { name: "TCP/IP" },
          { name: "Subnetting" },
          { name: "DNS" },
          { name: "VPN" },
        ].map((skill, i) => (
          <motion.div key={i} className="flex items-center gap-3 text-base" whileHover={{ scale: 1.05 }}>
            {skill.name}
          </motion.div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 justify-center sm:justify-start">
        <Users className="w-6 h-6 text-purple-400" /> Project Management &amp; Collaboration
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {[
          { name: "Jira", icon: "jira" },
          { name: "Agile" },
          { name: "Microsoft Teams" },
          { name: "Scrum" },
        ].map((skill, i) => (
          <motion.div key={i} className="flex items-center gap-3 text-base" whileHover={{ scale: 1.05 }}>
            {skill.icon && (
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                alt={skill.name}
                className="w-8 h-8"
              />
            )}
            {skill.name}
          </motion.div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 justify-center sm:justify-start">
        <Server className="w-6 h-6 text-purple-400" /> System Design &amp; Software Engineering
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {[
          { name: "Microservices" },
          { name: "High Availability Systems" },
          { name: "OOPs" },
          { name: "Scalability" },
          { name: "Load Balancing" },
        ].map((skill, i) => (
          <motion.div key={i} className="flex items-center gap-3 text-base" whileHover={{ scale: 1.05 }}>
            {skill.name}
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</motion.section>


        <motion.section
          id="experience"
          className="mb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-6">Work Experience</h2>
          <div className="space-y-6 text-zinc-300">
            <div>
              <h3 className="text-xl font-bold">System Engineer @ TCS (2021–2023)</h3>
              <ul className="list-disc list-inside">
                <li>Implemented OpenStack NOVA & KEYSTONE in production-grade cloud architecture.</li>
                <li>Developed scalable backend services (Python, Java) with 95%+ uptime.</li>
                <li>Optimized SQL queries, reducing latency by 50%.</li>
                <li>Automated CI/CD pipelines, cutting deployment errors by 90%.</li>
                <li>Supported 2M+ users with scalable architecture.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">Machine Learning Intern @ Movidu (2020)</h3>
              <ul className="list-disc list-inside">
                <li>Built ML models using Scikit-learn, TensorFlow (classification, regression, clustering).</li>
                <li>Engineered 10k+ rows of data and visualized with Matplotlib, Seaborn.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="mb-20 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "URL Shortener Web App",
                desc: "Full-stack URL shortener with FastAPI backend and analytics dashboard.",
                github: "https://github.com/PRUDVIKAR/url-shortener",
                demo: "https://url-shortener-6cqw.onrender.com/",
              },
              {
                title: "Tic Tac Toe Game",
                desc: "Minimax AI-powered Python game with GUI and multi-mode support.",
                github: "https://github.com/PRUDVIKAR/tic_tac_toe",
              },
              {
                title: "Speech Emotion Recognition",
                desc: "Live audio-based ML system that classifies emotion and gender.",
              },
            ].map((proj, i) => (
              <motion.div
                key={i}
                className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-2">{proj.title}</h3>
                <p className="text-zinc-300 mb-4 text-sm leading-relaxed">{proj.desc}</p>
                <div className="flex gap-4">
                  {proj.github && (
                    <a href={proj.github} target="_blank">
                      <Github />
                    </a>
                  )}
                  {proj.demo && (
                    <a href={proj.demo} target="_blank">
                      <ExternalLink />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="achievements"
          className="mb-20 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Achievements</h2>
          <div className="space-y-4 text-zinc-300">
            <p>🏅 Ranked Top 0.32% in TCS CODEVITA (800/250,000)</p>
            <p>🏅 Graduate Student Achievement Award at UCM</p>
            <p>🏅 6-star in Algorithm, 5-star in Python on HackerRank</p>
            <p>🏅 Spearheaded national-level college fest at JNTU</p>
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-2">Star of the Month – TCS</h3>
              <motion.img src="/star.png" alt="Star of the Month" className="mx-auto rounded shadow-lg w-[300px] md:w-[500px]" whileHover={{ scale: 1.02 }} />
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-2">LeetCode Badges</h3>
              <motion.img src="/Badge.png" alt="LeetCode Badges" className="mx-auto rounded shadow-md w-[300px] md:w-[500px]" whileHover={{ scale: 1.02 }} />
            </div>
          </div>
        </motion.section>

        <motion.section
          id="education"
          className="mb-20 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Education</h2>
          <ul className="space-y-4 text-zinc-300">
            <li>
              <strong>University of Central Missouri</strong> – Masters in Computer Science (2024 - 2025), GPA: 4.0
              <br />
              Relevant Coursework: Adv Python, Java, Machine Learning, NoSQL, Information Assurance, Compiler Design, Adv Visualization, Adv Algorithms, Operating Systems, Networking & Security
            </li>
            <li>
              <strong>JNTUH College of Engineering</strong> – B.Tech in Computer Science (2017 - 2021), GPA: 3.4
              <br />
              Relevant Coursework: C, C++, Java, Python, DSA, DBMS, OS, Cloud Computing
            </li>
          </ul>
        </motion.section>

        <motion.footer
          className="text-center text-zinc-500 text-sm py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          © {new Date().getFullYear()} Prudvikar Donthagani · Houston, TX
        </motion.footer>
      </div>
    </motion.div>
  );
}
