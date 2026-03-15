"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaBriefcase, FaChevronDown } from "react-icons/fa"

const experiences = [
  {
    title: "Software Engineer",
    company: "Bacancy Technology",
    duration: "Sep 2025 - Mar 2026",
    description: [
      "Enhanced geospatial data visualization for a claims inspection platform by resolving map pin overlay issues using a butterfly clustering approach, improving marker clarity and map interaction across large datasets.",
      "Refactored frontend architecture into modular Next.js components, removed duplicate logic and implemented unit testing with Vitest and React Testing Library achieving ~90% test coverage.",
      "Worked with microservices-based architecture utilizing RabbitMQ messaging for asynchronous communication, while leveraging AI development tools (Cursor, Claude Code) to accelerate engineering workflows.",
    ],
  },
  {
    title: "Software Engineer",
    company: "FOG Technologies",
    duration: "Jan 2024 - Sep 2025",
    description: [
      "Architected an interactive LED floor gaming platform using MERN stack, Electron.js, TypeScript, and Realm DB, deployed across multiple international venues and supporting real-time gameplay interactions.",
      "Developed multiple interactive gaming modules including Escape the Lava using OOP principles, designing dynamic gameplay patterns that enhanced player engagement across arcade installations.",
      "Optimized application performance by redesigning IPC communication and externalizing static assets, reducing bundle size by 50% and build time by 50%, while implementing AWS S3 and Lambda based OTA update workflows.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Codelink Infotech",
    duration: "Apr 2022 - Jan 2024",
    description: [
      "Engineered and delivered scalable full-stack applications using the MERN stack, building reusable APIs, modular components, and maintainable architectures across multiple production projects.",
      "Built a comprehensive HRM platform with modules for employee management, payroll, leave tracking, and reporting, deployed to production on DigitalOcean.",
      "Integrated TradingView APIs and GraphQL into fintech platforms while deploying applications on Hostinger and DigitalOcean and collaborating with clients to deliver production-ready solutions.",
    ],
  },
]

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-card rounded-lg shadow-md overflow-hidden"
            >
              <div
                className="p-6 cursor-pointer flex justify-between items-center"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className="flex items-center">
                  <FaBriefcase className="text-primary mr-4" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                </div>
                <motion.div animate={{ rotate: expandedIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <FaChevronDown className="text-primary" size={18} />
                </motion.div>
              </div>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-muted-foreground mb-4">{exp.duration}</p>
                    <ul className="list-disc list-inside space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-card-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

