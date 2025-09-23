import Link from 'next/link'

export default function Header(){
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Heartfelt Living" className="h-12 w-12 object-contain" />
          <div>
            <div className="font-bold text-lg text-[#7A1F3A]">Heartfelt Living Renovations</div>
            <div className="text-sm text-slate-600">You’ll love what we can do for you</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/schedule">Schedule</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQ</Link>
        </nav>
      </div>
    </header>
  )
}
