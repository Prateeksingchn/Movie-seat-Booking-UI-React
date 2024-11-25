import React, { useState } from 'react';

const Page3 = () => {
  const [carModel, setCarModel] = useState("KIA Seltos");
  const [licensePlate, setLicensePlate] = useState("HUC 2967");
  const [parkingSpot, setParkingSpot] = useState("B 122");
  const [movieTickets, setMovieTickets] = useState({ count: 2, price: 20, seats: ["D10", "D11"] });
  const [parkingDetails, setParkingDetails] = useState({ hours: 3, pricePerHour: 5 });

  const totalMoviePrice = movieTickets.count * movieTickets.price;
  const totalParkingPrice = parkingDetails.hours * parkingDetails.pricePerHour;
  const totalPrice = totalMoviePrice + totalParkingPrice;

  return (
    <div className="min-h-screen bg-[#202124] text-gray-300 p-8 flex">
      {/* Left Section */}
      <div className="w-[65%] bg-[#1A1A1D] rounded-2xl p-6 mr-4">
        {/* Car Info Header */}
        <div className="flex items-center mb-8 bg-[#2A2A2F] rounded-xl p-4">
          <img 
            src="/path-to-orange-car.png" 
            alt="KIA Seltos" 
            className="w-20 h-16 object-contain"
          />
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-white">{carModel}</h3>
            <p className="text-sm text-gray-400">{licensePlate}</p>
          </div>
          <div className="ml-auto">
            <div className="w-8 h-8 rounded-full bg-[#FF4D4D]/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#FF4D4D]"></div>
            </div>
          </div>
        </div>

        {/* Level Selector and Parking Grid (as previously defined) */}
        {/* ... existing left section code ... */}
      </div>

      {/* Right Section */}
      <div className="w-[33%] bg-[#1A1A1D] rounded-2xl p-6">
        {/* Top Section */}
        <h3 className="text-xl font-bold mb-4">Check Your Order</h3>
        <div className="mb-4">
          <h4 className="text-md">Movie Tickets</h4>
          <p>{movieTickets.count} Seats @ {movieTickets.price}$ each</p>
          <p>Seats: {movieTickets.seats.join(', ')}</p>
          <p>Date & Time: 12/07/2022, 20:30</p>
          <p>Ticket (Double comfort): {movieTickets.price}$ x {movieTickets.count} = {totalMoviePrice}$</p>
        </div>
        <div>
          <h4 className="text-md">Parking</h4>
          <p>1 Spot: {parkingSpot}</p>
          <p>Date: 12/07/2022</p>
          <p>Distance: 20:30 - 23:30 PM / {parkingDetails.hours}h</p>
          <p>Price / hour: {parkingDetails.pricePerHour}$</p>
          <p>Total: {totalParkingPrice}$</p>
        </div>

        {/* Bottom Section */}
        <div className="bg-[#2A2A2F] rounded-2xl p-4 mt-6">
          <h3 className="text-xl font-bold">Total Price</h3>
          <p className="text-lg font-bold">{totalPrice}$</p>
          <button className="w-full py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all mt-4">
            PAY
          </button>
          <button className="w-full py-3 rounded-full bg-gray-600 text-white hover:bg-gray-700 transition-all mt-2">
            + ADD NEW VEHICLE
          </button>
        </div>

        {/* Additional Information */}
        <div className="text-sm text-gray-500 mt-4">
          <p>You can cancel the reservation online for free, but no later than 5 hours before the start!</p>
          <p>Do you have any questions? You will find all the answers <a href="#" className="text-blue-400">here</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default Page3; 