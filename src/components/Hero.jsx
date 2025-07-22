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
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Find Your Long-Term Room in Uganda
        </h2>
        <p className="mb-8 text-lg">
          Whether you're a student, employee, or traveler — discover a perfect space to stay for months or even years.
        </p>
        <a
          href="/browse"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Browse Available Rooms
        </a>
      </div>
    </section>
  );
};

export default Hero;
