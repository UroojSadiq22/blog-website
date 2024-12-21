import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <section className="flex justify-around items-center h-[6rem] backdrop-blur-sm mx-auto bg-transparent fixed top-0 left-0 right-0 z-50">
      <div className="mr-32 lg:mr-0 text-white text-2xl font-extrabold">
        RUNO
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-around items-center space-x-6">
        {navLinks.map((link) => (
          <ul key={link.name}>
            <li>
              <Link
                href={link.path}
                className="p-4 px-6 text-white hover:text-gray-500 rounded-lg transition duration-300 ease-in-out relative group"
              >
                {link.name}

                <span className="absolute left-0 bottom-0 h-[2px] transition-all duration-300 ease-in-out w-0 bg-transparent group-hover:w-full group-hover:bg-gray-700"></span>
              </Link>
            </li>
          </ul>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden m-6">
        <Sheet>
          <SheetTrigger asChild>
            <AlignJustify color="white" />
          </SheetTrigger>

          <SheetContent
            side="top"
            className="p-8 pt-10 bg-gradient-to-br from-gray-300 via-gray to-black h-[50%] flex flex-col"
          >
            {navLinks.map((link) => (
              <SheetClose asChild key={link.name}>
                <Link
                  href={link.path}
                  className=" px-6 text-black hover:text-gray-500 rounded-lg transition duration-300 ease-in-out relative group"
                >
                  {link.name}

                  <hr className="my-2" />
                </Link>
              </SheetClose>
            ))}
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
}
