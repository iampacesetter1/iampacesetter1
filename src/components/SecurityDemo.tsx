import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, CheckCircle, Eye } from 'lucide-react';

const SecurityDemo: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [threats, setThreats] = useState(0);
  const [blocked, setBlocked] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isScanning) {
        setThreats(prev => prev + Math.floor(Math.random() * 3));
        setBlocked(prev => prev + Math.floor(Math.random() * 2));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isScanning]);

  const startDemo = () => {
    setIsScanning(true);
    setThreats(0);
    setBlocked(0);
    setTimeout(() => setIsScanning(false), 10000);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See It In Action
          </h2>
          <p className="text-xl text-blue-100">
            Watch Third Eye Tech protect your privacy in real-time
          </p>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {isScanning ? <Eye className="w-8 h-8 mx-auto animate-pulse" /> : <Shield className="w-8 h-8 mx-auto" />}
              </div>
              <p className="text-white font-semibold">Status</p>
              <p className="text-green-400">{isScanning ? 'Scanning...' : 'Protected'}</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">{threats}</div>
              <p className="text-white font-semibold">Threats Detected</p>
              <p className="text-red-400 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 mr-1" />
                Real-time
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">{blocked}</div>
              <p className="text-white font-semibold">Threats Blocked</p>
              <p className="text-blue-400 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 mr-1" />
                Encrypted
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={startDemo}
              disabled={isScanning}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isScanning ? 'Demo Running...' : 'Start Security Demo'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityDemo;