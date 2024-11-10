import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Search, Calendar, CheckCircle2 } from 'lucide-react';

const featuredIDOs = [
  {
    name: 'KasPad',
    description: 'The premier IDO launchpad for the Kaspa ecosystem',
    status: 'Upcoming',
    target: '1,000,000 KAS',
    progress: 0,
    startDate: 'Jan 1, 2025'
  }
];

const roadmapItems = [
  {
    quarter: 'Q1 2025',
    title: 'Platform Launch',
    items: [
      'KasPad Platform Launch',
      'Initial Token Distribution',
      'First IDO Launch',
      'Community Building'
    ]
  },
  {
    quarter: 'Q2 2025',
    title: 'Ecosystem Expansion',
    items: [
      'Enhanced Staking Features',
      'Advanced Analytics Dashboard',
      'Project Incubation Program',
      'Strategic Partnerships'
    ]
  },
  {
    quarter: 'Q3 2025',
    title: 'Advanced Features',
    items: [
      'Cross-chain Integration',
      'Automated KYC System',
      'Enhanced Security Features',
      'Mobile App Beta'
    ]
  },
  {
    quarter: 'Q4 2025',
    title: 'Global Scaling',
    items: [
      'Mobile App Launch',
      'Additional Chain Support',
      'Institutional Features',
      'Global Marketing Campaign'
    ]
  }
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 gradient-text">
              KasPad Launch Platform
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Stake KPAD to participate in premier Kaspa ecosystem IDOs
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/calculator" className="btn-primary flex items-center justify-center">
                Calculate Allocation <Rocket className="ml-2 w-5 h-5" />
              </Link>
              <button className="btn-secondary">
                Apply for IDO
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured IDO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold gradient-text">Featured IDO</h2>
          <Link to="/projects" className="btn-secondary flex items-center">
            <Search className="w-4 h-4 mr-2" /> Explore All
          </Link>
        </div>
        <div className="max-w-2xl mx-auto">
          {featuredIDOs.map((ido) => (
            <div key={ido.name} className="card hover:scale-[1.02] transition-transform">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold gradient-text">{ido.name}</h3>
                  <p className="text-text-secondary">{ido.description}</p>
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {ido.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-text-secondary">Target Raise</p>
                  <p className="font-semibold">{ido.target}</p>
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Start Date</p>
                  <p className="font-semibold">{ido.startDate}</p>
                </div>
              </div>
              <Link to="/docs" className="btn-primary w-full block text-center">Learn More</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold gradient-text mb-4">Platform Roadmap</h2>
          <p className="text-text-secondary">Our journey to build the premier IDO platform for Kaspa</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapItems.map((item) => (
            <div key={item.quarter} className="card">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-xl font-bold gradient-text">{item.quarter}</h3>
                  <p className="text-text-secondary">{item.title}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {item.items.map((milestone, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{milestone}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;