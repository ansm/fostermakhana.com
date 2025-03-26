"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HomeSection from "@/components/home-section"
import ContactSection from "@/components/contact-section"
import FloatingCallButton from "@/components/floating-call-button"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Determine active section based on scroll position
      const homeSection = document.getElementById("home")
      const contactSection = document.getElementById("contact")

      if (contactSection && window.scrollY >= contactSection.offsetTop - 100) {
        setActiveSection("contact")
      } else if (homeSection) {
        setActiveSection("home")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
    }
    setActiveSection(sectionId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-orange-100">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} scrollY={scrollY} />

      <FloatingCallButton />

      <main className="pt-20">
        <section id="home">
          <HomeSection />
        </section>

        <section id="contact" className="mb-24">
          <ContactSection />
        </section>
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}

