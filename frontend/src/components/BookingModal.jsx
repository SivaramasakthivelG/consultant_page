import { useState } from "react";

function BookingModal({ setShowModal }) {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedSlot, setSelectedSlot] = useState("")
  const [selectedService, setSelectedService] = useState("");
  const [price, setPrice] = useState("");

  const availableSlots = [
    "10:00 AM - 11:00 AM",
    "2:00 PM - 3:00 PM",
    "4:00 PM - 5:00 PM",
    "6:00 PM - 7:00 PM",
  ]

  const services = {
    Resume: "₹499",
    Consultation: "₹999",
    Portfolio: "₹1499",
  };
  

  const handleServiceChange = (e) => {
    const value = e.target.value;
    setSelectedService(value);
    setPrice(services[value]);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white p-8 rounded-2xl w-full max-w-md relative max-h-[90vh] overflow-y-auto">

        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 text-gray-500 text-xl"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-6">
          Book Appointment
        </h2>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-lg outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg outline-none focus:border-blue-500"
          />

          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full border p-3 rounded-lg"
          />

          <div>
            <p className="text-gray-700 font-medium mb-3">
              Select a Slot
            </p>

            <div className="grid grid-cols-2 gap-3">
              {availableSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className={`border rounded-lg p-3 text-sm ${selectedSlot === slot
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700"
                    }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Service Dropdown */}
          <select
            value={selectedService}
            onChange={handleServiceChange}
            className="w-full border p-3 rounded-lg outline-none focus:border-blue-500"
          >
            <option value="">Select Service</option>
            <option value="Resume">Resume Review</option>
            <option value="Consultation">1:1 Consultation</option>
            <option value="Portfolio">Portfolio Building</option>
          </select>

          {/* Price Box */}
          {price && (
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <p className="text-gray-700">
                Service Price:
              </p>
              <h3 className="text-2xl font-bold text-blue-600">
                {price}
              </h3>
            </div>
          )}

          {/* UPI Payment */}
          {price && (
            <div className="border rounded-lg p-4 space-y-2">
              <p className="font-semibold">
                Pay to UPI ID:
              </p>

              <div className="bg-gray-100 p-3 rounded-lg text-center font-medium">
                yourupi@okaxis
              </div>

              <p className="text-sm text-gray-500">
                After payment, upload screenshot below.
              </p>
            </div>
          )}

          {/* Screenshot Upload */}
          <div>
            <label className="block mb-2 font-medium">
              Payment Screenshot
            </label>

            <input
              type="file"
              className="w-full border p-3 rounded-lg"
            />
          </div>

          {/* Additional Notes */}
          <textarea
            placeholder="Tell us about your requirement..."
            rows="4"
            className="w-full border p-3 rounded-lg outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingModal;