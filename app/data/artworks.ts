export type Artwork = {
  slug: string;
  title: string;
  year: number;
  size: string;
  medium: string;
  price: string;
  status: "Available" | "Reserved" | "Sold";
  image: string;
  description: string;
  featured?: boolean;
};

export const artworks: Artwork[] = [
  {
    slug: "veil-of-dreams",
    title: "Veil of Dreams",
    year: 2026,
    size: "100 × 100 cm",
    medium: "Oil and oil pastel on canvas",
    price: "€2,100",
    status: "Available",
    image: "https://static.wixstatic.com/media/8ffb5c_4fc08d00596f486fa604bf5c83dd4ccc~mv2.png",
    description:
      "A figure emerges through a surface that seems both physical and elusive. The work sits between bodily beauty and something less graspable — a presence that cannot be fully uncovered.",
    featured: true
  },
  {
    slug: "the-burden-of-a-conscious-mind",
    title: "The Burden of a Conscious Mind",
    year: 2026,
    size: "80 × 80 cm",
    medium: "Oil, oil pastel and gesso on canvas",
    price: "€2,450",
    status: "Available",
    image: "https://static.wixstatic.com/media/8ffb5c_a3dd478d44df409dae4f8edc8bee91d7~mv2.png",
    description:
      "Consciousness can illuminate, but it can also weigh on us. This painting moves between soft and resistant surfaces, reflecting the exhausting attempt to understand what may never become fully knowable.",
    featured: true
  },
  {
    slug: "acceptance",
    title: "Acceptance",
    year: 2026,
    size: "70 × 70 cm",
    medium: "Oil and oil pastel on canvas",
    price: "€1,230",
    status: "Available",
    image: "https://static.wixstatic.com/media/8ffb5c_e3b1e10efc124683847d119e80a966f6~mv2.png",
    description:
      "An open figure receives what comes without resistance. Blue and yellow move through the surface with a sense of calm, turning surrender into an active form of optimism.",
    featured: true
  },
  {
    slug: "exorcism",
    title: "Exorcism",
    year: 2026,
    size: "55 × 55 cm",
    medium: "Oil and oil pastel on canvas",
    price: "€760",
    status: "Available",
    image: "https://static.wixstatic.com/media/8ffb5c_4ed065453d12462fba63bdd498902788~mv2.png",
    description:
      "A dense and physical painting about release — an interior pressure finding a form outside the body.",
    featured: false
  },
  {
    slug: "no-sleep",
    title: "No Sleep",
    year: 2026,
    size: "—",
    medium: "Oil and oil pastel on canvas",
    price: "€1,570",
    status: "Available",
    image: "https://static.wixstatic.com/media/8ffb5c_e23d6149a778496a9e6f7d052add07f1~mv2.png",
    description:
      "A body caught between exhaustion and wakefulness, where rest is physically close but psychologically inaccessible.",
    featured: false
  }
];

export const featuredArtworks = artworks.filter((artwork) => artwork.featured);
