import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  options: Array<{id: string, name: string, image: string}>;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, serviceName, options }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', { name, email, phone, date, serviceName, selectedOption });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full">
        <h2 className="text-3xl font-serif font-bold text-primary mb-6">Réserver {serviceName}</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom complet</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Téléphone</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Date souhaitée</label>
              <Calendar
                onChange={setDate}
                value={date}
                className="rounded-md shadow-sm"
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Choisissez votre {serviceName}</h3>
            <div className="grid grid-cols-2 gap-4">
              {options.map((option) => (
                <div
                  key={option.id}
                  className={`cursor-pointer rounded-lg overflow-hidden shadow-md ${
                    selectedOption === option.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedOption(option.id)}
                >
                  <img src={option.image} alt={option.name} className="w-full h-40 object-cover" />
                  <div className="p-2">
                    <p className="text-sm font-medium">{option.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-full flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-6 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Réserver
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;