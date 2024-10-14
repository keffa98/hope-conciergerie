import React from 'react';
import { PhoneCall, FileSearch, Clipboard, Calendar, Truck, Star } from 'lucide-react';

const steps = [
  { icon: PhoneCall, title: 'Prise de contact' },
  { icon: FileSearch, title: 'Évaluation des besoins' },
  { icon: Clipboard, title: 'Proposition de solutions' },
  { icon: Calendar, title: 'Confirmation et réservation' },
  { icon: Truck, title: 'Préparation et coordination' },
  { icon: Star, title: 'Exécution des services' },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-primary mb-16 text-center">Notre Processus sur Mesure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="luxury-card p-8 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6">
                <step.icon size={36} className="text-white" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-primary mb-4">{step.title}</h3>
              <p className="text-gray-600">Étape {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;