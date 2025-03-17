import Link from "next/link";
import { Category } from "@/lib/types";

interface CategoriesSectionProps {
  categories: Category[];
}

// Define background colors directly in the component to prevent Tailwind from purging them
const bgColorClasses = {
  puzzle: "bg-purple-600",
  arcade: "bg-blue-600",
  action: "bg-red-600",
  adventure: "bg-emerald-600",
  strategy: "bg-amber-500",
  idle: "bg-pink-500",
  racing: "bg-indigo-600",
  simulation: "bg-teal-500",
  default: "bg-gray-700",
};

const CategoriesSection = ({ categories }: CategoriesSectionProps) => {
  // Function to get background color based on category slug
  const getBgColor = (slug: string) => {
    return (
      bgColorClasses[slug as keyof typeof bgColorClasses] ||
      bgColorClasses.default
    );
  };

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Game Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 max-w-5xl mx-auto">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className={`${getBgColor(
                category.slug
              )} rounded-lg p-3 text-center text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center min-h-[80px] relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 bg-black bg-opacity-20 px-2 py-0.5 text-xs rounded-bl-md">
                {category.gameCount}
              </div>

              <div className="flex items-center">
                <i className={`${category.icon} text-xl mr-2`}></i>
                <h3 className="font-semibold text-sm md:text-base">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
