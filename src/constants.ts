export const PAGES = {
  HOME: 'home',
  ABOUT: 'about',
  CORPORATE: 'corporate',
  PROFESSIONAL: 'professional',
  CONTACT: 'contact'
} as const;

export type PageType = typeof PAGES[keyof typeof PAGES];
