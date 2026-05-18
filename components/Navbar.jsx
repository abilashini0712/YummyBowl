import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (

    <nav className="bg-orange-100 shadow-md px-6 md:px-12 py-4">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <Image
            src="/logo.jpeg"
            alt="Yummy Bowl Logo"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />

          <h1 className="text-3xl font-bold italic text-black">
            Yummy
            <span className="text-orange-500 ml-1">
              Bowl
            </span>
          </h1>

        </div>

        {/* NAV LINKS */}
        <ul className="flex flex-wrap justify-center gap-6 md:gap-10 text-[17px] font-medium">

          <li>
            <Link
              href="/"
              className="hover:text-orange-500 transition duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="hover:text-orange-500 transition duration-300"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/blog"
              className="hover:text-orange-500 transition duration-300"
            >
              Blog
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="hover:text-orange-500 transition duration-300"
            >
              Contact
            </Link>
          </li>

        </ul>

      </div>

    </nav>

  );
}