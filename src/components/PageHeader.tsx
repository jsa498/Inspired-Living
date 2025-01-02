'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description: string;
  image: string;
}

function PageHeader({ title, description, image }: PageHeaderProps) {
  return (
    <section className="relative h-[50vh] bg-cover bg-center" style={{
      backgroundImage: `url(${image})`
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-2xl"
        >
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-200">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}

export default PageHeader;