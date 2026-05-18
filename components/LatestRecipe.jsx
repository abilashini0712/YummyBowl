"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LatestRecipe() {

  const recipes = [
    {
      id: 1,
      title: "Chicken Biryani",
      image: "/biriyani.jpeg",
      description:
        "Delicious spicy chicken biryani made with basmati rice and traditional spices.",
    },

    {
      id: 2,
      title: "Fish Curry",
      image: "/fish.jpeg",
      description:
        "Rich and flavorful fish curry cooked with coconut milk and spices.",
    },

    {
      id: 3,
      title: "Fried Rice",
      image: "/rice.jpeg",
      description:
        "Tasty fried rice mixed with vegetables, egg, and delicious sauces.",
    },
  ];

  const [currentRecipe, setCurrentRecipe] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentRecipe((prev) =>
        prev === recipes.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="bg-orange-50 py-16 px-4 md:px-8">

      {/* HEADING */}
      <div className="text-center mb-12">

        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 italic">
          Latest Recipes 🍲
        </h1>

        <p className="mt-4 text-gray-600 text-base md:text-lg">
          Fresh and delicious homemade recipes made with love
        </p>

      </div>

      {/* CARD */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">

        <div className="flex flex-col md:flex-row items-center">

          {/* IMAGE */}
          <div className="w-full md:w-1/2">

            <Image
              src={recipes[currentRecipe].image}
              alt={recipes[currentRecipe].title}
              width={600}
              height={600}
              className="w-full h-[300px] md:h-[450px] object-cover"
            />

          </div>

          {/* CONTENT */}
          <div className="w-full md:w-1/2 p-6 md:p-10">

            <span className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold">
              Featured Recipe
            </span>

            <h2 className="mt-6 text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              {recipes[currentRecipe].title}
            </h2>

            <p className="mt-5 text-gray-600 text-base md:text-lg leading-8">
              {recipes[currentRecipe].description}
            </p>

            {/* BUTTON */}
            <Link href={`/blog/${recipes[currentRecipe].id}`}>

              <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-full transition duration-300 shadow-md">
                View Recipe
              </button>

            </Link>

            {/* DOT INDICATORS */}
            <div className="flex gap-3 mt-8">

              {recipes.map((_, index) => (
                <div
                  key={index}
                  className={`h-3 w-3 rounded-full ${
                    currentRecipe === index
                      ? "bg-orange-500"
                      : "bg-orange-200"
                  }`}
                ></div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}