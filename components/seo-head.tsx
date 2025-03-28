"use client"

import { useEffect } from "react"
import { sectionMetadata } from "@/app/metadata"

interface SeoHeadProps {
  activeSection: string
}

export default function SeoHead({ activeSection }: SeoHeadProps) {
  useEffect(() => {
    // Get the metadata for the active section
    const metadata = sectionMetadata[activeSection as keyof typeof sectionMetadata] || sectionMetadata.home

    // Update the document title
    document.title = `${metadata.title} | Foster Makhana`

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute("content", metadata.description)
    } else {
      const meta = document.createElement("meta")
      meta.name = "description"
      meta.content = metadata.description
      document.head.appendChild(meta)
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute("content", metadata.keywords.join(", "))
    } else {
      const meta = document.createElement("meta")
      meta.name = "keywords"
      meta.content = metadata.keywords.join(", ")
      document.head.appendChild(meta)
    }

    // Update canonical URL
    const canonicalURL = `https://fostermakhana.com/${metadata.slug ? metadata.slug : ""}`
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute("href", canonicalURL)
    } else {
      canonicalLink = document.createElement("link")
      canonicalLink.rel = "canonical"
      canonicalLink.href = canonicalURL
      document.head.appendChild(canonicalLink)
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute("content", `${metadata.title} | Foster Makhana`)
    }

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute("content", metadata.description)
    }

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) {
      ogUrl.setAttribute("content", canonicalURL)
    }

    // Ensure favicon is set
    let faviconLink = document.querySelector('link[rel="icon"]')
    if (!faviconLink) {
      faviconLink = document.createElement("link")
      faviconLink.rel = "icon"
      faviconLink.href = "/images/logo.ico"
      document.head.appendChild(faviconLink)
    }

    // Ensure apple touch icon is set
    let appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]')
    if (!appleTouchIcon) {
      appleTouchIcon = document.createElement("link")
      appleTouchIcon.rel = "apple-touch-icon"
      appleTouchIcon.href = "/images/logo.ico"
      document.head.appendChild(appleTouchIcon)
    }
  }, [activeSection])

  return null
}

