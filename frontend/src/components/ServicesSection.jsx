function ServicesSection({ setShowModal }) {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Services
        </h2>

        <div className="bg-white rounded-2xl shadow-md p-8 max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Personal Finance Consultation
          </h3>

          <p className="text-gray-600 mb-6">
            Get one-on-one guidance on budgeting, investing,
            savings, and long-term wealth building.
          </p>

          <div className="text-3xl font-bold text-blue-600 mb-6">
            ₹999
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
            >
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection