// Artwork data imported from the artist's public Artfinder profile:
// https://www.artfinder.com/en-GB/artist/mladen-ilic/
//
// Ordered newest first, matching Artfinder's own "New" sort. Every field here
// is taken from the Artfinder listing; nothing is inferred. `year` is null when
// Artfinder does not publish one.
//
// Pricing: `artfinderPriceEur` is the standing Artfinder list price, retained
// for maintenance. `websitePriceEur` is the published price and is always 80%
// of it. When Artfinder runs a temporary promotion the list price is still the
// basis, so the two reductions never compound.

export type Artwork = {
  slug: string;
  title: string;
  year: number | null;
  medium: string;
  materials: string | null;
  substrate: string | null;
  widthCm: number | null;
  heightCm: number | null;
  dimensions: string | null;
  signature: string | null;
  framing: string | null;
  readyToHang: boolean;
  unique: boolean;
  available: boolean;
  /** Standing Artfinder list price in EUR. Not shown publicly. */
  artfinderPriceEur: number;
  /** Published price in EUR: artfinderPriceEur * 0.8, rounded. */
  websitePriceEur: number;
  paragraphs: string[];
  images: string[];
  artfinderUrl: string;
  artfinderId: number;
};

export const artworks: Artwork[] = [
  {
    slug: "orpheus",
    title: "Orpheus",
    year: null,
    medium: "Oil painting",
    materials: "oil",
    substrate: "Canvas",
    widthCm: 45,
    heightCm: 60,
    dimensions: "45 x 60 x 2cm / 45 x 60cm (actual image size)",
    signature: "Signed certificate of authenticity",
    framing: "Ready to hang",
    readyToHang: true,
    unique: true,
    available: true,
    artfinderPriceEur: 1160,
    websitePriceEur: 928,
    paragraphs: [
      "This is an abstract oil painting on canvas. Quality oil paints and oil pastels have been used.",
      "My paintings represent emanation of unseen but very much felt by all of us: metaphysical portraits, landscapes or acts. Because of that during the creation process I don’t plan, I just paint them letting the emotions rule.",
    ],
    images: [
      "https://d3rf6j5nx5r04a.cloudfront.net/0iarIZpWL_mWwdTelnaAIuYp2Uw=/product/0/b/a5a77a0f4f6745deaf498afa69882cc5_opt.jpg",
      "https://d3rf6j5nx5r04a.cloudfront.net/8u133iuHWfmd_uQppXfaLdzo-4k=/product/d/7/75dfabda7b134167b79fda448ab7cb33_opt.jpg",
    ],
    artfinderUrl: "https://www.artfinder.com/product/orpheus-6077f/",
    artfinderId: 2324301,
  },
  {
    slug: "hrabrost",
    title: "Храброст",
    year: 2026,
    medium: "Oil painting",
    materials: "oil, pastel",
    substrate: "Canvas",
    widthCm: 80,
    heightCm: 80,
    dimensions: "80 x 80 x 1cm (unframed) / 80 x 80cm (actual image size)",
    signature: "Signed on the back",
    framing: "Ready to hang",
    readyToHang: true,
    unique: true,
    available: true,
    artfinderPriceEur: 4800,
    websitePriceEur: 3840,
    paragraphs: [
      "Храброст (Courage) explores courage through the idea of faith-not as the absence of fear or doubt, but as the decision to move forward without certainty.",
      "There are moments when we cannot know the outcome, control what comes next, or remove fear completely. What remains is the choice to trust, to endure, and to continue.",
      "The work exists between figurative painting and abstraction. The figure is not intended as a portrait of a particular person, but as a psychological and spiritual presence. Parts of the body emerge while others dissolve into the surrounding space, suggesting the tension between what can be seen and what must be believed without being fully visible.",
      "The physical surface is an important part of the painting. I used layers of gesso and oil paint to construct raised, sculptural passages across the figure. These areas project from the canvas and catch the light differently as the viewer moves around the work, giving the painting a three-dimensional presence that cannot be fully reproduced in photographs.",
      "This material contrast is also connected to the idea behind the work. The heavily textured areas make the figure intensely physical, while other passages seem to disappear into atmosphere. For me, this reflects the relationship between the tangible world and the inner, spiritual dimension that cannot always be seen or explained.",
      "Храброст belongs to my continuing exploration of the human figure as a vehicle for questions of consciousness, faith, vulnerability, identity and the relationship between the physical and metaphysical.",
    ],
    images: [
      "https://d3rf6j5nx5r04a.cloudfront.net/NxxqRb_TeZONz7GmPw-3ZjxDCDE=/product/8/d/478d943692aa4e2b852370418f3f9877_opt.jpg",
      "https://d3rf6j5nx5r04a.cloudfront.net/D4cBK3H2bY3uh7NPW7h_iYy-lbQ=/product/2/6/5e7968dff9dd423aa4b1bc2f982b94e7_opt.jpg",
      "https://d3rf6j5nx5r04a.cloudfront.net/7j2tLD_7NaN4x9xFEww_dRhUcW0=/product/d/f/8a3dfb8ed44e45fa96cf7ada5fe9995b_opt.jpg",
      "https://d3rf6j5nx5r04a.cloudfront.net/v88NyVoQXcMEjCdTOdTE8ZMGNIU=/product/d/1/aa9523a6aef144b192932d6d3145d3f4_opt.jpg",
    ],
    artfinderUrl: "https://www.artfinder.com/product/product-3e0a9/",
    artfinderId: 2317711,
  },
  {
    slug: "emerge",
    title: "Emerge",
    year: 2026,
    medium: "Oil painting",
    materials: "oil, pastel",
    substrate: "Canvas",
    widthCm: 60,
    heightCm: 80,
    dimensions: "60 x 80 x 1cm (unframed) / 60 x 80cm (actual image size)",
    signature: "Signed on the back",
    framing: "Ready to hang",
    readyToHang: true,
    unique: true,
    available: true,
    artfinderPriceEur: 2630,
    websitePriceEur: 2104,
    paragraphs: [
      "The figure appears to rise from water, surrounded by light, as if moving through a threshold. I was interested in the uncertainty of that transition: transformation, renewal, and the sense that something new is beginning to take form.",
      "The work exists between figurative painting and abstraction. The figure is not a portrait of a particular person, but a psychological and spiritual presence, suspended between the physical and metaphysical.",
      "I work intuitively, without sketches or photographic references, allowing the image to develop through memory, emotion and inner dialogue.",
    ],
    images: [
      "https://d3rf6j5nx5r04a.cloudfront.net/LEKgFzQQXhk-gFDIyBDE4nBfWyE=/product/c/6/2a0fc6c12a4f4ea6a4431bd6742e15cd_opt.jpg",
    ],
    artfinderUrl: "https://www.artfinder.com/product/emerging-26cd7/",
    artfinderId: 2317682,
  },
  {
    slug: "dancing-in-the-dark",
    title: "Dancing in the dark",
    year: 2026,
    medium: "Oil painting",
    materials: "oil, pastel",
    substrate: "Canvas",
    widthCm: 50,
    heightCm: 50,
    dimensions: "50 x 50 x 1cm (unframed) / 50 x 50cm (actual image size)",
    signature: "Signed on the back",
    framing: "Ready to hang",
    readyToHang: true,
    unique: true,
    available: true,
    artfinderPriceEur: 1260,
    websitePriceEur: 1008,
    paragraphs: [
      "Dancing in the Dark explores the moment when movement takes over and thought disappears.",
      "The figure is absorbed by rhythm, no longer separate from the movement itself. Darkness becomes almost irrelevant - the body continues instinctively, carried by energy, repetition and momentum.",
      "The work exists between figurative painting and abstraction, where the figure becomes less an individual and more a trace of movement and presence.",
      "I work intuitively, without sketches or photographic references, allowing the image to develop through memory, emotion and inner dialogue.",
    ],
    images: [
      "https://d3rf6j5nx5r04a.cloudfront.net/mEYZLoWTHaOIGsLNIV9f40Bo_Sk=/product/4/3/c92f7a9bb0dd4da8ac3d2fc514efa6cc_opt.jpg",
    ],
    artfinderUrl: "https://www.artfinder.com/product/dancing-in-the-dark-499f0/",
    artfinderId: 2317677,
  },
  {
    slug: "the-burden-of-a-conscious-mind",
    title: "The burden of a conscious mind",
    year: 2026,
    medium: "Oil painting",
    materials: "oil, pastel",
    substrate: "Canvas",
    widthCm: 80,
    heightCm: 80,
    dimensions: "80 x 80 x 2cm (unframed) / 80 x 80cm (actual image size)",
    signature: "Signed on the back",
    framing: "Ready to hang",
    readyToHang: true,
    unique: true,
    available: true,
    artfinderPriceEur: 1890,
    websitePriceEur: 1512,
    paragraphs: [
      "The Burden of a Conscious Mind explores the weight of being aware.",
      "To be conscious means constantly trying to understand ourselves, our emotions, our memories and the world around us. But much of what shapes us belongs to the subconscious and unconscious areas we can sense, but never fully control or explain. Sometimes we spend enormous parts of our lives trying to understand things that may never be completely understood.",
      "The painting exists between figurative painting and abstraction. The figure is not a portrait of a particular person, but a psychological presence.",
      "I used gesso and oil paint to create raised, sculptural areas, contrasted with softer passages that dissolve into the surrounding darkness. This contrast between hard and soft, visible and disappearing, becomes part of the idea itself. The textured surface catches the light differently as the viewer moves around the work, giving the painting a physical depth that cannot be fully reproduced in photographs.",
      "I work intuitively, without sketches or photographic references, allowing the image to develop through memory, emotion and inner dialogue.",
    ],
    images: [
      "https://d3rf6j5nx5r04a.cloudfront.net/i1tVN4-VK3zmwCP1tJM7tZ3HnyU=/product/9/8/4c1d7c3c84934646a7fb6e2c26d8e4af_opt.jpg",
    ],
    artfinderUrl: "https://www.artfinder.com/product/the-burden-of-a-conscious-mind/",
    artfinderId: 2302396,
  },
  {
    slug: "veil-of-dreams",
    title: "Veil of dreams",
    year: 2026,
    medium: "Oil painting",
    materials: "oil, pastel",
    substrate: "Canvas",
    widthCm: 100,
    heightCm: 100,
    dimensions: "100 x 100 x 1cm (unframed) / 100 x 100cm (actual image size)",
    signature: "Signed on the back",
    framing: "Ready to hang",
    readyToHang: true,
    unique: true,
    available: true,
    artfinderPriceEur: 2800,
    websitePriceEur: 2240,
    paragraphs: [
      "Veil of Dreams explores the point where physical beauty meets something less visible and more elusive.",
      "The body appears almost idealised-youthful, classical, Adonis like while the face remains hidden behind a veil. The contrast shifts attention away from appearance alone and toward something harder to define, somewhere between desire, mystery and inner presence.",
      "The visible body belongs to the physical world; the concealed face opens the work toward the metaphysical. The painting stays in that tension without resolving it, allowing beauty to remain both immediate and unreachable.",
      "I work intuitively, without sketches or photographic references, allowing the image to develop through memory, emotion and inner dialogue.",
    ],
    images: [
      "https://d3rf6j5nx5r04a.cloudfront.net/Sz6lKwHWgZ_XMQk9fGPWwvIPJt4=/product/1/0/41393a8063a2425eb0b5d9a86d55490f_opt.jpg",
      "https://d3rf6j5nx5r04a.cloudfront.net/sJwupGTLXlblGcWQu_wg1uS9vI0=/product/0/0/812cbe6ab7cc4e73b1e6823b3eda97f7_opt.jpg",
    ],
    artfinderUrl: "https://www.artfinder.com/product/vail-of-dreams/",
    artfinderId: 2299144,
  },
  {
    slug: "meditation",
    title: "Meditation",
    year: 2026,
    medium: "Oil painting",
    materials: "oil, pastel",
    substrate: "Canvas",
    widthCm: 60,
    heightCm: 60,
    dimensions: "60 x 60 x 2cm (unframed) / 60 x 60cm (actual image size)",
    signature: "Signed on the back",
    framing: "Ready to hang",
    readyToHang: true,
    unique: true,
    available: true,
    artfinderPriceEur: 1670,
    websitePriceEur: 1336,
    paragraphs: [
      "This is an abstract oil painting on canvas. Quality oil paints and oil pastels have been used.",
      "My paintings represent emanation of unseen but very much felt by all of us: metaphysical portraits, landscapes or acts. Because of that during the creation process I don’t plan, I just paint them letting the emotions rule.",
    ],
    images: [
      "https://d3rf6j5nx5r04a.cloudfront.net/gI3u29Dz-07lxlqWfun2pyI0gdg=/product/5/8/18823a62b1c74414a66c852925d73e88_opt.jpg",
    ],
    artfinderUrl: "https://www.artfinder.com/product/meditation-d38fd/",
    artfinderId: 2298888,
  },
  {
    slug: "rough-night",
    title: "Rough night",
    year: 2026,
    medium: "Oil painting",
    materials: "oil, pastel",
    substrate: "Canvas",
    widthCm: 70,
    heightCm: 70,
    dimensions: "70 x 70 x 2cm (unframed) / 70 x 70cm (actual image size)",
    signature: "Signed on the back",
    framing: "Ready to hang",
    readyToHang: true,
    unique: true,
    available: true,
    artfinderPriceEur: 2789,
    websitePriceEur: 2231,
    paragraphs: [
      "Rough Night explores the state between exhaustion and rest, when the body is tired but the mind refuses to become quiet.",
      "The figure appears drained yet unable to surrender to sleep, held in a kind of suspended tension. Fatigue becomes both physical and psychological - a moment when stillness does not necessarily bring peace.",
      "The work exists between figurative painting and abstraction. The figure is not intended as a portrait of a particular person, but as a presence shaped by exhaustion, restlessness and inner tension.",
      "I work intuitively, without sketches or photographic references, allowing the image to develop through memory, emotion and inner dialogue.",
    ],
    images: [
      "https://d3rf6j5nx5r04a.cloudfront.net/6nP483nIc29J-w3syEAM-mTw4Lg=/product/c/4/cf52c9621b074d9986c8deb5acf6a82e_opt.jpg",
    ],
    artfinderUrl: "https://www.artfinder.com/product/raw-585ff/",
    artfinderId: 2298156,
  },
  {
    slug: "acceptance",
    title: "Acceptance",
    year: 2026,
    medium: "Oil painting",
    materials: "oil, pastel",
    substrate: "Canvas",
    widthCm: 70,
    heightCm: 70,
    dimensions: "70 x 70 x 2cm (unframed) / 70 x 70cm (actual image size)",
    signature: "Signed on the back",
    framing: "Ready to hang",
    readyToHang: true,
    unique: true,
    available: true,
    artfinderPriceEur: 2349,
    websitePriceEur: 1879,
    paragraphs: [
      "Acceptance explores the quiet strength that comes from being open to life.",
      "The figure stands with arms extended, not in surrender, but in complete readiness to receive whatever comes. The gesture carries trust, optimism and a sense of freedom -the possibility that when resistance disappears, something new can enter.",
      "The work exists between figurative painting and abstraction. The figure becomes less an individual and more a state of being: open, vulnerable, balanced and hopeful.",
      "The blue, pink and yellow tones reinforce this feeling. Their interaction brings light and warmth into the composition, creating a sense of calm, clarity and positive expectation.",
      "I work intuitively, without sketches or photographic references, allowing the image to develop through memory, emotion and inner dialogue.",
    ],
    images: [
      "https://d3rf6j5nx5r04a.cloudfront.net/44hKZNwN_oTee4LpZxGfvHiJrgc=/product/0/2/37adeba62e7a45c785764dade493a59d_opt.jpg",
    ],
    artfinderUrl: "https://www.artfinder.com/product/acceptance-4c17f/",
    artfinderId: 2298155,
  },
  {
    slug: "disconnected",
    title: "Disconnected",
    year: 2026,
    medium: "Oil painting",
    materials: "oil, pastel",
    substrate: "Canvas",
    widthCm: 60,
    heightCm: 50,
    dimensions: "60 x 50 x 1cm (unframed) / 60 x 50cm (actual image size)",
    signature: "Signed on the back",
    framing: "Ready to hang",
    readyToHang: true,
    unique: true,
    available: true,
    artfinderPriceEur: 2345,
    websitePriceEur: 1876,
    paragraphs: [
      "This is an abstract oil painting on canvas. Quality oil paints and oil pastels have been used.",
      "My paintings represent emanation of unseen but very much felt by all of us: metaphysical portraits, landscapes or acts. Because of that during the creation process I don’t plan, I just paint them letting the emotions rule.",
    ],
    images: [
      "https://d3rf6j5nx5r04a.cloudfront.net/C-2zGYLV5E-30EfHk42EMedjo3s=/product/d/6/5b0051b6d2e64bd38526631cd61f44c0_opt.jpg",
    ],
    artfinderUrl: "https://www.artfinder.com/product/disconnected-38621/",
    artfinderId: 2286383,
  },
];

export const ARTFINDER_PROFILE_URL =
  "https://www.artfinder.com/en-GB/artist/mladen-ilic/";

/** Works shown in the homepage Paintings section, newest first. */
export const homepageArtworks = artworks.slice(0, 6);

export function formatEur(amount: number): string {
  return `\u20ac${amount.toLocaleString("en-GB")}`;
}

export function getArtwork(slug: string): Artwork | undefined {
  return artworks.find((artwork) => artwork.slug === slug);
}

export function dimensionLabel(artwork: Artwork): string | null {
  if (artwork.widthCm === null || artwork.heightCm === null) return null;
  return `${artwork.widthCm} \u00d7 ${artwork.heightCm} cm`;
}
