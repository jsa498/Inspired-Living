'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Phone, Clock, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-12 gap-6 mb-6">
          {/* Brand Column */}
          <div className="col-span-12 md:col-span-3 flex flex-col items-center md:items-start">
            <Link href="/" className="mb-3">
              <Image
                src="/1.png"
                alt="ILC Logo"
                width={60}
                height={60}
                className="w-auto h-12"
              />
            </Link>
            <p className="text-gray-400 text-sm text-center md:text-left">
              Transforming spaces and building dreams.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-6 md:col-span-3">
            <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    <span className="text-primary text-xs">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-6 md:col-span-3">
            <h3 className="text-sm font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="tel:604-368-3331"
                  className="text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  <Phone size={14} className="text-primary" />
                  604-368-3331
                </a>
              </li>
              <li className="text-gray-400 flex items-center gap-1">
                <Clock size={14} className="text-primary" />
                Available 24/7
              </li>
              <li className="text-gray-400 flex items-start gap-1">
                <MapPin size={14} className="text-primary mt-1 flex-shrink-0" />
                <span>1770 Cornerstone Blvd NE, Calgary, AB T3N 1L9</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-12 md:col-span-3 flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://www.tiktok.com/@dhillon_g4g4n?_t=ZM-8sitIWCtnTp&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-2 rounded-md hover:bg-primary transition-colors group"
              >
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ilcwork/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-2 rounded-md hover:bg-primary transition-colors group"
              >
                <Instagram size={16} className="text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 pt-4 border-t border-white/10 text-xs">
          <div className="text-gray-400">
            © {new Date().getFullYear()} ILC. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}