"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, X } from "lucide-react"

export default function FloatingCallButton() {
  const [isOpen, setIsOpen] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const phoneNumbers = [
    { number: "+919725544004", formatted: "+91 97255 44004" },
    { number: "+919824144700", formatted: "+91 98241 44700" },
    { number: "+918460653119", formatted: "+91 84606 53119" },
  ]

  // Handle clicks outside the popup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside both the popup and the button
      if (
        isOpen &&
        popupRef.current &&
        buttonRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    // Add event listener when popup is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="fixed right-4 bottom-24 z-40 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="mb-2 bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-amber-800 to-orange-800 py-2 px-4">
              <h3 className="text-white font-medium text-center">Call Us</h3>
            </div>
            <div className="p-2">
              {phoneNumbers.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone.number}`}
                  className="flex items-center py-2 px-3 text-amber-900 hover:bg-amber-50 rounded transition-colors"
                >
                  <Phone size={16} className="mr-2 text-amber-800" />
                  <span>{phone.formatted}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center rounded-full shadow-lg ${
          isOpen ? "bg-orange-800 text-white" : "bg-gradient-to-r from-amber-800 to-orange-800 text-white"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <div className="relative w-14 h-14 flex items-center justify-center">
          {isOpen ? (
            <X size={24} />
          ) : (
            <>
              <Phone size={24} />
              <motion.span
                className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              />
            </>
          )}
        </div>
      </motion.button>
    </div>
  )
}

