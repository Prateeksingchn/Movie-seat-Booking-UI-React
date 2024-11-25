import React, { useState } from "react";

const Home = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedDate, setSelectedDate] = useState("12");
  const [selectedTime, setSelectedTime] = useState("20:00 PM");
  const [selectedType, setSelectedType] = useState("2D");
  const [selectedMall, setSelectedMall] = useState("OCEAN MALL");
  const [ticketPrice, setTicketPrice] = useState(20);

  const times = [
    "10:00 AM",
    "12:30 PM",
    "15:00 PM",
    "17:30 PM",
    "20:00 PM",
    "22:30 PM",
  ];

  const types = [
    { id: "2D", price: 20 },
    { id: "3D", price: 25 },
    { id: "IMAX", price: 30 },
    { id: "4DX", price: 35 },
  ];

  const malls = [
    "OCEAN MALL",
    "CITY CENTER",
    "MEGA MALL",
    "STAR CINEMA",
    "PLAZA MALL",
  ];

  const dates = [
    { day: "Mo", date: "09", month: "Jun" },
    { day: "Tu", date: "10", month: "Jun" },
    { day: "We", date: "11", month: "Jun" },
    { day: "Th", date: "12", month: "Jun" },
    { day: "Fr", date: "13", month: "Jun" },
    { day: "Sa", date: "14", month: "Jun" },
    { day: "Su", date: "15", month: "Jun" },
  ];

  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const seatsPerRow = 15;

  const screenCurveStyles = {
    screen: {
      width: "100%",
      height: "60px",
      position: "relative",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        height: "2px",
        background:
          "linear-gradient(90deg, rgba(59, 130, 246, 0) 0%, rgba(147, 197, 253, 0.5) 50%, rgba(59, 130, 246, 0) 100%)",
        boxShadow: "0 0 15px rgba(147, 197, 253, 0.5)",
        borderRadius: "100%",
      },
    },
  };

  const handleSeatClick = (seatId) => {
    setSelectedSeats((prev) => {
      if (prev.includes(seatId)) {
        return prev.filter((seat) => seat !== seatId);
      } else {
        return [...prev, seatId];
      }
    });
  };

  const TopNav = () => (
    <div className="flex justify-between items-center mb-12 bg-[#272B32] p-4 rounded-2xl">
      {/* Date Section */}
      <div className="flex items-center space-x-4">
        <span className="text-blue-400 text-xl font-semibold">Date</span>
        <button className="text-orange-500">&lt;</button>
        <div className="flex space-x-1">
          {dates.map((date) => (
            <div
              key={date.date}
              className={`flex flex-col items-center cursor-pointer transition-all duration-300 px-5 py-2 rounded-[28px]
                                ${
                                  selectedDate === date.date
                                    ? "bg-[#91B1F1] shadow-[0_0_8px_rgba(147,197,253,0.5)]"
                                    : "bg-[#403f47]"
                                }`}
              onClick={() => setSelectedDate(date.date)}
            >
              <span className="text-[12px] text-gray-400">{date.month}</span>
              <span className="text-base font-semibold text-black">
                {date.date}
              </span>
              <span className="text-xs text-gray-400">{date.day}</span>
            </div>
          ))}
        </div>
        <button className="text-orange-500">&gt;</button>
      </div>

      {/* Right Options */}
      <div className="flex space-x-10">
        <div className="flex flex-col items-start border-r-2 border-zinc-600 pr-24 mr-16">
          <span className="text-blue-400 text-[16px]">Time</span>
          <select
            className="bg-transparent text-gray-300 border-none outline-none appearance-none pr-8"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            {times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        {/* Type and Location */}
        <div className="flex space-x-20">
          <div className="flex flex-col items-start">
            <span className="text-blue-400 text-[16px] mr-3">Type</span>
            <select
              className="bg-transparent text-gray-300 border-none outline-none appearance-none pr-6"
              value={selectedType}
              onChange={(e) => handleTypeChange(e.target.value)}
            >
              {types.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.id}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-blue-400 text-[16px] mr-3">Address</span>
            <select
              className="bg-transparent text-gray-300 border-none outline-none appearance-none pr-6"
              value={selectedMall}
              onChange={(e) => setSelectedMall(e.target.value)}
            >
              {malls.map((mall) => (
                <option key={mall} value={mall}>
                  {mall}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const LeftSection = () => (
    <div className="w-[30%] mx-5">

      {/* Ticket info */}
      <div className="px-7">
        {/* Header */}
        <h2 className="text-[28px] font-light text-white mb-2">
          Select Your Seats
        </h2>
        <div className="text-sm text-gray-500 mb-5 flex items-center">
          <span>{selectedSeats.length} Seats</span>
          {selectedSeats.map((seat, index) => (
            <React.Fragment key={seat}>
              <span className="mx-2">•</span>
              <span>{seat}</span>
            </React.Fragment>
          ))}
        </div>

        {/* Movie Tickets Section */}
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <h3 className="text-[17px] text-white">MOVIE TICKETS</h3>
            <span className="ml-auto text-orange-500 text-2xl">🎟️</span>
          </div>
          <div className="text-gray-500 space-y-3 text-[15px]">
            <div className="flex justify-between">
              <span>Date & Time</span>
              <span>
                {selectedDate}/07/2023, {selectedTime}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Tickets (Double comfort)</span>
              <span>
                {ticketPrice}$ × {selectedSeats.length} ={" "}
                {ticketPrice * selectedSeats.length}$
              </span>
            </div>
            <div className="flex justify-between">
              <span>Total</span>
              <span>{ticketPrice * selectedSeats.length}$</span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Card */}
      <div
        className="bg-[#91B1F1]/20 p-7 rounded-2xl"
        style={{
          background:
            "linear-gradient(145deg, rgba(147, 197, 253, 0.2) 0%, rgba(147, 197, 253, 0.1) 100%)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="space-y-4 mb-6">
          <div className="flex justify-between text-[15px]">
            <span className="text-gray-400">Tickets/Double comfort</span>
            <span className="text-white">{selectedSeats.length}</span>
          </div>
          <div className="flex justify-between text-[15px]">
            <span className="text-gray-400">Type</span>
            <span className="text-white">{selectedType}</span>
          </div>
          <div className="flex justify-between text-[20px] font-medium">
            <span className="text-white">TOTAL PRICE</span>
            <span className="text-white">
              {ticketPrice * selectedSeats.length}$
            </span>
          </div>
        </div>

        {/* Buttons */}
        <button className="w-full py-3 rounded-2xl bg-white/10 text-gray-300 mb-3 hover:bg-white/20 transition-all">
          ADD PARKING
        </button>
        <button className="w-full py-3 rounded-2xl bg-black text-white hover:bg-gray-900 transition-all">
          BUY
        </button>
      </div>
    </div>
  );

  const RightSection = () => (
    <div
      className="w-[65%] rounded-3xl mx-auto p-4 ml-10"
      style={{
        background:
          "radial-gradient(circle at center, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.2) 100%)",
        boxShadow: "inset 0 0 100px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* Screen Section - SVG curved line with enhanced glow */}
      <div className="relative mb-5">
        <div className="w-full mx-auto h-[40px] relative overflow-hidden mb-2">
          <svg
            width="100%"
            height="80"
            viewBox="0 0 800 80"
            preserveAspectRatio="none"
            className="absolute top-0 left-0"
          >
            {/* Outer glow effect */}
            <path
              d="M 0,60 Q 400,-10 800,60"
              stroke="rgba(147, 197, 253, 0.2)"
              strokeWidth="4"
              fill="none"
              className="filter drop-shadow-[0_0_20px_rgba(147,197,253,0.4)]"
            />

            {/* Main bright line */}
            <path
              d="M 0,60 Q 400,-10 800,60"
              stroke="rgba(147, 197, 253, 0.5)"
              strokeWidth="2"
              fill="none"
              className="filter drop-shadow-[0_0_8px_rgba(147,197,253,0.6)]"
            />

            {/* Inner subtle line */}
            <path
              d="M 0,60 Q 400,-10 800,60"
              stroke="rgba(147, 197, 253, 0.3)"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>
        <div className="text-center mt-8">
          <span className="text-gray-500 tracking-[0.5em] text-sm">
            S C R E E N
          </span>
        </div>
      </div>

      {/* Seats Grid - Updated with 5-11-5 layout */}
      <div className="px-8">
        <div className="grid gap-y-3">
          {rows.map((row) => (
            <div key={row} className="flex justify-center items-center">
              {/* Row label left */}
              <div className="text-center text-blue-400/60 text-sm font-medium w-6">
                {row}
              </div>

              {/* Left section (5 seats) */}
              <div className="flex gap-2 mr-4">
                {[...Array(5)].map((_, index) => {
                  const seatId = `${row}${index + 1}`;
                  return renderSeat(
                    seatId,
                    isDisabled(seatId),
                    handleSeatClick,
                    selectedSeats
                  );
                })}
              </div>

              {/* Middle section (11 seats) */}
              <div className="flex gap-2 mx-4">
                {[...Array(11)].map((_, index) => {
                  const seatId = `${row}${index + 6}`;
                  return renderSeat(
                    seatId,
                    isDisabled(seatId),
                    handleSeatClick,
                    selectedSeats
                  );
                })}
              </div>

              {/* Right section (5 seats) */}
              <div className="flex gap-2 ml-4">
                {[...Array(5)].map((_, index) => {
                  const seatId = `${row}${index + 17}`;
                  return renderSeat(
                    seatId,
                    isDisabled(seatId),
                    handleSeatClick,
                    selectedSeats
                  );
                })}
              </div>

              {/* Row label right */}
              <div className="text-center text-blue-400/60 text-sm font-medium w-6">
                {row}
              </div>
            </div>
          ))}
        </div>

        {/* Updated Legend styling */}
        <div className="flex justify-center mt-12 space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-gray-800/30 rounded-sm"></div>
            <span className="text-gray-500 text-sm">Normal</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-5 bg-gray-700/40 rounded-sm"></div>
            <span className="text-gray-500 text-sm">Comfort</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-7 h-5 bg-gray-600/40 rounded-sm"></div>
            <span className="text-gray-500 text-sm">Double Comfort</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-gray-800/30 rounded-sm"></div>
            <span className="text-gray-500 text-sm">Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-gray-800/20 rounded-sm flex items-center justify-center">
              <span className="text-gray-500 text-xs">♿</span>
            </div>
            <span className="text-gray-500 text-sm">For Disabilities</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-[#91B1F1] shadow-[0_0_8px_rgba(147,197,253,0.5)] rounded-sm"></div>
            <span className="text-gray-500 text-sm">Selected</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-gray-900 rounded-sm"></div>
            <span className="text-gray-500 text-sm">Taken</span>
          </div>
        </div>
      </div>
    </div>
  );

  const handleTypeChange = (type) => {
    setSelectedType(type);
    const newPrice = types.find((t) => t.id === type).price;
    setTicketPrice(newPrice);
  };

  const calculateTotal = () => {
    return selectedSeats.length * ticketPrice;
  };

  // Helper function to check if seat is disabled
  const isDisabled = (seatId) => {
    return ["G7", "G8", "H7", "H8", "A8", "C12", "F12"].includes(seatId);
  };

  // Helper function to render individual seat
  const renderSeat = (seatId, isDisabled, handleClick, selectedSeats) => (
    <div
      key={seatId}
      className={`
        w-5 h-5 rounded-sm cursor-pointer transition-all duration-300
        ${isDisabled ? "bg-gray-800/20 cursor-not-allowed" : ""}
        ${
          selectedSeats.includes(seatId)
            ? "bg-[#91B1F1] shadow-[0_0_8px_rgba(147,197,253,0.5)]"
            : "bg-gray-800/30 hover:bg-gray-700/40"
        }
      `}
      onClick={() => !isDisabled && handleClick(seatId)}
    >
      {isDisabled && (
        <span className="flex items-center justify-center text-xs text-gray-500">
          ♿
        </span>
      )}
    </div>
  );

  return (
    <div
      className="min-h-screen bg-[#1a1d24] text-gray-300 p-8"
      style={{
        background: "radial-gradient(circle at top, #1a1d24 0%, #0f172a 100%)",
      }}
    >
      <TopNav />
      <div className="flex">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
};

export default Home;
