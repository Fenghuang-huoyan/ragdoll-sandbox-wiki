export const siteConfig = {
  siteName: 'Ragdoll Sandbox Guide',
  domain: 'ragdollsandbox.wiki',
  url: 'https://ragdollsandbox.wiki',
  gameTitle: 'Ragdoll Sandbox',
  universeId: 10771155665,
  placeId: 113398609378596,
  storeUrl: 'https://www.roblox.com/games/113398609378596/Ragdoll-Sandbox',
  supportEmail: '',
  social: [
    { href: 'https://www.roblox.com/groups/257996659/Rise-To-Top', label: 'Rise To Top group' },
  ],
  developer: 'Rise To Top',
  publisher: 'Rise To Top',
  tagline: 'Unofficial English fan guide for the Roblox sandbox: the published redeem code, and how the experience describes play.',
  locale: 'en',
  themeColor: '#0b0e10',
  contentRoot: 'ragdoll',
  homeTitle: 'Ragdoll Sandbox Codes & Guide — SANDBOX and How to Play',
  homeDescription:
    'Unofficial English fan guide for Ragdoll Sandbox on Roblox (universe 10771155665). The game page lists code SANDBOX for $1000, checked 6 Nov 2026, plus a short play overview. Not affiliated with Roblox or Rise To Top.',
  analytics: {
    gaId: '',
  },
  art: {
    hero: '/images/official/roblox/thumb-05.png',
    heroAlt:
      'Official Roblox thumbnail for Ragdoll Sandbox: a pale ragdoll flung through the air beside a tan jeep exploding into blocks',
    header: '/images/official/roblox/icon.png',
    headerAlt:
      'Official Roblox icon for Ragdoll Sandbox: a pale ragdoll in front, a player firing eye beams, and the game logo',
    ogImage: '/images/official/roblox/thumb-05.png',
  },
  ads: {
    network: 'adsterra' as const,
    format: 'native-banner' as const,
  },
  disclaimer:
    'ragdollsandbox.wiki is an unofficial fan-made guide for Ragdoll Sandbox. It is not affiliated with, endorsed by, or sponsored by Roblox Corporation, the Rise To Top group, or the people who develop the experience. All game content, names, artwork, and trademarks belong to their respective owners. Redeem codes expire and change without notice. Verify any string in the Roblox client. This site does not redeem codes, sell Robux, or recover accounts. The Roblox links in the footer are public pages. Messages sent to Roblox do not reach the people who edit this wiki.',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/codes', label: 'Codes' },
    { href: '/guide', label: 'Guide' },
  ],
  moreNav: [{ href: '/about', label: 'About' }],
  footerNav: [
    { href: '/', label: 'Home' },
    { href: '/codes', label: 'Codes' },
    { href: '/guide', label: 'Guide' },
    { href: '/about', label: 'About' },
  ],
  version: {
    label: 'Checked 6 Nov 2026',
    detail:
      'The code string, description, creator, genre, and counts are from the Roblox games API and votes API on 6 Nov 2026. Redeem-button notes are from Dexerto (5 Nov 2026) and Roblox Den (read 6 Nov 2026). This site did not redeem SANDBOX in a client. Player counts move all day.',
  },
  databases: [
    {
      href: 'https://www.roblox.com/games/113398609378596/Ragdoll-Sandbox',
      label: 'Roblox game page',
    },
    {
      href: 'https://www.roblox.com/groups/257996659/Rise-To-Top',
      label: 'Rise To Top group',
    },
    {
      href: 'https://games.roblox.com/v1/games?universeIds=10771155665',
      label: 'Roblox games API',
    },
  ],
} as const;

export type NavItem = { href: string; label: string };
