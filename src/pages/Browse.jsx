// Browse.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import RoomCard from "../components/RoomCard";
import BrowseHero from "../components/BrowseHero";

const Browse = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/rooms");
        setRooms(response.data);
      } catch (err) {
        console.error("Error fetching rooms:", err);
        setError("Failed to fetch rooms.");
      } finally {
        setLoading(false);
      }
    };

    fetchRooms(); // Run only once on mount
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <BrowseHero />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Browse Available Rooms
        </h2>

        {loading && <p className="text-center text-gray-600">Loading rooms...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        {!loading && !error && rooms.length === 0 && (
          <p className="text-center text-gray-600">No rooms available at the moment.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
