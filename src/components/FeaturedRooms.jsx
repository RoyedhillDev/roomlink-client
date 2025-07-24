import React, { useEffect, useState } from 'react';
import RoomCard from './RoomCard';
import { Link } from 'react-router-dom';

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/rooms'); // adjust URL as needed
        const data = await response.json();

        // Show only the first 6 rooms (or 3 if you prefer)
        const featuredRooms = data.slice(0, 6);
        setRooms(featuredRooms);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching featured rooms:', error);
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Featured Rooms
      </h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading featured rooms...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {rooms.map((room) => (
            <RoomCard key={room._id || room.id} room={room} />
          ))}
        </div>
      )}

      <div className="text-center mt-10">
        <Link
          to="/browse"
          className="inline-block bg-yellow-600 text-base text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition"
        >
          See All Rooms
        </Link>
      </div>
    </section>
  );
};

export default FeaturedRooms;
