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
          href="/postaroom"
          className="border-2 border-white text-lg text-white px-3 py-2 hover:bg-white hover:bg-opacity-10 rounded-md transition bg-transparent"
        >
          Post A Room
        </a>
      </div>
    </section>
  );
};

export default BrowseHero;
