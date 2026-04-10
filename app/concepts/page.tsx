import Link from "next/link";
import { Metadata } from "next";
import { concepts } from "@/data/concepts";
import SearchBox from "@/components/SearchBox";

export const metadata: Metadata = {
  title: "Care Topics",
  description:
    "Understand key houseplant care concepts like bright indirect light, overwatering, well-draining soil, humidity, and more.",
};

export default function ConceptsIndex() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">
        Care Topics
      </h1>
      <p className="text-text-secondary mb-8">
        Plant care terminology explained in plain language. Learn what common
        care instructions actually mean and how to apply them.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {concepts.map((concept) => (
          <Link
            key={concept.slug}
            href={`/concepts/${concept.slug}`}
            className="group block p-5 bg-accent-light/50 border border-accent rounded-xl hover:bg-accent-light hover:border-primary transition-all"
          >
            <h2 className="font-semibold text-text group-hover:text-primary mb-2">
              {concept.name}
            </h2>
            <p className="text-sm text-text-secondary line-clamp-3">
              {concept.description}
            </p>
            <span className="inline-block mt-3 text-xs font-medium text-primary">
              Learn more &rarr;
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <SearchBox size="small" />
      </div>
    </div>
  );
}
