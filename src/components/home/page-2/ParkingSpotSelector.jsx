import React from 'react';

const ParkingSpotSelector = ({ parkingSpot, setParkingSpot, selectedLevel, setSelectedLevel }) => {
  const parkingSpots = {
    1: {
      A: [
        ['1', '2'],
        ['3', '4'],
        ['5', '6'],
        ['7', '8'],
        ['9', '10'],
        ['11', '12'],
        ['13', '14']
      ],
      B: [
        ['15', '16'],
        ['17', '18'],
        ['19', '20'],
        ['21', '22'],
        ['23', '24'],
        ['25', '26'],
        ['27', '28']
      ],
      C: [
        ['29', '30'],
        ['31', '32'],
        ['33', '34'],
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
        ['49', '50'],
        ['51', '52'],
        ['53', '54'],
        ['55', '56']
      ],
      B: [
        ['57', '58'],
        ['59', '60'],
        ['61', '62'],
        ['63', '64'],
        ['65', '66'],
        ['67', '68'],
        ['69', '70']
      ],
      C: [
        ['71', '72'],
        ['73', '74'],
        ['75', '76'],
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
        ['91', '92'],
        ['93', '94'],
        ['95', '96'],
        ['97', '98']
      ],
      B: [
        ['99', '100'],
        ['101', '102'],
        ['103', '104'],
        ['105', '106'],
        ['107', '108'],
        ['109', '110'],
        ['111', '112']
      ],
      C: [
        ['113', '114'],
        ['115', '116'],
        ['117', '118'],
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
        ['133', '134'],
        ['135', '136'],
        ['137', '138'],
        ['139', '140']
      ],
      B: [
        ['141', '142'],
        ['143', '144'],
        ['145', '146'],
        ['147', '148'],
        ['149', '150'],
        ['151', '152'],
        ['153', '154']
      ],
      C: [
        ['155', '156'],
        ['157', '158'],
        ['159', '160'],
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

  const currentParkingSpots = parkingSpots[selectedLevel]?.B || [];

  return (
    <div className="bg-[#1A1A1D] rounded-xl p-6">
      {/* Level Selector */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-gray-400">Level</span>
        {[1, 2, 3, 4].map(level => (
          <button
            key={level}
            onClick={() => setSelectedLevel(level)}
            className={`px-6 py-2 rounded-full ${selectedLevel === level ? 'bg-blue-500/20 text-blue-400' : 'text-gray-400'}`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Parking Grid */}
      <div className="grid grid-cols-3 gap-x-6">
        {['A', 'B', 'C'].map(section => (
          <div key={section} className="border-t border-gray-700/30">
            {currentParkingSpots.map((pair, idx) => (
              <div key={idx} className="grid grid-cols-2">
                {pair.map((spot) => (
                  <div 
                    key={spot}
                    onClick={() => handleSpotClick(section, spot)}
                    className={`h-16 border-y border-gray-700/30 flex items-center justify-center relative cursor-pointer hover:bg-blue-500/10 transition-colors ${parkingSpot === `${section} ${spot}` ? 'bg-blue-400/60' : ''}`}
                  >
                    <span className={`text-sm ${parkingSpot === `${section} ${spot}` ? 'text-blue-400' : 'text-gray-500'}`}>
                      {spot}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParkingSpotSelector; 