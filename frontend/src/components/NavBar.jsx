function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-blue-600">
        Nambi A Finance
      </h1>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
        Book Now
      </button>
    </nav>
  )
}

export default Navbar