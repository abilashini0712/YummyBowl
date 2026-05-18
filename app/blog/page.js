import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const recipes = [
  {
    id: 1,
    title: "Chicken Biryani",
    image: "/biriyani.jpeg",
    description:
      "Delicious spicy chicken biryani made with traditional spices.",
  },

  {
    id: 2,
    title: "Fish Curry",
    image: "/fish.jpeg",
    description:
      "Rich and flavorful fish curry cooked with coconut milk.",
  },

  {
    id: 3,
    title: "Fried Rice",
    image: "/rice.jpeg",
    description:
      "Tasty fried rice mixed with vegetables and chicken.",
  },

  {
    id: 4,
    title: "Curd Rice",
    image: "/curd.jpeg",
    description:
      "Simple and refreshing curd rice perfect for hot days.",
  },
];

export default function BlogPage() {

  return (
    <>

      <Navbar />

      <main className="min-h-screen bg-orange-50 px-4 md:px-8 py-14">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto">

          <h1 className="text-4xl sm:text-5xl font-bold text-orange-500 italic leading-tight">
            Our Latest Recipes 🍲
          </h1>

          <p className="mt-5 text-gray-600 text-base md:text-lg leading-8">
            Discover delicious homemade recipes made with love
            and simple step-by-step cooking instructions.
          </p>

        </div>

        {/* RECIPE GRID */}
        <div className="max-w-7xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {recipes.map((recipe) => (

            <Link
              key={recipe.id}
              href={`/blog/${recipe.id}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">

                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  width={500}
                  height={400}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                />

              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">

                <h2 className="text-2xl font-bold text-gray-800">
                  {recipe.title}
                </h2>

                <p className="mt-4 text-gray-600 leading-7 text-sm md:text-base flex-1">
                  {recipe.description}
                </p>

                {/* BUTTON */}
                <div className="mt-6">

                  <span className="inline-block bg-orange-500 group-hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition duration-300">
                    View Recipe
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </main>

      <Footer />

    </>
  );
}