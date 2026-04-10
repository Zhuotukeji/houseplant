export interface PlantData {
  slug: string;
  name: string;
  scientificName: string;
  description: string;
  difficulty: "Easy" | "Moderate" | "Advanced";
  light: string;
  water: string;
  soil: string;
  humidity: string;
  temperature: string;
  commonMistakes: string[];
  relatedProblems: string[];
}

export interface ProblemData {
  slug: string;
  name: string;
  description: string;
  causes: string[];
  howToCheck: string[];
  whatToTry: string[];
  relatedPlants: string[];
  relatedConcepts: string[];
}

export interface ConceptData {
  slug: string;
  name: string;
  description: string;
  meaning: string;
  whyItMatters: string;
  howToApply: string;
  examples: string[];
  relatedConcepts: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
