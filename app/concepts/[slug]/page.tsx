import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { concepts } from "@/data/concepts";
import SearchBox from "@/components/SearchBox";

export function generateStaticParams() {
  return concepts.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const concept = concepts.find((c) => c.slug === params.slug);
  if (!concept) return {};
  return {
    title: concept.name,
    description: `${concept.description} Learn what ${concept.name.toLowerCase()} means and how to apply it to your houseplant care routine.`,
  };
}

export default function ConceptPage({ params }: { params: { slug: string } }) {
  const concept = concepts.find((c) => c.slug === params.slug);
  if (!concept) notFound();

  const relatedConceptData = concepts.filter(
    (c) => concept.relatedConcepts.includes(c.slug) && c.slug !== concept.slug
  );

  return (
    <article className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-text-secondary mb-6">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/concepts" className="hover:text-primary">
          Care Topics
        </Link>
        <span className="mx-2">/</span>
        <span className="text-text">{concept.name}</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
        {concept.name}
      </h1>

      <p className="text-lg text-text-secondary leading-relaxed mb-8">
        {concept.description}
      </p>

      {/* Meaning */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-primary-dark mb-3">
          What Does It Mean?
        </h2>
        <p className="text-text-secondary leading-relaxed">{concept.meaning}</p>
      </section>

      {/* Why It Matters */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-primary-dark mb-3">
          Why It Matters
        </h2>
        <div className="bg-accent-light/50 border border-accent rounded-xl p-6">
          <p className="text-text-secondary leading-relaxed">
            {concept.whyItMatters}
          </p>
        </div>
      </section>

      {/* How to Apply */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-primary-dark mb-3">
          How to Apply It
        </h2>
        <p className="text-text-secondary leading-relaxed">
          {concept.howToApply}
        </p>
      </section>

      {/* Examples */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-primary-dark mb-4">Examples</h2>
        <ul className="space-y-3">
          {concept.examples.map((example, i) => (
            <li key={i} className="flex gap-3 text-text-secondary leading-relaxed">
              <span className="text-primary shrink-0">•</span>
              {example}
            </li>
          ))}
        </ul>
      </section>

      {/* Related Topics */}
      {relatedConceptData.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary-dark mb-4">
            Related Topics
          </h2>
          <div className="flex flex-wrap gap-2">
            {relatedConceptData.map((c) => (
              <Link
                key={c.slug}
                href={`/concepts/${c.slug}`}
                className="px-4 py-2 bg-accent-light border border-accent rounded-full text-sm font-medium text-text hover:bg-accent hover:text-primary-dark transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Search */}
      <div className="mt-12 pt-8 border-t border-border text-center">
        <p className="text-sm text-text-secondary mb-3">
          Want to learn more about plant care?
        </p>
        <SearchBox size="small" />
      </div>
    </article>
  );
}
