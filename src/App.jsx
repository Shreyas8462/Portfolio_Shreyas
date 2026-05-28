import { useEffect, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import {
  FiActivity,
  FiArrowRight,
  FiChevronRight,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGithub,
  FiGlobe,
  FiLinkedin,
  FiMail,
  FiMonitor,
  FiMoon,
  FiShield,
  FiSmartphone,
  FiSun,
  FiTerminal,
  FiTwitter,
  FiX,
} from 'react-icons/fi'

const navLinks = ['About', 'Skills', 'Projects', 'Timeline', 'Certifications', 'Contact']

const stats = [
  { label: 'CGPA', value: '7.79 / 10' },
  { label: 'Internships Completed', value: '2' },
  { label: 'Live Security Scenarios', value: '10+' },
  { label: 'Hackathon Finish', value: '2nd Runner-Up' },
]

const skillCards = [
  {
    icon: FiShield,
    title: 'Cybersecurity',
    desc: 'Ethical hacking, vulnerability assessment, incident response, and practical secure-by-design execution.',
  },
  {
    icon: FiTerminal,
    title: 'Ethical Hacking',
    desc: 'Hands-on testing across web and network environments using OWASP-aligned attack and defense workflows.',
  },
  {
    icon: FiActivity,
    title: 'Penetration Testing',
    desc: 'Penetration testing with Wireshark, Nmap, Burp Suite, OWASP ZAP, Kali Linux, and Metasploit.',
  },
  {
    icon: FiCode,
    title: 'Full Stack Development',
    desc: 'Python full stack development with Django, JavaScript, Bootstrap, and database optimization.',
  },
  {
    icon: FiSmartphone,
    title: 'Flutter Development',
    desc: 'Cross-platform mobile development using Flutter, Dart, Firebase, and user-centric UI/UX patterns.',
  },
  {
    icon: FiCpu,
    title: 'Software Engineering',
    desc: 'Building scalable products across mobile and web platforms with strong performance and maintainability.',
  },
]

const projects = [
  {
    title: 'Wi-Fi Security Research Tool',
    type: 'ESP8266 Penetration Testing',
    desc: 'Research-focused Wi-Fi testing tool for controlled simulations of Evil Twin and deauthentication attacks.',
    details:
      'Engineered an educational penetration testing toolkit using ESP8266 and Python, analyzed network traffic in Wireshark, and proposed WPA3, IDS/IPS, and MFA-based hardening recommendations to reduce enterprise attack surface.',
    stack: ['ESP8266', 'Python', 'Kali Linux', 'Wireshark', 'Network Security Protocols'],
    image: '/esp8266-wifi-tool.png',
    repo: 'https://github.com/Shreyas8462/Evil_twin.git',
  },
  {
    title: 'Yatra Connect',
    type: 'Smart Travel Community Platform',
    desc: 'Full-stack travel community app connecting explorers through real-time, geolocation-driven experiences.',
    details:
      'Architected and launched a mobile platform using Flutter and Firebase for sharing travel stories, discovering offbeat destinations, and enabling social travel features through cloud-backed real-time data and authentication.',
    stack: ['Flutter', 'Dart', 'Firebase', 'Figma', 'Google Cloud Platform'],
    image: '/yatra-connect-1.png',
    images: [
      '/yatra-connect-1.png',
      '/yatra-connect-2.png',
      '/yatra-connect-3.png',
      '/yatra-connect-4.png',
      '/yatra-connect-5.png',
    ],
    repo: 'https://github.com/Shreyas8462/yatra_connect.git',
  },
  {
    title: 'AI-Powered Trip Planner',
    type: 'Intelligent Route and Itinerary Generator',
    desc: 'AI-powered travel app that uses maps and places APIs to build personalized and shareable itineraries.',
    details:
      'Building a smart travel application in Flutter that calculates route distance, identifies nearby points of interest, filters real-time place options, and generates personalized itineraries from user preferences.',
    stack: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'Google Places API', 'Python'],
    repo: 'https://github.com/HACK-KARNATAKA/HK-26.git',
  },
]

const timeline = [
  '2022 - 2026: B.E. in Computer Science and Engineering at Tontadarya College of Engineering, Gadag (VTU), CGPA 7.79.',
  'Aug 2025 - Sep 2025: Cybersecurity Intern at Elevate Labs, executing ethical hacking and structured vulnerability reporting.',
  'Feb 2026 - May 2026: Python Full Stack Intern at Ethnotech Academy, delivering Django-based full-stack projects.',
]

const certifications = [
  'Cybersecurity Job Simulation - Mastercard | Forage',
  'Cybersecurity Internship Certificate - Elevate Labs',
  'Flutter App Development - Udemy',
  'UI/UX Design with Figma - Udemy',
]

const achievements = [
  '2nd Runner-Up - HACK KARNATAKA (National Level, 30-hour Hackathon, 2025)',
  'Event conducted by Google Developer Group (GDG) and KLE Institute of Technology',
]

const techGroups = [
  {
    title: 'Programming',
    items: ['Python', 'Java', 'Dart', 'Node.js', 'C'],
  },
  {
    title: 'Frameworks & Platforms',
    items: ['Flutter', 'React.js', 'Firebase', 'Django', 'Bootstrap'],
  },
  {
    title: 'Security Tools',
    items: ['Wireshark', 'Nmap', 'Burp Suite', 'Metasploit', 'OWASP ZAP', 'Kali Linux'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

function App() {
  const [activeProject, setActiveProject] = useState(null)
  const [activeImage, setActiveImage] = useState(null)
  const [viewerImage, setViewerImage] = useState(null)
  const [isLightTheme, setIsLightTheme] = useState(false)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 80, damping: 20 })
  const springY = useSpring(y, { stiffness: 80, damping: 20 })
  const heroX = useTransform(springX, [-300, 300], [-15, 15])
  const heroY = useTransform(springY, [-300, 300], [15, -15])

  useEffect(() => {
    document.documentElement.classList.toggle('light-theme', isLightTheme)
  }, [isLightTheme])

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event
    setMouse({ x: clientX, y: clientY })
    x.set(clientX - window.innerWidth / 2)
    y.set(clientY - window.innerHeight / 2)
  }

  return (
    <div className="relative overflow-hidden" onMouseMove={handleMouseMove}>
      <div className="aurora-bg" aria-hidden="true" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-50 hidden h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl md:block"
        animate={{ x: mouse.x - 112, y: mouse.y - 112 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20, mass: 0.35 }}
      />
      <div className="pointer-events-none absolute inset-0 bg-cyber-grid bg-[size:48px_48px] opacity-20" />

      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-matte/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display text-xl font-bold tracking-wide text-white"
          >
            <span className="text-neon">HR Shreyas</span> Gowda
          </motion.h1>
          <ul className="hidden gap-8 text-sm text-slate-300 md:flex">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="transition hover:text-neon"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsLightTheme((prev) => !prev)}
              className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-neon hover:text-neon"
              aria-label="Toggle color theme"
            >
              {isLightTheme ? <FiMoon /> : <FiSun />}
            </button>
            <a
              href="#contact"
              className="rounded-full border border-neon/50 px-4 py-2 text-xs font-semibold text-neon transition hover:bg-neon/10"
            >
              Let us connect
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section
          id="about"
          className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8"
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-7"
            style={{ x: heroX, y: heroY }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-4 py-1 text-sm text-neon">
              <FiMonitor />
              Computer Science Engineer | Cybersecurity Specialist | Mobile Developer
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-6xl">
              Building Secure Digital Solutions with
              <span className="bg-gradient-to-r from-neon to-accent bg-clip-text text-transparent">
                {' '}Cybersecurity + Software Engineering
              </span>
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
              Final-year Computer Science and Engineering student with completed internships
              in cybersecurity and Python full stack development. Proficient in ethical
              hacking, penetration testing, Django web development, and Flutter app delivery.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-neon/50 bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Cybersecurity Operations
              </span>
              <span className="rounded-full border border-accent/50 bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-200">
                Penetration Testing
              </span>
              <span className="rounded-full border border-emerald-400/50 bg-slate-900/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                Flutter + Django Development
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon via-cyan-300 to-cyan-200 px-6 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                View Projects
                <FiArrowRight className="transition group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-neon hover:text-neon"
              >
                View Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="glass neon-border rounded-3xl p-6"
          >
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                Professional Snapshot
              </p>
              <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs text-emerald-300">
                Profile Updated
              </span>
            </div>
            <div className="space-y-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                    className="rounded-2xl border border-slate-700/60 bg-slate-900/50 px-4 py-3 transition hover:-translate-y-1 hover:border-neon/50"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-3xl font-bold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-neon/80">Capabilities</p>
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-8 font-display text-3xl font-bold text-white md:text-4xl"
          >
            Technical Skills
          </motion.h3>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillCards.map((skill, index) => (
              <motion.article
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.45 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:border-neon/40 hover:shadow-glow"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-neon to-accent opacity-70" />
                <skill.icon className="mb-4 text-2xl text-neon" />
                <h4 className="mb-2 text-xl font-semibold text-white">{skill.title}</h4>
                <p className="text-sm leading-relaxed text-slate-300">{skill.desc}</p>
              </motion.article>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {techGroups.map((group) => (
              <article
                key={group.title}
                className="glass rounded-2xl border border-slate-700/60 p-4"
              >
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-400">
                  {group.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-600/70 bg-slate-900/70 px-3 py-1 text-xs text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-neon/80">Portfolio Highlights</p>
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-8 font-display text-3xl font-bold text-white md:text-4xl"
          >
            Projects
          </motion.h3>
          <div className="space-y-5">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="glass group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-accentGlow"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-neon/10 opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-2xl font-semibold text-white">{project.title}</h4>
                  <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs text-purple-200">
                    {project.type}
                  </span>
                </div>
                <p className="mt-3 max-w-3xl text-slate-300">{project.desc}</p>
                {project.image && (
                  <button
                    type="button"
                    onClick={() => {
                      setActiveProject(project)
                      setActiveImage(project.image)
                    }}
                    className="mt-4 flex h-52 w-full items-center justify-center rounded-xl border border-slate-700/70 bg-slate-950/60 p-2"
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-full w-full rounded-lg object-contain"
                      loading="lazy"
                    />
                  </button>
                )}
                {project.images && (
                  <div className="mt-3 grid grid-cols-5 gap-2">
                    {project.images.map((item, index) => (
                      <button
                        type="button"
                        key={`${project.title}-card-${item}`}
                        onClick={() => {
                          setActiveProject(project)
                          setActiveImage(item)
                        }}
                        className="flex h-20 items-center justify-center rounded-lg border border-slate-700/70 bg-slate-950/60 p-1.5"
                      >
                        <img
                          src={item}
                          alt={`${project.title} preview ${index + 1}`}
                          className="h-full w-full rounded-md object-contain"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setActiveProject(project)
                    setActiveImage(project.image ?? null)
                  }}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-neon transition hover:text-cyan-300"
                >
                  View case study
                  <FiChevronRight />
                </button>
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-5 inline-flex items-center gap-2 text-sm font-semibold text-purple-200 transition hover:text-purple-100"
                  >
                    <FiGithub />
                    View code
                  </a>
                )}
              </motion.article>
            ))}
          </div>
        </section>

        <section id="timeline" className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-neon/80">Career Timeline</p>
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-8 font-display text-3xl font-bold text-white md:text-4xl"
          >
            Education and Experience
          </motion.h3>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass flex gap-4 rounded-2xl p-5 transition hover:border-neon/40"
              >
                <div className="mt-1 h-3 w-3 rounded-full bg-neon shadow-glow" />
                <p className="text-slate-200">{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="certifications" className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-neon/80">Credibility</p>
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-8 font-display text-3xl font-bold text-white md:text-4xl"
          >
            Certifications and Achievements
          </motion.h3>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl border border-slate-700/60 p-6"
            >
              <h4 className="mb-4 text-xl font-semibold text-white">Certifications</h4>
              <ul className="space-y-3 text-slate-300">
                {certifications.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-neon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="glass rounded-2xl border border-slate-700/60 p-6"
            >
              <h4 className="mb-4 text-xl font-semibold text-white">Achievements</h4>
              <ul className="space-y-3 text-slate-300">
                {achievements.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass neon-border rounded-3xl px-7 py-10 text-center"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-slate-400">
              Get In Touch
            </p>
            <h3 className="mx-auto mb-4 max-w-2xl font-display text-3xl font-bold text-white md:text-5xl">
              Open to full-time or contract opportunities in cybersecurity and software engineering
            </h3>
            <p className="mx-auto max-w-2xl text-slate-300">
              Bangalore South, Karnataka | Available for cybersecurity operations,
              penetration testing, and scalable software development.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:gowdashreyas725@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon to-cyan-300 px-5 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <FiMail />
                gowdashreyas725@gmail.com
              </a>
              <a
                href="tel:+916362433491"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-slate-200 transition hover:border-neon hover:text-neon"
              >
                <FiSmartphone />
                +91 63624 33491
              </a>
              <a
                href="https://github.com/Shreyas8462"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-slate-200 transition hover:border-neon hover:text-neon"
              >
                <FiGithub />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/hr-shreyas-gowda-485b5a259"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-slate-200 transition hover:border-neon hover:text-neon"
              >
                <FiLinkedin />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-slate-800/80 py-8 text-center text-sm text-slate-500">
        <div className="mb-3 flex items-center justify-center gap-4">
          <FiGlobe />
          <FiTwitter />
          <FiDatabase />
        </div>
        © {new Date().getFullYear()} Shreyas Gowda Portfolio. Built with React, Tailwind,
        and Framer Motion.
      </footer>

      <AnimatePresence>
        {viewerImage && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setViewerImage(null)}
          >
            <img
              src={viewerImage}
              alt="Expanded project preview"
              className="max-h-[90vh] max-w-[90vw] rounded-xl border border-slate-700/70 object-contain"
            />
          </motion.div>
        )}
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setActiveProject(null)
              setActiveImage(null)
            }}
          >
            <motion.div
              className="glass w-full max-w-2xl rounded-3xl border border-neon/40 p-6"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    {activeProject.type}
                  </p>
                  <h4 className="mt-2 text-2xl font-semibold text-white">
                    {activeProject.title}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveProject(null)
                    setActiveImage(null)
                  }}
                  className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-neon hover:text-neon"
                  aria-label="Close project modal"
                >
                  <FiX />
                </button>
              </div>
              {(activeImage || activeProject.image) && (
                <button
                  type="button"
                  onClick={() => setViewerImage(activeImage || activeProject.image)}
                  className="mb-4 flex h-64 w-full items-center justify-center rounded-xl border border-slate-700/70 bg-slate-950/60 p-2"
                >
                  <img
                    src={activeImage || activeProject.image}
                    alt={`${activeProject.title} preview`}
                    className="h-full w-full rounded-lg object-contain"
                  />
                </button>
              )}
              {activeProject.images && (
                <div className="mb-4 grid grid-cols-5 gap-2">
                  {activeProject.images.map((item, index) => (
                    <button
                      type="button"
                      key={`${activeProject.title}-${item}`}
                      onClick={() => setActiveImage(item)}
                      className="flex h-24 items-center justify-center rounded-lg border border-slate-700/70 bg-slate-950/60 p-1.5"
                    >
                      <img
                        src={item}
                        alt={`${activeProject.title} screenshot ${index + 1}`}
                        className="h-full w-full rounded-md object-contain"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}
              <p className="text-slate-300">{activeProject.details}</p>
              {activeProject.repo && (
                <a
                  href={activeProject.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-neon/40 px-4 py-2 text-sm font-semibold text-neon transition hover:border-neon hover:bg-neon/10"
                >
                  <FiGithub />
                  Open GitHub Repository
                </a>
              )}
              <div className="mt-6 flex flex-wrap gap-2">
                {activeProject.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
