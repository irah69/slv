export default function Events() {
  const upcomingEvents = [
    {
      date: 'March 15, 2024',
      title: 'Grand Wedding Reception',
      time: '6:00 PM - 11:00 PM',
      capacity: '500 guests'
    },
    {
      date: 'March 22, 2024',
      title: 'Corporate Gala Dinner',
      time: '7:00 PM - 10:00 PM',
      capacity: '300 guests'
    },
    {
      date: 'March 28, 2024',
      title: 'Birthday Celebration',
      time: '5:00 PM - 9:00 PM',
      capacity: '150 guests'
    },
    {
      date: 'April 5, 2024',
      title: 'Seminar & Conference',
      time: '9:00 AM - 5:00 PM',
      capacity: '200 guests'
    },
  ];

  const eventTypes = [
    {
      icon: '💒',
      name: 'Weddings',
      description: 'Create your dream wedding celebration'
    },
    {
      icon: '🏢',
      name: 'Corporate Events',
      description: 'Professional events and conferences'
    },
    {
      icon: '🎂',
      name: 'Birthday Parties',
      description: 'Make birthdays unforgettable'
    },
    {
      icon: '🎓',
      name: 'Seminars',
      description: 'Educational and training events'
    },
    {
      icon: '💍',
      name: 'Engagements',
      description: 'Celebrate your engagement'
    },
    {
      icon: '🎉',
      name: 'Parties',
      description: 'All kinds of celebrations'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold">Events</h1>
          <p className="text-xl text-amber-100 mt-4">All Types of Celebrations Welcome</p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">Types of Events We Host</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((event) => (
              <div key={event.name} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-5xl mb-4">{event.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-amber-900">{event.name}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">Upcoming Events</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
                <div>
                  <p className="text-amber-900 font-bold text-lg">{event.title}</p>
                  <p className="text-gray-600">📅 {event.date}</p>
                  <p className="text-gray-600">🕐 {event.time}</p>
                  <p className="text-gray-600">👥 {event.capacity}</p>
                </div>
                <button className="bg-amber-900 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">Why Host Your Event With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-4xl">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900">State-of-the-art Facilities</h3>
                <p className="text-gray-600">Modern amenities and comfortable space for all your guests</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900">Expert Team</h3>
                <p className="text-gray-600">Professional staff dedicated to your event's success</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900">Customizable Packages</h3>
                <p className="text-gray-600">Flexible options tailored to your needs and budget</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-4xl">✓</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-900">Prime Location</h3>
                <p className="text-gray-600">Easily accessible venue with ample parking</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
