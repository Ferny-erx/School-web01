import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Campus"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50 backdrop-blur-[2px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            Empowering <span className="text-indigo-400">Minds</span>,<br />
            Shaping <span className="text-indigo-400">Futures</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 leading-relaxed">
            Join our community of learners and innovators. Experience excellence in education
            with state-of-the-art facilities and dedicated educators.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="primary" size="lg" className="group">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Virtual Tour
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;