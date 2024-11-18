import React from 'react';
import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';
import {
  FaTools,
  FaPaintRoller,
  FaHammer,
  FaBolt,
  FaWater,
  FaHardHat,
  FaFireAlt,
  FaBrush,
  FaHome,
} from 'react-icons/fa';
import headerImage from './in.png';  // Import your image here

const services = [
  {
    title: 'Basement Renovations',
    description:
      'Transform your basement into a functional and stylish living space, adding value and comfort to your home.',
    icon: <FaTools size={45} />,
  },
  {
    title: 'Custom Designs',
    description:
      'Bring your vision to life with personalized design solutions tailored to your unique style and needs.',
    icon: <FaPaintRoller size={45} />,
  },
  {
    title: 'Electrical Work',
    description:
      'Ensure safety and efficiency with our certified electrical installations, upgrades, and repairs.',
    icon: <FaBolt size={45} />,
  },
  {
    title: 'Plumbing Services',
    description:
      'Experience reliable plumbing solutions for installations, maintenance, and emergency repairs.',
    icon: <FaWater size={45} />,
  },
  {
    title: 'Flooring Installation',
    description:
      'Enhance your space with premium flooring options expertly installed for durability and beauty.',
    icon: <FaHammer size={45} />,
  },
  {
    title: 'Framing & Structural Work',
    description:
      'Build a solid foundation with our precise framing and structural services for lasting integrity.',
    icon: <FaHardHat size={45} />,
  },
  {
    title: 'Furnace Installation',
    description:
      'Keep your home warm and energy-efficient with professional furnace installations and maintenance.',
    icon: <FaFireAlt size={45} />,
  },
  {
    title: 'Interior & Exterior Painting',
    description:
      'Refresh your property with high-quality painting services that rejuvenate and protect.',
    icon: <FaBrush size={45} />,
  },
  {
    title: 'Roofing Services',
    description:
      'Protect your investment with durable roofing solutions, from new installations to repairs.',
    icon: <FaHome size={45} />,
  },
];

function Services() {
  return (
    <div>
      <PageHeader
        title="Our Services"
        description="Expert construction and renovation solutions tailored to your needs"
        image={headerImage}  // Updated to use your own image
      />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;