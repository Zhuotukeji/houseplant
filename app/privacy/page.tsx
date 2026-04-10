import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Houseplant Care Guide privacy policy. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
        Privacy Policy
      </h1>

      <div className="text-text-secondary leading-relaxed space-y-6 text-sm">
        <p>
          <strong>Last updated:</strong> April 2026
        </p>

        <p>
          Houseplant Care Guide (&quot;we,&quot; &quot;our,&quot; or
          &quot;us&quot;) is committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, and safeguard information when
          you visit our website.
        </p>

        <h2 className="text-lg font-bold text-primary-dark mt-8">
          Information We Collect
        </h2>
        <p>
          We do not require you to create an account or provide personal
          information to use our website. However, we may collect the following
          types of information automatically:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Usage data:</strong> Pages visited, time spent on pages,
            referring URLs, and search queries entered on our site.
          </li>
          <li>
            <strong>Device information:</strong> Browser type, operating system,
            screen resolution, and language preference.
          </li>
          <li>
            <strong>Cookies:</strong> We use cookies and similar technologies
            for analytics purposes.
          </li>
        </ul>

        <h2 className="text-lg font-bold text-primary-dark mt-8">
          How We Use Information
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To improve our content and user experience.</li>
          <li>To understand how visitors interact with our website.</li>
          <li>To maintain and secure the website.</li>
        </ul>

        <h2 className="text-lg font-bold text-primary-dark mt-8">
          Third-Party Services
        </h2>
        <p>
          We may use third-party analytics services (such as Google Analytics)
          to help us understand website usage. These services may collect
          information about your use of our website through cookies and similar
          technologies. We do not sell your personal information to third
          parties.
        </p>

        <h2 className="text-lg font-bold text-primary-dark mt-8">
          Advertising
        </h2>
        <p>
          Our website may display search-related advertisements on search
          results pages. These advertisements are clearly distinguished from
          organic search results. Third-party ad services may use cookies to
          serve relevant ads based on your browsing activity.
        </p>

        <h2 className="text-lg font-bold text-primary-dark mt-8">
          Your Choices
        </h2>
        <p>
          You can control cookies through your browser settings. Most browsers
          allow you to block or delete cookies. Please note that disabling
          cookies may affect the functionality of certain features on our
          website.
        </p>

        <h2 className="text-lg font-bold text-primary-dark mt-8">
          Children&apos;s Privacy
        </h2>
        <p>
          Our website is not directed at children under 13. We do not knowingly
          collect personal information from children under 13.
        </p>

        <h2 className="text-lg font-bold text-primary-dark mt-8">
          Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. We will post
          any changes on this page with an updated revision date.
        </p>

        <h2 className="text-lg font-bold text-primary-dark mt-8">
          Contact Us
        </h2>
        <p>
          If you have questions about this Privacy Policy, please contact us
          at{" "}
          <a
            href="mailto:hello@houseplantcare.guide"
            className="text-primary hover:text-primary-light"
          >
            hello@houseplantcare.guide
          </a>
          .
        </p>
      </div>
    </div>
  );
}
