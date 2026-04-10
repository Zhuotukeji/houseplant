import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { plants } from "@/data/plants";
import { problems } from "@/data/problems";
import SearchBox from "@/components/SearchBox";

export function generateStaticParams() {
  return plants.map((plant) => ({ slug: plant.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const plant = plants.find((p) => p.slug === slug);
  if (!plant) return {};
  return {
    title: `${plant.name} Care Guide`,
    description: `Learn how to care for ${plant.name} (${plant.scientificName}). Complete guide covering light, water, soil, humidity, and common problems.`,
  };
}

export default async function PlantPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const plant = plants.find((p) => p.slug === slug);
  if (!plant) notFound();

  const relatedProblemData = problems.filter((p) =>
    plant.relatedProblems.includes(p.slug)
  );

  return (
    <article className="max-w-4xl mx-auto px-4 py-10">
      <nav className="text-sm text-text-secondary mb-6">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/plants" className="hover:text-primary">
          Plant Guides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-text">{plant.name}</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">
        {plant.name} Care Guide
      </h1>
      <p className="text-text-secondary italic mb-6">{plant.scientificName}</p>

      {/* Quick Summary */}
      <div className="bg-accent-light/50 border border-accent rounded-xl p-6 mb-8">
        <h2 className="font-semibold text-lg mb-3">Quick Summary</h2>
        <p className="text-text-secondary leading-relaxed">
          {plant.description}
        </p>
        <div className="mt-4 inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
          Difficulty: {plant.difficulty}
        </div>
      </div>

      {/* Care Sections */}
      <div className="space-y-8">
        <CareSection title="Light Requirements" icon="☀️" content={plant.light} />
        <CareSection title="Watering" icon="💧" content={plant.water} />
        <CareSection title="Soil" icon="🪴" content={plant.soil} />
        <CareSection title="Humidity & Temperature" icon="🌡️" content={`${plant.humidity} ${plant.temperature}`} />

        {/* Common Mistakes */}
        <section>
          <h2 className="text-xl font-bold text-primary-dark mb-4 flex items-center gap-2">
            <span>⚠️</span> Common Mistakes
          </h2>
          <ul className="space-y-2">
            {plant.commonMistakes.map((mistake, i) => (
              <li
                key={i}
                className="flex gap-3 text-text-secondary leading-relaxed"
              >
                <span className="text-primary mt-0.5 shrink-0">•</span>
                {mistake}
              </li>
            ))}
          </ul>
        </section>

        {/* Related Problems */}
        {relatedProblemData.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-primary-dark mb-4">
              Related Problems
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedProblemData.map((problem) => (
                <Link
                  key={problem.slug}
                  href={`/problems/${problem.slug}`}
                  className="block p-4 border border-border rounded-lg hover:border-primary hover:shadow-sm transition-all"
                >
                  <h3 className="font-medium text-text hover:text-primary">
                    {problem.name}
                  </h3>
                  <p className="text-xs text-text-secondary mt-1 line-clamp-2">
                    {problem.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Search Box */}
      <div className="mt-12 pt-8 border-t border-border text-center">
        <p className="text-sm text-text-secondary mb-3">
          Have a question about {plant.name}?
        </p>
        <SearchBox size="small" />
      </div>
    </article>
  );
}

function CareSection({
  title,
  icon,
  content,
}: {
  title: string;
  icon: string;
  content: string;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold text-primary-dark mb-3 flex items-center gap-2">
        <span>{icon}</span> {title}
      </h2>
      <p className="text-text-secondary leading-relaxed">{content}</p>
    </section>
  );
}
