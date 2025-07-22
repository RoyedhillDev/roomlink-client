import React from 'react';

const RoomCard = ({ room }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <div className="relative">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-48 object-cover"
        />
        <span 
          className={`absolute top-2 right-2 px-2 py-1 rounded-md text-xs font-medium text-white ${
            room.available ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {room.available ? 'Available' : 'Not Available'}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-blue-800">{room.title}</h3>
        <p className="text-gray-600">{room.location}</p>
        <p className="text-green-700 font-bold mt-2">UGX {room.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default RoomCard;