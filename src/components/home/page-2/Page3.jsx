import React, { useState } from 'react';
import { useMovieTickets } from '../../../context/MovieTicketContext';

const Page3 = () => {
  const {
    selectedSeats,
    ticketPrice,
    selectedType,
    selectedMall,
    selectedDate,
    selectedTime,
    totalPrice: movieTotalPrice
  } = useMovieTickets();

  const [carModel, setCarModel] = useState("KIA Seltos");
  const [licensePlate, setLicensePlate] = useState("HUC 2967");
  const [parkingSpot, setParkingSpot] = useState("B 122");
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [parkingDetails, setParkingDetails] = useState({ hours: 3, pricePerHour: 5 });
  const [isSpotDropdownOpen, setIsSpotDropdownOpen] = useState(false);
  const [isCarDropdownOpen, setIsCarDropdownOpen] = useState(false);

  const totalParkingPrice = parkingDetails.hours * parkingDetails.pricePerHour;
  const totalPrice = movieTotalPrice + totalParkingPrice;

  const parkingSpots = {
    1: {
      A: [
        ['1', '2'],
        ['3', '4'],
        ['5', '6'],
        // After road gap
        ['7', '8'],
        ['9', '10'],
        ['11', '12'],
        ['13', '14']
      ],
      B: [
        ['15', '16'],
        ['17', '18'],
        ['19', '20'],
        // After road gap
        ['21', '22'],
        ['23', '24'],
        ['25', '26'],
        ['27', '28']
      ],
      C: [
        ['29', '30'],
        ['31', '32'],
        ['33', '34'],
        // After road gap
        ['35', '36'],
        ['37', '38'],
        ['39', '40'],
        ['41', '42']
      ]
    },
    2: {
      A: [
        ['43', '44'],
        ['45', '46'],
        ['47', '48'],
        // After road gap
        ['49', '50'],
        ['51', '52'],
        ['53', '54'],
        ['55', '56']
      ],
      B: [
        ['57', '58'],
        ['59', '60'],
        ['61', '62'],
        // After road gap
        ['63', '64'],
        ['65', '66'],
        ['67', '68'],
        ['69', '70']
      ],
      C: [
        ['71', '72'],
        ['73', '74'],
        ['75', '76'],
        // After road gap
        ['77', '78'],
        ['79', '80'],
        ['81', '82'],
        ['83', '84']
      ]
    },
    3: {
      A: [
        ['85', '86'],
        ['87', '88'],
        ['89', '90'],
        // After road gap
        ['91', '92'],
        ['93', '94'],
        ['95', '96'],
        ['97', '98']
      ],
      B: [
        ['99', '100'],
        ['101', '102'],
        ['103', '104'],
        // After road gap
        ['105', '106'],
        ['107', '108'],
        ['109', '110'],
        ['111', '112']
      ],
      C: [
        ['113', '114'],
        ['115', '116'],
        ['117', '118'],
        // After road gap
        ['119', '120'],
        ['121', '122'],
        ['123', '124'],
        ['125', '126']
      ]
    },
    4: {
      A: [
        ['127', '128'],
        ['129', '130'],
        ['131', '132'],
        // After road gap
        ['133', '134'],
        ['135', '136'],
        ['137', '138'],
        ['139', '140']
      ],
      B: [
        ['141', '142'],
        ['143', '144'],
        ['145', '146'],
        // After road gap
        ['147', '148'],
        ['149', '150'],
        ['151', '152'],
        ['153', '154']
      ],
      C: [
        ['155', '156'],
        ['157', '158'],
        ['159', '160'],
        // After road gap
        ['161', '162'],
        ['163', '164'],
        ['165', '166'],
        ['167', '168']
      ]
    }
  };

  const handleSpotClick = (section, spot) => {
    setParkingSpot(`${section} ${spot}`);
  };

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
  };

  const currentParkingSpots = parkingSpots[selectedLevel]?.B || [];

  // Road Gap Component with dotted lines and arrows
  const RoadGap = ({ hasArrows = false }) => (
    <div className="h-28 relative flex flex-col justify-center">
    
      
      {/* Middle dashed border */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full border-t-2 border-dashed border-gray-700/70" />
      
      {/* Middle section with arrows and dotted lines */}
      {hasArrows && (
        <div className="flex flex-col justify-center items-center gap-6 absolute inset-0">
          {/* Top arrow with dotted line */}
          <div className="flex items-center justify-center w-full px-8">
            {/* <div className="flex-1 border-t-2 border-dotted border-gray-700/70" /> */}
            <span className="text-gray-500 text-2xl px-4">→</span>
          </div>
          
          {/* Bottom arrow with dotted line */}
          <div className="flex items-center justify-center w-full px-8">
            <span className="text-gray-500 text-2xl px-4">←</span>
            {/* <div className="flex-1 border-t-2 border-dotted border-gray-700/70" /> */}
          </div>
        </div>
      )}
      
    </div>
  );

  const ParkingSpot = ({ section, spot, isSelected }) => (
    <div 
      onClick={() => handleSpotClick(section, spot)}
      className={`h-16 border-y border-gray-700/30 flex items-center justify-center relative cursor-pointer
        hover:bg-blue-500/10 transition-colors
        ${isSelected ? 'bg-blue-400/60 ' : ''}`}
    >
      {isSelected && (
        <span className="absolute text-3xl">🚗</span>
      )}
      <span className={`text-sm ${
        isSelected ? 'text-blue-400' : 'text-gray-500'
      }`}>
        {spot}
      </span>
    </div>
  );

  const ParkingColumn = ({ section, spots }) => (
    <div className="border-t border-gray-700/30">
      {/* First 3 rows */}
      {spots.slice(0, 3).map((pair, idx) => (
        <div key={idx} className="grid grid-cols-2">
          {pair.map((spot) => (
            <ParkingSpot
              key={spot}
              section={section}
              spot={spot}
              isSelected={parkingSpot === `${section} ${spot}`}
            />
          ))}
        </div>
      ))}

      {/* Road Gap */}
      <RoadGap hasArrows={section === 'B'} />

      {/* Remaining rows */}
      {spots.slice(3).map((pair, idx) => (
        <div key={idx} className="grid grid-cols-2">
          {pair.map((spot) => (
            <ParkingSpot
              key={spot}
              section={section}
              spot={spot}
              isSelected={parkingSpot === `${section} ${spot}`}
            />
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#202124] text-gray-300 p-8 flex gap-6">
      {/* Left Section */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Top Navigation Bar */}
        <div className="flex justify-between">
          {/* Car Info Section */}
          <div className="flex items-center bg-[#1A1A1D] rounded-xl p-4 w-[35%]">
            <img 
              src="/path-to-orange-car.png" 
              alt="KIA Seltos" 
              className="w-12 h-12 object-contain"
            />
            <div className="ml-4">
              <h3 className="text-white">{carModel}</h3>
              <p className="text-sm text-gray-400">{licensePlate}</p>
            </div>
            <div className="ml-auto">
              <div className="w-8 h-8 rounded-full bg-[#FF4D4D]/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#FF4D4D]"></div>
              </div>
            </div>
          </div>

          {/* Dropdowns Section */}
          <div className="flex gap-4 w-[25%]">
            {/* Spot Dropdown */}
            <div className="relative flex-1">
              <button 
                onClick={() => setIsSpotDropdownOpen(!isSpotDropdownOpen)}
                className="w-full bg-[#1A1A1D] rounded-xl p-4 flex justify-between items-center"
              >
                <div>
                  <p className="text-sm text-blue-400">Your Spot</p>
                  <p className="text-white">{parkingSpot}</p>
                </div>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown content */}
            </div>

            {/* Car Dropdown */}
            <div className="relative flex-1">
              <button 
                onClick={() => setIsCarDropdownOpen(!isCarDropdownOpen)}
                className="w-full bg-[#1A1A1D] rounded-xl p-4 flex justify-between items-center"
              >
                <div>
                  <p className="text-sm text-blue-400">Your Car</p>
                  <p className="text-white">{carModel}</p>
                </div>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown content */}
            </div>
          </div>
        </div>

        {/* Parking Grid Section */}
        <div className="bg-[#1A1A1D] rounded-xl p-6">
          {/* Level Selector */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-gray-400">Level</span>
            {[1, 2, 3, 4].map(level => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-6 py-2 rounded-full ${
                  selectedLevel === level 
                    ? 'bg-blue-500/20 text-blue-400' 
                    : 'text-gray-400'
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          {/* Parking Grid */}
          <div className="relative bg-[#1A1A1D] p-8 rounded-xl">
            {/* Section Labels at Top */}
            <div className="grid grid-cols-3 mb-6">
              <div className="text-blue-400/60 text-lg w-full text-center">A</div>
              <div className="text-blue-400/60 text-lg w-full text-center">B</div>
              <div className="text-blue-400/60 text-lg w-full text-center">C</div>
            </div>

            {/* Main Grid Container */}
            <div className="grid grid-cols-3 gap-x-6">
              {['A', 'B', 'C'].map(section => (
                <ParkingColumn
                  key={section}
                  section={section}
                  spots={parkingSpots[selectedLevel][section]}
                />
              ))}
            </div>

            {/* Section Labels at Bottom */}
            <div className="grid grid-cols-3 mt-6">
              <div className="text-blue-400/60 text-lg w-full text-center">A</div>
              <div className="text-blue-400/60 text-lg w-full text-center">B</div>
              <div className="text-blue-400/60 text-lg w-full text-center">C</div>
            </div>
          </div>
        </div>
      </div>

       {/* Right Section */}
       <div className="w-[400px]">
        {/* Order Summary Header */}
        <div className="text-2xl text-white mb-6">Check Your Order</div>

        {/* Movie Tickets Section */}
        <div className="bg-[#1A1A1D] rounded-xl p-4 mb-4">
          <div className="flex items-center mb-1">
            <h3 className="text-[28px] font-normal text-white mb-1 font-[roboto]">
              Select Your Seats
            </h3>
          </div>
          <div className="text-sm text-gray-500 mb-5 flex items-center">
            <span>{selectedSeats.length} Seats</span>
            {selectedSeats.map((seat) => (
              <React.Fragment key={seat}>
                <span className="mx-2">•</span>
                <span>{seat}</span>
              </React.Fragment>
            ))}
          </div>
          
          {/* Movie Tickets Details */}
          <div className="mb-4">
            <div className="flex items-center mb-1">
              <h3 className="text-[17px] text-white">MOVIE TICKETS</h3>
              <span className="ml-auto text-orange-500 text-3xl">🎟️</span>
            </div>
            <div className="text-gray-500 space-y-1 text-[15px]">
              <div className="flex justify-between">
                <span>Date & Time</span>
                <span className="text-white">
                  {selectedDate}, {selectedTime}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Tickets (Double comfort)</span>
                <span className="text-white">
                  {ticketPrice}$ × {selectedSeats.length} = {ticketPrice * selectedSeats.length}$
                </span>
              </div>
              <div className="flex justify-between">
                <span>Total</span>
                <span className="text-white">{ticketPrice * selectedSeats.length}$</span>
              </div>
            </div>
          </div>
        </div>

       {/* Parking Section */}
        <div className="bg-[#1A1A1D] rounded-xl p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white">PARKING</span>
            <span className="text-orange-400">🅿️</span>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">1 Spot</span>
              <span className="text-white">{parkingSpot}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Date</span>
              <span className="text-white">{selectedDate}</span> {/* Display selected date */}
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Time</span>
              <span className="text-white">{selectedTime}</span> {/* Display selected time */}
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Distance</span>
              <span className="text-white">20:30-23:30 PM / 3h</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Price/1 hour</span>
              <span className="text-white">5$</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-700">
              <span className="text-gray-400">Total</span>
              <span className="text-white">{totalParkingPrice}$</span> {/* Update total parking price */}
            </div>
          </div>
        </div>

         {/* Total Price Section */}
         <div className="bg-blue-400/20 rounded-xl p-4 mb-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Movie Tickets</span>
              <span>{movieTotalPrice}$</span> {/* Update to show movie total price */}
            </div>
            <div className="flex justify-between">
              <span>Parking</span>
              <span>{totalParkingPrice}$</span> {/* Update to show parking total price */}
            </div>
            <div className="flex justify-between pt-2 border-t border-blue-400/20">
              <span className="font-medium">TOTAL PRICE</span>
              <span>{movieTotalPrice + totalParkingPrice}$</span> {/* Update to show total price */}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <button className="w-full bg-white/10 text-white py-3 rounded-xl mb-3">
          + ADD NEW VEHICLE
        </button>
        <button className="w-full bg-blue-500 text-white py-3 rounded-xl mb-6">
          PAY
        </button>

        {/* Footer Notes */}
        <div className="space-y-2 text-sm">
          <div className="flex gap-2">
            <span className="text-orange-400">ℹ️</span>
            <span className="text-gray-400">You can cancel the reservation online for free, but no later than 5 hours before the start!</span>
          </div>
          <div className="flex gap-2">
            <span className="text-blue-400">❔</span>
            <span className="text-gray-400">Do you have any questions? You will find all the answers here</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;