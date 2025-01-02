'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PatternFormat } from 'react-number-format';
import { Phone, Mail, Send, Clock, MapPin } from 'lucide-react';
import PageHeader from '../components/PageHeader';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [contactMethod, setContactMethod] = useState<'phone' | 'email'>('phone');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (contactMethod === 'phone') {
      // Format the message for SMS
      const messageBody = `
New Contact from Website
-----------------------
Name: ${formData.name}
Message: ${formData.message}
      `.trim();
      
      // Encode the message for SMS
      const encodedMessage = encodeURIComponent(messageBody);
      const phoneNumber = '6043683331'; // Your phone number
      
      // Open SMS app with pre-filled message
      window.location.href = `sms:+1${phoneNumber}?body=${encodedMessage}`;
      
      // Show success animation
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }
  };

  return (
    <div>
      <PageHeader
        title="Contact Us"
        description="Get in touch with us for your construction needs"
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg p-8 h-full"
            >
              <h2 className="text-3xl font-bold text-secondary mb-8">Get In Touch</h2>
              <div className="space-y-6 h-full flex flex-col">
                {/* Contact Details */}
                <div className="space-y-4 flex-shrink-0">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-full group-hover:bg-opacity-20 transition-colors">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <div className="flex items-center gap-2">
                        <a href="tel:604-368-3331" className="text-gray-600 hover:text-primary transition-colors">
                          604-368-3331
                        </a>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText('604-368-3331');
                            // You could add a toast notification here
                          }}
                          className="text-gray-400 hover:text-primary transition-colors p-1 rounded-full hover:bg-gray-200"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-full group-hover:bg-opacity-20 transition-colors">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <div className="flex items-center gap-2">
                        <a
                          href="mailto:inspiredlivingconstructions@gmail.com"
                          className="text-gray-600 hover:text-primary transition-colors break-all"
                        >
                          inspiredlivingconstructions@gmail.com
                        </a>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText('inspiredlivingconstructions@gmail.com');
                            // You could add a toast notification here
                          }}
                          className="text-gray-400 hover:text-primary transition-colors p-1 rounded-full hover:bg-gray-200"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">
                        1770 Cornerstone Blvd NE,
                        <br />
                        Calgary, AB T3N 1L9
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">Available 24/7</p>
                      <p className="text-sm text-gray-500">Always here to serve you</p>
                    </div>
                  </div>
                </div>

                {/* Interactive Animation Section */}
                <div className="flex-grow mt-8">
                  <motion.div
                    className="w-full relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 p-4 hover:from-primary/10 hover:to-primary/15 transition-colors group cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Center Content */}
                    <div className="flex items-center gap-4">
                      {/* Logo */}
                      <motion.div
                        className="bg-white p-3 rounded-full shadow-lg flex-shrink-0"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.img
                          src="/1.png"
                          alt="ILC Logo"
                          className="w-12 h-12 object-contain"
                        />
                      </motion.div>
                      
                      {/* Text Content */}
                      <div className="flex-grow">
                        <motion.h3
                          className="text-xl font-bold text-primary"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          Always Ready To Serve You
                        </motion.h3>
                        
                        <motion.p
                          className="text-gray-600 text-sm"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          Quality Construction & Renovation Services
                        </motion.p>
                      </div>
                    </div>

                    {/* Particles */}
                    <motion.div
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      transition={{ duration: 1 }}
                    >
                      {[...Array(10)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-primary rounded-full"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                          }}
                        />
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8 h-full"
            >
              <h2 className="text-3xl font-bold text-secondary mb-8">Send Message</h2>
              
              {/* Contact Method Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setContactMethod('phone')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                      contactMethod === 'phone'
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <Phone size={18} />
                    Phone
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactMethod('email')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                      contactMethod === 'email'
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <Mail size={18} />
                    Email
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>

                {/* Phone/Email Field */}
                {contactMethod === 'phone' ? (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <PatternFormat
                      format="+1 (###) ###-####"
                      mask="_"
                      value={formData.phone}
                      onValueChange={(values: { value: string }) => {
                        setFormData({ ...formData, phone: values.value });
                      }}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                )}

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>

                {/* Submit Button with Success Animation */}
                <motion.button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
                  whileTap={{ scale: 0.95 }}
                >
                  {isSuccess ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center gap-2"
                    >
                      <motion.div
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-white"
                      >
                        ✓
                      </motion.div>
                      Sent Successfully!
                    </motion.div>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.5463475687546!2d-113.94780372297655!3d51.14876623735283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537165f03c3a9999%3A0x888c8ef033d6b5e6!2s1770%20Cornerstone%20Blvd%20NE%2C%20Calgary%2C%20AB%20T3N%201L9!5e0!3m2!1sen!2sca!4v1709595185493!5m2!1sen!2sca"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}