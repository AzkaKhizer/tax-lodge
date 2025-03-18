"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Removed 'Search' since it's unused
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
  const router = useRouter();

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

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
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

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden mt-4 flex flex-col space-y-4 text-black">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="hover:text-[#FE5722] ml-3"
            >
              {link.name}
            </Link>
          ))}

          {/* CTA in Mobile Menu */}
          <div className="flex items-center space-x-4 mt-4 ml-3">
            <Link href="/get-started">
              <button className="text-[#FE5722] font-bold">GET STARTED</button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
