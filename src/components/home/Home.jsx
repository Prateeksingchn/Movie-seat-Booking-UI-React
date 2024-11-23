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
      width: '100%',
      height: '60px',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '2px',
        background: 'linear-gradient(90deg, rgba(59, 130, 246, 0) 0%, rgba(147, 197, 253, 0.5) 50%, rgba(59, 130, 246, 0) 100%)',
        boxShadow: '0 0 15px rgba(147, 197, 253, 0.5)',
        borderRadius: '100%'
      }
    }
  };

  const handleSeatClick = (seatId) => {
    setSelectedSeats(prev => {
      if (prev.includes(seatId)) {
        return prev.filter(seat => seat !== seatId);
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
                                ${selectedDate === date.date 
                                  ? "bg-[#91B1F1] shadow-[0_0_8px_rgba(147,197,253,0.5)]" 
                                  : "bg-[#403f47]"}`}
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
    <div className="w-1/3">
      <h2 className="text-2xl font-extralight mb-3">Select Your Seats</h2>
      <div className="text-sm text-gray-500 mb-8 flex items-center">
        <span>{selectedSeats.length} Seats</span>
        {selectedSeats.map((seat, index) => (
          <React.Fragment key={seat}>
            <span className="mx-2">•</span>
            <span>{seat}</span>
          </React.Fragment>
        ))}
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <h3 className="text-lg uppercase font-medium">Movie Tickets</h3>
          <span className="ml-auto text-orange-500">🎟️</span>
        </div>
        <div className="text-gray-500 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Date & Time</span>
            <span>{selectedDate}/07/2023, {selectedTime}</span>
          </div>
          <div className="flex justify-between">
            <span>Tickets (Double comfort)</span>
            <span>{ticketPrice}$ × {selectedSeats.length} = {ticketPrice * selectedSeats.length}$</span>
          </div>
          <div className="flex justify-between">
            <span>Total</span>
            <span>{ticketPrice * selectedSeats.length}$</span>
          </div>
        </div>
      </div>

      {/* Summary Card */}
      <div className="bg-[#91B1F1]/20 p-6 rounded-2xl backdrop-blur-sm"
           style={{
             background: 'linear-gradient(145deg, rgba(147, 197, 253, 0.2) 0%, rgba(147, 197, 253, 0.1) 100%)',
             boxShadow: '0 4px 24px -1px rgba(147, 197, 253, 0.1)'
           }}>
        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-400">Tickets/Double comfort</span>
            <span>{selectedSeats.length}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Type</span>
            <span>{selectedType}</span>
          </div>
          <div className="flex justify-between text-lg font-medium">
            <span>TOTAL PRICE</span>
            <span>{ticketPrice * selectedSeats.length}$</span>
          </div>
        </div>
        <button className="w-full py-3 rounded-xl bg-gray-800/50 text-gray-400 mb-3 hover:bg-gray-800/70 transition-all">
          ADD PARKING
        </button>
        <button className="w-full py-3 rounded-xl bg-black text-white hover:bg-gray-900 transition-all">
          BUY
        </button>
      </div>
    </div>
  );

  const RightSection = () => (
    <div className="w-2/3 pl-12">
      {/* Screen Section */}
      <div className="relative mb-16">
        <div className="w-full h-[60px] relative overflow-hidden mb-2">
          <div 
            className="absolute w-full h-[2px] left-1/2 top-[30px] -translate-x-1/2"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(147, 197, 253, 0.5) 50%, transparent 100%)',
              boxShadow: '0 0 20px rgba(147, 197, 253, 0.5)',
              borderRadius: '100%',
              transform: 'translateX(-50%) rotate(-4deg)',
            }}
          />
        </div>
        <div className="text-center">
          <span className="text-gray-400 tracking-[0.5em] text-sm">S C R E E N</span>
        </div>
      </div>

      {/* Seats Grid */}
      <div className="relative px-8 py-4 rounded-3xl" 
           style={{
             background: 'radial-gradient(circle at center, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.3) 100%)',
             boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.5)'
           }}>
        <div className="grid gap-y-4">
          {rows.map((row) => (
            <div
              key={row}
              className="grid grid-cols-[30px_repeat(15,minmax(0,1fr))_30px] gap-x-2 items-center"
            >
              <div className="text-center text-gray-500 text-sm">{row}</div>
              {[...Array(seatsPerRow)].map((_, index) => {
                const seatId = `${row}${index + 1}`;
                const isDisabled = [
                  'G7', 'G8', 'H7', 'H8', // Disability seats in center
                  'A8', 'C12', 'F12' // Random disability seats
                ].includes(seatId);
                
                return (
                  <div
                    key={seatId}
                    className={`
                      w-6 h-6 rounded-sm cursor-pointer transition-all duration-300
                      ${isDisabled ? 'bg-gray-800/30 cursor-not-allowed' : ''}
                      ${selectedSeats.includes(seatId) 
                        ? "bg-[#91B1F1] shadow-[0_0_8px_rgba(147,197,253,0.5)]" 
                        : "bg-gray-800/30 hover:bg-gray-700/40"}
                    `}
                    onClick={() => !isDisabled && handleSeatClick(seatId)}
                  >
                    {isDisabled && (
                      <span className="flex items-center justify-center text-xs text-gray-400">♿</span>
                    )}
                  </div>
                );
              })}
              <div className="text-center text-gray-500 text-sm">{row}</div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex justify-center space-x-8 mt-12 text-xs text-gray-400">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-800/30 rounded-sm mr-2"></div>
            <span>Normal</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-700/50 rounded-sm mr-2"></div>
            <span>Comfort</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-600/50 rounded-sm mr-2"></div>
            <span>Double Comfort</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-800/30 rounded-sm mr-2"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-800/30 rounded-sm mr-2 flex items-center justify-center text-xs">
              ♿
            </div>
            <span>For Disabilities</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#91B1F1] shadow-[0_0_8px_rgba(147,197,253,0.5)] rounded-sm mr-2"></div>
            <span>Selected</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-900 rounded-sm mr-2"></div>
            <span>Taken</span>
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

  return (
    <div className="min-h-screen bg-[#1a1d24] text-gray-300 p-8"
         style={{
           background: 'radial-gradient(circle at top, #1a1d24 0%, #0f172a 100%)'
         }}>
      <TopNav />
      <div className="flex">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
};

export default Home;
