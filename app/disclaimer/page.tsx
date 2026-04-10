import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Read the Houseplant Care Guide disclaimer. Understand the limitations and scope of our plant care advice.",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
        Disclaimer
      </h1>

      <div className="text-text-secondary leading-relaxed space-y-6 text-sm">
        <p>
          <strong>Last updated:</strong> April 2026
        </p>

        <h2 className="text-lg font-bold text-primary-dark mt-8">
          General Information
        </h2>
        <p>
          The information provided on Houseplant Care Guide is for general
          informational and educational purposes only. While we strive to keep
          our content accurate and up to date, we make no representations or
          warranties of any kind, express or implied, about the completeness,
          accuracy, reliability, or suitability of the information.
        </p>

        <h2 className="text-lg font-bold text-primary-dark mt-8">
          Not Professional Advice
        </h2>
        <p>
          Our plant care guides and problem diagnosis content are not a
          substitute for professional horticultural advice. Plant care needs
          can vary significantly depending on your specific environment,
          climate, water quality, and other local factors. If you have
          concerns about a specific plant or situation, we recommend
          consulting a qualified local nursery, extension service, or
          horticultural professional.
        </p>

        <h2 className="text-lg font-bold text-primary-dark mt-8">
          Plant Safety
        </h2>
        <p>
          Some houseplants can be toxic to pets, children, or adults if
          ingested. We may mention toxicity where relevant, but we do not
          provide comprehensive toxicity information for every plant. Always
          research the safety of a plant before bringing it into a home with
          pets or small children, and consult a veterinarian or poison control
          center if ingestion occurs.
        </p>

        <h2 className="text-lg font-bold text-primary-dark mt-8">
          External Links
        </h2>
        <p>
          Our website may contain links to external websites. We are not
          responsible for the content, accuracy, or practices of any
          third-party websites. The inclusion of any link does not imply
          endorsement.
        </p>

        <h2 className="text-lg font-bold text-primary-dark mt-8">
          Limitation of Liability
        </h2>
        <p>
          In no event shall Houseplant Care Guide be liable for any loss or
          damage, including without limitation, indirect or consequential loss
          or damage arising from the use of information provided on this
          website. Your use of any information on this site is entirely at
          your own risk.
        </p>

        <h2 className="text-lg font-bold text-primary-dark mt-8">
          Changes
        </h2>
        <p>
          We reserve the right to modify this disclaimer at any time. Changes
          will be posted on this page with an updated revision date.
        </p>
      </div>
    </div>
  );
}
