import type { ICardContent } from '~/components/HomeCard'

export const slot1: ICardContent = {
  description: [
    {
      isBold: false,
      text: `Blissim c'est une box mensuelle sans engagement, mais aussi des offres exclusives et un `,
    },
    {
      isBold: true,
      text: 'e-shop généreux. ',
    },
    {
      isBold: false,
      text: 'Profitez de nos conseils personnalisés et de nos vidéos accessibles gratuitement.',
    },
  ],
  iconUrl: '/static/images/laptop-icon.svg',
  title: 'Un accompagnement sur mesure',
}

export const slot2: ICardContent = {
  description: [
    {
      isBold: false,
      text: `N°1 de l'abonnement beauté en Europe, Blissim c'est déjà plus de `,
    },
    {
      isBold: true,
      text: '250 000 clients ',
    },
    {
      isBold: false,
      text: 'déjà conquis.\nLabel trustpilot',
    },
  ],
  iconUrl: '/static/images/laptop-icon.svg',
  title: `10 ans d'expertise beauté`,
}

export const slot3: ICardContent = {
  description: [
    {
      isBold: false,
      text: 'Nous travaillons avec des partenaires beauté et des experts toujours plus engagés, pour vous proposer une ',
    },
    {
      isBold: true,
      text: 'sélection personnalisée ',
    },
    {
      isBold: false,
      text: 'de soins de qualité et le plus naturels possibles.',
    },
  ],
  iconUrl: '/static/images/laptop-icon.svg',
  title: 'Nos engagements',
}
