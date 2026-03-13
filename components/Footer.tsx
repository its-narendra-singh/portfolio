import { FaLinkedin, FaGithub, FaCode, FaCopyright } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex gap-4 items-center">
            <FaCopyright size={20} />
            <p>{new Date().getFullYear()} Narendra Singh. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/its-narendra-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/its-narendra-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://leetcode.com/u/narendra-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition duration-300"
            >
              <FaCode size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

