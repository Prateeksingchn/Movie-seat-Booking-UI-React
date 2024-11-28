import React from 'react';
import { useMovieTickets } from '../../../context/MovieTicketContext';

const LeftSection = () => {
  const {
    selectedSeats,
    ticketPrice,
    selectedDate,
    selectedTime,
    selectedType,
    totalPrice
  } = useMovieTickets();

  return (
    <div className="w-[30%] mx-5">
      {/* Ticket info */}
      <div className="px-7 font-[roboto]">
        {/* Header */}
        <h2 className="text-[28px] font-normal text-white mb-1 font-[roboto]">
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
        <div className="mb-4">
          <div className="flex items-center mb-1">
            <h3 className="text-[17px] text-white">MOVIE TICKETS</h3>
            <span className="ml-auto text-orange-500 text-3xl">🎟️</span>
          </div>
          <div className="text-gray-500 space-y-1 text-[15px]">
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
      <div className="bg-[#93B3F3] p-7 rounded-2xl font-[roboto]">
        <div className="space-y-4 mb-6">
          <div className="flex justify-between text-[15px]">
            <span className="text-gray-700">Tickets/Double comfort</span>
            <span className="text-gray-700">{selectedSeats.length}</span>
          </div>
          <div className="flex justify-between text-[15px]">
            <span className="text-gray-700">Type</span>
            <span className="text-gray-700">{selectedType}</span>
          </div>
          <div className="flex justify-between text-[20px] font-medium border-t-2 border-zinc-400 pt-1">
            <span className="text-black">TOTAL PRICE</span>
            <span className="text-black">
              {ticketPrice * selectedSeats.length}$
            </span>
          </div>
        </div>

        {/* Buttons */}
        <button className="w-full py-3 rounded-full bg-white/10 text-gray-900 mb-3 hover:bg-white/20 transition-all border-2 border-gray-500">
          ADD PARKING
        </button>
        <button className="w-full py-3 rounded-full bg-black text-white hover:bg-gray-900 transition-all">
          BUY
        </button>
      </div>
    </div>
  );
};

export default LeftSection;