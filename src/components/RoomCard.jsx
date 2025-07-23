import React from "react";

const RoomCard = ({ room }) => {
  console.log("ROOM DATA:", room);
  const imageUrl =
    room.images && room.images.length > 0
      ? `http://localhost:5000${room.images[0]}`
      : "https://via.placeholder.com/300x200?text=No+Image";

  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <img
        src={imageUrl}
        alt={room.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1">{room.title}</h3>
        <p className="text-gray-700 mb-1">{room.location}</p>
        <p className="text-blue-600 font-semibold mb-1">
          {room.price.toLocaleString()} UGX
        </p>
        <p className="text-green-600">{room.availability}</p>
      </div>
    </div>
  );
};

export default RoomCard;
