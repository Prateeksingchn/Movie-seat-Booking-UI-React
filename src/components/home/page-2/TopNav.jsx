import React from 'react';

const TopNav = ({
  selectedDate,
  handleDateChange,
  selectedTime,
  handleTimeChange,
  selectedType,
  handleTypeChange,
  selectedMall,
  handleMallChange,
  times,
  types,
  malls,
  currentDates,
  handlePrevDate,
  handleNextDate
}) => {
  return (
    <div className="flex justify-between items-center mb-12 bg-[#2A2A2F] rounded-2xl px-8 py-4">
      {/* Date Section */}
      <div className="flex items-center space-x-6">
        <span className="text-blue-300 text-lg tracking-wider font-normal font-[roboto]">Date</span>
        <button onClick={handlePrevDate} className="text-orange-500 text-sm">&lt;</button>
        <div className="flex space-x-3">
          {currentDates.map((date) => (
            <div
              key={date.date}
              onClick={() => handleDateChange(date.date)}
              className={`flex flex-col items-center cursor-pointer transition-all duration-300 
                ${selectedDate === date.date 
                  ? "bg-[#91B1F1] px-4 py-2 rounded-full text-gray-800" 
                  : "hover:bg-[#2a2d32] px-4 py-2 rounded-full bg-[#343539]"
                }`}
            >
              <span className="text-xs text-gray-500">{date.month}</span>
              <span className={`text-base font-semibold ${selectedDate === date.date ? "text-white" : "text-gray-400"}`}>
                {date.date}
              </span>
              <span className="text-[10px] text-gray-500">{date.day}</span>
            </div>
          ))}
        </div>
        <button onClick={handleNextDate} className="text-orange-500 text-sm">&gt;</button>
      </div>

      {/* Selects Section */}
      <div className="flex items-center space-x-14 font-[roboto]">
        {/* Time Select */}
        <div className="flex flex-col">
          <span className="text-blue-300 text-xs ml-2">Time</span>
          <div className="relative">
            <select
              value={selectedTime}
              onChange={(e) => handleTimeChange(e.target.value)}
              className="appearance-none bg-transparent text-gray-300 text-sm pr-5 cursor-pointer focus:outline-none px-2"
            >
              {times.map((time) => (
                <option key={time} value={time} className="bg-[#1a1d24] text-gray-300 hover:bg-[#2a2d32]">{time}</option>
              ))}
            </select>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 text-[10px]">▼</span>
          </div>
        </div>

        <div className="border-l border-gray-700 h-8"></div>

        {/* Type Select */}
        <div className="flex flex-col">
          <span className="text-blue-300 text-xs ml-2">Type</span>
          <div className="relative">
            <select
              value={selectedType}
              onChange={(e) => handleTypeChange(e.target.value)}
              className="appearance-none bg-transparent text-gray-300 text-sm pr-5 px-2 cursor-pointer focus:outline-none"
            >
              {types.map((type) => (
                <option key={type.id} value={type.id} className="bg-[#1a1d24] text-gray-300 hover:bg-[#2a2d32]">{type.id}</option>
              ))}
            </select>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 text-[10px]">▼</span>
          </div>
        </div>

        <div className="border-l border-gray-700 h-8"></div>

        {/* Address Select */}
        <div className="flex flex-col">
          <span className="text-blue-300 text-xs ml-2">Address</span>
          <div className="relative">
            <select
              value={selectedMall}
              onChange={(e) => handleMallChange(e.target.value)}
              className="appearance-none bg-transparent text-gray-300 text-sm pr-5 px-2 cursor-pointer focus:outline-none"
            >
              {malls.map((mall) => (
                <option key={mall} value={mall} className="bg-[#1a1d24] text-gray-300 hover:bg-[#2a2d32]">{mall}</option>
              ))}
            </select>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 text-[10px]">▼</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;