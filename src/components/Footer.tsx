import React from 'react';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">Sunrise Public School</span>
            </div>
            <p className="mt-4 text-gray-400">
              Empowering students with knowledge and skills for a better tomorrow.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Admissions</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Academics</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Campus Life</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Student Portal</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Parent Portal</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Library</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Career Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-2 text-indigo-500 dark:text-indigo-400" />
                123 Education St, Learning City
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-2 text-indigo-500 dark:text-indigo-400" />
                (+91) 123-4567
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-2 text-indigo-500 dark:text-indigo-400" />
                info@SunrisePublicSchool.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2024 Sunrise Public School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;