"use client";

import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<{
    type: string;
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus({
        type: "success",
        message: "Thank you for subscribing!",
      });
      setEmail("");
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to subscribe. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-10 bg-indigo-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter to be notified when new games are added to
          our collection.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-2"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-2 rounded-l-lg sm:rounded-l-lg sm:rounded-r-none rounded-r-lg focus:outline-none text-gray-800"
            aria-label="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
          />
          <button
            type="submit"
            className={`bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-r-lg sm:rounded-r-lg sm:rounded-l-none rounded-l-lg transition-colors ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
            aria-label="Subscribe"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {status && (
          <div
            className={`mt-4 p-2 rounded ${
              status.type === "success" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {status.message}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;
