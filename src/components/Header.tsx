import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-3xl font-serif font-bold text-primary">Hope Conciergerie</Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/#services" className="text-primary hover:text-opacity-80">Services</Link>
          <Link to="/#process" className="text-primary hover:text-opacity-80">Process</Link>
          <Link to="/#contact" className="text-primary hover:text-opacity-80">Contact</Link>
        </nav>
        <button className="md:hidden text-primary">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;