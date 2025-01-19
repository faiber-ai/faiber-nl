export interface Headline {
  title?: string;
  subtitle?: string;
}

export interface CallToAction {
  text: string;
  href: string;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export interface Hero extends Headline {
  content?: string;
  image?: string | unknown;
  tagline?: {
    text: string;
    href?: string;
  };
  actions?: string | CallToAction[];
} 