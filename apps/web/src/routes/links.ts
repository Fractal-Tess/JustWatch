import type { LinkType } from '$types';

export const navLinks: LinkType[] = [
  { text: 'Home', to: '/' },
  { text: 'Blog', to: '/blog' },
  { text: 'About', to: '/about' },
  { text: 'Contact', to: '/contact' },
  { text: 'Does not exist', to: '/foo-spam-eggs' }
];
