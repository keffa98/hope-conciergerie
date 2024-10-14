import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-serif font-bold text-primary mb-2">Hope Conciergerie</h3>
            <p className="text-sm text-gray-600">Votre partenaire de confiance pour des expériences de luxe en Afrique de l'Ouest.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold text-primary mb-2">Liens rapides</h4>
            <ul className="text-sm">
              <li><a href="#services" className="text-gray-600 hover:text-primary">Services</a></li>
              <li><a href="#process" className="text-gray-600 hover:text-primary">Processus</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold text-primary mb-2">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-opacity-80"><Facebook size={24} /></a>
              <a href="#" className="text-primary hover:text-opacity-80"><Instagram size={24} /></a>
              <a href="#" className="text-primary hover:text-opacity-80"><Twitter size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Hope Conciergerie. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;