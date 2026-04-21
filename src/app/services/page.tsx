export default function Services() {
  const services = [
    {
      icon: '🎭',
      title: 'Venue Rental',
      description: 'Multiple halls for weddings, corporate events, and celebrations',
      features: ['Air-conditioned halls', 'Flexible layouts', 'Capacity up to 1000']
    },
    {
      icon: '👨‍🍳',
      title: 'Catering',
      description: 'Gourmet culinary experience with diverse menu options',
      features: ['Indian cuisine', 'International dishes', 'Dietary accommodations']
    },
    {
      icon: '🎨',
      title: 'Decoration',
      description: 'Professional decoration services with modern and traditional designs',
      features: ['Theme decoration', 'Lighting setup', 'Floral arrangements']
    },
    {
      icon: '🎤',
      title: 'Entertainment',
      description: 'Live music, DJ, and other entertainment options',
      features: ['DJ services', 'Live band', 'Audio/Video setup']
    },
    {
      icon: '📸',
      title: 'Photography',
      description: 'Professional photography and videography services',
      features: ['Candid shots', 'Professional editing', 'Same-day delivery']
    },
    {
      icon: '🚗',
      title: 'Valet Parking',
      description: 'Secure valet parking for your guests',
      features: ['Professional staff', '24/7 security', 'Ample parking space']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold">Our Services</h1>
          <p className="text-xl text-amber-100 mt-4">Complete Event Solutions for Your Special Day</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-amber-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-gray-700 flex items-center">
                      <span className="text-amber-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">Our Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Basic', price: '₹50,000', color: 'amber' },
              { name: 'Premium', price: '₹1,50,000', color: 'amber' },
              { name: 'Deluxe', price: '₹3,00,000', color: 'amber' }
            ].map((pkg) => (
              <div key={pkg.name} className={`bg-white p-8 rounded-lg shadow-md border-2 border-${pkg.color}-200`}>
                <h3 className="text-2xl font-bold mb-2 text-amber-900">{pkg.name}</h3>
                <p className="text-3xl font-bold text-amber-600 mb-6">{pkg.price}</p>
                <button className="w-full bg-amber-900 text-white py-2 rounded-lg hover:bg-amber-800 transition">
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
