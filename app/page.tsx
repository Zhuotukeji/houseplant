import Link from "next/link";
import SearchBox from "@/components/SearchBox";
import { plants } from "@/data/plants";
import { problems } from "@/data/problems";
import { concepts } from "@/data/concepts";
import { faqs } from "@/data/faqs";

export default function Home() {
  const featuredPlants = plants.slice(0, 8);
  const featuredProblems = problems.slice(0, 6);
  const featuredConcepts = concepts.slice(0, 6);
  const featuredFaqs = faqs.slice(0, 8);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent-light to-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4 leading-tight">
            Your Houseplant Care Companion
          </h1>
          <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Practical care guides, problem diagnosis, and expert tips to help
            your indoor plants thrive.
          </p>
          <SearchBox size="large" />
        </div>
      </section>

      {/* Browse by Plant */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark">
              Browse by Plant
            </h2>
            <Link
              href="/plants"
              className="text-sm font-medium text-primary hover:text-primary-light"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {featuredPlants.map((plant) => (
              <Link
                key={plant.slug}
                href={`/plants/${plant.slug}`}
                className="group block p-4 bg-white border border-border rounded-xl hover:border-primary hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center mb-3 group-hover:bg-accent transition-colors">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="font-semibold text-sm text-text group-hover:text-primary">
                  {plant.name}
                </h3>
                <p className="text-xs text-text-secondary mt-1">
                  {plant.difficulty} care
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Problem */}
      <section className="py-12 md:py-16 bg-bg-alt">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark">
              Browse by Problem
            </h2>
            <Link
              href="/problems"
              className="text-sm font-medium text-primary hover:text-primary-light"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {featuredProblems.map((problem) => (
              <Link
                key={problem.slug}
                href={`/problems/${problem.slug}`}
                className="group block p-5 bg-white border border-border rounded-xl hover:border-primary hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-text group-hover:text-primary mb-2">
                  {problem.name}
                </h3>
                <p className="text-sm text-text-secondary line-clamp-2">
                  {problem.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Topic */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark">
              Browse by Topic
            </h2>
            <Link
              href="/concepts"
              className="text-sm font-medium text-primary hover:text-primary-light"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {featuredConcepts.map((concept) => (
              <Link
                key={concept.slug}
                href={`/concepts/${concept.slug}`}
                className="group block p-5 bg-accent-light/50 border border-accent rounded-xl hover:bg-accent-light hover:border-primary transition-all"
              >
                <h3 className="font-semibold text-text group-hover:text-primary mb-1">
                  {concept.name}
                </h3>
                <p className="text-xs text-text-secondary line-clamp-2">
                  {concept.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-12 md:py-16 bg-bg-alt">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-8">
            Featured Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPlants.slice(0, 6).map((plant) => (
              <Link
                key={plant.slug}
                href={`/plants/${plant.slug}`}
                className="group flex gap-4 p-5 bg-white border border-border rounded-xl hover:border-primary hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 bg-accent-light rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                  <span className="text-3xl">🌿</span>
                </div>
                <div>
                  <h3 className="font-semibold text-text group-hover:text-primary">
                    How to Care for {plant.name}
                  </h3>
                  <p className="text-sm text-text-secondary mt-1 line-clamp-2">
                    {plant.description}
                  </p>
                  <span className="inline-block mt-2 text-xs font-medium text-primary">
                    Read guide &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {featuredFaqs.map((faq, index) => (
              <details
                key={index}
                className="group border border-border rounded-lg overflow-hidden"
              >
                <summary className="cursor-pointer px-5 py-4 font-medium text-text hover:bg-bg-alt transition-colors list-none flex items-center justify-between">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-text-secondary group-open:rotate-180 transition-transform shrink-0 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-text-secondary leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / About Block */}
      <section className="py-12 md:py-16 bg-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            About Houseplant Care Guide
          </h2>
          <p className="text-accent-light leading-relaxed mb-6 max-w-2xl mx-auto">
            We are dedicated to helping indoor plant enthusiasts care for their
            green companions. Our guides are written with beginners in mind,
            offering practical and straightforward advice for common houseplants
            and their most frequent issues.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/about" className="text-accent hover:text-white">
              About Us
            </Link>
            <span className="text-primary-light">|</span>
            <Link href="/contact" className="text-accent hover:text-white">
              Contact
            </Link>
            <span className="text-primary-light">|</span>
            <Link href="/privacy" className="text-accent hover:text-white">
              Privacy Policy
            </Link>
            <span className="text-primary-light">|</span>
            <Link href="/disclaimer" className="text-accent hover:text-white">
              Disclaimer
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom Search */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl font-semibold text-text mb-4">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <SearchBox size="small" />
        </div>
      </section>
    </>
  );
}
