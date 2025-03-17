import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Good Old Games",
  description:
    "Find answers to common questions about Good Old Games and browser gaming",
};

export default function FaqPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>

      <div className="space-y-6">
        {/* General Questions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">About Good Old Games</h2>

          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                What is Good Old Games?
              </h3>
              <p>
                Good Old Games is a platform dedicated to preserving and sharing
                classic browser-based games. We collect, curate, and host games
                that can be played directly in your browser without requiring
                additional plugins, downloads, or installations.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Do I need to create an account to play games?
              </h3>
              <p>
                No! Good Old Games is completely free to use and doesn&apos;t
                require any login or account creation. Simply visit our site,
                choose a game, and start playing immediately.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Are all games free to play?
              </h3>
              <p>
                Yes, all games hosted on Good Old Games are completely free to
                play. We focus on games that are either open source, in the
                public domain, or where we have permission from the creators.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Questions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Technical Questions</h2>

          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Which browsers are supported?
              </h3>
              <p>
                Most games on Good Old Games work on all modern browsers
                including Chrome, Firefox, Safari, and Edge. Some games might
                perform better on certain browsers, but we strive to ensure
                compatibility across all platforms.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Can I play these games on my mobile device?
              </h3>
              <p>
                Many of our games are mobile-friendly, but some older titles
                were designed for keyboard and mouse controls and may not work
                well on touchscreens. We recommend checking each game on your
                device to see if it&apos;s playable.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                What happened to Flash games?
              </h3>
              <p>
                Since Adobe Flash is no longer supported in modern browsers,
                we&apos;ve worked to convert many classic Flash games to HTML5
                or JavaScript to keep them playable. We&apos;re continually
                adding more converted games to our collection.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                How do I save my game progress?
              </h3>
              <p>
                Most games on our platform save progress automatically using
                your browser&apos;s local storage. This means your progress will
                be saved as long as you use the same browser and don&apos;t
                clear your cache. Some games may also have their own save
                systems.
              </p>
            </div>
          </div>
        </div>

        {/* Game Developer Questions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">For Game Developers</h2>

          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                How can I submit my game to Good Old Games?
              </h3>
              <p>
                If you&apos;re a game developer and would like to have your game
                featured on our platform, please contact us via email at{" "}
                <a
                  href="mailto:submissions@good-old-games.com"
                  className="text-blue-600 hover:underline"
                >
                  submissions@good-old-games.com
                </a>
                . Include a link to your game, a brief description, and any
                other relevant information.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                What types of games do you accept?
              </h3>
              <p>
                We primarily focus on browser-based games that can run without
                plugins. We accept games in HTML5, JavaScript, and WebGL. The
                games should be family-friendly and work well across different
                devices and screen sizes when possible.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Is there any revenue sharing for developers?
              </h3>
              <p>
                Currently, we don&apos;t have a revenue sharing program as we
                operate as a free-to-play platform. However, we always provide
                proper attribution and links back to the developer&apos;s
                website or portfolio.
              </p>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>

          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                A game isn&apos;t loading or is running slowly. What can I do?
              </h3>
              <p>
                If you&apos;re experiencing issues with a game, try these steps:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Refresh your browser</li>
                <li>Clear your browser cache</li>
                <li>Close other tabs or applications to free up memory</li>
                <li>Try a different browser</li>
                <li>Check your internet connection</li>
                <li>
                  Disable browser extensions that might interfere with gameplay
                </li>
              </ul>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                How do I report a bug or issue with a game?
              </h3>
              <p>
                If you encounter a bug or have an issue with a specific game,
                please let us know by emailing
                <a
                  href="mailto:support@good-old-games.com"
                  className="text-blue-600 hover:underline ml-1"
                >
                  support@good-old-games.com
                </a>
                . Include the name of the game, the browser you&apos;re using,
                and a description of the problem.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Can I request a specific game to be added?
              </h3>
              <p>
                Absolutely! We love hearing about games our users want to play.
                Send your game requests to
                <a
                  href="mailto:requests@good-old-games.com"
                  className="text-blue-600 hover:underline ml-1"
                >
                  requests@good-old-games.com
                </a>
                , and we&apos;ll do our best to add them to our collection if
                possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
