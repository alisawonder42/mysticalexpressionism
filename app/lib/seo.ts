import type { Metadata } from "next";
import {
  ARTFINDER_PROFILE_URL,
  artworks,
  dimensionLabel,
  homepageArtworks,
  type Artwork,
} from "../data/artworks";
import {
  ABOUT_PARAGRAPHS,
  ARTIST_PORTRAIT,
  CONTACT_EMAIL,
  INSTAGRAM_URL,
} from "../data/copy";

export const SITE_URL = "https://mladenilic.art";
export const SITE_NAME = "Mladen Ilic";
export const ARTIST_NAME = "Mladen Ilic";
export const ARTIST_NAME_ACCENTED = "Mladen Ilić";
export const ARTIST_ID = `${SITE_URL}/#artist`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export { ARTFINDER_PROFILE_URL, INSTAGRAM_URL, ARTIST_PORTRAIT };

export const DEFAULT_TITLE =
  "Mladen Ilic (Mladen Ilić) — Painter in Novi Sad";

export const TITLE_TEMPLATE = "%s — Mladen Ilic";

/** Home / default meta description: existing biography plus the Artfinder name people already search. */
export const DEFAULT_DESCRIPTION = [
  ABOUT_PARAGRAPHS[0],
  "Known on Artfinder as Mladen Ilić.",
  ABOUT_PARAGRAPHS[1],
  "Original paintings and collector enquiries.",
].join(" ");

export const OG_DESCRIPTION =
  "Original paintings by Mladen Ilic (Mladen Ilić), painter in Novi Sad, Serbia. Known on Artfinder as Mladen Ilić.";

export const SITE_KEYWORDS = [
  "Mladen Ilic",
  "Mladen Ilić",
  "painter",
  "Novi Sad",
  "Serbia",
  "Artfinder",
  "original paintings",
  "oil painting",
  "Serbian painter",
];

export const PORTRAIT_OG_IMAGE = {
  url: ARTIST_PORTRAIT,
  alt: "Portrait of Mladen Ilic, painter in Novi Sad",
};

type JsonLd = Record<string, unknown>;

function artistRef(): JsonLd {
  return {
    "@type": ["Person", "VisualArtist"],
    "@id": ARTIST_ID,
    name: ARTIST_NAME,
    alternateName: ARTIST_NAME_ACCENTED,
    url: SITE_URL,
  };
}

export function personJsonLd(): JsonLd {
  return {
    "@type": ["Person", "VisualArtist"],
    "@id": ARTIST_ID,
    name: ARTIST_NAME,
    alternateName: [ARTIST_NAME_ACCENTED, ARTIST_NAME],
    url: SITE_URL,
    image: ARTIST_PORTRAIT,
    jobTitle: "Painter",
    description: `${ABOUT_PARAGRAPHS[0]} Known on Artfinder as ${ARTIST_NAME_ACCENTED}. ${ABOUT_PARAGRAPHS[1]}`,
    email: CONTACT_EMAIL,
    nationality: "Serbian",
    homeLocation: {
      "@type": "Place",
      name: "Novi Sad, Serbia",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Novi Sad",
        addressCountry: "RS",
      },
    },
    workLocation: {
      "@type": "Place",
      name: "Novi Sad, Serbia",
    },
    sameAs: [ARTFINDER_PROFILE_URL, INSTAGRAM_URL],
    subjectOf: {
      "@type": "ProfilePage",
      name: `${ARTIST_NAME_ACCENTED} on Artfinder`,
      url: ARTFINDER_PROFILE_URL,
      description: `Artfinder artist profile for ${ARTIST_NAME_ACCENTED}, the listing most people use to find painter ${ARTIST_NAME}.`,
    },
    knowsAbout: ["Oil painting", "Original paintings", "Oil pastel"],
    hasOccupation: {
      "@type": "Occupation",
      name: "Painter",
      occupationLocation: {
        "@type": "City",
        name: "Novi Sad",
        addressCountry: "RS",
      },
    },
  };
}

export function websiteJsonLd(): JsonLd {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    alternateName: [ARTIST_NAME_ACCENTED, "mladenilic.art"],
    description: DEFAULT_DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": ARTIST_ID },
    about: { "@id": ARTIST_ID },
  };
}

export function latestWorksItemListJsonLd(): JsonLd {
  return {
    "@type": "ItemList",
    "@id": `${SITE_URL}/#latest-works`,
    name: "Latest original paintings by Mladen Ilic",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: homepageArtworks.length,
    itemListElement: homepageArtworks.map((artwork, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/works/${artwork.slug}`,
      name: artwork.title,
    })),
  };
}

export function siteGraphJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [personJsonLd(), websiteJsonLd(), latestWorksItemListJsonLd()],
  };
}

function breadcrumbJsonLd(items: { name: string; path: string }[]): JsonLd {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function worksPageJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/works#page`,
        url: `${SITE_URL}/works`,
        name: "Original Paintings",
        description:
          "The most recent original paintings by Mladen Ilic (Mladen Ilić), painter in Novi Sad, also known on Artfinder.",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ARTIST_ID },
        mainEntity: { "@id": `${SITE_URL}/works#list` },
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/works#list`,
        name: "Original paintings by Mladen Ilic",
        numberOfItems: artworks.length,
        itemListElement: artworks.map((artwork, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${SITE_URL}/works/${artwork.slug}`,
          name: artwork.title,
        })),
      },
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Works", path: "/works" },
      ]),
    ],
  };
}

export function contactPageJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${SITE_URL}/contact#page`,
        url: `${SITE_URL}/contact`,
        name: "Contact Mladen Ilic",
        description:
          "Contact Mladen Ilic (Mladen Ilić), painter in Novi Sad, about original paintings and collector enquiries.",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ARTIST_ID },
        mainEntity: { "@id": ARTIST_ID },
      },
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
    ],
  };
}

export function artworkJsonLd(artwork: Artwork): JsonLd {
  const url = `${SITE_URL}/works/${artwork.slug}`;
  const images = artwork.images.map((contentUrl, index) => ({
    "@type": "ImageObject",
    contentUrl,
    url: contentUrl,
    name: index === 0 ? artwork.title : `${artwork.title}, detail ${index}`,
    creator: { "@id": ARTIST_ID },
    creditText: ARTIST_NAME,
    copyrightHolder: { "@id": ARTIST_ID },
  }));

  const visualArtwork: JsonLd = {
    "@type": ["VisualArtwork", "Painting"],
    "@id": `${url}#artwork`,
    name: artwork.title,
    url,
    sameAs: artwork.artfinderUrl,
    description: artwork.paragraphs.join(" "),
    creator: artistRef(),
    image: images,
    artform: "Painting",
    artMedium: artwork.materials ?? artwork.medium,
    artworkSurface: artwork.substrate ?? undefined,
    artEdition: artwork.unique ? "Unique original" : undefined,
    dateCreated: artwork.year ? String(artwork.year) : undefined,
    offers: {
      "@type": "Offer",
      url,
      price: artwork.websitePriceEur,
      priceCurrency: "EUR",
      availability: artwork.available
        ? "https://schema.org/InStock"
        : "https://schema.org/SoldOut",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": ARTIST_ID },
    },
  };

  if (artwork.widthCm !== null && artwork.heightCm !== null) {
    visualArtwork.width = { "@type": "Distance", name: `${artwork.widthCm} cm` };
    visualArtwork.height = { "@type": "Distance", name: `${artwork.heightCm} cm` };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      visualArtwork,
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Works", path: "/works" },
        { name: artwork.title, path: `/works/${artwork.slug}` },
      ]),
    ],
  };
}

export function artworkMetadata(artwork: Artwork): Metadata {
  const facts = [artwork.year, artwork.medium, dimensionLabel(artwork)]
    .filter(Boolean)
    .join(". ");
  const lead = artwork.paragraphs[0] ?? "";
  const description = [
    `${artwork.title} — original painting by ${ARTIST_NAME} (${ARTIST_NAME_ACCENTED}), painter in Novi Sad.`,
    facts ? `${facts}.` : null,
    "Also listed on Artfinder.",
    lead,
  ]
    .filter(Boolean)
    .join(" ");

  const canonical = `/works/${artwork.slug}`;
  const ogImages = artwork.images.map((url, index) => ({
    url,
    alt: index === 0 ? artwork.title : `${artwork.title}, detail ${index}`,
  }));

  return {
    title: artwork.title,
    description,
    alternates: { canonical },
    authors: [{ name: ARTIST_NAME, url: SITE_URL }],
    keywords: [
      artwork.title,
      ARTIST_NAME,
      ARTIST_NAME_ACCENTED,
      "original painting",
      "Artfinder",
      "Novi Sad",
      artwork.medium,
    ],
    openGraph: {
      title: `${artwork.title} — ${ARTIST_NAME}`,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_GB",
      images: ogImages.length > 0 ? ogImages : [PORTRAIT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${artwork.title} — ${ARTIST_NAME}`,
      description,
      images: artwork.images.length > 0 ? [artwork.images[0]] : [ARTIST_PORTRAIT],
    },
  };
}
