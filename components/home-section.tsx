"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import {
  ArrowRight,
  Leaf,
  Package,
  Shield,
  Heart,
  Weight,
  Moon,
  Apple,
  Sparkles,
  Dumbbell,
  Award,
  ChevronLeft,
  ChevronRight,
  History,
  Users,
  MapPin,
} from "lucide-react"
import Image from "next/image"

// Add the scrollToSection prop to the component
export default function HomeSection({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) {
  // Carousel state
  const [currentReviewPage, setCurrentReviewPage] = useState(0)
  const reviewsPerPage = 3
  const reviewContainerRef = useRef<HTMLDivElement>(null)
  const reviewControls = useAnimation()
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Auto scroll for reviews
  useEffect(() => {
    const interval = setInterval(() => {
      const reviewsData = [
        { name: "Priya Sharma", location: "Delhi", rating: 5 },
        { name: "Rahul Verma", location: "Mumbai", rating: 5 },
        { name: "Ananya Patel", location: "Bangalore", rating: 4 },
        { name: "Vikram Singh", location: "Patna", rating: 5 },
        { name: "Meera Joshi", location: "Pune", rating: 5 },
        { name: "Arjun Kapoor", location: "Hyderabad", rating: 4 },
      ]
      const maxPages = Math.ceil(reviewsData.length / (isMobile ? 1 : reviewsPerPage)) - 1
      setCurrentReviewPage((prev) => (prev >= maxPages ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isMobile])

  // Update carousel position when page changes
  useEffect(() => {
    if (reviewContainerRef.current) {
      reviewControls.start({
        x: -currentReviewPage * reviewContainerRef.current.offsetWidth,
        transition: { type: "spring", stiffness: 300, damping: 30 },
      })
    }
  }, [currentReviewPage, reviewControls])

  const handlePrevReview = () => {
    const reviewsData = [
      { name: "Priya Sharma", location: "Delhi", rating: 5 },
      { name: "Rahul Verma", location: "Mumbai", rating: 5 },
      { name: "Ananya Patel", location: "Bangalore", rating: 4 },
      { name: "Vikram Singh", location: "Patna", rating: 5 },
      { name: "Meera Joshi", location: "Pune", rating: 5 },
      { name: "Arjun Kapoor", location: "Hyderabad", rating: 4 },
    ]
    const maxPages = Math.ceil(reviewsData.length / (isMobile ? 1 : reviewsPerPage)) - 1
    setCurrentReviewPage((prev) => (prev <= 0 ? maxPages : prev - 1))
  }

  const handleNextReview = () => {
    const reviewsData = [
      { name: "Priya Sharma", location: "Delhi", rating: 5 },
      { name: "Rahul Verma", location: "Mumbai", rating: 5 },
      { name: "Ananya Patel", location: "Bangalore", rating: 4 },
      { name: "Vikram Singh", location: "Patna", rating: 5 },
      { name: "Meera Joshi", location: "Pune", rating: 5 },
      { name: "Arjun Kapoor", location: "Hyderabad", rating: 4 },
    ]
    const maxPages = Math.ceil(reviewsData.length / (isMobile ? 1 : reviewsPerPage)) - 1
    setCurrentReviewPage((prev) => (prev >= maxPages ? 0 : prev + 1))
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

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  }

  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  }

  const drawPath = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, ease: "easeInOut" },
        opacity: { duration: 0.3 },
      },
    },
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
<<<<<<< HEAD
      {/* Hero Section */}
=======
      {/* Hero Section - Updated with semantic HTML */}
>>>>>>> main
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12 mb-16 md:mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div className="lg:w-1/2 w-full text-center lg:text-left" variants={fadeInUp}>
<<<<<<< HEAD
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
=======
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
>>>>>>> main
            <span className="bg-gradient-to-r from-amber-900 to-orange-800 bg-clip-text text-transparent">
              Premium Quality
            </span>
            <br />
            Fox Nuts for Your Health
<<<<<<< HEAD
          </h1>
=======
          </h2>
>>>>>>> main
          <p className="text-amber-950 text-base md:text-lg mb-6 md:mb-8">
            Experience the authentic taste and exceptional health benefits of our premium Makhana (Fox Nuts), carefully
            sourced and processed to preserve their natural goodness.
          </p>
          {/* Update the button in the hero section to use the scrollToSection function */}
          <motion.button
            className="bg-gradient-to-r from-amber-800 to-orange-800 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-medium flex items-center gap-2 hover:shadow-lg transition-shadow mx-auto lg:mx-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
<<<<<<< HEAD
=======
            aria-label="Explore our products and contact us"
>>>>>>> main
          >
            Enquire Now <ArrowRight size={18} aria-hidden="true" />
          </motion.button>
        </motion.div>
        <motion.div className="lg:w-1/2 w-full mb-6 lg:mb-0" variants={fadeInUp}>
          <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
<<<<<<< HEAD
            <Image src="/images/makhana1.jpeg" alt="Premium Makhana in a rustic bowl" fill className="object-cover" priority />
=======
            <Image
              src="/images/makhana1.jpeg"
              alt="Premium Makhana (Fox Nuts) in a rustic bowl"
              fill
              className="object-cover"
              priority
            />
>>>>>>> main
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-700/10 to-orange-700/10 mix-blend-overlay"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Continue with the rest of the component... */}

      {/* About Makhana Section */}
      <motion.div
        className="mb-16 md:mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div className="text-center mb-8 md:mb-12" variants={fadeInUp}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            What Makes Our{" "}
            <span className="bg-gradient-to-r from-amber-900 to-orange-800 bg-clip-text text-transparent">
              Makhana Special
            </span>
          </h2>
          <p className="text-amber-950 max-w-3xl mx-auto px-2">
            Makhana, also known as fox nuts or lotus seeds, are not just delicious but packed with numerous health
            benefits that make them a perfect snack for all ages.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
          variants={staggerContainer}
        >
          {[
            {
              icon: <Leaf className="h-8 w-8 md:h-10 md:w-10 text-green-700" />,
              title: "100% Natural",
              description:
                "Harvested from natural water bodies, our Makhana are completely organic and free from chemicals.",
            },
            {
              icon: <Shield className="h-8 w-8 md:h-10 md:w-10 text-amber-800" />,
              title: "Rich in Nutrients",
              description: "High in protein, low in fat, and packed with antioxidants, magnesium, and potassium.",
            },
            {
              icon: <Award className="h-8 w-8 md:h-10 md:w-10 text-orange-800" />,
              title: "Premium Quality",
              description: "Carefully selected and processed to ensure the highest quality and authentic taste.",
            },
            {
              icon: <Package className="h-8 w-8 md:h-10 md:w-10 text-amber-900" />,
              title: "Versatile Snack",
              description: "Perfect for roasting, adding to curries, or enjoying as a healthy on-the-go snack.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl shadow-md overflow-hidden"
              variants={fadeInUp}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100/90 to-orange-100/90 backdrop-blur-sm"></div>
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d97706' fillOpacity='0.1' fillRule='evenodd'/%3E%3C/svg%3E")`,
                }}
              ></div>
              <div className="relative p-4 md:p-6 z-10">
                <div className="mb-3 md:mb-4 bg-gradient-to-br from-amber-50/80 to-orange-50/80 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center backdrop-blur-sm shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-amber-950">{item.title}</h3>
                <p className="text-amber-900 text-sm md:text-base">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Our Story Section - Enhanced with animations, colors and icons */}
      <motion.div
        id="our-story"
        className="mb-16 md:mb-24 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div className="text-center mb-8 md:mb-12" variants={fadeInUp}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-amber-900 to-orange-800 bg-clip-text text-transparent">Story</span>
          </h2>
          <p className="text-amber-950 max-w-3xl mx-auto px-2">
            From the wetlands of Bihar to your table - discover the journey behind Foster Makhana.
          </p>
        </motion.div>

        <div className="relative">
          {/* Background decorative elements */}
          <motion.div
            className="absolute -top-10 -left-10 text-amber-200/20 z-0 hidden md:block"
            initial={{ opacity: 0, rotate: -20 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Sparkles size={120} />
          </motion.div>

          <motion.div
            className="absolute -bottom-10 -right-10 text-orange-200/20 z-0 hidden md:block"
            initial={{ opacity: 0, rotate: 20 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <Leaf size={120} />
          </motion.div>

          <div className="relative flex flex-col lg:flex-row items-stretch bg-gradient-to-br from-amber-50/80 to-orange-50/80 rounded-3xl overflow-hidden shadow-xl z-10">
            {/* Image section with enhanced styling */}
            <motion.div
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="h-[250px] sm:h-[300px] md:h-[400px] lg:h-[550px] w-full relative">
                <Image
                  src="/images/fm-story-2.png"
                  alt="Makhana growing in Bihar wetlands"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "left" }}
                />

                {/* Interactive hotspots on the image - hide on small screens */}
                <motion.div
                  className="absolute top-1/4 left-1/4 bg-white/80 backdrop-blur-sm p-1.5 md:p-2 rounded-full shadow-lg cursor-pointer hidden sm:block"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                    }}
                    className="bg-amber-400 p-1.5 md:p-2 rounded-full"
                  >
                    <MapPin size={16} className="text-amber-900" />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="absolute bottom-1/3 right-1/3 bg-white/80 backdrop-blur-sm p-1.5 md:p-2 rounded-full shadow-lg cursor-pointer hidden sm:block"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      delay: 0.7,
                    }}
                    className="bg-amber-600 p-1.5 md:p-2 rounded-full"
                  >
                    <Leaf size={16} className="text-white" />
                  </motion.div>
                </motion.div>

                {/* Gradient overlay to blend with content */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-amber-100/90 lg:block hidden"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-100/90 lg:hidden"></div>
              </div>
            </motion.div>

            {/* Content section with enhanced styling and animations */}
            <motion.div
              className="lg:w-1/2 relative z-20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="h-full bg-gradient-to-br from-amber-100/90 via-amber-50/90 to-orange-50/90 backdrop-blur-sm p-5 md:p-8 lg:p-12 rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl">
                <div className="h-full flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center mb-4 md:mb-6"
                  >
                    <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-2 md:p-3 rounded-xl shadow-lg mr-3 md:mr-4">
                      <History size={20} className="text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-amber-950">
                      From Bihar's Wetlands to Your Home
                    </h3>
                  </motion.div>

                  <motion.div
                    className="space-y-3 md:space-y-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div variants={fadeInUp} className="flex">
                      <div className="mt-1 mr-3 md:mr-4 text-amber-700">
                        <Sparkles size={16} className="md:w-5 md:h-5" />
                      </div>
                      <p className="text-amber-900 text-sm md:text-base">
                        Foster Makhana was born from a vision to bring the authentic taste and exceptional health
                        benefits of Bihar's traditional fox nuts to health-conscious consumers worldwide.
                      </p>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="flex">
                      <div className="mt-1 mr-3 md:mr-4 text-amber-700">
                        <Users size={16} className="md:w-5 md:h-5" />
                      </div>
                      <p className="text-amber-900 text-sm md:text-base">
                        Our journey began in the wetlands of Bihar, India, where Makhana has been cultivated for
                        generations. We work directly with local farmers, ensuring fair trade practices while preserving
                        traditional harvesting methods.
                      </p>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="flex">
                      <div className="mt-1 mr-3 md:mr-4 text-amber-700">
                        <Heart size={16} className="md:w-5 md:h-5" />
                      </div>
                      <p className="text-amber-900 text-sm md:text-base">
                        Every pack of Foster Makhana carries with it the rich heritage of Bihar and our commitment to
                        quality, sustainability, and the well-being of both our consumers and the communities we source
                        from.
                      </p>
                    </motion.div>
                  </motion.div>

                  {/* Timeline dots - hide on mobile */}
                  <div className="hidden md:flex justify-between mt-6 md:mt-8 relative">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-300 to-orange-300 transform -translate-y-1/2"></div>
                    {[0, 1, 2, 3].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 relative z-10"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.2 * i, duration: 0.3 }}
                        whileHover={{ scale: 1.5 }}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-full bg-amber-400"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [1, 0, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: 0.3 * i,
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Health Benefits Section */}
      <motion.div
        className="mb-16 md:mb-24 py-8 md:py-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* Textured background overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895
-2-2-2-2 .895-2 2 .895 2 2 2zM
35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d97706' fillOpacity='0.1' fillRule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>

        <motion.div className="text-center mb-8 md:mb-12 relative z-10" variants={fadeInUp}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Amazing{" "}
            <span className="bg-gradient-to-r from-amber-900 to-orange-800 bg-clip-text text-transparent">
              Health Benefits
            </span>
          </h2>
          <p className="text-amber-950 max-w-3xl mx-auto px-2">
            Discover why Makhana is considered a superfood and how it can contribute to your overall well-being and
            health.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 relative z-10">
          {[
            {
              icon: <Dumbbell className="h-10 w-10 md:h-12 md:w-12 text-amber-800" />,
              title: "Rich Source of Protein",
              description:
                "With approximately 9.7g of protein per 100g, Makhana provides essential amino acids needed for muscle growth and repair.",
              delay: 0,
              gradient: "from-amber-100/90 via-amber-50/90 to-orange-100/90",
            },
            {
              icon: <Heart className="h-10 w-10 md:h-12 md:w-12 text-red-700" />,
              title: "Promotes Heart Health",
              description:
                "Low in sodium and high in magnesium, Makhana helps regulate blood pressure and supports cardiovascular health.",
              delay: 0.1,
              gradient: "from-orange-100/90 via-amber-50/90 to-amber-100/90",
            },
            {
              icon: <Weight className="h-10 w-10 md:h-12 md:w-12 text-orange-800" />,
              title: "Aids Weight Management",
              description:
                "Low in calories and high in fiber, Makhana keeps you feeling full longer, helping to control appetite and manage weight.",
              delay: 0.2,
              gradient: "from-amber-50/90 via-orange-100/90 to-amber-100/90",
            },
            {
              icon: <Moon className="h-10 w-10 md:h-12 md:w-12 text-indigo-700" />,
              title: "Improves Sleep Quality",
              description:
                "Contains magnesium and certain amino acids that help calm the nervous system and promote better sleep patterns.",
              delay: 0.3,
              gradient: "from-amber-100/90 via-orange-50/90 to-amber-50/90",
            },
            {
              icon: <Apple className="h-10 w-10 md:h-12 md:w-12 text-green-700" />,
              title: "Low Glycemic Index",
              description:
                "Perfect for diabetics, Makhana helps maintain stable blood sugar levels due to its low glycemic index.",
              delay: 0.4,
              gradient: "from-orange-50/90 via-amber-100/90 to-orange-100/90",
            },
            {
              icon: <Sparkles className="h-10 w-10 md:h-12 md:w-12 text-amber-700" />,
              title: "Anti-Aging Properties",
              description:
                "Rich in antioxidants that fight free radicals, helping to slow down the aging process and maintain youthful skin.",
              delay: 0.5,
              gradient: "from-amber-100/90 via-orange-100/90 to-amber-50/90",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl"
              variants={fadeInUp}
              custom={benefit.delay}
              transition={{ delay: benefit.delay }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-90 backdrop-blur-sm"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                  "--tw-gradient-from": "rgb(254 243 199 / 0.9)",
                  "--tw-gradient-to": "rgb(255 237 213 / 0.9)",
                  "--tw-gradient-stops": "var(--tw-gradient-from), var(--tw-gradient-to)",
                }}
              ></div>

              {/* Texture overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM
35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d97706' fillOpacity='0.1' fillRule='evenodd'/%3E%3C/svg%3E")`,
                }}
              ></div>

              <div className="relative p-4 md:p-6 z-10">
                <div className="mb-3 md:mb-4 bg-gradient-to-br from-amber-50/80 to-orange-50/80 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center backdrop-blur-sm shadow-inner">
                  {benefit.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2 text-amber-950">{benefit.title}</h3>
                <p className="text-amber-900 text-sm md:text-base">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Customer Reviews Section */}
      <motion.div
        className="mb-16 md:mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div className="text-center mb-8 md:mb-12" variants={fadeInUp}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-amber-900 to-orange-800 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-amber-950 max-w-3xl mx-auto px-2">
            Don't just take our word for it. Here's what our customers have to say about Foster Makhana.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <div ref={reviewContainerRef} className="w-full">
              <motion.div className="flex" animate={reviewControls} initial={{ x: 0 }}>
                {[
                  {
                    name: "Priya Sharma",
                    location: "Delhi",
                    rating: 5,
                    feedback:
                      "I've tried many brands of Makhana, but Foster Makhana stands out for its exceptional quality and taste. It's now a staple in my pantry!",
                  },
                  {
                    name: "Rahul Verma",
                    location: "Mumbai",
                    rating: 5,
                    feedback:
                      "As a fitness enthusiast, I'm always looking for healthy snacks. Foster Makhana is perfect - high protein, low calories, and absolutely delicious.",
                  },
                  {
                    name: "Ananya Patel",
                    location: "Bangalore",
                    rating: 4,
                    feedback:
                      "My kids love the caramel flavor! It's a relief to find a snack that's both nutritious and appealing to children.",
                  },
                  {
                    name: "Vikram Singh",
                    location: "Patna",
                    rating: 5,
                    feedback:
                      "Being from Bihar, I know authentic Makhana when I taste it. Foster Makhana brings the true flavor and quality of my homeland.",
                  },
                  {
                    name: "Meera Joshi",
                    location: "Pune",
                    rating: 5,
                    feedback:
                      "The packaging keeps the Makhana fresh for weeks. I appreciate the attention to detail in preserving the quality.",
                  },
                  {
                    name: "Arjun Kapoor",
                    location: "Hyderabad",
                    rating: 4,
                    feedback:
                      "I ordered in bulk for our office, and everyone loved it! Great alternative to unhealthy office snacks.",
                  },
                ].map((review, index) => (
                  <div key={index} className={`min-w-full ${isMobile ? "" : "md:min-w-[33.333%]"} px-2 md:px-4`}>
                    <div className="bg-white rounded-xl shadow-md p-4 md:p-6 h-full">
                      <div className="flex items-center mb-3 md:mb-4">
                        <div className="bg-gradient-to-r from-amber-100 to-orange-100 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-lg md:text-xl font-bold text-amber-800">
                          {review.name.charAt(0)}
                        </div>
                        <div className="ml-3 md:ml-4">
                          <h4 className="font-semibold text-amber-950 text-sm md:text-base">{review.name}</h4>
                          <p className="text-xs md:text-sm text-amber-700">{review.location}</p>
                        </div>
                      </div>
                      <div className="flex mb-2 md:mb-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 md:h-5 md:w-5 ${i < review.rating ? "text-amber-500" : "text-gray-300"}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 15.585l-7.07 3.707 1.35-7.87-5.72-5.573 7.91-1.149L10 0l3.53 7.7 7.91 1.149-5.72 5.573 1.35 7.87L10 15.585z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                      </div>
                      <p className="text-amber-900 text-sm md:text-base">{review.feedback}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-1.5 md:p-2 shadow-md z-10 text-amber-900 hover:text-amber-700 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-1.5 md:p-2 shadow-md z-10 text-amber-900 hover:text-amber-700 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </motion.div>
    </div>
  )
}

