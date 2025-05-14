import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p><i className="fas fa-mobile-alt mr-2"></i> 01122024938</p>
              <p><i className="fas fa-envelope mr-2"></i> ramadan.waly@outlook.com</p>
              <p><i className="fas fa-map-marker-alt mr-2"></i> El Haram, Giza, Egypt</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <p><Link to="/about" className="hover:text-sky-400 transition-colors">About Us</Link></p>
              <p><Link to="/services" className="hover:text-sky-400 transition-colors">Our Services</Link></p>
              <p><Link to="#" className="hover:text-sky-400 transition-colors">Portfolio</Link></p>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-sky-400 transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-sky-400 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-sky-400 transition-colors">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-sky-700 pt-8 text-center">
          <p>&copy; 2024 Ramadan Waly | CraftedByHand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 