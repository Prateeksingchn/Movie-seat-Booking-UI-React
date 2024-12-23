import React, { createContext, useState, useContext } from 'react';

const MovieTicketContext = createContext();

export const MovieTicketProvider = ({ children }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [takenSeats, setTakenSeats] = useState(["E5", "E6", "E7", "E8", "E9", "F6", "F7", "F10", "G7", "G8", "H7", "H8"]);
  const [ticketPrice] = useState(20);
  const [rows] = useState(["A", "B", "C", "D", "E", "F", "G", "H"]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleSeatClick = (seatId) => {
    setSelectedSeats(prev => {
      if (prev.includes(seatId)) {
        return prev.filter(seat => seat !== seatId);
      } else {
        return [...prev, seatId];
      }
    });
  };

  return (
    <MovieTicketContext.Provider 
      value={{
        selectedSeats,
        setSelectedSeats,
        takenSeats,
        setTakenSeats,
        ticketPrice,
        rows,
        handleSeatClick,
        totalPrice: selectedSeats.length * ticketPrice,
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
      }}
    >
      {children}
    </MovieTicketContext.Provider>
  );
};

export const useMovieTickets = () => useContext(MovieTicketContext); 