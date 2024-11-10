import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetails from '../components/ProjectDetails';

const mockProject = {
  name: 'KaspaSwap',
  description: 'KaspaSwap is a next-generation decentralized exchange built on the Kaspa blockchain, offering lightning-fast trades with near-zero fees. Our innovative AMM protocol and yield farming mechanisms provide users with the best possible trading experience and earning opportunities.',
  image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=400&h=400',
  progress: 75,
  target: '1,000,000 KAS',
  startTime: '2024-03-20 14:00 UTC',
  endTime: '2024-03-27 14:00 UTC',
  status: 'Active',
  totalRaised: '750,000 KAS',
  participants: 1250,
  minAllocation: '500 KAS',
  maxAllocation: '10,000 KAS',
  tokenPrice: '0.15 USD',
  tokenSymbol: 'KSWAP',
  totalSupply: '100,000,000 KSWAP',
  website: 'https://kaspaswap.com',
  twitter: 'https://twitter.com/kaspaswap',
  discord: 'https://discord.gg/kaspaswap',
  distribution: [
    { label: 'Public Sale', percentage: 30 },
    { label: 'Liquidity', percentage: 25 },
    { label: 'Team', percentage: 15 },
    { label: 'Development', percentage: 20 },
    { label: 'Marketing', percentage: 10 }
  ],
  schedule: [
    {
      phase: 'Whitelist Opens',
      date: 'Mar 15, 2024',
      description: 'Registration for whitelist begins'
    },
    {
      phase: 'Sale Starts',
      date: 'Mar 20, 2024',
      description: 'Token sale begins for approved participants'
    },
    {
      phase: 'Sale Ends',
      date: 'Mar 27, 2024',
      description: 'Token sale concludes'
    },
    {
      phase: 'Token Distribution',
      date: 'Mar 29, 2024',
      description: 'Tokens are distributed to participants'
    }
  ]
};

const ProjectDetailsPage = () => {
  const { id } = useParams();

  // In a real app, you would fetch the project data based on the ID
  return <ProjectDetails project={mockProject} />;
};

export default ProjectDetailsPage;