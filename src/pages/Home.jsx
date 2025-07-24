import React from 'react';
import Hero from '../components/Hero';
import FeaturedRooms from '../components/FeaturedRooms';

const Home = () => {
  return (
    <div className="text-gray-800">
      <Hero />

      {/* 🏡 Welcome Section */}
      <section className="bg-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">Welcome to Roomlink Uganda</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          Discover affordable, long-term room rentals for university students, workers, and anyone looking to settle near Kampala’s top institutions.
          Whether you're seeking a self-contained studio or a simple single room near campus, we’ve got something for you.
        </p>
        <p className="text-md max-w-2xl mx-auto mt-4 text-gray-500">
          Our platform is designed to make it easy for room seekers to find available accommodation — fast, reliable, and verified by locals.
        </p>
      </section>

      {/* ⭐ Featured Rooms */}
      <FeaturedRooms />
    </div>
  );
};

export default Home;
