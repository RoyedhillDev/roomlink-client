// RoomCard.jsx
import React from "react";

const RoomCard = ({ room }) => {
  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <img
        src={room.image}
        alt={room.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1">{room.title}</h3>
        <p className="text-gray-700 mb-1">{room.location}</p>
        <p className="text-blue-600 font-semibold mb-1">
          {room.price.toLocaleString()} UGX
        </p>
        <p className={room.available ? "text-green-600" : "text-red-500"}>
          {room.available ? "Available" : "Unavailable"}
        </p>
      </div>
    </div>
  );
};

export default RoomCard;
