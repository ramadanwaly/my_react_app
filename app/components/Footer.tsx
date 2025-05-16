import { Link } from "react-router-dom"; // افترض react-router-dom
import {
  FaMobileAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { CONTACT_INFO, SOCIAL_LINKS, COPYRIGHT_TEXT } from "~/config/constants"; // لاحظ استخدام ~
export default function Footer() {
  return (
    <footer className="bg-sky-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p>
                <FaMobileAlt className="inline mr-2" /> {CONTACT_INFO.phone}
              </p>
              <p>
                <FaEnvelope className="inline mr-2" /> {CONTACT_INFO.email}
              </p>
              <p>
                <FaMapMarkerAlt className="inline mr-2" />{" "}
                {CONTACT_INFO.address}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <p>
                <Link
                  to="/about"
                  className="hover:text-sky-400 transition-colors"
                >
                  About Us
                </Link>
              </p>
              <p>
                <Link
                  to="/services"
                  className="hover:text-sky-400 transition-colors"
                >
                  Our Services
                </Link>
              </p>
              <p>
                <Link to="#" className="hover:text-sky-400 transition-colors">
                  Portfolio
                </Link>
              </p>{" "}
              {/* قم بتحديث هذا الرابط إذا لزم الأمر */}
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="space-x-4">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-sky-400 transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-sky-400 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href={SOCIAL_LINKS.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-sky-400 transition-colors"
              >
                <FaPinterest />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-sky-700 pt-8 text-center">
          <p>{COPYRIGHT_TEXT}</p>
        </div>
      </div>
    </footer>
  );
}
