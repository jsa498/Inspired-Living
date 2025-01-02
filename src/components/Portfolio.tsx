'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Elegant Kitchen Remodel',
    category: 'Kitchen',
    image: '/images/4.jpg',
  },
  {
    title: 'Cozy Basement Lounge',
    category: 'Basement',
    image: '/images/base.jpg',
  },
  {
    title: 'Modern Bathroom Upgrade',
    category: 'Bathroom',
    image: '/images/bath.jpg',
  },
  {
    title: 'Modern Living Room Upgrade',
    category: 'Living Room',
    image: '/images/liv.jpg',
  },
  {
    title: 'Modern Outdoor Upgrade',
    category: 'Outdoor',
    image: '/images/out.jpg',
  },
  {
    title: 'Modern Bedroom Upgrade',
    category: 'Bedroom',
    image: '/images/bed.jpg',
  },
];

const categories = ['All', 'Kitchen', 'Basement', 'Bathroom', 'Living Room', 'Outdoor', 'Bedroom'];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div>
      <PageHeader
        title="Our Portfolio"
        description="Explore our latest projects and transformations"
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              image={project.image}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Portfolio;