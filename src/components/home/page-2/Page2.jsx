import React, { useState, useEffect } from "react";
import TopNav from "./TopNav";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Page3 from "./Page3";

const Page2 = () => {
  // State declarations
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedType, setSelectedType] = useState("2D");
  const [selectedMall, setSelectedMall] = useState("OCEAN MALL");
  const [ticketPrice, setTicketPrice] = useState(20);
  const [takenSeats, setTakenSeats] = useState([]);
  const [seatOccupancyMap, setSeatOccupancyMap] = useState({});

  const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
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
  const malls = ["OCEAN MALL", "LUCKY ONE MALL", "ATRIUM MALL"];

  // Generate dates
  const generateCurrentWeekDates = () => {
    const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const today = new Date();
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        day: days[date.getDay()],
        date: String(date.getDate()).padStart(2, "0"),
        month: date.toLocaleString("default", { month: "short" }),
      });
    }
    return dates;
  };

  const [currentDates, setCurrentDates] = useState(generateCurrentWeekDates());

  // Handler functions
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setTicketPrice(types.find((t) => t.id === type).price);
  };

  const handleMallChange = (mall) => setSelectedMall(mall);

  const handleSeatClick = (seatId) => {
    setSelectedSeats((prev) => {
      if (prev.includes(seatId)) {
        return prev.filter((id) => id !== seatId);
      }
      return [...prev, seatId];
    });
  };

  const handlePrevDate = () => {
    // Implementation for previous date
  };

  const handleNextDate = () => {
    // Implementation for next date
  };

  // Generate random taken seats
  const generateRandomTakenSeats = () => {
    const allSeats = rows.flatMap((row) =>
      Array.from({ length: 12 }, (_, i) => `${row}${i + 1}`)
    );
    return allSeats
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.floor(Math.random() * 20) + 5);
  };

  const getTakenSeats = (key) => {
    if (!seatOccupancyMap[key]) {
      const newMap = { ...seatOccupancyMap };
      newMap[key] = generateRandomTakenSeats();
      setSeatOccupancyMap(newMap);
      return newMap[key];
    }
    return seatOccupancyMap[key];
  };

  useEffect(() => {
    const key = `${selectedDate}-${selectedTime}-${selectedMall}-${selectedType}`;
    const newTakenSeats = getTakenSeats(key);
    setTakenSeats(newTakenSeats);
  }, [selectedDate, selectedTime, selectedMall, selectedType]);

  return (
    <div>

      {/* page2 */}
      <div className="min-h-screen bg-[#202124] text-gray-300 py-8 px-12">
        <TopNav
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
          selectedTime={selectedTime}
          handleTimeChange={handleTimeChange}
          selectedType={selectedType}
          handleTypeChange={handleTypeChange}
          selectedMall={selectedMall}
          handleMallChange={handleMallChange}
          times={times}
          types={types}
          malls={malls}
          currentDates={currentDates}
          handlePrevDate={handlePrevDate}
          handleNextDate={handleNextDate}
        />

        <div className="flex">
          <LeftSection
            selectedSeats={selectedSeats}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            selectedType={selectedType}
            ticketPrice={ticketPrice}
          />
          <RightSection
            selectedSeats={selectedSeats}
            takenSeats={takenSeats}
            handleSeatClick={handleSeatClick}
            rows={rows}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            selectedType={selectedType}
            selectedMall={selectedMall}
          />
        </div>
      </div>

      {/* page3 */}
      <Page3 />
    </div>
  );
};

export default Page2;
