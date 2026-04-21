'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="text-xl text-amber-100 mt-4">We'd Love to Hear From You</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-3 text-amber-900">Address</h3>
              <p className="text-gray-600">Royal Banquet Hall</p>
              <p className="text-gray-600">123 Grand Avenue</p>
              <p className="text-gray-600">City, State 12345</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-3 text-amber-900">Phone</h3>
              <p className="text-gray-600">Main: +1 (555) 123-4567</p>
              <p className="text-gray-600">Booking: +1 (555) 123-4568</p>
              <p className="text-gray-600">Events: +1 (555) 123-4569</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-xl font-bold mb-3 text-amber-900">Email</h3>
              <p className="text-gray-600">info@royalbanquet.com</p>
              <p className="text-gray-600">booking@royalbanquet.com</p>
              <p className="text-gray-600">events@royalbanquet.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-amber-900">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-900 outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-900 outline-none"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-900 outline-none"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-900 outline-none"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-900 outline-none"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-900 text-white py-3 rounded-lg font-bold hover:bg-amber-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-amber-900">Business Hours</h2>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-bold text-gray-700">Monday - Friday:</span>
                <span className="text-gray-600">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-gray-700">Saturday:</span>
                <span className="text-gray-600">10:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-gray-700">Sunday:</span>
                <span className="text-gray-600">12:00 PM - 7:00 PM</span>
              </div>
              <div className="border-t pt-4 mt-4">
                <p className="text-amber-900 font-bold">For Emergency: 24/7 Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
