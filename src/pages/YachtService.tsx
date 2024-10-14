import React, { useState } from 'react';
import BookingModal from '../components/BookingModal';

const yachtOptions = [
  { id: 'y1', name: 'Yacht de Luxe 40m', image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
  { id: 'y2', name: 'Catamaran VIP', image: 'https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80' },
  { id: 'y3', name: 'Voilier de Luxe', image: 'https://images.unsplash.com/photo-1534190239940-9ba8944ea261?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2078&q=80' },
  { id: 'y4', name: 'Mega Yacht 60m+', image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80' },
];

const YachtService: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-serif font-bold text-primary mb-8">Location de Yachts de Plaisance</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-6 leading-relaxed">Embarquez pour une expérience nautique inoubliable avec notre sélection de yachts de luxe. Explorez les côtes magnifiques de l'Afrique de l'Ouest dans un confort absolu.</p>
          <ul className="list-none mb-8 space-y-4">
            <li className="flex items-center">
              <span className="text-primary mr-2">&#10004;</span>
              Yachts à moteur de différentes tailles pour tous vos besoins
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">&#10004;</span>
              Voiliers de luxe pour les amateurs de navigation authentique
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">&#10004;</span>
              Équipage professionnel et attentionné à votre service
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">&#10004;</span>
              Itinéraires personnalisés pour découvrir les plus beaux spots
            </li>
          </ul>
          <button className="btn bg-primary text-white text-lg px-8 py-3" onClick={() => setIsModalOpen(true)}>Réserver un yacht</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {yachtOptions.map((yacht) => (
            <div key={yacht.id} className="rounded-lg overflow-hidden shadow-lg">
              <img src={yacht.image} alt={yacht.name} className="w-full h-48 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-primary">{yacht.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName="Location de Yacht"
        options={yachtOptions}
      />
    </div>
  );
};

export default YachtService;