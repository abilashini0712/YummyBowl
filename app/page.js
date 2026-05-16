
import Navbar from "@/components/Navbar";
import LatestRecipe from "@/components/LatestRecipe";
import Footer from "@/components/Footer";
import Image from "next/image";


export default function Home() {
  
  
  return (
    <>
      <Navbar/>

      
     <div className="min-h-screen bg-orange-50  flex items-center justify-center px-6 py-16">

  <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">

    <div>

      <p className="text-orange-500 font-semibold text-lg uppercase tracking-widest italic">
        Welcome to Yummy Bowl
      </p>

      <h1 className="mt-4 text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
        Discover Delicious
        <span className="text-orange-500"> Homemade Recipes </span>
        Everyday 🍲
      </h1>

      <p className="mt-8 text-gray-600 text-lg leading-9 max-w-xl">
        Explore tasty homemade recipes from around the world.
        Learn easy cooking methods, discover new flavors, and
        make every meal special with Yummy Bowl.
      </p>

      <div className="mt-10 flex flex-wrap gap-5">

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full shadow-lg transition duration-300">
          Explore Recipes
        </button>

       

      </div>

      

    </div>

   
    <div className="flex justify-center">

      <div className="relative">

        
        <div className="absolute inset-0 bg-orange-300 rounded-full blur-3xl opacity-30"></div>

        <Image
          src="/heroimage.jpeg"
          alt=""
          width={500}
          height={400}
          className="relative rounded-[40px] shadow-2xl object-cover border-8 border-white"
        />

      </div>

    </div>

  </div>

</div>

    <LatestRecipe/>
    <Footer/>
    </>
  );
}