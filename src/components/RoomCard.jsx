import React from "react";

const RoomCard = ({ room }) => {
  const imageUrl =
    room.images && room.images.length > 0
      ? `http://localhost:5000${room.images[0]}` // ✅ prepend backend URL
      : "https://via.placeholder.com/300x200?text=No+Image";

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt={room.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
        <p className="text-gray-600 mb-2">{room.location}</p>
        <p className="text-green-600 font-bold mb-2">
          UGX {room.price.toLocaleString()}
        </p>
        <p className="text-sm text-gray-500">{room.description}</p>
      </div>
      
    </div>
  );
};



export default RoomCard;
