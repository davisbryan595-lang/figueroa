"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled
          ? "bg-white/40 shadow-lg border-b border-white/20"
          : "bg-white/10 border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center flex-shrink-0">
          <img
            src="/images/figueroa-removebg-preview.png"
            alt="Figueroa Cleaning Services"
            className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <button onClick={() => scrollToSection("services")} className="text-gray-800 hover:text-blue-600 transition font-medium">
            Services
          </button>
          <button onClick={() => scrollToSection("gallery")} className="text-gray-800 hover:text-blue-600 transition font-medium">
            Gallery
          </button>
          <button onClick={() => scrollToSection("why")} className="text-gray-800 hover:text-blue-600 transition font-medium">
            Why Us
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-gray-800 hover:text-blue-600 transition font-medium">
            Contact
          </button>
          <a
            href="tel:224-619-7572"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/30 backdrop-blur-md border-t border-white/20 p-4 space-y-3">
          <button
            onClick={() => scrollToSection("services")}
            className="block w-full text-left text-gray-800 hover:text-blue-600 font-medium"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="block w-full text-left text-gray-800 hover:text-blue-600 font-medium"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("why")}
            className="block w-full text-left text-gray-800 hover:text-blue-600 font-medium"
          >
            Why Us
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left text-gray-800 hover:text-blue-600 font-medium"
          >
            Contact
          </button>
          <a
            href="tel:224-619-7572"
            className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-center font-medium"
          >
            Call Now
          </a>
        </div>
      )}
    </nav>
  )
}
