'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactElement;
  delay?: number;
}

function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
    >
      <div className="p-6">
        <div className="icon-container mb-4 text-primary flex justify-center">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold mb-3 text-secondary text-center">{title}</h3>
        <p className="text-gray-600 mb-4 text-center">{description}</p>
      </div>
    </motion.div>
  );
}

export default ServiceCard;