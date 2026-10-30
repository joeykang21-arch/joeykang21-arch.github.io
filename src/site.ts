// Site-wide details. Edit these in one place.
export const SITE = {
  name: 'Joseph Kang',
  description:
    'Joseph Kang: Data & AI Program Analyst at JPMorgan Chase, part-time Penn master’s student in AI, and independent AI safety researcher.',
  email: 'joeykang21@gmail.com',
};

export const LINKS = [
  { label: 'GitHub', href: 'https://github.com/joeykang21-arch' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joseph-kang/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@JoeKangX' },
  { label: 'Email', href: `mailto:${SITE.email}` },
];

export const NAV = [
  { label: 'Writing', href: '/writing/' },
  { label: 'Research', href: '/research/' },
  { label: 'Work', href: '/work/' },
  { label: 'Climbing', href: '/climbing/' },
  { label: 'Life', href: '/life/' },
];

// Dates are stored as UTC midnight; format in UTC so they don't shift a day.
export function formatDate(date: Date, style: 'month' | 'day' = 'month') {
  return date.toLocaleDateString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    ...(style === 'day' ? { day: 'numeric' } : {}),
  });
}
