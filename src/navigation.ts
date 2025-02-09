import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Diensten',
      href: '/#features',
    },
    {
      text: 'Over Ons',
      href: getPermalink('/about'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Contact', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Menu',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'Diensten', href: '/#features' },
        { text: 'Over Ons', href: getPermalink('/about') },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    © 2024 Faiber V.O.F. - KvK: 81232123 - BTW: NL812321232B01
  `,
};
