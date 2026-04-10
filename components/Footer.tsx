import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Houseplant Care</h3>
            <p className="text-sm text-accent-light leading-relaxed">
              Your trusted resource for indoor plant care guides, problem
              diagnosis, and gardening tips.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Browse</h4>
            <ul className="space-y-2 text-sm text-accent-light">
              <li>
                <Link href="/plants" className="hover:text-white">
                  Plant Guides
                </Link>
              </li>
              <li>
                <Link href="/problems" className="hover:text-white">
                  Plant Problems
                </Link>
              </li>
              <li>
                <Link href="/concepts" className="hover:text-white">
                  Care Topics
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Popular Guides</h4>
            <ul className="space-y-2 text-sm text-accent-light">
              <li>
                <Link href="/plants/pothos" className="hover:text-white">
                  Pothos Care
                </Link>
              </li>
              <li>
                <Link href="/plants/snake-plant" className="hover:text-white">
                  Snake Plant Care
                </Link>
              </li>
              <li>
                <Link href="/plants/monstera" className="hover:text-white">
                  Monstera Care
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Information</h4>
            <ul className="space-y-2 text-sm text-accent-light">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-light mt-8 pt-8 text-center text-sm text-accent-light">
          <p>
            &copy; {new Date().getFullYear()} Houseplant Care Guide. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
