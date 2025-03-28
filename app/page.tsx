"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HomeSection from "@/components/home-section"
import ContactSection from "@/components/contact-section"
import FloatingCallButton from "@/components/floating-call-button"
import StructuredData from "@/components/structured-data"
import SeoHead from "@/components/seo-head"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Determine active section based on scroll position
      const homeSection = document.getElementById("home")
      const contactSection = document.getElementById("contact")
      const ourStorySection = document.getElementById("our-story")

      if (contactSection && window.scrollY >= contactSection.offsetTop - 100) {
        setActiveSection("contact")
        // Update URL for better SEO and sitelinks
        window.history.replaceState(null, "", "#contact")
      } else if (ourStorySection && window.scrollY >= ourStorySection.offsetTop - 100) {
        setActiveSection("our-story")
        // Update URL for better SEO and sitelinks
        window.history.replaceState(null, "", "#our-story")
      } else if (homeSection) {
        setActiveSection("home")
        // Update URL for better SEO and sitelinks
        window.history.replaceState(null, "", "/")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: "smooth",
      })
      setActiveSection(sectionId)

      // Update URL for better SEO and sitelinks
      if (sectionId === "home") {
        window.history.replaceState(null, "", "/")
      } else {
        window.history.replaceState(null, "", `#${sectionId}`)
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-200/70">
      <StructuredData />
      <SeoHead activeSection={activeSection} />

      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} scrollY={scrollY} />

      <FloatingCallButton />

      <main className="pt-14 md:pt-16">
        <section id="home" aria-labelledby="home-heading">
          <h1 id="home-heading" className="sr-only">
            Foster Makhana - Premium Quality Fox Nuts
          </h1>
          <HomeSection scrollToSection={scrollToSection} />
        </section>

        <section id="contact" aria-labelledby="contact-heading" className="mb-8">
          <h2 id="contact-heading" className="sr-only">
            Contact Foster Makhana
          </h2>
          <ContactSection />
        </section>
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}

