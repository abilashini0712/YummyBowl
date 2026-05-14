"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LatestRecipe() {

  const recipes = [
    {
      id: 1,
      title: "Chicken Biryani",
      image: "/images/biriani.jpeg",
      description:
        "Delicious spicy chicken biryani made with basmati rice and traditional spices.",
    },

    {
      id: 2,
      title: "Fish Curry",
      image: "/images/fish.jpeg",
      description:
        "Rich and flavorful fish curry cooked with coconut milk and spices.",
    },

    {
      id: 3,
      title: "Fried Rice",
      image: "/images/rice.jpeg",
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
    <div className="flex items-center justify-center min-h-screen bg-orange-50 p-6">

      <div className="flex flex-col md:flex-row items-center gap-8">

        
        <div className="shadow-[0_0_20px_orange] rounded-xl overflow-hidden">
          <Image
            src={recipes[currentRecipe].image}
            alt={recipes[currentRecipe].title}
            width={300}
            height={450}
            className="object-cover"
          />
        </div>

      
        <div className="border border-orange-500 p-8 max-w-xl bg-zinc-900 shadow-[0_0_15px_orange]">

          <h1 className="text-4xl font-bold text-white mb-6">
            {recipes[currentRecipe].title}
          </h1>

          <p className="text-gray-300 text-lg leading-8">
            {recipes[currentRecipe].description}
          </p>

          <div className="mt-8 border border-orange-500 p-4">
            <p className="text-white font-semibold">
              Latest Recipe on Yummy Bowl 🍲
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}