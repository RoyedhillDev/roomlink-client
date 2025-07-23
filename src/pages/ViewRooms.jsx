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
        console.error('❌ Failed to fetch rooms', err);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Available Rooms</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {rooms.map((room) => (
          <div key={room._id} className="border rounded-lg shadow p-3 bg-white">
            <img
              src={
                room.images && room.images.length > 0
                  ? `http://localhost:5000/${room.images[0]}`
                  : '/fallback.jpg'
              }
              alt={room.title || 'Room image'}
              className="w-full h-40 object-cover mb-2 rounded"
              onError={(e) => {
                e.target.src = '/fallback.jpg';
              }}
            />

            <h3 className="text-lg font-bold">{room.title || 'Untitled Room'}</h3>
            <p className="text-sm text-gray-600">{room.location || 'No location provided'}</p>
            <p className="text-sm text-gray-800 mt-1">
              UGX {room.price?.toLocaleString() || 'N/A'}
            </p>
            <p className="text-sm text-gray-700 mt-2">{room.description || 'No description'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewRooms;
