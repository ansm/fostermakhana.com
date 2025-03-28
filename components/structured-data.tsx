import Script from "next/script"

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // Organization data
      {
        "@type": "Organization",
        "@id": "https://fostermakhana.com/#organization",
        name: "Foster Makhana",
        url: "https://fostermakhana.com",
        logo: {
          "@type": "ImageObject",
          url: "https://fostermakhana.com/fm-logo-2.png",
          width: 180,
          height: 60,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+919725544004",
          contactType: "customer service",
          availableLanguage: ["English", "Hindi"],
        },
        sameAs: [
          "https://facebook.com/fostermakhana",
          "https://twitter.com/fostermakhana",
          "https://instagram.com/fostermakhana",
          "https://linkedin.com/company/fostermakhana",
        ],
      },

      // Website data
      {
        "@type": "WebSite",
        "@id": "https://fostermakhana.com/#website",
        url: "https://fostermakhana.com",
        name: "Foster Makhana",
        publisher: {
          "@id": "https://fostermakhana.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://fostermakhana.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },

      // WebPage data for homepage
      {
        "@type": "WebPage",
        "@id": "https://fostermakhana.com/#webpage",
        url: "https://fostermakhana.com",
        name: "Premium Quality Fox Nuts for Your Health | Foster Makhana",
        isPartOf: {
          "@id": "https://fostermakhana.com/#website",
        },
        about: {
          "@id": "https://fostermakhana.com/#organization",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://fostermakhana.com/images/makhana1.jpeg",
        },
        datePublished: "2023-01-01T00:00:00+00:00",
        dateModified: "2023-03-15T00:00:00+00:00",
        description:
          "Experience the authentic taste and exceptional health benefits of our premium Makhana (Fox Nuts), carefully sourced and processed to preserve their natural goodness.",
      },

      // Product data
      {
        "@type": "Product",
        name: "Premium Fox Nuts (Makhana)",
        description:
          "High-quality fox nuts sourced directly from Bihar, India. Rich in protein, low in fat, and packed with antioxidants.",
        brand: {
          "@type": "Brand",
          name: "Foster Makhana",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          lowPrice: "200",
          highPrice: "1000",
          offerCount: "5",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "120",
        },
      },

      // SiteNavigationElement for sitelinks
      {
        "@type": "SiteNavigationElement",
        "@id": "https://fostermakhana.com/#site-navigation",
        name: ["Home", "Our Story", "Contact"],
        url: [
          "https://fostermakhana.com/",
          "https://fostermakhana.com/#our-story",
          "https://fostermakhana.com/#contact",
        ],
      },

      // BreadcrumbList for navigation structure
      {
        "@type": "BreadcrumbList",
        "@id": "https://fostermakhana.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://fostermakhana.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Our Story",
            item: "https://fostermakhana.com/#our-story",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Contact",
            item: "https://fostermakhana.com/#contact",
          },
        ],
      },
    ],
  }

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  )
}

