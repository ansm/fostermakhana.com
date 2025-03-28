"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react"
import Image from "next/image"

interface FooterProps {
  scrollToSection: (sectionId: string) => void
}

export default function Footer({ scrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative text-white">
      {/* Curved top edge */}
      <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ transform: "translateY(-99%)" }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-16">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-amber-950"
          ></path>
        </svg>
      </div>

      <div className="bg-gradient-to-r from-amber-950 to-orange-950 pt-6">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex flex-col md:flex-row items-center mb-3">
                <div className="mb-3 md:mb-0 md:mr-4">
                  <Image
                    src="/images/fm-logo-2.png"
                    alt="Foster Makhana Logo"
                    width={180}
                    height={33}
                    className="h-auto object-contain"
                  />
                </div>

                {/* FSSAI Logo and License Number - Updated to stack vertically */}
                <div className="flex flex-col items-center">
                  <div className="bg-white rounded-md p-1">
<<<<<<< HEAD
                    <Image src="/images/fssai.png" alt="FSSAI Logo" width={80} height={25} className="h-auto" />
                  </div>
                  <span className="text-amber-200 font-medium mt-1">10425310000067</span>
=======
                    <Image src="/images/fssai.png" alt="FSSAI Logo" width={50} height={25} className="h-auto" />
                  </div>
                  <span className="text-amber-200 text-xs md:text-sm font-medium mt-1">License No: 10425310000067</span>
>>>>>>> main
                </div>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">Quick Links</h3>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-amber-200 hover:text-white transition-colors text
-sm md:text-base"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("our-story")}
                    className="text-amber-200 hover:text-white transition-colors text-sm md:text-base"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-amber-200 hover:text-white transition-colors text-sm md:text-base"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">Contact Us</h3>
              <ul className="space-y-1">
                <li className="flex items-center justify-center md:justify-start">
                  <Mail size={14} className="mr-2" />
                  <a
                    href="mailto:contact@fostermakhana.com"
                    className="text-amber-200 hover:text-white transition-colors text-sm md:text-base"
                  >
                    contact@fostermakhana.com
                  </a>
                </li>
                <li className="flex justify-center md:justify-start">
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-amber-200 hover:text-white transition-colors text-sm md:text-base"
                  >
                    Wholesale Inquiries
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-4 md:pt-6 border-t border-amber-800 text-center md:flex md:justify-between md:items-center md:text-left">
            <p className="text-amber-200 mb-4 md:mb-0 text-xs md:text-sm">
              &copy; {currentYear} Foster Makhana. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4 md:space-x-6">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-amber-200 hover:text-amber-400 transition-colors"
              >
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-amber-200 hover:text-amber-400 transition-colors"
              >
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-amber-200 hover:text-amber-400 transition-colors"
              >
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-amber-200 hover:text-amber-400 transition-colors"
              >
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

