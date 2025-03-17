import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Good Old Games",
  description:
    "Our commitment to protecting your privacy while using Good Old Games",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <p className="text-sm text-gray-500 mb-6">
          Last Updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            Welcome to Good Old Games. We respect your privacy and are committed
            to protecting your personal data. This privacy policy will inform
            you about how we look after your personal data when you visit our
            website and tell you about your privacy rights and how the law
            protects you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">The Data We Collect</h2>
          <p className="mb-4">
            We collect minimal personal data to provide and improve our
            services:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              Usage Data: We collect anonymous usage data such as pages visited,
              time spent on the site, and browser information.
            </li>
            <li>
              Cookies: We use cookies to enhance your browsing experience and
              analyze website traffic.
            </li>
            <li>
              Game Progress: Some games may store your progress locally in your
              browser.
            </li>
          </ul>
          <p>
            We do not collect or store personally identifiable information
            unless explicitly provided by you (e.g., if you contact us via
            email).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Data</h2>
          <p className="mb-4">
            We use the collected data for various purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>To provide and maintain our service</li>
            <li>To improve our website and user experience</li>
            <li>To analyze usage patterns and optimize game performance</li>
            <li>To detect, prevent, and address technical issues</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookies Policy</h2>
          <p className="mb-4">
            Cookies are small files stored on your device. We use them to
            improve your browsing experience and analyze website traffic. You
            can instruct your browser to refuse all cookies or to indicate when
            a cookie is being sent.
          </p>
          <p>
            However, if you do not accept cookies, you may not be able to use
            some portions of our service, such as saving game progress.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
          <p className="mb-4">
            We may employ third-party companies and individuals to facilitate
            our service, provide the service on our behalf, or assist us in
            analyzing how our service is used.
          </p>
          <p>
            These third parties have access to anonymous usage data only for the
            purpose of performing specific tasks on our behalf. They are
            obligated not to disclose or use it for any other purpose.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Children&apos;s Privacy
          </h2>
          <p className="mb-4">
            Our service is intended for users of all ages. We do not knowingly
            collect personally identifiable information from children under 13.
            If you are a parent or guardian and you are aware that your child
            has provided us with personal data, please contact us so we can take
            necessary actions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Your Data Protection Rights
          </h2>
          <p className="mb-4">
            If you are a resident of the European Economic Area (EEA), you have
            certain data protection rights:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>The right to access, update, or delete your information</li>
            <li>The right of rectification</li>
            <li>The right to object</li>
            <li>The right of restriction</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Changes to This Privacy Policy
          </h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the &quot;Last Updated&quot; date.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <p>
            By email:{" "}
            <a
              href="mailto:privacy@good-old-games.com"
              className="text-blue-600 hover:underline"
            >
              privacy@good-old-games.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
