import Link from "next/link";

export default function Footer() {
  return (

    <footer className="bg-orange-100 mt-14 border-t border-orange-200">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* LEFT SIDE */}
          <div className="text-center md:text-left">

            <h1 className="text-3xl font-bold italic text-black">
              Yummy
              <span className="text-orange-500 ml-1">
                Bowl 🍲
              </span>
            </h1>

            <p className="mt-3 text-gray-600 max-w-md leading-7">
              Discover delicious homemade recipes, cooking tips,
              and tasty food ideas for every food lover.
            </p>

          </div>

          {/* CENTER LINKS */}
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 font-medium text-gray-700">

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

        {/* BOTTOM */}
        <div className="border-t border-orange-300 mt-8 pt-5 text-center">

          <p className="text-sm text-gray-600">
            © 2026
            <span className="text-orange-500 font-semibold">
              {" "}Yummy Bowl
            </span>.
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>

  );
}