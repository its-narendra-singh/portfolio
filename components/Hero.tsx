"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa"
import { HiDownload, HiEye } from "react-icons/hi"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Hi, I'm <span className="text-primary">Narendra Singh</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl text-muted-foreground mb-6"
          >
            Full Stack Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-muted-foreground mb-8"
          >
            Software Engineer with 4 years of experience in full-stack development building scalable applications using modern JavaScript technologies including the MERN stack. Experienced in designing high-performance APIs, real-time systems, and cloud-based platforms with strong focus on scalability, system design, and maintainable architecture.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <motion.a
              href="#contact"
              className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full text-lg font-semibold flex items-center hover:bg-secondary/90 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>

            {/* Single Resume Button */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full text-lg font-semibold flex items-center hover:bg-secondary/90 transition duration-300">
                My Resume
              </button>
              {/* Hover Icons */}
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-secondary text-secondary-foreground px-4 py-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col gap-4">
                <a
                  href="https://drive.google.com/file/d/14u9uL3GwFm3Xp1wdtfw241Ic3kOer7Z1/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition duration-300 flex items-center"
                >
                  <HiEye className="mr-2" /> Preview
                </a>
                <a
                  href="https://drive.google.com/file/d/14u9uL3GwFm3Xp1wdtfw241Ic3kOer7Z1/view?usp=sharing"
                  download
                  className="hover:text-primary transition duration-300 flex items-center"
                >
                  <HiDownload className="mr-2" /> Download
                </a>
              </div>
            </motion.div>

            {/* Links */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full text-lg font-semibold flex items-center hover:bg-secondary/90 transition duration-300">
                Profile Links
              </button> 
              {/* Hover Icons */}
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-secondary text-secondary-foreground px-4 py-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col gap-4">
                <a
                  href="https://github.com/its-narendra-singh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition duration-300 flex items-center"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/its-narendra-singh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition duration-300 flex items-center"
                >
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
                <a
                  href="https://leetcode.com/u/narendra-singh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition duration-300 flex items-center"
                >
                  <FaCode className="mr-2" /> LeetCode
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto mt-20 md:mt-0">
            <Image
              src="/profile.v1.jpeg"
              alt="Narendra Singh"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
