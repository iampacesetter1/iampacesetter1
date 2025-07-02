import React, { useState, useEffect } from 'react';
import { Shield, Eye, Cpu, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Simplified background animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8 flex justify-center space-x-4">
          <div className="p-3 bg-blue-600/20 rounded-full backdrop-blur-sm border border-blue-400/30">
            <Eye className="w-8 h-8 text-blue-400" />
          </div>
          <div className="p-3 bg-purple-600/20 rounded-full backdrop-blur-sm border border-purple-400/30">
            <Cpu className="w-8 h-8 text-purple-400" />
          </div>
          <div className="p-3 bg-green-600/20 rounded-full backdrop-blur-sm border border-green-400/30">
            <Shield className="w-8 h-8 text-green-400" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Third Eye
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Tech
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Advanced privacy protection powered by NVIDIA Jetson and real-time AES encryption
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Zap className="w-5 h-5 inline mr-2" />
            See It In Action
          </button>
          <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;