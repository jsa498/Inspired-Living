import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from './ILC.png'; // Adjust the path if your logo is located elsewhere

function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="ILC Logo" className="h-12 mb-4" />
            <p className="text-gray-300 mb-4">
              Transforming spaces and building dreams. Quality craftsmanship designed for your needs.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.tiktok.com/@dhillon_g4g4n?_t=8rU5aJo2Pm4&_r=1" // Replace with your TikTok URL
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <FaTiktok size={20} />
              </a>
              <a
                href="https://www.instagram.com/ilcwork?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" // Replace with your Instagram URL
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-gray-300 hover:text-primary transition-colors">
                  Request Quote
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Basement Renovations</li>
              <li className="text-gray-300">Custom Designs</li>
              <li className="text-gray-300">Electrical Work</li>
              <li className="text-gray-300">Plumbing Services</li>
              <li className="text-gray-300">Flooring Installation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-gray-300">
                <Phone size={20} />
                <a href="tel:604-368-3331" className="hover:text-primary transition-colors">
                  604-368-3331
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail size={20} />
                <a
                  href="mailto:inspiredlivingconstructions@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  inspiredlivingconstructions@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin size={20} className="mt-1" />
                <span>
                  1770 Cornerstone Blvd NE,
                  <br />
                  Calgary, AB T3N 1L9
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Inspired Living Constructions INC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;