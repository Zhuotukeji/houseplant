import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { problems } from "@/data/problems";
import { plants } from "@/data/plants";
import { concepts } from "@/data/concepts";
import SearchBox from "@/components/SearchBox";

export function generateStaticParams() {
  return problems.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const problem = problems.find((p) => p.slug === params.slug);
  if (!problem) return {};
  return {
    title: `${problem.name} - Causes & Solutions`,
    description: `${problem.description} Learn what causes ${problem.name.toLowerCase()} and how to fix it.`,
  };
}

export default function ProblemPage({ params }: { params: { slug: string } }) {
  const problem = problems.find((p) => p.slug === params.slug);
  if (!problem) notFound();

  const relatedPlantData = plants.filter((p) =>
    problem.relatedPlants.includes(p.slug)
  );
  const relatedConceptData = concepts.filter((c) =>
    problem.relatedConcepts.includes(c.slug)
  );

  return (
    <article className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-text-secondary mb-6">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/problems" className="hover:text-primary">
          Plant Problems
        </Link>
        <span className="mx-2">/</span>
        <span className="text-text">{problem.name}</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
        {problem.name}
      </h1>

      {/* What this symptom may mean */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
        <h2 className="font-semibold text-lg mb-2">
          What This Symptom May Mean
        </h2>
        <p className="text-text-secondary leading-relaxed">
          {problem.description}
        </p>
      </div>

      {/* Common Causes */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-primary-dark mb-4">
          Common Causes
        </h2>
        <ul className="space-y-3">
          {problem.causes.map((cause, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold shrink-0">
                {i + 1}
              </span>
              <span className="text-text-secondary leading-relaxed">
                {cause}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* How to Check */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-primary-dark mb-4">
          How to Check
        </h2>
        <ul className="space-y-3">
          {problem.howToCheck.map((check, i) => (
            <li key={i} className="flex gap-3 text-text-secondary leading-relaxed">
              <span className="text-primary shrink-0">✓</span>
              {check}
            </li>
          ))}
        </ul>
      </section>

      {/* What to Try First */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-primary-dark mb-4">
          What to Try First
        </h2>
        <div className="bg-accent-light/50 border border-accent rounded-xl p-6">
          <ul className="space-y-3">
            {problem.whatToTry.map((action, i) => (
              <li key={i} className="flex gap-3 text-text-secondary leading-relaxed">
                <span className="text-primary shrink-0">→</span>
                {action}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Plants */}
      {relatedPlantData.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary-dark mb-4">
            Plants Commonly Affected
          </h2>
          <div className="flex flex-wrap gap-2">
            {relatedPlantData.map((plant) => (
              <Link
                key={plant.slug}
                href={`/plants/${plant.slug}`}
                className="px-4 py-2 bg-accent-light border border-accent rounded-full text-sm font-medium text-text hover:bg-accent hover:text-primary-dark transition-colors"
              >
                {plant.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Related Concepts */}
      {relatedConceptData.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-primary-dark mb-4">
            Related Topics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedConceptData.map((concept) => (
              <Link
                key={concept.slug}
                href={`/concepts/${concept.slug}`}
                className="block p-4 border border-border rounded-lg hover:border-primary hover:shadow-sm transition-all"
              >
                <h3 className="font-medium text-text hover:text-primary">
                  {concept.name}
                </h3>
                <p className="text-xs text-text-secondary mt-1 line-clamp-2">
                  {concept.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Search */}
      <div className="mt-12 pt-8 border-t border-border text-center">
        <p className="text-sm text-text-secondary mb-3">
          Need more help with {problem.name.toLowerCase()}?
        </p>
        <SearchBox size="small" />
      </div>
    </article>
  );
}
