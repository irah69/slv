'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Contact Section with Map and Form */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Map Section */}
            <div className="rounded-lg overflow-hidden shadow-lg h-96 lg:h-full min-h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3147090638447!2d78.47041!3d17.36752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c6c6c6c6c7%3A0x1234567890!2sRock%20Banquets%20%26%20Convention!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-lg" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#d4a017', fontFamily: "'Georgia', 'Times New Roman', serif" }}>Contact Us</h2>
              <p className="mb-8" style={{ color: '#ffffff', fontFamily: "'Helvetica Neue', Arial, sans-serif", fontSize: '16px' }}>Our team is ready to assist you with venue details, booking information, and personalized service offerings.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: '#d4a017' }}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-white text-white placeholder-gray-400 focus:ring-0 focus:border-yellow-400 outline-none transition"
                    style={{ borderColor: '#d4a017', color: '#ffffff', backgroundColor: 'transparent' }}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: '#d4a017' }}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border-b-2 text-white placeholder-gray-400 focus:ring-0 outline-none transition"
                    style={{ borderColor: '#d4a017', color: '#ffffff', backgroundColor: 'transparent' }}
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: '#d4a017' }}>Contact Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border-b-2 text-white placeholder-gray-400 focus:ring-0 outline-none transition"
                    style={{ borderColor: '#d4a017', color: '#ffffff', backgroundColor: 'transparent' }}
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2" style={{ color: '#d4a017' }}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-transparent border-b-2 text-white placeholder-gray-400 focus:ring-0 outline-none transition resize-none"
                    style={{ borderColor: '#d4a017', color: '#ffffff', backgroundColor: 'transparent' }}
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full text-white py-3 rounded-lg font-bold transition duration-300"
                  style={{ backgroundColor: '#d4a017' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#c19015')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d4a017')}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
