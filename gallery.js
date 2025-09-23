import Image from 'next/image'
import SEO from '../components/SEO'

const GALLERY = [
  { id: 1, title: 'Kitchen Refresh', before: '/gallery/kitchen-before.jpg', after: '/gallery/kitchen-after.jpg' },
  { id: 2, title: 'Bath Upgrade', before: '/gallery/bath-before.jpg', after: '/gallery/bath-after.jpg' }
]

export default function Gallery(){
  return (
    <>
      <SEO title="Gallery" description="Before and after photos showcasing our craftsmanship." />
      <h1 className="text-3xl font-bold mb-6">Before & After</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {GALLERY.map(g => (
          <div key={g.id} className="border rounded p-2">
            <h3 className="font-semibold mb-2">{g.title}</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative h-48">
                <Image src={g.before} alt={`${g.title} before`} fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="relative h-48">
                <Image src={g.after} alt={`${g.title} after`} fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
