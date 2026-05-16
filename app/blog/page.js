

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const recipes = [
  {
    id: 1,
    title: "Chicken Biryani",
    image: "/biriyani.jpeg",
    description: "Delicious spicy chicken biryani made with traditional spices.",
  },
  {
    id: 2,
    title: "Fish Curry",
    image: "/fish.jpeg",
    description: "Rich and flavorful fish curry cooked with coconut milk.",
  },
  {
    id: 3,
    title: "Fried Rice",
    image: "/rice.jpeg",
    description: "Tasty fried rice mixed with vegetables and chicken.",
  },
  {
    id: 4,
    title: "Curd Rice",
    image: "/curd.jpeg",
    description: "Simple and refreshing curd rice perfect for hot days.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#fff7ed] px-8 py-16">

       
        <div className="text-center">
          <h1 className="text-5xl font-bold text-orange-600 italic">
            Our Latest Recipes 🍲
          </h1>
          <p className="mt-5 text-gray-600 text-lg">
            Discover delicious homemade recipes made with love.
          </p>
        </div>

       
        <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {recipes.map((recipe) => (

         
            <Link
              key={recipe.id}
              href={`/blog/${recipe.id}`}
              className="
                group bg-white rounded-3xl overflow-hidden shadow-lg
                hover:scale-105 hover:shadow-2xl
                transition duration-300 flex flex-col cursor-pointer
              "
            >
            
              <div className="overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

          
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-bold text-gray-800">
                  {recipe.title}
                </h2>
                <p className="mt-4 text-gray-600 leading-7 flex-1">
                  {recipe.description}
                </p>

               
                <div className="mt-6">
                  <span className="inline-block bg-orange-500 group-hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200">
                    View Recipe
                  </span>
                </div>
              </div>
            </Link>

          ))}
        </div>

      </div>
      <Footer />
    </>
  );
}