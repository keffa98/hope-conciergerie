import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 luxury-gradient text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold mb-16 text-center">Contactez-nous</h2>
        <form className="max-w-2xl mx-auto bg-white p-10 rounded-lg shadow-xl">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-primary font-semibold">Nom & Prénom</label>
            <input type="text" id="name" className="luxury-input" required />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-primary font-semibold">Email</label>
            <input type="email" id="email" className="luxury-input" required />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block mb-2 text-primary font-semibold">Numéro de téléphone</label>
            <input type="tel" id="phone" className="luxury-input" required />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-primary font-semibold">Message</label>
            <textarea id="message" rows={4} className="luxury-input" required></textarea>
          </div>
          <button type="submit" className="btn bg-primary text-white hover:bg-opacity-90 w-full text-lg py-3">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;