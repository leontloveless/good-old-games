import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Good Old Games",
  description:
    "Learn about our mission to preserve and share classic browser games for everyone to enjoy.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8">
        About Good Old Games
      </h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          Good Old Games is dedicated to preserving and sharing classic browser
          games that shaped the early internet gaming experience. We believe
          these games are an important part of digital culture and should remain
          accessible to everyone.
        </p>
        <p className="mb-4">
          Our platform hosts a carefully curated collection of browser games
          from various genres, ensuring they can be played directly in your
          browser without requiring additional plugins or downloads.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            A collection of over 40 classic and modern browser games across
            multiple genres
          </li>
          <li>
            Games that run directly in your browser with no downloads required
          </li>
          <li>Mobile-friendly gameplay for many titles</li>
          <li>Ad-free gaming experience</li>
          <li>Regular additions to our game library</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Game Preservation</h2>
        <p className="mb-4">
          Many classic browser games are at risk of being lost as technology
          evolves and platforms like Flash become obsolete. Our team works to
          adapt these games to modern web standards, ensuring they remain
          playable for future generations.
        </p>
        <p>
          We respect the intellectual property of game developers and only host
          games that are freely available or where we have obtained proper
          permissions.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          Have a suggestion for a game we should add? Found a bug? Want to
          collaborate with us? We&apos;d love to hear from you!
        </p>
        <p>
          Email us at:{" "}
          <a
            href="mailto:contact@good-old-games.com"
            className="text-blue-600 hover:underline"
          >
            contact@good-old-games.com
          </a>
        </p>
      </div>
    </div>
  );
}
