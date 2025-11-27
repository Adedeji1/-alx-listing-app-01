import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const calculateTotal = () => {
    if (!checkIn || !checkOut) return 0;

    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = (end.getTime() - start.getTime()) / (1000 * 3600 * 24);

    return diff > 0 ? diff * price : 0;
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg sticky top-24">
      <h3 className="text-xl font-semibold">${price}/night</h3>

      <div className="mt-4">
        <label>Check-in</label>
        <input
          type="date"
          className="border p-2 w-full mt-2"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <label>Check-out</label>
        <input
          type="date"
          className="border p-2 w-full mt-2"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      {/* Total */}
      <div className="mt-4">
        <p>
          Total payment:{" "}
          <strong>${calculateTotal()}</strong>
        </p>
      </div>

      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md w-full">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
