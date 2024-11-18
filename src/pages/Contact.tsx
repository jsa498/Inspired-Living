import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import emailjs from 'emailjs-com';  // Import EmailJS

function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prepare template parameters
    const formData = new FormData(e.currentTarget);
    const templateParams = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const result = await emailjs.send(
        'service_bvfgwid',    // Replace with your EmailJS service ID
        'template_wr3cwjg',   // Replace with your EmailJS template ID
        templateParams,
        'kQwxeJTBbCOSdx_NS'        // Replace with your EmailJS user ID
      );

      if (result.status === 200) {
        alert('Message sent successfully!');
        e.currentTarget.reset();
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <div>
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team"
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-secondary mb-8">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <a href="tel:604-368-3331" className="text-gray-600 hover:text-primary">
                    604-368-3331
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a href="mailto:inspiredlivingconstructions@gmail.com" className="text-gray-600 hover:text-primary">
                    inspiredlivingconstructions@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="text-gray-600">
                    1770 Cornerstone Blvd NE,<br />
                    Calgary, AB T3N 1L9
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                  <p className="text-gray-600">
                    24/7
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-secondary mb-8">Send Message</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.8898886703866!2d-113.95118388487243!3d51.12983977957571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537164f0d5b3b537%3A0x4b5a41b937f41d48!2s1770%20Cornerstone%20Blvd%20NE%2C%20Calgary%2C%20AB%20T3N%201L9!5e0!3m2!1sen!2sca!4v1646183241245!5m2!1sen!2sca"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;