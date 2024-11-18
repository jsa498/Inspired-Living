import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logo from './1.png'; // Adjust the path based on your logo's location

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and Home Link */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="ILC Logo" className="h-12" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-secondary hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-secondary hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/portfolio" className="text-secondary hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link to="/quote" className="text-secondary hover:text-primary transition-colors">
              Quote
            </Link>
            <Link to="/contact" className="text-secondary hover:text-primary transition-colors">
              Contact
            </Link>
            <a
              href="tel:604-368-3331"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors flex items-center gap-2"
            >
              <Phone size={18} />
              604-368-3331
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-secondary hover:text-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-secondary hover:text-primary">
              Home
            </Link>
            <Link to="/services" className="block px-3 py-2 text-secondary hover:text-primary">
              Services
            </Link>
            <Link to="/portfolio" className="block px-3 py-2 text-secondary hover:text-primary">
              Portfolio
            </Link>
            <Link to="/quote" className="block px-3 py-2 text-secondary hover:text-primary">
              Quote
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-secondary hover:text-primary">
              Contact
            </Link>
            <a href="tel:604-368-3331" className="block px-3 py-2 text-primary hover:text-primary-dark">
              604-368-3331
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;