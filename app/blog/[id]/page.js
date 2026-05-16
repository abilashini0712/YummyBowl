

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipeById, recipes } from "@/data/recipes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return recipes.map((r) => ({ id: String(r.id) }));
}


export async function generateMetadata({ params }) {
  const { id } = await params;                          // ← await params
  const recipe = getRecipeById(Number(id));
  return {
    title: recipe ? `${recipe.title} | Yummy Bowl` : "Recipe Not Found",
    description: recipe?.description,
  };
}

function PrepIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
      className="w-9 h-9 text-orange-500">
      <path d="M12 2C8 2 5 5 5 9c0 3.5 2.5 6.5 6 7.4V20h2v-3.6c3.5-.9 6-3.9 6-7.4 0-4-3-7-7-7z" />
      <path d="M12 6v3l2 2" strokeLinecap="round" />
    </svg>
  );
}

function CookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
      className="w-9 h-9 text-orange-500">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ServingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
      className="w-9 h-9 text-orange-500">
      <path d="M3 11h18M12 3v4M8 3v2M16 3v2" strokeLinecap="round" />
      <path d="M5 11c0 5 2 9 7 9s7-4 7-9" />
    </svg>
  );
}


export default async function RecipePage({ params }) {
  const { id } = await params;                          
  const recipe = getRecipeById(Number(id));
  if (!recipe) notFound();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-orange-50 px-6 py-14">

  <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">

  
    <div className="relative w-full h-[350px] md:h-[450px]">

      <Image
        src={recipe.image}
        alt={recipe.title}
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/30" />

      
      <div className="absolute bottom-10 left-8">

        <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
          {recipe.tag}
        </span>

        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white">
          {recipe.title}
        </h1>

      </div>

    </div>

    
    <div className="p-8 md:p-12">

   
      <Link
        href="/blog"
        className="text-orange-500 font-medium hover:text-orange-600"
      >
        ← Back to Recipes
      </Link>

      
      <p className="mt-6 text-gray-600 text-lg leading-8">
        {recipe.description}
      </p>

   
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">

        <div className="bg-orange-100 rounded-2xl p-5 text-center">
          <p className="text-sm text-gray-500 font-medium">
            Prep Time
          </p>

          <h3 className="mt-2 text-2xl font-bold text-orange-500">
            {recipe.prepTime}
          </h3>
        </div>

        <div className="bg-orange-100 rounded-2xl p-5 text-center">
          <p className="text-sm text-gray-500 font-medium">
            Cook Time
          </p>

          <h3 className="mt-2 text-2xl font-bold text-orange-500">
            {recipe.cookTime}
          </h3>
        </div>

        <div className="bg-orange-100 rounded-2xl p-5 text-center">
          <p className="text-sm text-gray-500 font-medium">
            Servings
          </p>

          <h3 className="mt-2 text-2xl font-bold text-orange-500">
            {recipe.servings}
          </h3>
        </div>

      </div>

      
      <div className="grid md:grid-cols-2 gap-12 mt-14">

       
        <div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ingredients 
          </h2>

          <ul className="space-y-4">

            {recipe.ingredients.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-gray-600"
              >
                <span className="w-2.5 h-2.5 bg-orange-500 rounded-full"></span>
                {item}
              </li>
            ))}

          </ul>

         
          <div className="mt-10 bg-orange-50 border border-orange-200 rounded-2xl p-5">

            <h3 className="text-xl font-bold text-orange-500 mb-3">
              Chef Notes 
            </h3>

            <p className="text-gray-600 leading-7">
              {recipe.notes}
            </p>

          </div>

        </div>

       
        <div>

          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Preparation 
          </h2>

          <div className="space-y-6">

            {recipe.steps.map((step, i) => (
              <div
                key={i}
                className="flex gap-4 bg-orange-50 p-5 rounded-2xl"
              >

                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </div>

                <p className="text-gray-600 leading-7">
                  {step}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

  
      <div className="mt-14 text-center">

        <Link href="/blog">

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition duration-300">
            Explore More Recipes 
          </button>

        </Link>

      </div>

    </div>

  </div>

</main>

      <Footer />
    </>
  );
}