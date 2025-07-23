// src/pages/Browse.jsx
import React, { useState, useEffect } from 'react';
import RoomCard from '../components/RoomCard';
import BrowseHero from '../components/BrowseHero';
import axios from 'axios';

const Browse = () => {
  const [rooms, setRooms] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState(300000);
  const [location, setLocation] = useState('');
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/rooms');
        const formatted = res.data.map((room) => ({
          ...room,
          image: room.images?.length > 0 ? `http://localhost:5000${room.images[0]}` : null,
        }));
        setRooms(formatted);
      } catch (err) {
        console.error('Error fetching rooms:', err);
        setError('Failed to load rooms. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  const filteredRooms = rooms.filter((room) => {
    const matchesSearch =
      room.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.location?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPrice = room.price <= maxPrice;
    const matchesLocation =
      location === '' || room.location?.toLowerCase() === location.toLowerCase();

    const matchesAvailability = !onlyAvailable || room.available === true;

    return matchesSearch && matchesPrice && matchesLocation && matchesAvailability;
  });

  return (
    <>
      <div className="text-center mt-0 text-2xl text-blue-800">
        <BrowseHero />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
          Browse Available Rooms
        </h2>

        {/* Filters */}
        <div className="grid gap-4 mb-8 md:grid-cols-2 lg:grid-cols-4">
          <input
            type="text"
            placeholder="Search by title or area..."
            className="px-4 py-2 border border-gray-300 rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Max Price: {maxPrice.toLocaleString()} UGX
            </label>
            <input
              type="range"
              min="50000"
              max="500000"
              step="50000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="">All Locations</option>
            <option value="Makerere">Makerere</option>
            <option value="Kyambogo">Kyambogo</option>
            <option value="MUBS">MUBS</option>
          </select>

          <label className="inline-flex items-center mt-2 cursor-pointer">
            <input
              type="checkbox"
              checked={onlyAvailable}
              onChange={(e) => setOnlyAvailable(e.target.checked)}
              className="mr-2"
            />
            Only Available
          </label>
        </div>

        {/* Room Display */}
        {loading ? (
          <p className="text-center text-blue-500">Loading rooms...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : filteredRooms.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredRooms.map((room) => (
              <RoomCard key={room._id} room={room} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No rooms match your filters.</p>
        )}
      </div>
    </>
  );
};

export default Browse;
