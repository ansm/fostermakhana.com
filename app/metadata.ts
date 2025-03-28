import type { Metadata } from "next"

// Base metadata that will be used across the site
export const baseMetadata: Metadata = {
  metadataBase: new URL("https://fostermakhana.com"),
  title: {
    template: "%s | Foster Makhana",
    default: "Foster Makhana - Premium Quality Fox Nuts from Bihar, India",
  },
  description:
    "Premium quality Makhana (Fox Nuts) sourced directly from Bihar, India. Organic, nutritious, and perfect for health-conscious consumers. Bulk orders available.",
  keywords: [
    "makhana",
    "fox nuts",
    "lotus seeds",
    "premium makhana",
    "organic makhana",
    "healthy snacks",
    "Bihar makhana",
    "bulk makhana",
    "wholesale makhana",
    "Indian superfoods",
    "gluten-free snacks",
    "vegan snacks",
    "protein-rich snacks",
    "Foster Makhana",
    "quality fox nuts",
    "makhana supplier",
    "makhana exporter",
  ],
  authors: [{ name: "Foster Makhana" }],
  creator: "Foster Makhana",
  publisher: "Foster Makhana",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Food & Beverage",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://fostermakhana.com",
    siteName: "Foster Makhana",
    title: "Foster Makhana - Premium Quality Fox Nuts from Bihar, India",
    description:
      "Premium quality Makhana (Fox Nuts) sourced directly from Bihar, India. Organic, nutritious, and perfect for health-conscious consumers. Bulk orders available.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Foster Makhana - Premium Fox Nuts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foster Makhana - Premium Quality Fox Nuts",
    description:
      "Premium quality Makhana (Fox Nuts) sourced directly from Bihar, India. Organic, nutritious, and perfect for health-conscious consumers.",
    images: ["/images/twitter-image.jpg"],
    creator: "@fostermakhana",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://fostermakhana.com",
    languages: {
      "en-US": "https://fostermakhana.com/en-US",
      "hi-IN": "https://fostermakhana.com/hi-IN",
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  icons: {
    icon: "/images/logo.ico",
    shortcut: "/images/logo.ico",
    apple: "/images/logo.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/images/logo.ico",
    },
  },
}

// Section-specific metadata for better SEO
export const sectionMetadata = {
  home: {
    title: "Premium Quality Fox Nuts for Your Health",
    description:
      "Experience the authentic taste and exceptional health benefits of our premium Makhana (Fox Nuts), carefully sourced and processed to preserve their natural goodness.",
    keywords: [
      "premium makhana",
      "quality fox nuts",
      "healthy fox nuts",
      "organic makhana",
      "authentic makhana",
      "Bihar fox nuts",
      "nutritious snacks",
      "Foster Makhana products",
    ],
    slug: "",
  },
  contact: {
    title: "Contact Us for Bulk Orders & Inquiries",
    description:
      "Get in touch with Foster Makhana for wholesale inquiries, bulk orders, or any questions about our premium quality fox nuts. We offer competitive pricing and excellent customer service.",
    keywords: [
      "makhana bulk orders",
      "wholesale fox nuts",
      "makhana supplier contact",
      "buy makhana in bulk",
      "fox nuts wholesale",
      "makhana business inquiry",
      "Foster Makhana contact",
      "premium makhana supplier",
    ],
    slug: "contact",
  },
  story: {
    title: "Our Story - From Bihar's Wetlands to Your Home",
    description:
      "Discover the journey of Foster Makhana from the wetlands of Bihar to your table. Learn about our commitment to quality, sustainability, and supporting local farmers.",
    keywords: [
      "makhana origin",
      "Bihar fox nuts",
      "makhana harvesting",
      "sustainable makhana",
      "traditional fox nuts",
      "makhana farming",
      "Foster Makhana story",
      "Indian superfoods history",
      "ethical makhana sourcing",
    ],
    slug: "our-story",
  },
}

