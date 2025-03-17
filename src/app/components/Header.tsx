"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// Animation variants
const linkVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
};

// Navbar links
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/servicedetails" },
  { name: "Business Tax", path: "/businesstax" },
  { name: "Blog", path: "/blog" },
  { name: "Pricing", path: "/pricing" },
  { name: "Pay Calculator", path: "/calculator" },
  { name: "Contact", path: "/contactus" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Handle search functionality
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const foundLink = navLinks.find(
      (link) => link.name.toLowerCase() === query.toLowerCase()
    );

    if (foundLink) {
      router.push(foundLink.path);
    } else {
      alert("Page not found!");
    }
    setQuery("");
  };

  return (
    <header className="bg-white md:bg-[#F2F2F2] absolute inset-x-0 top-0 z-50 px-2 py-8 pr-12 md:pr-10 md:px-6 md:py-7 mx-auto overflow-x-hidden">
      <div className="flex justify-between md:justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={61}
            height={68}
            className="ml-8 cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 lg:space-x-10">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              variants={linkVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
            >
              <Link
                href={link.path}
                className="text-black hover:text-[#FE5722] transition duration-300 2xl:text-xl"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Search & CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search Input */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center border border-gray-300 rounded-lg px-2 py-1"
          >
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
              className="bg-transparent focus:outline-none w-[150px]"
            />
            <button type="submit" className="text-orange-500 px-2">
              🔍
            </button>
          </form>

          <div className="h-6 w-px bg-gray-400"></div>
          <Link href="/get-started">
            <motion.button
              className="text-orange-500 hover:bg-orange-500 hover:text-white transition font-semibold px-4 py-2 rounded-lg border border-orange-500"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              GET STARTED
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
