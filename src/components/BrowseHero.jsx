const BrowseHero = () => {
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
          Locate Your Room Quickly
        </h2>
        <p className="mb-8 text-lg">
          Specify the desired place where you are looking to get a room, just adjust a few things and you're ready!
        </p>
        <a
          href="/browse"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Post A Room
        </a>
      </div>
    </section>
  );
};

export default BrowseHero;
