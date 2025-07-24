import React, { useEffect, useState } from "react";
import axios from "axios";
import RoomCard from "../components/RoomCard";
import BrowseHero from "../components/BrowseHero";

const Browse = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Search states
  const [searchTerm, setSearchTerm] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredRooms, setFilteredRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/rooms");
        setRooms(response.data);
        setFilteredRooms(response.data); // Default view = all
      } catch (err) {
        console.error("Error fetching rooms:", err);
        setError("Failed to fetch rooms.");
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  // 🔍 Filtering function (triggered by search button)

    



  const handleSearch = () => {
    const results = rooms.filter((room) => {
      const matchesText =
        room.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        room.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesPrice =
        maxPrice === "" || room.price <= parseInt(maxPrice);

      return matchesText && matchesPrice;
    });

    setFilteredRooms(results);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <BrowseHero />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Browse Available Rooms
        </h2>

        {/* 🔍 Search Filters */}
        
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4">
         <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 flex-auto">
            <input
              type="text"
              placeholder="Search by title or location"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 p-2 rounded shadow-sm w-full max-w-xs"
            />
            <input
              type="number"
              placeholder="Max price (UGX)"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="border border-gray-300 p-2 rounded shadow-sm w-full max-w-xs"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Search
            </button>
            <button
              onClick={() => {
                setSearchTerm("");
                setMaxPrice("");
                setFilteredRooms(rooms); // Reset to original unfiltered rooms
              }}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Clear Filters
            </button>
          </div>


        </div>

        {loading && <p className="text-center text-gray-600">Loading rooms...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        {!loading && !error && filteredRooms.length === 0 && (
          <p className="text-center text-gray-600">No matching rooms found.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredRooms.map((room) => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
