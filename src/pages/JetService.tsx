import React, { useState } from 'react';
import BookingModal from '../components/BookingModal';

const JetService: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif font-bold text-primary mb-8">Location de Jets Privés</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">Voyagez avec style et efficacité grâce à notre service de location de jets privés. Profitez d'une flexibilité totale et d'un confort inégalé pour vos déplacements en Afrique de l'Ouest et au-delà.</p>
          <ul className="list-disc list-inside mb-4">
            <li>Jets d'affaires pour vols courts et moyens courriers</li>
            <li>Avions long-courriers pour vos voyages internationaux</li>
            <li>Service personnalisé à bord</li>
            <li>Départs et arrivées selon votre planning</li>
          </ul>
          <button className="btn bg-primary text-white" onClick={() => setIsModalOpen(true)}>Réserver un jet privé</button>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="Jet privé" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName="Location de Jet Privé"
      />
    </div>
  );
};

export default JetService;