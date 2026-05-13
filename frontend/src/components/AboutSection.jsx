function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          About Nambi A
        </h2>

        <p className="text-lg text-gray-600 leading-8">
          Nambi A is a Personal Finance Consultant helping individuals
          make smarter financial decisions through structured guidance,
          investment awareness, and disciplined financial planning.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
            NISM Certified
          </span>

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
            Mutual Fund Distributor
          </span>

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
            PMS & SIF Guidance
          </span>
        </div>
      </div>
    </section>
  )
}

export default AboutSection