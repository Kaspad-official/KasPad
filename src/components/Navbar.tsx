import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-card-bg/50 backdrop-blur-sm sticky top-0 z-50 border-b border-border-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Rocket className="w-8 h-8 text-primary" />
            <span className="ml-2 text-xl font-bold gradient-text">KasPad</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-text-secondary hover:text-primary transition-colors">Home</Link>
            <Link to="/staking" className="text-text-secondary hover:text-primary transition-colors">Staking</Link>
            <Link to="/calculator" className="text-text-secondary hover:text-primary transition-colors">Calculator</Link>
            <Link to="/stats" className="text-text-secondary hover:text-primary transition-colors">Stats</Link>
            <Link to="/docs" className="text-text-secondary hover:text-primary transition-colors">Docs</Link>
            <button className="btn-primary">
              Connect Wallet
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card-bg/95 backdrop-blur-lg border-b border-border-color">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <Link 
              to="/" 
              className="block text-text-secondary hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/staking" 
              className="block text-text-secondary hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Staking
            </Link>
            <Link 
              to="/calculator" 
              className="block text-text-secondary hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Calculator
            </Link>
            <Link 
              to="/stats" 
              className="block text-text-secondary hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Stats
            </Link>
            <Link 
              to="/docs" 
              className="block text-text-secondary hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Docs
            </Link>
            <button className="btn-primary w-full">
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;