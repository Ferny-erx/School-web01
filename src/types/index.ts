export interface Feature {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Event {
  title: string;
  date: string;
  image: string;
}

export interface NavLink {
  name: string;
  href: string;
}