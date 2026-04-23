'use client';

import { useState } from 'react';

export default function Decoration() {
  const [selectedTheme, setSelectedTheme] = useState(0);

  const themes = [
    {
      name: 'Classic Elegance',
      description: 'Timeless sophistication with gold accents and floral arrangements.',
      elements: [
        'Crystal chandeliers',
        'Gold table runners',
        'Rose arrangements',
        'Candle centerpieces',
        'Elegant uplighting',
        'Draped fabric walls'
      ]
    },
    {
      name: 'Modern Luxury',
      description: 'Contemporary design with clean lines and minimalist aesthetics.',
      elements: [
        'LED lighting systems',
        'Geometric patterns',
        'Metallic accents',
        'Modern floral designs',
        'Interactive displays',
        'Premium backdrop setups'
      ]
    },
    {
      name: 'Royal Extravaganza',
      description: 'Grand and opulent with traditional Indian elements.',
      elements: [
        'Traditional rangoli',
        'Marigold garlands',
        'Ornate diyas',
        'Beaded curtains',
        'Silk drapes',
        'Brass lanterns'
      ]
    },
    {
      name: 'Garden Romance',
      description: 'Natural and fresh with botanical elements.',
      elements: [
        'Live plants & flowers',
        'Wooden structures',
        'Fairy lights',
        'Moss walls',
        'Flower arches',
        'Natural bamboo setups'
      ]
    },
    {
      name: 'Exotic Fusion',
      description: 'Blend of cultures with unique artistic elements.',
      elements: [
        'Mixed cultural motifs',
        'Artistic installations',
        'Custom sculptures',
        'Fusion color schemes',
        'Themed props',
        'Statement lighting'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4" style={{ color: '#d4a017' }}>
            Stunning Decoration Services
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Transform your venue into a magical wonderland
          </p>
        </div>
      </section>

      {/* Theme Selection Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#d4a017' }}>
            Decoration Themes
          </h2>

          {/* Theme Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {themes.map((theme, index) => (
              <button
                key={index}
                onClick={() => setSelectedTheme(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${
                  selectedTheme === index
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                style={{
                  backgroundColor: selectedTheme === index ? '#d4a017' : 'transparent',
                  border: `2px solid ${selectedTheme === index ? '#d4a017' : '#444'}`,
                }}
              >
                {theme.name}
              </button>
            ))}
          </div>

          {/* Selected Theme Details */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
            <div className="mb-8">
              <h3
                className="text-3xl font-bold mb-2"
                style={{ color: '#d4a017' }}
              >
                {themes[selectedTheme].name}
              </h3>
              <p className="text-lg text-gray-300">
                {themes[selectedTheme].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {themes[selectedTheme].elements.map((element, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-yellow-600 transition"
                >
                  <p className="text-white text-lg">✨ {element}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#d4a017' }}>
            Our Decoration Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Entrance Decoration',
                description: 'Grand entrances with arches, gates, and custom backdrops that welcome your guests beautifully.'
              },
              {
                title: 'Venue Transformation',
                description: 'Complete venue decoration including ceiling work, wall draping, and floor embellishments.'
              },
              {
                title: 'Stage & Mandap Setup',
                description: 'Elegant stage decorations and traditional mandap setups for ceremonies.'
              },
              {
                title: 'Table Styling',
                description: 'Sophisticated table arrangements with centerpieces, runners, and place settings.'
              },
              {
                title: 'Floral Arrangements',
                description: 'Fresh and artificial flower arrangements tailored to your theme and preferences.'
              },
              {
                title: 'Lighting Design',
                description: 'Professional lighting solutions to create ambiance and highlight key areas.'
              },
              {
                title: 'Prop & Furniture',
                description: 'Curated props and furniture rentals to enhance your event aesthetics.'
              },
              {
                title: 'Customization',
                description: 'Personalized decoration concepts designed specifically for your vision.'
              },
              {
                title: 'Day-of Coordination',
                description: 'Expert team on-site to ensure flawless execution and real-time adjustments.'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-yellow-600 transition"
              >
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: '#d4a017' }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#d4a017' }}>
            Why Our Decorations Stand Out
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Creative Excellence',
                description: 'Our team of expert designers brings innovative ideas to life with attention to every detail.'
              },
              {
                title: 'Quality Materials',
                description: 'We use premium quality decorative materials and fresh flowers for stunning results.'
              },
              {
                title: 'Complete Package',
                description: 'From concept to execution, we handle all aspects of your event decoration.'
              },
              {
                title: 'Timely Execution',
                description: 'Professional team ensures all decorations are perfectly set before your guests arrive.'
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-gray-900 rounded-lg border border-gray-700">
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: '#d4a017' }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#d4a017' }}>
            Let's Create Magic Together
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today to discuss your decoration vision and let our expert team design an unforgettable ambiance for your special event.
          </p>
          <button
            className="px-8 py-3 text-white font-bold rounded-lg transition duration-300"
            style={{ backgroundColor: '#d4a017' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#c19015')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d4a017')}
          >
            Get Decoration Quote
          </button>
        </div>
      </section>
    </div>
  );
}
