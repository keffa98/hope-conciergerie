import React from 'react';
import { Car, Home, Anchor, Plane, Briefcase, MapPin } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  { icon: Car, name: 'Location de véhicule', description: 'Voitures de luxe pour vos déplacements', link: '/services/vehicules' },
  { icon: Home, name: 'Location d\'appartement', description: 'Résidences haut de gamme pour votre séjour', link: '/services/appartements' },
  { icon: Anchor, name: 'Location Yacht de plaisance', description: 'Expériences nautiques exclusives', link: '/services/yachts' },
  { icon: Plane, name: 'Location Jet Privé', description: 'Voyagez avec style et confort', link: '/services/jets' },
  { icon: Briefcase, name: 'Voyage professionnel', description: 'Solutions sur mesure pour vos affaires', link: '/services/voyages-professionnels' },
  { icon: MapPin, name: 'Installation en Afrique', description: 'Accompagnement pour votre relocation', link: '/services/installation' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-primary mb-16 text-center">Nos Services d'Exception</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;