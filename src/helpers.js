export function formatPrice(cents) {
  return (cents / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function getFunName() {
  const adjectives = [
    'uchi',
    'lazy',
    'snooty',
    'jock',
    'cranky',
    'peppy',
    'normal',
    'smug'
  ];

  const nouns = [
    'bob',
    'purrl',
    'snake',
    'poppy',
    'ribbot',
    'kappn',
    'graham',
    'paula',
    'boomer',
    'puck',
    'resseti',
    'coco',
    'caesar',
    'fang',
    'bones',
    'lucky',
    'ed',
    'alphonso',
    'doc',
    'dot',
    'cyrus',
    'cookie',
    'chip',
    'champ',
    'cashmere',
    'agentS',
    'chester',
    'chief',
    'carlo',
    'ace'
  ];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}
