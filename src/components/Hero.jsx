const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center py-28 px-4 text-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h3 className="text-3xl md:text-3xl font-bold mb-6">
          Find Your Perfect Room Easily
        </h3>
        <p className="mb-8 text-lg">
          Whether you're a student, employee, or traveler — discover a perfect space to stay offered at unbelievable Prices.
        </p>
        <a
          href="/browse"
          className="border-2 border-white text-lg text-white px-3 py-2 hover:bg-white hover:bg-opacity-10 rounded-md transition bg-transparent"
        > 
          Browse Rooms
        </a>
      </div>
    </section>
  );
};

export default Hero;
