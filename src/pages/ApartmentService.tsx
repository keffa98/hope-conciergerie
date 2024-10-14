import React, { useState } from 'react';
import BookingModal from '../components/BookingModal';

const apartmentOptions = [
  { id: 'a1', name: 'Penthouse Vue Mer', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80' },
  { id: 'a2', name: 'Suite Présidentielle', image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
  { id: 'a3', name: 'Villa Privée', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80' },
  { id: 'a4', name: 'Loft Design', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
];

const ApartmentService: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-serif font-bold text-primary mb-8">Location d'Appartements de Luxe</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-6 leading-relaxed">Profitez d'un séjour inoubliable dans nos appartements haut de gamme soigneusement sélectionnés. Chaque résidence offre un confort exceptionnel et des vues imprenables sur les plus belles villes d'Afrique de l'Ouest.</p>
          <ul className="list-none mb-8 space-y-4">
            <li className="flex items-center">
              <span className="text-primary mr-2">&#10004;</span>
              Penthouses avec terrasse privée et vue panoramique
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">&#10004;</span>
              Appartements avec accès direct à la plage
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">&#10004;</span>
              Résidences sécurisées avec services de conciergerie 24/7
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">&#10004;</span>
              Décoration raffinée et équipements haut de gamme
            </li>
          </ul>
          <button className="btn bg-primary text-white text-lg px-8 py-3" onClick={() => setIsModalOpen(true)}>Réserver un appartement</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {apartmentOptions.map((apartment) => (
            <div key={apartment.id} className="rounded-lg overflow-hidden shadow-lg">
              <img src={apartment.image} alt={apartment.name} className="w-full h-48 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-primary">{apartment.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName="Location d'Appartement"
        options={apartmentOptions}
      />
    </div>
  );
};

export default ApartmentService;