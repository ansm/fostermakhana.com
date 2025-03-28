"use client"

import { useState, useEffect, useRef } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HomeSection from "@/components/home-section"
import ContactSection from "@/components/contact-section"
import FloatingCallButton from "@/components/floating-call-button"
import StructuredData from "@/components/structured-data"
import SeoHead from "@/components/seo-head"
import { throttle } from "@/utils/throttle"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrollY, setScrollY] = useState(0)
  const lastActiveSection = useRef<string>("home")
  const isManualNavigation = useRef<boolean>(false)

  // Function to update URL - will be throttled
  const updateUrl = (section: string) => {
    // Skip URL updates if this isn't a significant section change
    if (section === lastActiveSection.current) return

    try {
      if (section === "home") {
        window.history.replaceState(null, "", "/")
      } else {
        window.history.replaceState(null, "", `#${section}`)
      }
      lastActiveSection.current = section
    } catch (e) {
      // If we hit a browser limit, just stop updating the URL
      console.warn("Browser limited history updates", e)
    }
  }

  // Create throttled version of updateUrl with a very conservative 1000ms (1 second) delay
  const throttledUpdateUrl = useRef(throttle(updateUrl, 1000))

  useEffect(() => {
    // Detect initial hash in URL
    if (window.location.hash) {
      const initialSection = window.location.hash.substring(1)
      if (["home", "our-story", "contact"].includes(initialSection)) {
        setActiveSection(initialSection)
        lastActiveSection.current = initialSection
      }
    }

    const handleScroll = () => {
      // Skip scroll handling during manual navigation
      if (isManualNavigation.current) return

      setScrollY(window.scrollY)

      // Determine active section based on scroll position
      const homeSection = document.getElementById("home")
      const contactSection = document.getElementById("contact")
      const ourStorySection = document.getElementById("our-story")

      let newActiveSection = "home"

      if (contactSection && window.scrollY >= contactSection.offsetTop - 100) {
        newActiveSection = "contact"
      } else if (ourStorySection && window.scrollY >= ourStorySection.offsetTop - 100) {
        newActiveSection = "our-story"
      } else if (homeSection) {
        newActiveSection = "home"
      }

      // Only update active section if it changed
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection)

        // Only update URL if section changed from last URL update
        // and we're not in the middle of a manual navigation
        if (newActiveSection !== lastActiveSection.current) {
          throttledUpdateUrl.current(newActiveSection)
        }
      }
    }

    // Create a throttled scroll handler with 200ms delay
    const throttledScrollHandler = throttle(handleScroll, 200)

    window.addEventListener("scroll", throttledScrollHandler)
    return () => window.removeEventListener("scroll", throttledScrollHandler)
  }, [activeSection])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      // Set flag to prevent scroll handler from interfering
      isManualNavigation.current = true

      // Update active section immediately
      setActiveSection(sectionId)

      // Scroll to section
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: "smooth",
      })

      // Update URL for better SEO and sitelinks
      // This is a user-initiated action, so we can update immediately
      try {
        if (sectionId === "home") {
          window.history.replaceState(null, "", "/")
        } else {
          window.history.replaceState(null, "", `#${sectionId}`)
        }
        lastActiveSection.current = sectionId
      } catch (e) {
        console.warn("Browser limited history updates", e)
      }

      // Reset the manual navigation flag after scrolling completes
      setTimeout(() => {
        isManualNavigation.current = false
      }, 1000) // Wait for smooth scroll to complete
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

