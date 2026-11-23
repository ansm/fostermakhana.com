"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, Headphones, Mail, MapPin, Menu, Phone, X } from "lucide-react"
import { useEffect, useState } from "react"
import { getPackSizes, products } from "@/data/products"

const heroGroups = [
  { label: "All Products", image: "/images/products/all-stacked.png", alt: "Foster Makhana product range" },
  { label: "Flavoured Packets", image: "/images/products/packets-stacked.png", alt: "Foster Makhana flavoured packets" },
  { label: "Container Range", image: "/images/products/jar-stacked.png", alt: "Foster Makhana jar products" },
  { label: "Makhana Cookies", image: "/images/products/cookies-stacked.png", alt: "Foster Makhana cookies" },
  { label: "Bulk Pack", image: "/images/products/bulk-stacked.png", alt: "Foster Makhana bulk pack" },
]

const whyBenefits = [
  ["authentic-sourcing.png", "Authentic", "Bihar Sourcing"],
  ["premium-quality.png", "Premium", "Quality"],
  ["wide-product-range.png", "Wide", "Product Range"],
  ["innovative-flavours.png", "Innovative", "Flavours"],
  ["bulk-export.png", "Bulk & Export", "Friendly"],
  ["custom-label.png", "Custom Label", "Solutions"],
]

export default function ImmersiveHome() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [heroIndex, setHeroIndex] = useState(0)
  const [selectedProduct, setSelectedProduct] = useState(products[4])
  const heroGroup = heroGroups[heroIndex]

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".reference-hero")
    if (!hero) return
    let paused = false
    const pause = () => { paused = true }
    const resume = () => { paused = false }
    hero.addEventListener("mouseenter", pause)
    hero.addEventListener("mouseleave", resume)
    hero.addEventListener("focusin", pause)
    hero.addEventListener("focusout", resume)
    const timer = window.setInterval(() => {
      if (!paused) setHeroIndex((index) => (index + 1) % heroGroups.length)
    }, 1500)
    return () => {
      window.clearInterval(timer)
      hero.removeEventListener("mouseenter", pause)
      hero.removeEventListener("mouseleave", resume)
      hero.removeEventListener("focusin", pause)
      hero.removeEventListener("focusout", resume)
    }
  }, [])

  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false) }
  const moveHero = (direction: number) => setHeroIndex((index) => (index + direction + heroGroups.length) % heroGroups.length)
  return (
    <main className="reference-site">
      <header className="reference-header">
        <button className="reference-logo" onClick={() => scrollTo("home")} aria-label="Foster Makhana home"><Image src="/images/fm-logo-2.png" alt="Foster Makhana" width={170} height={170} priority /></button>
        <nav className="reference-nav" aria-label="Main navigation">{[["home", "Home"], ["products", "Products"], ["wholesale", "Wholesale & Export"], ["contact", "Contact"]].map(([id, label]) => <button key={id} onClick={() => scrollTo(id)}>{label}{id === "products" && <small>⌄</small>}</button>)}</nav>
        <button className="reference-enquire" onClick={() => scrollTo("contact")}>Enquire Now <ArrowRight size={15} /></button>
        <button className="reference-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        {menuOpen && <nav className="reference-mobile-nav">{[["home", "Home"], ["products", "Products"], ["wholesale", "Wholesale & Export"], ["contact", "Contact"]].map(([id, label]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}</nav>}
      </header>

      <section id="home" className="reference-hero">
        <div className="reference-hero-copy"><p className="reference-kicker">AUTHENTIC BIHAR MAKHANA</p><h1><span>Premium Quality</span><br />Fox Nuts for<br />Improved Health</h1><p>Experience the authentic taste and exceptional health benefits of our premium Makhana (Fox Nuts), carefully sourced and processed to preserve their natural goodness.</p><div className="reference-actions"><button className="reference-primary" onClick={() => scrollTo("products")}>Explore Products <ArrowRight size={15} /></button><button className="reference-secondary" onClick={() => scrollTo("wholesale")}>Wholesale & Export <ArrowRight size={15} /></button></div></div>
        <div className="reference-hero-stage"><div className="hero-stage-surface" /><div className="reference-stacked-product"><Image src={heroGroup.image} alt={heroGroup.alt} width={900} height={650} priority /></div><button className="hero-arrow hero-arrow-left" onClick={() => moveHero(-1)} aria-label="Previous product group"><ChevronLeft /></button><button className="hero-arrow hero-arrow-right" onClick={() => moveHero(1)} aria-label="Next product group"><ChevronRight /></button><div className="hero-dots">{heroGroups.map((group, index) => <button key={group.label} className={index === heroIndex ? "active" : ""} onClick={() => setHeroIndex(index)} aria-label={group.label} />)}</div></div>
      </section>

      <div className="range-strip" aria-label="Why Foster Makhana"><Image className="range-why-image" src="/images/assets/why-makhana2.png" alt="Why Foster Makhana" width={2172} height={724} /></div>

      <section id="story" className="reference-story"><div className="reference-section-heading"><div><p className="reference-kicker">THE MAKHANA STORY</p><h2>From Bihar&apos;s <em>Wetlands</em><br />to Your Table</h2></div><div className="story-copy"><p className="story-lede">Our makhana comes from the nutrient-rich wetlands of Bihar, where it has been cultivated for generations.</p><p>We bring you the same time-tested goodness, now in a range of modern, delicious and convenient products.</p><button className="reference-primary" onClick={() => scrollTo("why-makhana")}>Our Story <ArrowRight size={15} /></button></div></div><div className="story-feature-image"><Image src="/images/assets/our-story2.png" alt="The Makhana Story" width={2172} height={724} /></div></section>

      <section id="products" className="reference-products"><div className="section-title-row"><div><h2>Our <em>Product Range</em></h2><p>A delicious and versatile range of makhana products for every taste and occasion.</p></div><button className="text-arrow" onClick={() => scrollTo("products")}>View All Products <ArrowRight size={15} /></button></div><div className="products-layout"><div className="product-cards">{products.map((product) => <button className={selectedProduct.slug === product.slug ? "reference-product-card selected" : "reference-product-card"} key={product.slug} onClick={() => setSelectedProduct(product)}><Image src={product.image} alt={`${product.name} product`} width={160} height={190} /><strong>{product.name}</strong><small>{product.category}</small></button>)}</div><div className="product-detail-panel"><Image src={selectedProduct.image} alt={`${selectedProduct.name} product`} width={240} height={300} /><div><p className="reference-kicker">FEATURED PRODUCT</p><h3>{selectedProduct.name}</h3><p>{selectedProduct.note}</p><span className="detail-checks">{selectedProduct.slug === "cookies" ? "✓ Baked Product" : selectedProduct.slug === "5kg" || selectedProduct.slug === "10kg" ? "✓ Bulk Format" : "✓ Roasted Makhana"}</span><div className="pack-sizes"><small>Available sizes</small>{getPackSizes(selectedProduct).map((size) => <span key={size}>{size}</span>)}</div><Link href={`/products/${selectedProduct.slug}`} className="reference-primary">View Details <ArrowRight size={15} /></Link></div></div></div></section>

      <section id="why-makhana" className="reference-why"><div className="why-title"><span /><h2>Why <em>Foster Makhana?</em></h2><span /></div><div className="why-benefits"><Image className="why-foster-row-art" src="/images/assets/why-foster.png" alt="Why Foster Makhana" width={190} height={65} />{whyBenefits.map(([image, lineOne, lineTwo]) => <div className="why-benefit" key={image}><Image src={`/images/assets/${image}`} alt="" width={110} height={90} /><strong>{lineOne}<br />{lineTwo}</strong></div>)}</div><div id="wholesale" className="reference-custom"><div className="custom-label-visual"><Image src="/images/products/custom-label1.png" alt="Custom label product packaging" width={560} height={250} /></div><div><p className="reference-kicker">FOR DOMESTIC & EXPORT MARKETS</p><h2><em>Custom Label Products</em><br />for Domestic & Export Markets</h2><p>Looking to launch your own brand or expand your product range? We offer custom label manufacturing for retailers, distributors, and international buyers.</p></div><div className="custom-label-export"><Image src="/images/assets/world-map.png" alt="Worldwide export destinations" width={300} height={150} /><ul><li>Your Brand, Our Quality</li><li>Flexible Pack Sizes</li><li>Multiple Flavours & Formats</li><li>Domestic & Export Support</li></ul><button className="reference-primary" onClick={() => scrollTo("contact")}>Get Custom Label Quote <ArrowRight size={15} /></button><Image className="custom-label-ship" src="/images/assets/ship.png" alt="Cargo ship" width={260} height={110} /></div></div></section>

      <section id="contact" className="reference-contact"><Image className="contact-leaf-top" src="/images/assets/leaft-top-left.png" alt="" width={170} height={170} /><Image className="contact-leaf-bottom" src="/images/assets/leaf-bottom-right.png" alt="" width={190} height={190} /><div className="contact-left"><div className="contact-copy"><p className="reference-kicker">GET IN TOUCH</p><h2>Enquire <em>Now</em></h2><p>For product enquiries, bulk orders, distribution, export opportunities or custom label requirements, contact our team directly.</p><button className="reference-primary" onClick={() => window.location.href = "mailto:contact@fostermakhana.com"}>Send an Enquiry <ArrowRight size={15} /></button></div><div className="contact-bowl"><Image src="/images/assets/makhana-leaf-bown.png" alt="Makhana served in a bowl with leaves" width={600} height={450} /></div></div><address className="contact-card"><div><Phone size={23} /><span><a href="tel:+919725544004">+91 97255 44004</a>{" | "}<a href="tel:+919824144700">+91 98241 44700</a></span></div><div><Headphones size={23} /><span><strong>Customer Support</strong><a href="tel:+918460653119">+91 84606 53119</a></span></div><div><Mail size={23} /><span><strong>Email Us</strong><a href="mailto:contact@fostermakhana.com">contact@fostermakhana.com</a></span></div><div><MapPin size={23} /><span><strong>Our Address</strong><span>At- Singhwara South, PS Singhwara,<br />Darbhanga, Bihar - 847106, India.</span></span></div></address></section>

      <footer className="reference-footer"><div className="footer-main"><div><Image src="/images/fm-logo-2.png" alt="Foster Makhana" width={150} height={150} /><p>Premium makhana and value-added products from Bihar, India, crafted for a healthier and tastier lifestyle.</p></div><div><h4>Quick Links</h4><button onClick={() => scrollTo("home")}>Home</button><button onClick={() => scrollTo("story")}>Our Story</button><button onClick={() => scrollTo("products")}>Products</button></div><div><h4>Explore</h4><button onClick={() => scrollTo("why-makhana")}>Why Makhana</button><button onClick={() => scrollTo("wholesale")}>Wholesale & Export</button><button onClick={() => scrollTo("contact")}>Contact</button></div><div><h4>Licenses</h4><div className="footer-fssai"><Image src="/images/fssai.png" alt="FSSAI" width={50} height={34} /><span>Lic. No. 10425310000067</span></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Foster Makhana. All rights reserved.</span><span>Privacy Policy &nbsp; | &nbsp; Terms & Conditions</span></div></footer>
    </main>
  )
}
