
import Navbar from "@/components/Navbar";
import LatestRecipe from "@/components/LatestRecipe";
import Image from "next/image";


export default function Home() {
  
  
  return (
    <>
      <Navbar/>

      
      <div className="min-h-screen flex items-center justify-center bg-orange-50 px-6">
      
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
        
        <div className="w-full md:w-1/2">
          <Image
            src="/heroimage.jpeg"
            alt="Delicious Food"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>

        
        <div className="w-full md:w-1/2 text-center md:text-left">
          
          <h1 className="text-4xl font-bold text-orange-600 italic">
            Welcome to Yummy Bowl 🍲
          </h1>

          <p className="mt-4 text-gray-700 text-lg">
            Discover delicious homemade recipes from around the world.
            Cook easy, tasty, and healthy meals step by step.
          </p>

          <p className="mt-3 text-gray-500">
            Start your cooking journey today and enjoy every bite! 👨‍🍳✨
          </p>

          <button  className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600">
            Explore Recipes
          </button>

        </div>

      </div>
    </div>

    <LatestRecipe/>
    </>
  );
}