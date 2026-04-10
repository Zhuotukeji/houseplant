import Link from "next/link";
import { Metadata } from "next";
import { problems } from "@/data/problems";
import SearchBox from "@/components/SearchBox";

export const metadata: Metadata = {
  title: "Plant Problems",
  description:
    "Diagnose and fix common houseplant problems. Find solutions for yellow leaves, brown tips, drooping, root rot, and more.",
};

export default function ProblemsIndex() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">
        Plant Problems
      </h1>
      <p className="text-text-secondary mb-8">
        Something wrong with your plant? Browse common symptoms to find the
        likely causes and solutions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {problems.map((problem) => (
          <Link
            key={problem.slug}
            href={`/problems/${problem.slug}`}
            className="group block p-5 bg-white border border-border rounded-xl hover:border-primary hover:shadow-md transition-all"
          >
            <h2 className="font-semibold text-text group-hover:text-primary mb-2">
              {problem.name}
            </h2>
            <p className="text-sm text-text-secondary line-clamp-3">
              {problem.description}
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
