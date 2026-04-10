"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import SearchBox from "@/components/SearchBox";
import { search, SearchResult } from "@/lib/search";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const results = query ? search(query) : [];

  const plantResults = results.filter((r) => r.type === "plant");
  const problemResults = results.filter((r) => r.type === "problem");
  const conceptResults = results.filter((r) => r.type === "concept");
  const faqResults = results.filter((r) => r.type === "faq");

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-primary-dark mb-6">
        Search Results
      </h1>

      <div className="mb-8">
        <SearchBox size="small" />
      </div>

      {query && (
        <p className="text-text-secondary mb-6">
          {results.length > 0
            ? `Found ${results.length} result${results.length !== 1 ? "s" : ""} for "${query}"`
            : `No results found for "${query}"`}
        </p>
      )}

      {!query && (
        <p className="text-text-secondary mb-6">
          Enter a search term above to find plant care guides, problem
          solutions, and care topics.
        </p>
      )}

      {/* Exact / Top Matches */}
      {results.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-text mb-4">Top Matches</h2>
          <div className="space-y-3">
            {results.slice(0, 5).map((result, i) => (
              <ResultCard key={`top-${i}`} result={result} />
            ))}
          </div>
        </section>
      )}

      {/* Related Guides */}
      {plantResults.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-text mb-4">
            Related Plant Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {plantResults.map((result, i) => (
              <ResultCard key={`plant-${i}`} result={result} compact />
            ))}
          </div>
        </section>
      )}

      {/* Related Problems */}
      {problemResults.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-text mb-4">
            Related Problems
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {problemResults.map((result, i) => (
              <ResultCard key={`problem-${i}`} result={result} compact />
            ))}
          </div>
        </section>
      )}

      {/* Related Concepts */}
      {conceptResults.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-text mb-4">
            Related Topics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {conceptResults.map((result, i) => (
              <ResultCard key={`concept-${i}`} result={result} compact />
            ))}
          </div>
        </section>
      )}

      {/* FAQ Matches */}
      {faqResults.length > 0 && (
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-text mb-4">
            Related Questions
          </h2>
          <div className="space-y-2">
            {faqResults.slice(0, 5).map((result, i) => (
              <details
                key={`faq-${i}`}
                className="border border-border rounded-lg overflow-hidden"
              >
                <summary className="cursor-pointer px-4 py-3 font-medium text-sm text-text hover:bg-bg-alt transition-colors list-none">
                  {result.title}
                </summary>
                <div className="px-4 pb-3 text-sm text-text-secondary">
                  {result.description}
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* No results */}
      {query && results.length === 0 && (
        <div className="text-center py-12">
          <p className="text-text-secondary mb-4">
            We couldn&apos;t find anything matching your search.
          </p>
          <p className="text-sm text-text-secondary">
            Try searching for a plant name (e.g., &quot;pothos&quot;), a problem
            (e.g., &quot;yellow leaves&quot;), or a care topic (e.g.,
            &quot;watering&quot;).
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Link
              href="/plants"
              className="px-4 py-2 bg-accent-light border border-accent rounded-full text-sm font-medium text-text hover:bg-accent transition-colors"
            >
              Browse Plants
            </Link>
            <Link
              href="/problems"
              className="px-4 py-2 bg-accent-light border border-accent rounded-full text-sm font-medium text-text hover:bg-accent transition-colors"
            >
              Browse Problems
            </Link>
            <Link
              href="/concepts"
              className="px-4 py-2 bg-accent-light border border-accent rounded-full text-sm font-medium text-text hover:bg-accent transition-colors"
            >
              Browse Topics
            </Link>
          </div>
        </div>
      )}

      {/* Continue Searching */}
      {results.length > 0 && (
        <section className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-text-secondary mb-3">
            Didn&apos;t find what you need? Try a different search.
          </p>
          <SearchBox size="small" />
        </section>
      )}
    </div>
  );
}

function ResultCard({
  result,
  compact = false,
}: {
  result: SearchResult;
  compact?: boolean;
}) {
  const typeLabels: Record<string, string> = {
    plant: "Plant Guide",
    problem: "Problem",
    concept: "Topic",
    faq: "FAQ",
  };

  const typeColors: Record<string, string> = {
    plant: "bg-green-100 text-green-800",
    problem: "bg-amber-100 text-amber-800",
    concept: "bg-blue-100 text-blue-800",
    faq: "bg-purple-100 text-purple-800",
  };

  if (result.type === "faq") {
    return (
      <div className="p-4 border border-border rounded-lg">
        <span
          className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full mb-2 ${typeColors[result.type]}`}
        >
          {typeLabels[result.type]}
        </span>
        <h3 className="font-medium text-text text-sm">{result.title}</h3>
        {!compact && (
          <p className="text-xs text-text-secondary mt-1 line-clamp-2">
            {result.description}
          </p>
        )}
      </div>
    );
  }

  return (
    <Link
      href={result.url}
      className="block p-4 border border-border rounded-lg hover:border-primary hover:shadow-sm transition-all"
    >
      <span
        className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full mb-2 ${typeColors[result.type]}`}
      >
        {typeLabels[result.type]}
      </span>
      <h3 className="font-medium text-text hover:text-primary text-sm">
        {result.title}
      </h3>
      {!compact && (
        <p className="text-xs text-text-secondary mt-1 line-clamp-2">
          {result.description}
        </p>
      )}
    </Link>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-4xl mx-auto px-4 py-10 text-center text-text-secondary">
          Loading search...
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
