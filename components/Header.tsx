import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-border bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary-dark">
          🌿 Houseplant Care
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/plants" className="hover:text-primary-light">
            Plant Guides
          </Link>
          <Link href="/problems" className="hover:text-primary-light">
            Plant Problems
          </Link>
          <Link href="/concepts" className="hover:text-primary-light">
            Care Topics
          </Link>
          <Link href="/about" className="hover:text-primary-light">
            About
          </Link>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}

function MobileMenu() {
  return (
    <details className="md:hidden relative">
      <summary className="list-none cursor-pointer p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </summary>
      <nav className="absolute right-0 top-full mt-2 w-48 bg-white border border-border rounded-lg shadow-lg py-2 z-50">
        <Link
          href="/plants"
          className="block px-4 py-2 hover:bg-accent-light text-sm"
        >
          Plant Guides
        </Link>
        <Link
          href="/problems"
          className="block px-4 py-2 hover:bg-accent-light text-sm"
        >
          Plant Problems
        </Link>
        <Link
          href="/concepts"
          className="block px-4 py-2 hover:bg-accent-light text-sm"
        >
          Care Topics
        </Link>
        <Link
          href="/about"
          className="block px-4 py-2 hover:bg-accent-light text-sm"
        >
          About
        </Link>
      </nav>
    </details>
  );
}
