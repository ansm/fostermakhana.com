"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Building, FileText } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", phone: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-16 pb-12">
      <motion.div
        className="text-center mb-8 md:mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4" variants={fadeInUp}>
          Get in{" "}
          <span className="bg-gradient-to-r from-amber-900 to-orange-800 bg-clip-text text-transparent">Touch</span>
        </motion.h2>
        <motion.p className="text-amber-950 max-w-3xl mx-auto px-2" variants={fadeInUp}>
          Have questions about our premium fox nuts or want to place a bulk order? We'd love to hear from you!
        </motion.p>
      </motion.div>

      <motion.div
        className="grid lg:grid-cols-2 gap-6 md:gap-12 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <div className="bg-white p-5 md:p-8 rounded-xl shadow-md h-full">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-amber-950">Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-amber-900 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-amber-900 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"
                  placeholder="john@example.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-amber-900 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div className="mb-5 md:mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-amber-900 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-700"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-800 to-orange-800 text-white py-2.5 md:py-3 rounded-md font-medium hover:shadow-lg transition-shadow disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
              {submitSuccess && (
                <p className="mt-4 text-green-700 text-center text-sm md:text-base">
                  Thank you for your message! We'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <div className="bg-white p-5 md:p-8 rounded-xl shadow-md h-full">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-amber-950">Contact Information</h3>
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 md:h-6 md:w-6 text-amber-800 mr-2 md:mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-amber-950 text-sm md:text-base">Address</h4>
                  <p className="text-amber-900 text-sm md:text-base">
                    Foster Makhana
                    <br />
                    At- Singhwara South, PS Singhwara,
                    <br />
                    Darbhanga, Bihar-847106, India
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 md:h-6 md:w-6 text-amber-800 mr-2 md:mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-amber-950 text-sm md:text-base">Phone</h4>
                  <p className="text-amber-900 text-sm md:text-base">+91 97255 44004</p>
                  <p className="text-amber-900 text-sm md:text-base">+91 98241 44700</p>
                  <p className="text-amber-900 text-sm md:text-base">+91 84606 53119 (Customer Support)</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 md:h-6 md:w-6 text-amber-800 mr-2 md:mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-amber-950 text-sm md:text-base">Email</h4>
                  <p className="text-amber-900 text-sm md:text-base">contact@fostermakhana.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Building className="h-5 w-5 md:h-6 md:w-6 text-amber-800 mr-2 md:mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-amber-950 text-sm md:text-base">Legal Name</h4>
                  <p className="text-amber-900 text-sm md:text-base">Foster Makhana</p>
                </div>
              </div>
              <div className="flex items-start">
                <FileText className="h-5 w-5 md:h-6 md:w-6 text-amber-800 mr-2 md:mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-amber-950 text-sm md:text-base">GST Number</h4>
                  <p className="text-amber-900 text-sm md:text-base">10ABCDE1234F1Z5</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 md:h-6 md:w-6 text-amber-800 mr-2 md:mr-3 mt-0.5"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
                <div>
                  <h4 className="font-medium text-amber-950 text-sm md:text-base">Business Hours</h4>
                  <p className="text-amber-900 text-sm md:text-base">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-amber-900 text-sm md:text-base">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

