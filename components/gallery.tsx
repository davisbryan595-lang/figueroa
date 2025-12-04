"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { id: 1, title: "Living Room Deep Clean" },
    { id: 2, title: "Kitchen Professional Clean" },
    { id: 3, title: "Office Space Transformation" },
    { id: 4, title: "Bathroom Sparkle" },
    { id: 5, title: "Carpet Cleaning Results" },
    { id: 6, title: "Post-Construction Cleanup" },
    { id: 7, title: "Residential Before & After" },
    { id: 8, title: "Commercial Space Clean" },
    { id: 9, title: "Detail Oriented Cleaning" },
    { id: 10, title: "Window & Surface Cleaning" },
    { id: 11, title: "Upholstery Restoration" },
    { id: 12, title: "Move-In Ready Space" },
  ]

  return (
    <section id="gallery" className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-blue-900">Before & After Gallery</h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          See the transformation our professional cleaning services bring to homes and businesses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="relative overflow-hidden rounded-lg cursor-pointer group h-64"
            >
              <img
                src={`/images/gallery-${image.id}.jpg`}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-semibold p-4 w-full">{image.title}</p>
              </div>
              <div className="absolute inset-0 border-4 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-blue-300 transition"
              >
                <X size={32} />
              </button>
              <img
                src={`/images/gallery-${selectedImage}.jpg`}
                alt="Gallery"
                className="w-full rounded-lg border-4 border-blue-400"
              />
              <div className="text-white text-center mt-4">{images.find((img) => img.id === selectedImage)?.title}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
