import React, { useEffect } from 'react';
import { useMovieTickets } from '../../../context/MovieTicketContext';

const RightSection = ({ selectedDate, selectedTime, selectedType, selectedMall }) => {
  const { selectedSeats, takenSeats, handleSeatClick, rows, setTakenSeats } = useMovieTickets();

  useEffect(() => {
    const generateRandomTakenSeats = () => {
      const randomSeats = [];
      const totalSeats = rows.length * 21; // 21 seats per row
      const numberOfTakenSeats = Math.floor(Math.random() * 20) + 10; // Random number between 10-30

      while (randomSeats.length < numberOfTakenSeats) {
        const randomRow = rows[Math.floor(Math.random() * rows.length)];
        const randomSeatNumber = Math.floor(Math.random() * 21) + 1;
        const seatId = `${randomRow}${randomSeatNumber}`;
        
        if (!randomSeats.includes(seatId)) {
          randomSeats.push(seatId);
        }
      }
      
      return randomSeats;
    };

    // Set initial taken seats when date, time, type, or mall changes
    setTakenSeats(generateRandomTakenSeats());
  }, [selectedDate, selectedTime, selectedType, selectedMall, rows, setTakenSeats]);

  const isDisabled = (seatId) => {
    return ["G7", "G8", "H7", "H8", "A8", "C12", "F12"].includes(seatId);
  };

  const renderSeat = (seatId, isDisabled, handleClick, selectedSeats) => {
    const isTaken = takenSeats.includes(seatId);
    const isSelected = selectedSeats.includes(seatId);
    
    return (
      <div
        key={seatId}
        className={`
          w-5 h-5 rounded-sm cursor-pointer transition-all duration-300
          ${isDisabled ? "bg-gray-800/20 cursor-not-allowed" : ""}
          ${isTaken ? "bg-red-600 cursor-not-allowed" : ""}
          ${isSelected ? "bg-[#A1C1F1] shadow-[0_0_8px rgba(147,197,253,0.5)]" : ""}
          ${!isDisabled && !isTaken && !isSelected ? "bg-gray-700/30 hover:bg-gray-600/40" : ""}
        `}
        onClick={() => !isDisabled && !isTaken && handleClick(seatId)}
      >
        {isDisabled && (
          <span className="flex items-center justify-center text-sm text-gray-500">♿</span>
        )}
      </div>
    );
  };

  return (
    <div className="w-[65%] rounded-3xl mx-auto p-4 ml-10 bg-gradient-to-r bg-[#1A1A1D]">
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
              <div className="flex gap-2 mx-12">
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

        {/* Legend */}
        <div className="flex justify-center mt-12 space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-gray-700/30 rounded-sm"></div>
            <span className="text-gray-500 text-sm">Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-[#A1C1F1] rounded-sm"></div>
            <span className="text-gray-500 text-sm">Selected</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-gray-800/20 rounded-sm flex items-center justify-center">
              <span className="text-gray-500 text-sm">♿</span>
            </div>
            <span className="text-gray-500 text-sm">Disabled</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-red-600 rounded-sm"></div>
            <span className="text-gray-500 text-sm">Taken</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;