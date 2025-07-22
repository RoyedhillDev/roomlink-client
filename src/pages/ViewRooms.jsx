import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewRooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/rooms')
      .then((res) => {
        setRooms(res.data);
      })
      .catch((err) => {
        console.error('Failed to fetch rooms', err);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Available Rooms</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {rooms.map((room) => (
          <div key={room._id} className="border rounded-lg shadow p-3 bg-white">
            {room.images?.[0] && (
              <img
                src={`http://localhost:5000/uploads/${room.images[0]}`}
                alt={room.title}
                className="w-full h-40 object-cover mb-2 rounded"
              />
            )}
            <h3 className="text-lg font-bold">{room.title}</h3>
            <p className="text-sm text-gray-600">{room.location}</p>
            <p className="text-sm text-gray-800 mt-1">UGX {room.price.toLocaleString()}</p>
            <p className="text-sm text-gray-700 mt-2">{room.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewRooms;
