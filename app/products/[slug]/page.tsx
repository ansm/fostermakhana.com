import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { notFound } from "next/navigation"
import { getPackSizes, getProduct, products } from "@/data/products"

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })) }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()
  return <main className="product-page"><Link href="/#products" className="back-link"><ArrowLeft size={16} /> Back to range</Link><div className="product-page-grid"><div className="product-page-image"><Image src={product.image} alt={`${product.name} Foster Makhana packaging`} width={900} height={1100} priority /></div><div className="product-page-copy"><p className="eyebrow">FOSTER MAKHANA / {product.category}</p><h1>{product.name}</h1><p className="lede">{product.note}</p><div className="product-page-sizes"><strong>Available pack sizes</strong><div>{getPackSizes(product).map((size) => <span key={size}>{size}</span>)}</div></div><p>Product details shown here are limited to information verified by the available packaging asset. Contact our team for availability, packaging, and wholesale information.</p><a className="button button-dark" href={`mailto:contact@fostermakhana.com?subject=Enquiry%20about%20${encodeURIComponent(product.name)}`}>Enquire about this product <ArrowUpRight size={16} /></a></div></div></main>
}
