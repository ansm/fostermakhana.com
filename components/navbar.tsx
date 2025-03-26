"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"

interface NavbarProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
  scrollY: number
}

export default function Navbar({ activeSection, scrollToSection, scrollY }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50
          ? "bg-gradient-to-r from-amber-950/95 to-orange-950/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-[78px]">
        <div className="flex items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center">
            <Image
              src="/fm-logo-2.png"
              alt="Foster Makhana Logo"
              width={145}
              height={60}
              className="h-auto py-1.5"
              priority
            />
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["home", "contact"].map((section) => (
            <motion.button
              key={section}
              className={`text-lg font-medium capitalize ${
                scrollY > 50
                  ? activeSection === section
                    ? "text-amber-300"
                    : "text-amber-100/90 hover:text-amber-300"
                  : activeSection === section
                    ? "text-amber-950"
                    : "text-amber-900 hover:text-amber-800"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(section)}
            >
              {section}
              {activeSection === section && (
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 mt-0.5"
                  layoutId="activeSection"
                />
              )}
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className={`md:hidden ${scrollY > 50 ? "text-amber-100" : "text-amber-950"}`}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-gradient-to-r from-amber-950 to-orange-950 shadow-lg absolute top-full left-0 right-0"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {["home", "contact"].map((section) => (
              <motion.button
                key={section}
                className={`text-lg font-medium py-2 capitalize ${
                  scrollY > 50
                    ? activeSection === section
                      ? "text-amber-300"
                      : "text-amber-100/90"
                    : activeSection === section
                      ? "text-amber-950"
                      : "text-amber-900"
                }`}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  scrollToSection(section)
                  setIsMenuOpen(false)
                }}
              >
                {section}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

