export default function Gallery() {
  const galleryItems = [
    { id: 1, title: 'Wedding Ceremony', category: 'Weddings' },
    { id: 2, title: 'Reception Hall', category: 'Weddings' },
    { id: 3, title: 'Corporate Gala', category: 'Corporate' },
    { id: 4, title: 'Birthday Party', category: 'Birthday' },
    { id: 5, title: 'Seminar Setup', category: 'Corporate' },
    { id: 6, title: 'Engagement Event', category: 'Weddings' },
    { id: 7, title: 'Awards Night', category: 'Corporate' },
    { id: 8, title: 'Anniversary Celebration', category: 'Anniversary' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold">Gallery</h1>
          <p className="text-xl text-amber-100 mt-4">Take a Look at Our Previous Events</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Weddings', 'Corporate', 'Birthday', 'Anniversary'].map((filter) => (
              <button
                key={filter}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  filter === 'All'
                    ? 'bg-amber-900 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-amber-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="bg-gradient-to-br from-amber-200 to-amber-100 h-64 rounded-lg overflow-hidden flex items-center justify-center relative">
                  <div className="text-6xl">📷</div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 bg-white text-amber-900 px-4 py-2 rounded-lg font-bold transition">
                      View
                    </button>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-amber-900 mt-3">{item.title}</h3>
                <p className="text-gray-600">{item.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Impressed by Our Work?</h2>
          <p className="text-xl mb-6 text-amber-100">Book your event with us today</p>
          <a href="/booking" className="inline-block bg-white text-amber-900 px-8 py-3 rounded-lg font-bold hover:bg-amber-100 transition">
            Book Now
          </a>
        </div>
      </section>
    </div>
  );
}
