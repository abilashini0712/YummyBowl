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
  const { id } = await params;

  const recipe = getRecipeById(Number(id));

  return {
    title: recipe
      ? `${recipe.title} | Yummy Bowl`
      : "Recipe Not Found",

    description: recipe?.description,
  };
}

export default async function RecipePage({ params }) {

  const { id } = await params;

  const recipe = getRecipeById(Number(id));

  if (!recipe) notFound();

  return (
    <>

      <Navbar />

      <main className="min-h-screen bg-orange-50 px-4 md:px-8 py-10 md:py-14">

        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">

          {/* HERO IMAGE */}
          <div className="relative w-full h-[260px] sm:h-[350px] md:h-[500px]">

            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              priority
              className="object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* TITLE */}
            <div className="absolute bottom-6 md:bottom-10 left-5 md:left-10">

              <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold">
                {recipe.tag}
              </span>

              <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
                {recipe.title}
              </h1>

            </div>

          </div>

          {/* CONTENT */}
          <div className="p-5 sm:p-8 md:p-12">

            {/* BACK BUTTON */}
            <Link
              href="/blog"
              className="inline-block text-orange-500 font-medium hover:text-orange-600 transition duration-300"
            >
              ← Back to Recipes
            </Link>

            {/* DESCRIPTION */}
            <p className="mt-6 text-gray-600 text-base md:text-lg leading-8">
              {recipe.description}
            </p>

            {/* INFO CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">

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

            {/* INGREDIENTS + PREPARATION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 mt-14">

              {/* INGREDIENTS */}
              <div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Ingredients 🍴
                </h2>

                <ul className="space-y-4">

                  {recipe.ingredients.map((item, i) => (

                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-600 leading-7"
                    >

                      <span className="mt-2 w-2.5 h-2.5 bg-orange-500 rounded-full shrink-0"></span>

                      {item}

                    </li>

                  ))}

                </ul>

                {/* NOTES */}
                <div className="mt-10 bg-orange-50 border border-orange-200 rounded-2xl p-5">

                  <h3 className="text-xl font-bold text-orange-500 mb-3">
                    Chef Notes 👨‍🍳
                  </h3>

                  <p className="text-gray-600 leading-7 text-sm md:text-base">
                    {recipe.notes}
                  </p>

                </div>

              </div>

              {/* PREPARATION */}
              <div>

                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Preparation 🥘
                </h2>

                <div className="space-y-5">

                  {recipe.steps.map((step, i) => (

                    <div
                      key={i}
                      className="flex gap-4 bg-orange-50 p-5 rounded-2xl"
                    >

                      <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold shrink-0">
                        {i + 1}
                      </div>

                      <p className="text-gray-600 leading-7 text-sm md:text-base">
                        {step}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </div>

            {/* BUTTON */}
            <div className="mt-14 text-center">

              <Link href="/blog">

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition duration-300 shadow-md">
                  Explore More Recipes 🍲
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