import React from 'react';
import RoomCard from './RoomCard';
import { Link } from 'react-router-dom';

const sampleRooms = [
  {
    id: 1,
    title: 'Single Room - Makerere',
    location: 'Kikoni, Kampala',
    area: 'Makerere',
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
  },
  {
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
    title: 'Studio Room - Kyambogo',
    location: 'Banda, Kampala',
    area: 'Kyambogo',
    price: 300000,
    available: true,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 6,
    title: 'Quiet Room - MUBS',
    location: 'Nakawa, Kampala',
    area: 'MUBS',
    price: 180000,
    available: true,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60',
  },
];

const FeaturedRooms = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Featured Rooms
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {sampleRooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>

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
