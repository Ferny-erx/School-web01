import React from 'react';
import { BookOpen, GraduationCap, Users, Calendar, Bell, Menu } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Events />
      <Footer />
    </div>
  );
}

export default App;