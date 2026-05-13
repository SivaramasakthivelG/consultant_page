function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Nambi A
        </h1>

        <p className="text-xl text-gray-600 mb-6">
          Personal Finance Consultant
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700">
          Book Appointment
        </button>
      </div>
    </section>
  )
}

export default HeroSection