import Link from "next/link";
import { Metadata } from "next";
import { plants } from "@/data/plants";
import SearchBox from "@/components/SearchBox";

export const metadata: Metadata = {
  title: "Plant Care Guides",
  description:
    "Browse our complete collection of houseplant care guides. Learn how to care for popular indoor plants including Pothos, Snake Plant, Monstera, and more.",
};

export default function PlantsIndex() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">
        Plant Care Guides
      </h1>
      <p className="text-text-secondary mb-8">
        Detailed care instructions for popular houseplants. Each guide covers
        light, water, soil, humidity, and common mistakes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {plants.map((plant) => (
          <Link
            key={plant.slug}
            href={`/plants/${plant.slug}`}
            className="group block p-5 bg-white border border-border rounded-xl hover:border-primary hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                <span className="text-2xl">🌱</span>
              </div>
              <div>
                <h2 className="font-semibold text-text group-hover:text-primary">
                  {plant.name}
                </h2>
                <p className="text-xs text-text-secondary italic">
                  {plant.scientificName}
                </p>
                <p className="text-sm text-text-secondary mt-2 line-clamp-2">
                  {plant.description}
                </p>
                <span className="inline-block mt-2 px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {plant.difficulty}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <SearchBox size="small" />
      </div>
    </div>
  );
}
