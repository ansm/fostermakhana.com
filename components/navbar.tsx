"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"

interface NavbarProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
  scrollY: number
}

export default function Navbar({ activeSection, scrollToSection, scrollY }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close mobile menu when scrolling
  useEffect(() => {
    if (isMenuOpen) {
      const handleScroll = () => {
        setIsMenuOpen(false)
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [isMenuOpen])

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
      <div className="container mx-auto px-4 flex justify-between items-center h-14 md:h-16">
        <div className="flex items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center">
            <Image
              src="/images/fm-logo-2.png"
              alt="Foster Makhana Logo"
              width={120}
              height={50}
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
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-gradient-to-r from-amber-950 to-orange-950 shadow-lg absolute top-full left-0 right-0"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              {["home", "contact"].map((section) => (
                <motion.button
                  key={section}
                  className={`text-base font-medium py-2 capitalize ${
                    activeSection === section ? "text-amber-300" : "text-amber-100/90"
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
      </AnimatePresence>
    </motion.header>
  )
}

