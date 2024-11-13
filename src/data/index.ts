import { BookOpen, Users, Trophy, Lightbulb } from 'lucide-react';
import type { Feature, Event, NavLink } from '../types';

export const features: Feature[] = [
  {
    name: 'Excellence in Education',
    description: 'Comprehensive curriculum designed to nurture critical thinking and creativity.',
    icon: BookOpen,
  },
  {
    name: 'Expert Faculty',
    description: 'Learn from experienced educators dedicated to student success.',
    icon: Users,
  },
  {
    name: 'Achievement Focus',
    description: 'Consistent record of academic and extracurricular excellence.',
    icon: Trophy,
  },
  {
    name: 'Innovation Hub',
    description: 'Modern facilities equipped with the latest learning technologies.',
    icon: Lightbulb,
  },
];

export const events: Event[] = [
  {
    title: 'Annual Science Fair',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Sports Day',
    date: 'April 5, 2024',
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Art Exhibition',
    date: 'April 20, 2024',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export const navLinks: NavLink[] = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Academics', href: '#academics' },
  { name: 'Events', href: '#events' },
  { name: 'Contact', href: '#contact' },
];