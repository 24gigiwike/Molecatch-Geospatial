export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  id: string;
  number: string;
  label: string;
}

export type PageType = 'mission' | 'expertise' | 'capabilities' | 'contact';
