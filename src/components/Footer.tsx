import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Royal Banquet Hall</h3>
            <p className="text-amber-100">
              Creating unforgettable memories for your special events.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-amber-100">
              <li><Link href="/about" className="hover:text-amber-200">About Us</Link></li>
              <li><Link href="/services" className="hover:text-amber-200">Services</Link></li>
              <li><Link href="/booking" className="hover:text-amber-200">Book Now</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <p className="text-amber-100">📍 123 Grand Avenue, City</p>
            <p className="text-amber-100">📞 +1 (555) 123-4567</p>
            <p className="text-amber-100">✉️ info@royalbanquet.com</p>
          </div>
        </div>
        <div className="border-t border-amber-800 pt-8 text-center text-amber-100">
          <p>&copy; 2024 Royal Banquet Hall. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
