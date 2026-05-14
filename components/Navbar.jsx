import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-olive-50 text-black px-8 py-3 shadow-md">
      
      <div className="flex items-center justify-between">
        
        <div className="flex items-center gap-3 px-50">
          
          <Image
            src="/logo.jpeg"
            alt="Yummy Bowl Logo"
            width={50}
            height={50}
            className="rounded-full"
          />

          <h1 className="text-2xl font-bold  italic">
            Yummy </h1><h2 className="text-orange-500 italic">Bowl</h2> 
         
        </div>

        <ul className="flex gap-8 absolute left-[58%] transform-translate-x-1/2 py-1 font-medium ">
          
          <li>
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-orange-500">
              About
            </Link>
          </li>

          <li>
            <Link href="/blog" className="hover:text-orange-500">
              Blog
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-orange-500">
              Contact
            </Link>
          </li>

        </ul>
      </div>

    </nav>
  );
}