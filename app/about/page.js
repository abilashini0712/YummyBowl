import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#fff7ed] px-4 sm:px-6 md:px-8 py-10 md:py-16">
        <div className="max-w-7xl mx-auto">

          {/* TOP SECTION */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">

            {/* IMAGE */}
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="bg-orange-100 p-2 sm:p-3 rounded-3xl shadow-xl">
                <Image
                  src="/aboutimage.jpeg"
                  alt="Profile"
                  width={320}
                  height={320}
                  className="rounded-2xl object-cover w-[220px] sm:w-[260px] md:w-[320px] h-auto"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900">
                About Us!
              </h1>

              <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg md:text-xl leading-7 sm:leading-9 md:leading-10 max-w-3xl mx-auto md:mx-0">
                Welcome to <span className="font-semibold text-orange-500">
                  Yummy Bowl
                </span> — a place where food lovers can discover delicious,
                homemade recipes from around the world. We help beginners
                and food enthusiasts cook tasty meals easily with simple
                step-by-step instructions.
              </p>
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="mt-16 md:mt-24 flex flex-col md:flex-row gap-10 md:gap-16">

            {/* LEFT TEXT */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900">
                Our Journey So Far
              </h2>

              <p className="mt-5 sm:mt-6 text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 md:leading-9">
                Yummy Bowl was created with a passion for sharing tasty,
                simple, and healthy recipes with everyone. From spicy
                biryani and delicious curries to healthy salads and desserts,
                we believe cooking should be fun, enjoyable, and easy.
              </p>

              <p className="mt-4 text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 md:leading-9">
                Our mission is to inspire people to cook homemade meals,
                explore new flavors, and create happy memories with family
                and friends through food.
              </p>
            </div>

            {/* TAGS */}
            <div className="w-full md:w-1/2">
              <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">

                {[
                  "🍛 Rice Recipes",
                  "🍗 Chicken Dishes",
                  "🐟 Fish Curries",
                  "🥗 Healthy Meals",
                  "🍰 Desserts",
                  "⚡ Quick Recipes",
                  "👨‍🍳 Cooking Tips",
                  "🌎 World Recipes",
                  "❤️ Homemade Food",
                ].map((item, index) => (
                  <span
                    key={index}
                    className="bg-white px-4 sm:px-5 py-2 sm:py-3 rounded-lg shadow text-gray-700 font-medium text-sm sm:text-base"
                  >
                    {item}
                  </span>
                ))}

              </div>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}