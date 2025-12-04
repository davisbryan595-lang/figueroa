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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/images/figueroa-removebg-preview.png"
            alt="Figueroa Cleaning Services"
            className="h-12 w-12 object-contain"
          />
          <span className="font-bold text-lg text-blue-900 hidden sm:block">Figueroa</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-blue-600 transition">
            Services
          </button>
          <button onClick={() => scrollToSection("gallery")} className="text-gray-700 hover:text-blue-600 transition">
            Gallery
          </button>
          <button onClick={() => scrollToSection("why")} className="text-gray-700 hover:text-blue-600 transition">
            Why Us
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </button>
          <a
            href="tel:224-619-7572"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-4 space-y-3">
          <button
            onClick={() => scrollToSection("services")}
            className="block w-full text-left text-gray-700 hover:text-blue-600"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="block w-full text-left text-gray-700 hover:text-blue-600"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("why")}
            className="block w-full text-left text-gray-700 hover:text-blue-600"
          >
            Why Us
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left text-gray-700 hover:text-blue-600"
          >
            Contact
          </button>
          <a
            href="tel:224-619-7572"
            className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-center"
          >
            Call Now
          </a>
        </div>
      )}
    </nav>
  )
}
