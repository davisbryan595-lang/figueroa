"use client"

import { useState } from "react"
import { Home, Briefcase, Hammer, KeyRound, Sofa } from "lucide-react"

export default function Services() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const services = [
    {
      id: 1,
      title: "Residential Deep Cleaning",
      description: "Transform your home into a sparkling sanctuary with our comprehensive deep cleaning services.",
      icon: Home,
    },
    {
      id: 2,
      title: "Commercial & Office Cleaning",
      description: "Professional cleaning solutions for businesses that prioritize a clean, healthy workspace.",
      icon: Briefcase,
    },
    {
      id: 3,
      title: "Post-Construction Cleanup",
      description: "We handle the mess so you can enjoy your new space immediately after construction.",
      icon: Hammer,
    },
    {
      id: 4,
      title: "Move-In / Move-Out Cleaning",
      description: "Complete cleaning services to prepare your space for new occupants or your next adventure.",
      icon: KeyRound,
    },
    {
      id: 5,
      title: "Carpet & Upholstery Cleaning",
      description: "Professional deep cleaning that removes stains, odors, and extends the life of your fabrics.",
      icon: Sofa,
    },
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-blue-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-blue-900">Our Premium Services</h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          Comprehensive cleaning solutions tailored to meet every need with excellence and attention to detail.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`p-8 rounded-xl transition-all duration-300 cursor-pointer ${
                  hoveredId === service.id
                    ? "bg-blue-600 text-white shadow-2xl transform -translate-y-2"
                    : "bg-white text-gray-900 shadow-lg hover:shadow-xl"
                }`}
              >
                <Icon className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className={`${hoveredId === service.id ? "text-blue-100" : "text-gray-600"}`}>
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
