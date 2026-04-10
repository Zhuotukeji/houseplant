import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Houseplant Care Guide team. Send us your questions, feedback, or suggestions.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
        Contact Us
      </h1>

      <div className="text-text-secondary leading-relaxed space-y-6">
        <p>
          We&apos;d love to hear from you! Whether you have a question about
          plant care, a suggestion for a new guide, or feedback about our
          website, please don&apos;t hesitate to reach out.
        </p>

        <div className="bg-accent-light/50 border border-accent rounded-xl p-6">
          <h2 className="text-lg font-semibold text-primary-dark mb-3">
            Get in Touch
          </h2>
          <p className="mb-4">
            You can reach us by email at:
          </p>
          <a
            href="mailto:hello@houseplantcare.guide"
            className="text-primary font-medium hover:text-primary-light"
          >
            hello@houseplantcare.guide
          </a>
        </div>

        <h2 className="text-xl font-bold text-primary-dark mt-8">
          What to Include
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Plant questions:</strong> Include the plant name, symptoms
            you&apos;re seeing, and your care routine (light, watering
            frequency, etc.).
          </li>
          <li>
            <strong>Content suggestions:</strong> Let us know which plant or
            topic you&apos;d like us to cover next.
          </li>
          <li>
            <strong>Website feedback:</strong> Any issues with the site or
            ideas for improvement are always welcome.
          </li>
        </ul>

        <p className="text-sm text-text-secondary/70 mt-8">
          We aim to respond within 2-3 business days. For urgent plant
          emergencies, we recommend visiting your local nursery or garden
          center for immediate help.
        </p>
      </div>
    </div>
  );
}
