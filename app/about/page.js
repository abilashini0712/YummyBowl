import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
    <Navbar/>
     <div className="min-h-screen bg-[#fff7ed] px-8 py-16">

      <div className="max-w-7xl mx-auto">

        
        <div className="flex flex-col md:flex-row items-center gap-14">

     
          <div className="w-full md:w-1/3 flex justify-center">

            <div className="bg-orange-100 p-3 rounded-3xl shadow-xl">
              <Image
                src="/aboutimage.jpeg"
                alt="Profile"
                width={320}
                height={320}
                className="rounded-2xl object-cover"
              />
            </div>

          </div>

          <div className="w-full md:w-2/3">

            <h1 className="text-6xl font-bold text-gray-900">
              About Us!
            </h1>

            <p className="mt-6 text-gray-600 text-xl leading-10 max-w-3xl">
              Welcome to <span className="font-semibold text-orange-500">
                Yummy Bowl
              </span> — a place where food lovers can discover delicious,
              homemade recipes from around the world. We help beginners
              and food enthusiasts cook tasty meals easily with simple
              step-by-step instructions.
            </p>

          </div>

        </div>

       
        <div className="mt-24 flex flex-col md:flex-row gap-16">

          
          <div className="w-full md:w-1/2">

            <h2 className="text-5xl font-bold text-gray-900">
              Our Journey So Far
            </h2>

            <p className="mt-8 text-gray-600 text-lg leading-9">
              Yummy Bowl was created with a passion for sharing tasty,
              simple, and healthy recipes with everyone. From spicy
              biryani and delicious curries to healthy salads and desserts,
              we believe cooking should be fun, enjoyable, and easy.
            </p>

            <p className="mt-6 text-gray-600 text-lg leading-9">
              Our mission is to inspire people to cook homemade meals,
              explore new flavors, and create happy memories with family
              and friends through food.
            </p>

          </div>

         
          <div className="w-full md:w-1/2">

            <div className="flex flex-wrap gap-4">

              <span className="bg-white px-5 py-3 rounded-lg shadow text-gray-700 font-medium">
                🍛 Rice Recipes
              </span>

              <span className="bg-white px-5 py-3 rounded-lg shadow text-gray-700 font-medium">
                🍗 Chicken Dishes
              </span>

              <span className="bg-white px-5 py-3 rounded-lg shadow text-gray-700 font-medium">
                🐟 Fish Curries
              </span>

              <span className="bg-white px-5 py-3 rounded-lg shadow text-gray-700 font-medium">
                🥗 Healthy Meals
              </span>

              <span className="bg-white px-5 py-3 rounded-lg shadow text-gray-700 font-medium">
                🍰 Desserts
              </span>

              <span className="bg-white px-5 py-3 rounded-lg shadow text-gray-700 font-medium">
                ⚡ Quick Recipes
              </span>

              <span className="bg-white px-5 py-3 rounded-lg shadow text-gray-700 font-medium">
                👨‍🍳 Cooking Tips
              </span>

              <span className="bg-white px-5 py-3 rounded-lg shadow text-gray-700 font-medium">
                🌎 World Recipes
              </span>

              <span className="bg-white px-5 py-3 rounded-lg shadow text-gray-700 font-medium">
                ❤️ Homemade Food
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
    <Footer/>
    </>
  );
}