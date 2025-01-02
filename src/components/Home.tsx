'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-[83vh]"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/home.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-6">
              Transform Your Space with Expert Construction
            </h1>
            <p className="text-xl mb-8">
              From concept to completion, we bring your vision to life with quality craftsmanship and attention to detail.
            </p>
            <div className="flex gap-4">
              <Link
                href="/quote"
                className="bg-primary text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors inline-flex items-center gap-2"
              >
                Request Quote
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/portfolio"
                className="bg-white text-secondary px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction and renovation services tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Basement Renovations',
                image:
                  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80',
                description:
                  'Transform your basement into a functional and beautiful living space.',
              },
              {
                title: 'Custom Designs',
                image:
                  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80',
                description: 'Bring your dream spaces to life with unique and creative designs.',
              },
              {
                title: 'Electrical Work',
                image:
                  'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80',
                description: 'Professional electrical services for your home or business.',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href="/services"
                    className="text-primary hover:text-opacity-80 inline-flex items-center gap-2"
                  >
                    View All Services
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience excellence in construction with our dedicated team
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Expert Team', description: 'Skilled professionals with years of experience' },
              { title: 'Quality Work', description: 'Superior craftsmanship and attention to detail' },
              { title: 'On-Time Delivery', description: 'Projects completed within agreed timeframes' },
              { title: 'Customer Satisfaction', description: '100% satisfaction guaranteed' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-r from-primary to-primary/90 rounded-[2.5rem] p-12 shadow-2xl"
          >
            {/* Floating effect overlay */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-white opacity-5 blur-2xl transform -rotate-6 scale-105" />
            <div className="absolute inset-0 rounded-[2.5rem] bg-primary opacity-10 blur-xl transform rotate-3 scale-105" />
            
            {/* Content Container */}
            <div className="relative">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left side - Text and Button */}
                <div>
                  <motion.h2
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-4xl font-bold text-white mb-4"
                  >
                    Ready to Start Your Project?
                  </motion.h2>
                  <motion.p
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-white/90 text-lg mb-8"
                  >
                    Contact us today for a free consultation and quote.
                  </motion.p>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <Link
                      href="/quote"
                      className="group bg-white hover:bg-opacity-95 text-primary px-8 py-4 rounded-full inline-flex items-center gap-2 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                    >
                      Get Started
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </motion.div>
                </div>

                {/* Right side - Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: '100+', label: 'Projects' },
                    { number: '5+', label: 'Years' },
                    { number: '24/7', label: 'Support' },
                    { number: '100%', label: 'Satisfaction' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-white/5 rounded-2xl transform transition-transform group-hover:scale-105 duration-300" />
                      <div className="relative p-4 text-center">
                        <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                        <div className="text-sm text-white/80">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-white/5 rounded-full blur-xl transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl transform translate-x-1/4 translate-y-1/4" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;