import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, name, description, link }) => {
  return (
    <Link to={link} className="luxury-card group">
      <div className="p-8 flex flex-col items-center text-center">
        <Icon size={48} className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
        <h3 className="text-2xl font-serif font-semibold text-primary mb-4">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="mt-6 inline-block border-b-2 border-primary font-semibold text-primary group-hover:border-opacity-100 transition-all duration-300">
          En savoir plus
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;