export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold">About Royal Banquet Hall</h1>
          <p className="text-xl text-amber-100 mt-4">Crafting Memorable Moments Since 2004</p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-amber-900">Our Story</h2>
              <p className="text-gray-700 text-lg mb-4">
                Founded in 2004, Royal Banquet Hall has established itself as one of the most prestigious event venues in the city. What started as a vision to create the perfect space for celebrations has grown into a world-class facility.
              </p>
              <p className="text-gray-700 text-lg mb-4">
                Our commitment to excellence, attention to detail, and personalized service has made us the preferred choice for thousands of families and organizations.
              </p>
              <p className="text-gray-700 text-lg">
                We believe every event is unique and deserves special care. Our passionate team works tirelessly to turn your vision into reality.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-200 to-amber-100 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🏛️</div>
                <p className="text-amber-900 font-bold">Premium Venue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for perfection in every detail of your event.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-4">💖</div>
              <h3 className="text-2xl font-bold mb-3">Care</h3>
              <p className="text-gray-600">Your satisfaction and happiness is our top priority.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">We maintain the highest standards of professionalism.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Event Coordinator', 'Head Chef', 'Decoration Expert', 'Operations Manager'].map((role) => (
              <div key={role} className="text-center">
                <div className="bg-gradient-to-br from-amber-200 to-amber-100 h-40 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-5xl">👤</div>
                </div>
                <h3 className="text-xl font-bold text-amber-900">{role}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
