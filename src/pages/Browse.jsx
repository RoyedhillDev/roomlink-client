import React, { useState } from 'react';
import RoomCard from '../components/RoomCard';
import BrowseHero from '../components/BrowseHero';

const sampleRooms = [
  {
    id: 1,
    title: 'Single Room - Makerere',
    location: 'Kikoni, Kampala',
    area: 'Makerere', // ✅ New field
    price: 150000,
    available: false,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    title: 'Self-contained Room - Kyambogo',
    location: 'Banda, Kampala',
    area: 'Kyambogo',
    price: 250000,
    available: false,
    image: 'https://api-jwh-com-au.b-cdn.net/listings/d05208cf-6f6c-4877-817a-4e79a0abafb2/7eaa5f77-c186-46ea-a932-e829c96aeed4/Osw_Austin_4K.jpeg?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 3,
    title: 'Spacious Room - MUBS',
    location: 'Nakawa, Kampala',
    area: 'MUBS',
    price: 200000,
    available: true,
    image: 'https://www.oswaldhomes.com.au/wp-content/uploads/2022/03/Urban-Prairie-look-book-1-1200x800.jpg',
  },{
    id: 4,
    title: 'Single Room - Makerere',
    location: 'Kikoni, Kampala',
    area: 'Makerere',
    price: 150000,
    available: false,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 5,
    title: 'Self-contained Room - Kyambogo',
    location: 'Banda, Kampala',
    area: 'Kyambogo',
    price: 250000,
    available: true,
    image: 'https://api-jwh-com-au.b-cdn.net/listings/d05208cf-6f6c-4877-817a-4e79a0abafb2/7eaa5f77-c186-46ea-a932-e829c96aeed4/Osw_Austin_4K.jpeg?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 6,
    title: 'Spacious Room - MUBS',
    location: 'Nakawa, Kampala',
    area: 'MUBS',
    price: 200000,
    available: false,
    image: 'https://www.oswaldhomes.com.au/wp-content/uploads/2022/03/Urban-Prairie-look-book-1-1200x800.jpg',
  },{
    id: 7,
    title: 'Single Room - Makerere',
    location: 'Kikoni, Kampala',
    area: 'Makerere',
    price: 150000,
    available: true,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 8,
    title: 'Self-contained Room - Kyambogo',
    location: 'Banda, Kampala',
    area: 'Kyambogo',
    price: 250000,
    available: false,
    image: 'https://api-jwh-com-au.b-cdn.net/listings/d05208cf-6f6c-4877-817a-4e79a0abafb2/7eaa5f77-c186-46ea-a932-e829c96aeed4/Osw_Austin_4K.jpeg?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 9,
    title: 'Spacious Room - MUBS',
    location: 'Nakawa, Kampala',
    area: 'MUBS',
    price: 200000,
    available: true,
    image: 'https://www.oswaldhomes.com.au/wp-content/uploads/2022/03/Urban-Prairie-look-book-1-1200x800.jpg',
  },
];

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState(300000);
  const [location, setLocation] = useState('');
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  const filteredRooms = sampleRooms.filter((room) => {
    const matchesSearch =
      room.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPrice = room.price <= maxPrice;

    const matchesLocation = location === '' || room.area.toLowerCase() === location.toLowerCase();



    const matchesAvailability = !onlyAvailable || room.available;

    return matchesSearch && matchesPrice && matchesLocation && matchesAvailability;
  });

  return (
        <><div className="text-center mt-0 text-2xl text-blue-800">
          <BrowseHero />
        </div>

        <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Browse Available Rooms</h2>

      {/* Filters Section */}
      <div className="grid gap-4 mb-8 md:grid-cols-2 lg:grid-cols-4">
        {/* 🔍 Search */}
        <input
          type="text"
          placeholder="Search by title or area..."
          className="px-4 py-2 border border-gray-300 rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} />

        {/* 💰 Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Max Price: {maxPrice.toLocaleString()} UGX</label>
          <input
            type="range"
            min="100000"
            max="500000"
            step="50000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full" />
        </div>

        {/* 📍 Location Dropdown */}
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


        {/* ✅ Only Available Toggle */}
        <label className="inline-flex items-center mt-2 cursor-pointer">
          <input
            type="checkbox"
            checked={onlyAvailable}
            onChange={(e) => setOnlyAvailable(e.target.checked)}
            className="mr-2" />
          Only Available
        </label>
      </div>

      {/* Room Results */}
      {filteredRooms.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No rooms match your filters.</p>
      )}
    </div></>
  );
};

export default Browse;