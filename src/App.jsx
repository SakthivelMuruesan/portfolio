import { useState } from "react";
import photo from "./profile.png";

/* ---------- Content: edit this section to update the site ---------- */
const profile = {
  name: "Sakthivel Murugesan",
  role: "AI Developer & Frontend Developer",
  tagline:
    "I build web apps with React and Python, and I turn messy data into dashboards people can read.",
  summary:
    "MCA student and detail-oriented developer with hands-on experience in React, TypeScript, Python, SQL and Power BI. I like shipping real projects, working in teams, and learning new tools quickly.",
  email: "sakthivelmurugesan3931@gmail.com",
  phone: "+91 99520 53931",
  linkedin: "https://www.linkedin.com/in/sakthivelmurugesan-ai-developer",
  github: "https://github.com/SakthivelMuruesan",
};

const experience = {
  title: "Frontend Developer Intern",
  company: "Init Company",
  period: "Jun 2025 – Mar 2026",
  points: [
    "Built UI for web applications with React and JavaScript.",
    "Connected the frontend to databases and managed code with GitHub.",
    "Worked with the development team to improve user experience and application performance.",
  ],
};

const projects = [
  {
    name: "MechOnGo",
    type: "On-demand car service platform",
    role: "Frontend Developer (UI design and booking flow)",
    text: "Connects car owners with mechanics for real-time booking and secure payments. Features include mechanic matching and live service tracking.",
    stack: ["React", "JavaScript", "HTML"],
  },
  {
    name: "ClassIQ",
    type: "AI classroom & academic management",
    role: "Full-Stack Developer",
    text: "An AI-powered learning platform that helps students plan their academics. Responsive interfaces built with React.js and TypeScript.",
    stack: ["React.js", "TypeScript", "MongoDB Atlas"],
    link: "https://github.com/ARIHARAN-KC/ClassIQ",
  },
  {
    name: "TurfArena",
    type: "Turf booking & management system",
    role: "Frontend Developer, UI module (team project)",
    text: "A web app for booking and managing sports turfs. Frontend components are integrated with backend APIs and a PostgreSQL database.",
    stack: ["React", "TypeScript", "PostgreSQL", "HTML", "CSS"],
  },
  {
    name: "Food Waste & Resource Distribution Dashboard",
    type: "Data analysis",
    role: "Data Analyst",
    text: "An interactive Power BI dashboard showing global food waste patterns and resource distribution by country. Data cleaned and shaped with Power Query.",
    stack: ["Power BI", "Excel", "CSV", "Power Query"],
    link: "https://github.com/SakthivelMuruesan/Power-BI",
  },
  {
    name: "Disk Space Analysis & Cleanup Assistant",
    type: "Python desktop app",
    role: "Developer",
    text: "Analyzes disk storage, monitors usage and finds unnecessary files, with cleanup tools behind a simple Tkinter interface.",
    stack: ["Python", "Tkinter", "Psutil", "Shutil", "MySQL"],
    link: "https://github.com/SakthivelMuruesan/Python-Learing/blob/main/DiskSpaceAnalyzer",
  },
  {
    name: "Python Learning Repository",
    type: "Practice projects",
    role: "Self-learning",
    text: "My collection of Python practice code and small projects, including the Disk Space Analyzer.",
    stack: ["Python"],
    link: "https://github.com/SakthivelMuruesan/Python-Learing",
  },
  {
    name: "Food Booking System",
    type: "College food ordering",
    role: "Full-Stack Developer (individual)",
    text: "An online food ordering system for college students with secure registration, login and order management.",
    stack: ["C#", "HTML", "SQL"],
  },
];

const skills = [
  { group: "Languages", items: ["Python", "Java", "C", "JavaScript", "TypeScript"] },
  { group: "Frontend", items: ["React", "Tailwind CSS", "HTML", "CSS"] },
  { group: "Data", items: ["MySQL", "PostgreSQL", "MongoDB Atlas", "Power BI", "Power Query"] },
  { group: "Tools & testing", items: ["GitHub", "VS Code", "Postman", "Manual testing", "ClickUp"] },
];

const education = [
  { title: "MCA", place: "M. Kumarasamy College of Engineering", period: "2024 – 2026" },
  { title: "BCA", place: "Muthayammal College of Engineering", period: "2021 – 2024" },
];

const certifications = [
  "AI Developer – LiveWire (Aug 2026 – Mar 2027)",
  "Java Fundamentals – Infosys Online Certification",
  "IoT – Infosys Online Certification",
];

const resumes = [
  { title: "AI & Frontend Developer", note: "React, TypeScript, full-stack projects", file: "/resumes/Sakthivel_Murugesan_AI_Frontend_Resume.pdf" },
  { title: "AI & Python Developer", note: "Python, AI projects and dashboards", file: "/resumes/Sakthivel_Murugesan_AI_Python_Resume.pdf" },
  { title: "AI & Data Analyst", note: "Power BI, Python and data projects", file: "/resumes/Sakthivel_Murugesan_AI_Data_Analyst_Resume.pdf" },
];

const nav = ["About", "Experience", "Projects", "Skills", "Education", "Resume", "Contact"];

/* ---------- Small pieces ---------- */
const Section = ({ id, title, children }) => (
  <section id={id} className="border-t border-forest/60 py-16 md:py-20">
    <div className="mx-auto grid max-w-5xl gap-8 px-6 md:grid-cols-[12rem_1fr]">
      <h2 className="text-2xl font-bold tracking-tight text-forest-light md:text-3xl">{title}</h2>
      <div>{children}</div>
    </div>
  </section>
);

const Tag = ({ children }) => (
  <span className="rounded-sm bg-forest/30 px-2 py-0.5 text-sm text-forest-light">{children}</span>
);

/* ---------- App ---------- */
export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-charcoal text-bone">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-forest/60 bg-charcoal/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-lg font-bold">
            Sakthivel<span className="text-crimson"></span>Murugesan
          </a>
          <nav className="hidden gap-6 text-sm md:flex" aria-label="Main">
            {nav.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="text-mute transition hover:text-crimson">
                {n}
              </a>
            ))}
          </nav>
          <button
            className="rounded border border-forest px-3 py-1 text-sm md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        {open && (
          <nav id="mobile-nav" className="flex flex-col gap-3 border-t border-forest/60 px-6 py-4 md:hidden">
            {nav.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)} className="text-mute hover:text-crimson">
                {n}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid max-w-5xl items-end gap-12 px-6 pb-0 pt-16 md:grid-cols-[1fr_19rem] md:pt-24">
          <div className="settle pb-16 md:pb-24">
            <p className="flex items-center gap-2 text-sm text-mute">
              <span className="h-2.5 w-2.5 rounded-full bg-crimson" aria-hidden="true" />
              Open to developer roles
            </p>
            <h1 className="mt-6 text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-6 text-xl font-medium text-forest-light md:text-2xl">{profile.role}</p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-mute">{profile.tagline}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded bg-crimson px-6 py-3 font-medium text-white transition hover:bg-crimson/85"
              >
                See my projects
              </a>
              <a
                href="#resume"
                className="rounded border border-forest px-6 py-3 font-medium transition hover:bg-forest/30"
              >
                Download resume
              </a>
            </div>
          </div>

          <div className="mx-auto mb-16 w-60 md:mb-24 md:w-full">
            <div className="relative aspect-square overflow-hidden rounded-full bg-forest outline outline-4 outline-offset-8 outline-crimson">
              <img
                src={photo}
                alt="Portrait of Sakthivel Murugesan"
                className="absolute left-0 top-[6%] w-full max-w-none"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <Section id="about" title="About">
          <p className="max-w-prose text-lg leading-relaxed">{profile.summary}</p>
        </Section>

        {/* Experience */}
        <Section id="experience" title="Experience">
          <div className="border-l-2 border-forest pl-6">
            <h3 className="text-xl font-bold">{experience.title}</h3>
            <p className="text-forest-light">
              {experience.company} · {experience.period}
            </p>
            <ul className="mt-4 max-w-prose list-disc space-y-2 pl-5 marker:text-crimson">
              {experience.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects">
          <ul className="space-y-10">
            {projects.map((p) => (
              <li key={p.name} className="group border-l-2 border-forest pl-6 transition-colors hover:border-crimson">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="text-sm text-mute">
                  {p.type} · {p.role}
                </p>
                <p className="mt-3 max-w-prose leading-relaxed">{p.text}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm text-forest-light underline underline-offset-4 hover:text-crimson"
                  >
                    View on GitHub
                  </a>
                )}
              </li>
            ))}
          </ul>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills">
          <dl className="grid gap-8 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group}>
                <dt className="mb-3 font-bold">{s.group}</dt>
                <dd className="flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <Tag key={i}>{i}</Tag>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* Education */}
        <Section id="education" title="Education">
          <ul className="space-y-6">
            {education.map((e) => (
              <li key={e.title}>
                <h3 className="text-lg font-bold">{e.title}</h3>
                <p className="text-mute">
                  {e.place} · {e.period}
                </p>
              </li>
            ))}
          </ul>
          <h3 className="mb-3 mt-10 font-bold">Certifications</h3>
          <ul className="max-w-prose list-disc space-y-2 pl-5 marker:text-crimson">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p className="mt-8 max-w-prose text-mute">
            Hackathons: KPR College, Karpagam College and Google.
          </p>
        </Section>

        {/* Resume */}
        <Section id="resume" title="Resume">
          <p className="mb-6 max-w-prose text-mute">Pick the version that fits the role. Each one is a PDF.</p>
          <ul className="divide-y divide-forest/60 border-y border-forest/60">
            {resumes.map((r) => (
              <li key={r.file} className="flex flex-wrap items-center justify-between gap-4 py-5">
                <div>
                  <h3 className="text-lg font-bold">{r.title}</h3>
                  <p className="text-sm text-mute">{r.note}</p>
                </div>
                <a
                  href={r.file}
                  download
                  className="rounded bg-forest px-5 py-2 font-medium text-white transition hover:bg-crimson"
                >
                  Download PDF
                </a>
              </li>
            ))}
          </ul>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <p className="max-w-prose text-lg">
            Looking for a developer who can build the interface and work with the data behind it? Email me.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-block break-all text-2xl font-bold text-crimson underline-offset-8 hover:underline md:text-3xl"
          >
            {profile.email}
          </a>
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-forest-light">
            <li>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-crimson">
                {profile.phone}
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-crimson">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-crimson">
                GitHub
              </a>
            </li>
          </ul>
        </Section>
      </main>

      <footer className="border-t border-forest/60 py-8 text-center text-sm text-mute">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}
