"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/hero-bg.jpg)",
          filter: "brightness(0.5)",
        }}
      />

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-blue-300 opacity-60 animate-pulse"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `float ${3 + (particle.id % 3)}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
        <img src="/images/figueroa-removebg-preview.png" alt="Figueroa Logo" className="h-32 w-32 mb-8 animate-pulse" />
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">FIGUEROA CLEANING SERVICES</h1>
        <p className="text-2xl md:text-3xl text-blue-200 mb-4 drop-shadow-md">Professional Cleaning You Can Trust</p>
        <p className="text-xl text-white mb-12 drop-shadow-md">Serving Lake County & All Surrounding Areas</p>

        <div className="flex flex-col md:flex-row gap-6">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
          >
            Free Estimate
          </button>
          <a
            href="tel:224-619-7572"
            className="px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-blue-50 transition transform hover:scale-105 shadow-lg border-2 border-white"
          >
            Call 224-619-7572
          </a>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>
    </section>
  )
}
