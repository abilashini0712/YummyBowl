export default function Footer() {
  return (
    <footer className="bg-orange-100 text-black py-8 mt-10">
      
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
       
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold italic">
            Yummy  Bowl 🍲
          </h1>

          <p className="mt-2 text-gray-500">
            Delicious homemade recipes for every food lover.
          </p>
        </div>

        
        <ul className="flex gap-6 font-medium">
          <li className="hover:text-orange-500 cursor-pointer">
            Home
          </li>

          <li className="hover:text-orange-500 cursor-pointer">
            About
          </li>

          <li className="hover:text-orange-500 cursor-pointer">
            Blog
          </li>

          <li className="hover:text-orange-500 cursor-pointer">
            Contact
          </li>
        </ul>

        

      </div>

     
      <div className="border-t border-orange-300 mt-6 pt-4 text-center text-orange-500 text-sm">
        © 2026 Yummy Bowl. All Rights Reserved.
      </div>

    </footer>
  );
}