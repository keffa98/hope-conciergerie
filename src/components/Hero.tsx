import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="luxury-gradient text-white py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight">
          Découvrez l'Afrique de l'Ouest dans un confort absolu
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
          Voyagez sans stress et profitez d'un accès exclusif aux meilleures expériences et aux hébergements les plus raffinés.
        </p>
        <button className="btn bg-white text-primary hover:bg-opacity-90 text-lg px-10 py-4">
          Planifiez votre séjour de rêve
        </button>
      </div>
    </section>
  );
};

export default Hero;