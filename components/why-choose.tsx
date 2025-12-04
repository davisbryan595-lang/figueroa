export default function WhyChoose() {
  const reasons = [
    {
      title: "Family Owned & Operated",
      description: "Over 20 years of dedication to excellence and customer satisfaction in cleaning services.",
    },
    {
      title: "Fully Insured & Bonded",
      description: "Complete protection and peace of mind with comprehensive insurance coverage for all services.",
    },
    {
      title: "Eco-Friendly Products",
      description: "Safe, environmentally responsible cleaning solutions that protect your family and our planet.",
    },
    {
      title: "100% Satisfaction Guarantee",
      description: "If you're not completely satisfied, we'll make it right at no additional cost.",
    },
  ]

  return (
    <section id="why" className="py-24 bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-blue-900">Why Choose Figueroa?</h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
          Trusted by thousands of satisfied customers throughout Lake County.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow border-l-4 border-blue-600"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 text-lg">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
