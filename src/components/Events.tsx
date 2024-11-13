import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { events } from '../data';

const Events = () => {
  return (
    <section id="events" className="py-24 bg-gray-50/50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="heading">Upcoming Events</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Stay updated with our latest activities and celebrations
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="card overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-2" />
                  {event.date}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {event.title}
                </h3>
                <button className="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium group/btn">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;