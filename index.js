import Image from 'next/image'
import SEO from '../components/SEO'

export default function Home(){
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'Heartfelt Living Renovations LLC',
    url: process.env.SITE_URL || 'https://heartfelthomerenovations.com',
    telephone: '803-748-5811',
    areaServed: 'Triangle & surrounding areas'
  }

  const reviewsSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Heartfelt Living Renovations LLC',
    url: process.env.SITE_URL || 'https://heartfelthomerenovations.com',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '57' },
    review: [
      { '@type': 'Review', author: { '@type': 'Person', name: 'A. Johnson' }, datePublished: '2024-07-15', name: 'Kitchen remodel—excellent experience', reviewBody: 'Impeccable craftsmanship and clear communication throughout our kitchen remodel.', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' } },
      { '@type': 'Review', author: { '@type': 'Person', name: 'M. Rivera' }, datePublished: '2024-06-02', name: 'Bathroom renovation—highly recommend', reviewBody: 'On time, tidy, and a fantastic finish.', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' } }
    ]
  }

  return (
    <>
      <SEO title="Home" description="Expert home remodeling, renovations, and repairs in the Triangle area." />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }} />

      <section className="grid md:grid-cols-2 gap-8 items-center py-12">
        <div>
          <h1 className="text-4xl font-bold" style={{color: '#7A1F3A'}}>Remodels & Repairs — Delivered with Heart</h1>
          <p className="mt-4 text-lg text-slate-600">Kitchens, bathrooms, flooring, carpentry, painting, decks, and more — with transparent pricing and careful craftsmanship.</p>
          <div className="mt-6 space-x-3">
            <a href="/schedule" className="bg-[#7A1F3A] text-white px-5 py-3 rounded-lg">Schedule an Estimate</a>
            <a href="/services" className="border px-5 py-3 rounded-lg">View Services</a>
          </div>
        </div>
        <div className="relative w-full h-96">
          <Image src="/hero-kitchen.jpg" alt="Renovated kitchen" fill style={{ objectFit: 'cover' }} priority />
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-3">Recent Reviews</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <blockquote className="p-4 border rounded italic">“Impeccable craftsmanship and clear communication.” <span className="not-italic font-semibold">— A. Johnson</span></blockquote>
          <blockquote className="p-4 border rounded italic">“On time, tidy, and a fantastic finish.” <span className="not-italic font-semibold">— M. Rivera</span></blockquote>
        </div>
      </section>
    </>
  )
}
