import Navbar from "@/components/Navbar";
import LatestRecipe from "@/components/LatestRecipe";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <>
    
      <Navbar />

      {/* HERO SECTION */}
      <section className="min-h-screen bg-orange-50 flex items-center justify-center px-4 md:px-8 py-14">

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-14">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">

            <p className="text-orange-500 font-semibold text-sm md:text-lg uppercase tracking-[0.3em] italic">
              Welcome to Yummy Bowl
            </p>

            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">

              Discover Delicious
              <span className="text-orange-500">
                {" "}Homemade Recipes
              </span>
              {" "}Everyday 🍲

            </h1>

            <p className="mt-7 text-gray-600 text-base md:text-lg leading-8 max-w-2xl mx-auto md:mx-0">

              Explore tasty homemade recipes from around the world.
              Learn easy cooking methods, discover new flavors,
              and make every meal special with Yummy Bowl.

            </p>

            {/* BUTTON */}
            <div className="mt-10 flex justify-center md:justify-start">

              <Link href="/blog">

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full shadow-lg transition duration-300 text-sm md:text-base">

                  Explore Recipes

                </button>

              </Link>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">

            <div className="relative">

              {/* BACKGROUND BLUR */}
              <div className="absolute inset-0 bg-orange-300 rounded-full blur-3xl opacity-30"></div>

              <Image
                src="/heroimage.jpeg"
                alt="Delicious Food"
                width={500}
                height={500}
                priority
                className="relative w-[320px] sm:w-[400px] md:w-[500px] h-auto rounded-[35px] shadow-2xl object-cover border-4 md:border-8 border-white"
              />

            </div>

          </div>

        </div>

      </section>

      {/* LATEST RECIPES */}
      <LatestRecipe />

      {/* FOOTER */}
      <Footer />

    </>
  );
}