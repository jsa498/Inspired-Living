'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  delay?: number;
}

function ProjectCard({ title, category, image, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-lg cursor-pointer h-72"
    >
      <Image 
        src={image} 
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-300">{category}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;