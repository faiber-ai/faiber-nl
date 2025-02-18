export interface Features {
  title?: string | Promise<string>;
  subtitle?: string | Promise<string>;
  tagline?: string | Promise<string>;
  id?: string;
  isDark?: boolean;
  classes?: {
    container?: string;
    title?: string;
    subtitle?: string;
    tagline?: string;
  };
  bg?: string | Promise<string>;
  columns?: number;
}

export interface Headline {
  title?: string | Promise<string>;
  subtitle?: string | Promise<string>;
  tagline?: string | Promise<string>;
  classes?: {
    container?: string;
    title?: string;
    subtitle?: string;
    tagline?: string;
  };
}

export interface CallToAction {
  text: string;
  href: string;
  icon?: string;
  target?: string;
  class?: string;
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