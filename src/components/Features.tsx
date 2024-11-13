import React from 'react';
import { features } from '../data';

const Features = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="heading">Why Choose Us?</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Discover what makes our institution stand out from the rest
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="card p-6 group hover:-translate-y-1"
            >
              <div className="inline-flex p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl">
                <feature.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
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