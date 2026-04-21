export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Royal Banquet Hall</h1>
          <p className="text-xl text-amber-100 mb-8">Your Premier Destination for Unforgettable Events</p>
          <a href="/booking" className="inline-block bg-white text-amber-900 px-8 py-3 rounded-lg font-bold hover:bg-amber-100 transition">
            Book Your Event
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-2xl font-bold mb-4">Elegant Venues</h3>
              <p className="text-gray-600">
                Multiple beautifully decorated halls for any event size and style.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">👨‍🍳</div>
              <h3 className="text-2xl font-bold mb-4">Gourmet Catering</h3>
              <p className="text-gray-600">
                Premium culinary experiences with diverse menu options.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎤</div>
              <h3 className="text-2xl font-bold mb-4">Full Services</h3>
              <p className="text-gray-600">
                From decoration to entertainment, we handle everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-amber-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-amber-100">Events Hosted</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <p className="text-amber-100">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <p className="text-amber-100">Happy Guests</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-amber-100">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
