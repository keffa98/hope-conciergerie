import React, { useState } from 'react';
import BookingModal from '../components/BookingModal';

const vehicleOptions = [
  { id: 'v1', name: 'Mercedes-Benz S-Class', image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80' },
  { id: 'v2', name: 'BMW 7 Series', image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
  { id: 'v3', name: 'Audi A8', image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80' },
  { id: 'v4', name: 'Rolls-Royce Phantom', image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
];

const VehicleService: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-serif font-bold text-primary mb-8">Location de Véhicules de Luxe</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-6 leading-relaxed">Découvrez notre flotte exclusive de véhicules haut de gamme pour vos déplacements en Afrique de l'Ouest. Que ce soit pour un voyage d'affaires ou des vacances de luxe, nous avons le véhicule parfait pour vous.</p>
          <ul className="list-none mb-8 space-y-4">
            <li className="flex items-center">
              <span className="text-primary mr-2">&#10004;</span>
              Berlines de luxe avec chauffeur privé
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">&#10004;</span>
              SUV premium pour vos aventures
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">&#10004;</span>
              Voitures de sport pour une expérience unique
            </li>
            <li className="flex items-center">
              <span className="text-primary mr-2">&#10004;</span>
              Limousines pour vos événements spéciaux
            </li>
          </ul>
          <button className="btn bg-primary text-white text-lg px-8 py-3" onClick={() => setIsModalOpen(true)}>Réserver un véhicule</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {vehicleOptions.map((vehicle) => (
            <div key={vehicle.id} className="rounded-lg overflow-hidden shadow-lg">
              <img src={vehicle.image} alt={vehicle.name} className="w-full h-48 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-primary">{vehicle.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName="Location de Véhicule"
        options={vehicleOptions}
      />
    </div>
  );
};

export default VehicleService;