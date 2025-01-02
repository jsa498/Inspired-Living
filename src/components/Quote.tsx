'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  description: string;
  preferredContact: 'phone' | 'email';
  budget: string;
  timeline: string;
}

function Quote() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    description: '',
    preferredContact: 'phone',
    budget: '',
    timeline: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare template parameters
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      projectType: formData.projectType,
      description: formData.description,
      preferredContact: formData.preferredContact,
      budget: formData.budget,
      timeline: formData.timeline,
    };

    try {
      const result = await emailjs.send(
        'service_bvfgwid',    // Replace with your EmailJS service ID
        'template_z5rtdur',   // Replace with your EmailJS template ID
        templateParams,
        'kQwxeJTBbCOSdx_NS'        // Replace with your EmailJS user ID
      );

      if (result.status === 200) {
        alert('Quote request sent successfully! We will contact you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          description: '',
          preferredContact: 'phone',
          budget: '',
          timeline: '',
        });
      } else {
        alert('There was an error sending your request. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Error sending quote request:', error);
      alert('There was an error sending your request. Please try again or contact us directly.');
    }
  };

  return (
    <div>
      <PageHeader
        title="Request a Quote"
        description="Get started on your dream project today"
        image="/images/q.jpg"
      />

      <div className="max-w-4xl mx-auto px-4 py-20">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="grid md:grid-cols-2 gap-6">
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

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              />
            </div>

            {/* Email Field */}
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

            {/* Project Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Type *
              </label>
              <select
                required
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              >
                <option value="">Select a project type</option>
                <option value="Basement Renovation">Basement Renovation</option>
                <option value="Custom Design">Custom Design</option>
                <option value="Electrical Work">Electrical Work</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Flooring">Flooring</option>
                <option value="Framing">Framing</option>
                <option value="Furnace">Furnace</option>
                <option value="Painting">Painting</option>
                <option value="Roofing">Roofing</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Project Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Description *
              </label>
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              />
            </div>

            {/* Budget Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range
              </label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              >
                <option value="">Select budget range</option>
                <option value="Under $5,000">Under $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                <option value="$50,000+">$50,000+</option>
              </select>
            </div>

            {/* Preferred Timeline */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Timeline
              </label>
              <select
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              >
                <option value="">Select timeline</option>
                <option value="ASAP">ASAP</option>
                <option value="Within 1 month">Within 1 month</option>
                <option value="1-3 months">1-3 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="6+ months">6+ months</option>
              </select>
            </div>

            {/* Preferred Contact Method */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Contact Method *
              </label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    required
                    checked={formData.preferredContact === 'phone'}
                    onChange={() => setFormData({ ...formData, preferredContact: 'phone' })}
                    className="mr-2"
                  />
                  Phone
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    required
                    checked={formData.preferredContact === 'email'}
                    onChange={() => setFormData({ ...formData, preferredContact: 'email' })}
                    className="mr-2"
                  />
                  Email
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
              >
                Submit Quote Request
                <Send size={18} />
              </button>
            </div>
          </div>
        </motion.form>
      </div>
    </div>
  );
}

export default Quote;