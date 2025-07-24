
import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import axios from 'axios'
import { Link } from 'react-router-dom';

function About () {
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
    <div>
      <Hero />
        <div className="text-center mt-20 text-2xl text-green-700">
          📖 About Roomlink – Helping Students & Workers Find Rooms in Uganda.
        </div>
    
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-4">Available Rooms</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {rooms.map((room) => (
          <div key={room._id} className="border rounded-lg shadow p-3 bg-white">
            <img
              src={
                room.images && room.images.length > 0
                  ? `http://localhost:5000${room.images[0]}`
                  : "https://via.placeholder.com/300x200?text=No+Image"}
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
              <div className="text-center mt-10">
                <Link
                  to="/browse"
                  className="inline-block bg-yellow-600 text-base text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition"
                >
                  See All Rooms
                </Link>
              </div>
      </div>
    </div>
    </div>
  );
};

export default About;
