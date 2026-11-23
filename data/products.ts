export type Product = {
  slug: string
  name: string
  category: string
  image: string
  heroImage: string
  note: string
  accent: string
}

export const products: Product[] = [
  { slug: "cheese", name: "Roasted Makhana — Cheese", category: "Flavoured packet", image: "/images/products/cheese1.png", heroImage: "/images/products/cheese1.png", note: "A savoury, easy-to-love flavour in Foster's product range.", accent: "#c8a35f" },
  { slug: "cream-onion", name: "Roasted Makhana — Cream & Onion", category: "Flavoured packet", image: "/images/products/cream-onion1.png", heroImage: "/images/products/cream-onion1.png", note: "A familiar creamy savoury profile, presented in Foster's signature pack.", accent: "#d0c6a2" },
  { slug: "peri-peri", name: "Roasted Makhana — Peri Peri", category: "Flavoured packet", image: "/images/products/peri-peri1.png", heroImage: "/images/products/peri-peri1.png", note: "A bold, spirited flavour for a more adventurous crunch.", accent: "#c96b3d" },
  { slug: "cheese-jar", name: "Roasted Makhana — Cheese Jar", category: "Container range", image: "/images/products/cheese.png", heroImage: "/images/products/cheese.png", note: "A roasted cheese makhana jar format in the Foster range.", accent: "#c8a35f" },
  { slug: "cream-onion-jar", name: "Roasted Makhana — Cream & Onion Jar", category: "Container range", image: "/images/products/cream-onion.png", heroImage: "/images/products/cream-onion.png", note: "A roasted cream and onion makhana jar format in the Foster range.", accent: "#d0c6a2" },
  { slug: "peri-peri-jar", name: "Roasted Makhana — Peri Peri Jar", category: "Container range", image: "/images/products/peri-peri.png", heroImage: "/images/products/peri-peri.png", note: "A roasted peri peri makhana jar format in the Foster range.", accent: "#c96b3d" },
  { slug: "salt-pepper", name: "Roasted Makhana — Salt & Pepper", category: "Container range", image: "/images/products/salt-pepper.png", heroImage: "/images/products/salt-pepper.png", note: "A classic seasoning pairing for an everyday snack.", accent: "#a2a694" },
  { slug: "pudina", name: "Roasted Makhana — Pudina", category: "Container range", image: "/images/products/pudina.png", heroImage: "/images/products/pudina.png", note: "A mint-led roasted makhana product in the Foster range.", accent: "#8ba653" },
  { slug: "cookies", name: "Makhana Cookies", category: "Makhana-based products", image: "/images/products/cookies.png", heroImage: "/images/products/cookies.png", note: "A baked product in the current Foster Makhana catalogue.", accent: "#b78b65" },
  { slug: "5kg", name: "5 kg Pack", category: "Bulk format", image: "/images/products/5kg.png", heroImage: "/images/products/5kg.png", note: "The large-format pack shown in the current product assets.", accent: "#8b9a70" },
  { slug: "10kg", name: "10 kg Pack", category: "Bulk format", image: "/images/products/10kg.png", heroImage: "/images/products/10kg.png", note: "The extra-large format pack for bulk requirements.", accent: "#8b9a70" },
]

export const getProduct = (slug: string) => products.find((product) => product.slug === slug)

export const getPackSizes = (product: Product) => {
  if (product.slug === "cookies") return ["200 g"]
  if (product.slug === "5kg") return ["5 kg"]
  if (product.slug === "10kg") return ["10 kg"]
  return ["100 g", "200 g"]
}
