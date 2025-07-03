import React from 'react';
import { Cpu, HardDrive, Zap, Monitor } from 'lucide-react';

const TechSpecs: React.FC = () => {
  const specs = [
    {
      icon: <Cpu className="w-6 h-6" />,
      label: "Processor",
      value: "NVIDIA Jetson Orin NX"
    },
    {
      icon: <HardDrive className="w-6 h-6" />,
      label: "Memory",
      value: "16GB LPDDR5"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      label: "AI Performance",
      value: "100 TOPS"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      label: "Display",
      value: "4K HDMI Output"
    }
  ];

  return (
    <section className="py-20 px-6 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Specifications
          </h2>
          <p className="text-xl text-blue-100">
            Powered by cutting-edge hardware for uncompromising performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
            >
              <div className="text-blue-400 mb-4 flex justify-center">
                {spec.icon}
              </div>
              <h3 className="text-sm font-medium text-blue-200 mb-2 uppercase tracking-wide">
                {spec.label}
              </h3>
              <p className="text-lg font-semibold text-white">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;