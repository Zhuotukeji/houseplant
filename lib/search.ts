import { plants } from "@/data/plants";
import { problems } from "@/data/problems";
import { concepts } from "@/data/concepts";
import { faqs } from "@/data/faqs";

export interface SearchResult {
  type: "plant" | "problem" | "concept" | "faq";
  slug: string;
  title: string;
  description: string;
  url: string;
  score: number;
}

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, "");
}

function scoreMatch(query: string, text: string): number {
  const normalizedQuery = normalize(query);
  const normalizedText = normalize(text);
  const words = normalizedQuery.split(/\s+/).filter(Boolean);

  let score = 0;

  // Exact match in title gets highest score
  if (normalizedText.includes(normalizedQuery)) {
    score += 100;
  }

  // Word-level matching
  for (const word of words) {
    if (word.length < 2) continue;
    if (normalizedText.includes(word)) {
      score += 10;
      // Boost if at word boundary
      if (
        normalizedText.startsWith(word) ||
        normalizedText.includes(` ${word}`)
      ) {
        score += 5;
      }
    }
  }

  return score;
}

export function search(query: string): SearchResult[] {
  if (!query.trim()) return [];

  const results: SearchResult[] = [];

  // Search plants
  for (const plant of plants) {
    const titleScore = scoreMatch(query, plant.name) * 3;
    const sciScore = scoreMatch(query, plant.scientificName) * 2;
    const descScore = scoreMatch(query, plant.description);
    const totalScore = titleScore + sciScore + descScore;
    if (totalScore > 0) {
      results.push({
        type: "plant",
        slug: plant.slug,
        title: `${plant.name} Care Guide`,
        description: plant.description,
        url: `/plants/${plant.slug}`,
        score: totalScore,
      });
    }
  }

  // Search problems
  for (const problem of problems) {
    const titleScore = scoreMatch(query, problem.name) * 3;
    const descScore = scoreMatch(query, problem.description);
    const causesScore = problem.causes
      .map((c) => scoreMatch(query, c))
      .reduce((a, b) => a + b, 0);
    const totalScore = titleScore + descScore + causesScore;
    if (totalScore > 0) {
      results.push({
        type: "problem",
        slug: problem.slug,
        title: problem.name,
        description: problem.description,
        url: `/problems/${problem.slug}`,
        score: totalScore,
      });
    }
  }

  // Search concepts
  for (const concept of concepts) {
    const titleScore = scoreMatch(query, concept.name) * 3;
    const descScore = scoreMatch(query, concept.description);
    const meaningScore = scoreMatch(query, concept.meaning);
    const totalScore = titleScore + descScore + meaningScore;
    if (totalScore > 0) {
      results.push({
        type: "concept",
        slug: concept.slug,
        title: concept.name,
        description: concept.description,
        url: `/concepts/${concept.slug}`,
        score: totalScore,
      });
    }
  }

  // Search FAQs
  for (const faq of faqs) {
    const qScore = scoreMatch(query, faq.question) * 2;
    const aScore = scoreMatch(query, faq.answer);
    const totalScore = qScore + aScore;
    if (totalScore > 0) {
      results.push({
        type: "faq",
        slug: "",
        title: faq.question,
        description: faq.answer,
        url: "",
        score: totalScore,
      });
    }
  }

  return results.sort((a, b) => b.score - a.score);
}
