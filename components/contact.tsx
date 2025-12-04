"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    time: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    const message = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nAddress: ${formData.address}\nService: ${formData.service}\nPreferred Time: ${formData.time}`
    window.location.href = `mailto:figueroacleaningservices25@gmail.com?subject=Cleaning Service Request&body=${encodeURIComponent(message)}`
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-blue-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-blue-900">Get Your Free Estimate</h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          Contact us today for a free, no-obligation consultation and quote.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <a href="tel:224-619-7572" className="text-blue-600 hover:text-blue-700 text-lg font-semibold">
              224-619-7572
            </a>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <a
              href="mailto:figueroacleaningservices25@gmail.com"
              className="text-blue-600 hover:text-blue-700 text-lg font-semibold break-all"
            >
              figueroacleaningservices25@gmail.com
            </a>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Service Area</h3>
            <p className="text-gray-600">Lake County, IL & Surrounding</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 md:p-12 shadow-xl">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-4 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-600 transition"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="p-4 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-600 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-4 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-600 transition"
            />
            <input
              type="text"
              name="address"
              placeholder="Property Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="p-4 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-600 transition"
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="p-4 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-600 transition"
            >
              <option value="">Select Service Type</option>
              <option value="residential">Residential Deep Cleaning</option>
              <option value="commercial">Commercial & Office Cleaning</option>
              <option value="construction">Post-Construction Cleanup</option>
              <option value="moveio">Move-In / Move-Out Cleaning</option>
              <option value="carpet">Carpet & Upholstery Cleaning</option>
            </select>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="p-4 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-600 transition"
            >
              <option value="">Preferred Time</option>
              <option value="morning">Morning (8AM - 12PM)</option>
              <option value="afternoon">Afternoon (12PM - 5PM)</option>
              <option value="evening">Evening (5PM - 8PM)</option>
              <option value="flexible">Flexible</option>
            </select>
            <button
              type="submit"
              className="md:col-span-2 bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition transform hover:scale-105 shadow-lg text-lg"
            >
              Get Free Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
