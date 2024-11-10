import React from 'react';
import { Calendar, Target, Users, Clock, Globe, MessageCircle, Twitter } from 'lucide-react';

interface ProjectDetailsProps {
  project: {
    name: string;
    description: string;
    image: string;
    progress: number;
    target: string;
    startTime: string;
    endTime: string;
    status: string;
    totalRaised: string;
    participants: number;
    minAllocation: string;
    maxAllocation: string;
    tokenPrice: string;
    tokenSymbol: string;
    totalSupply: string;
    website: string;
    twitter: string;
    discord: string;
    distribution: {
      label: string;
      percentage: number;
    }[];
    schedule: {
      phase: string;
      date: string;
      description: string;
    }[];
  };
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column - Project Info */}
        <div className="md:col-span-2 space-y-8">
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur border border-purple-500/20">
            <img src={project.image} alt={project.name} className="w-full h-64 object-cover rounded-lg mb-6" />
            <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
            <p className="text-gray-300 mb-6">{project.description}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">Total Raise</p>
                  <p className="font-semibold">{project.target}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">Token Price</p>
                  <p className="font-semibold">{project.tokenPrice}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">Participants</p>
                  <p className="font-semibold">{project.participants}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href={project.website} target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-purple-400">
                <Globe className="w-4 h-4" /> Website
              </a>
              <a href={project.twitter} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-purple-400">
                <Twitter className="w-4 h-4" /> Twitter
              </a>
              <a href={project.discord} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-purple-400">
                <MessageCircle className="w-4 h-4" /> Discord
              </a>
            </div>
          </div>

          {/* Token Distribution */}
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur border border-purple-500/20">
            <h2 className="text-xl font-bold mb-4">Token Distribution</h2>
            <div className="space-y-4">
              {project.distribution.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">{item.label}</span>
                    <span className="text-purple-400">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" 
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur border border-purple-500/20">
            <h2 className="text-xl font-bold mb-4">Launch Schedule</h2>
            <div className="space-y-4">
              {project.schedule.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-24 text-sm text-purple-400">{item.date}</div>
                  <div>
                    <div className="font-semibold">{item.phase}</div>
                    <div className="text-sm text-gray-400">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Participation Info */}
        <div className="space-y-8">
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur border border-purple-500/20 sticky top-24">
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Progress</span>
                <span className="text-purple-400">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" 
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>{project.totalRaised}</span>
                <span>{project.target}</span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm text-gray-400">Sale Start Time</p>
                <p className="font-semibold">{project.startTime}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Sale End Time</p>
                <p className="font-semibold">{project.endTime}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Min Allocation</p>
                <p className="font-semibold">{project.minAllocation}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Max Allocation</p>
                <p className="font-semibold">{project.maxAllocation}</p>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity mb-4">
              Participate Now
            </button>
            
            <p className="text-xs text-center text-gray-400">
              Please make sure you meet the minimum tier requirements before participating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;