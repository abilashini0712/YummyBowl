"use client";

import Image from "next/image";
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

    <div className="bg-orange-50 py-20 px-6">

      
      <div className="text-center mb-14">

        <h1 className="text-5xl font-bold text-orange-500 italic">
          Latest Recipes 🍲
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Fresh and delicious recipes made with love
        </p>

      </div>

      
      <div className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-xl overflow-hidden">

        <div className="flex flex-col md:flex-row items-center">

          
          <div className="w-full md:w-1/2">

            <Image
              src={recipes[currentRecipe].image}
              alt={recipes[currentRecipe].title}
              width={500}
              height={500}
              className="w-full h-[400px] object-cover"
            />

          </div>

          
          <div className="w-full md:w-1/2 p-10">

            <span className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold">
              Featured Recipe
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-800">
              {recipes[currentRecipe].title}
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              {recipes[currentRecipe].description}
            </p>

            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-full transition duration-300">
              View Recipe
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}