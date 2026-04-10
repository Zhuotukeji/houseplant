import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Houseplant Care Guide — our mission, values, and commitment to helping indoor plant enthusiasts.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
        About Houseplant Care Guide
      </h1>

      <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed space-y-6">
        <p>
          Houseplant Care Guide is a free resource created for indoor plant
          enthusiasts of all experience levels. Whether you&apos;re bringing
          home your very first pothos or troubleshooting a fiddle leaf fig
          that&apos;s seen better days, our guides are designed to give you
          clear, actionable advice.
        </p>

        <h2 className="text-xl font-bold text-primary-dark mt-8">
          Our Mission
        </h2>
        <p>
          We believe that caring for houseplants should be straightforward and
          enjoyable. Our mission is to demystify plant care by explaining common
          terminology, breaking down care routines into simple steps, and
          helping you diagnose problems before they become fatal.
        </p>

        <h2 className="text-xl font-bold text-primary-dark mt-8">
          What We Cover
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Plant Care Guides:</strong> Step-by-step instructions for
            popular houseplants, covering light, water, soil, humidity, and
            common mistakes.
          </li>
          <li>
            <strong>Problem Diagnosis:</strong> Symptom-based troubleshooting
            to help you identify what&apos;s wrong and what to do about it.
          </li>
          <li>
            <strong>Care Concepts:</strong> Plain-language explanations of
            terms like &quot;bright indirect light&quot; and &quot;well-draining
            soil&quot; that you&apos;ll encounter in every care guide.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-primary-dark mt-8">
          Our Approach
        </h2>
        <p>
          Every guide on this site is written with beginners in mind. We avoid
          jargon where possible and explain it when we can&apos;t. Our content
          is based on widely accepted horticultural practices and the collective
          experience of the indoor gardening community.
        </p>
        <p>
          We are not a substitute for professional plant care or horticultural
          advice. If you have specialized plants or persistent issues, we
          recommend consulting a local nursery or extension service.
        </p>
      </div>
    </div>
  );
}
