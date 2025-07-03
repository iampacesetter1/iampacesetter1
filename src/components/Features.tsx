import React from 'react';
import { Shield, Cpu, Zap, Eye, Lock, Wifi } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Real-time Detection",
      description: "Advanced AI algorithms detect privacy threats in milliseconds"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AES Encryption",
      description: "Military-grade encryption protects your sensitive data"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "NVIDIA Jetson Powered",
      description: "Edge computing for maximum performance and privacy"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Zero latency protection that doesn't slow you down"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Secure by Design",
      description: "Built with privacy-first architecture from the ground up"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Always Connected",
      description: "Seamless protection across all your devices"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced Privacy Protection
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Cutting-edge technology that keeps your digital life secure and private
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-blue-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-blue-100">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;