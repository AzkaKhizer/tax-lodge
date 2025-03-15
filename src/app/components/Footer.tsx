"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = (direction = "up", delay = 0) => ({
  hidden: { 
    opacity: 0, 
    y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
    x: direction === "left" ? 30 : direction === "right" ? -30 : 0
  },
  show: { 
    opacity: 1, 
    y: 0,
    x: 0,
    transition: { duration: 0.6, delay }
  },
});

const menuItems = [
  "About Us",
  "Our Services",
  "Pricing Plan",
  "Blog",
  "Contact Us",
  "Terms & Conditions",
  "Privacy Policy",
  "Refund Policy",
];

const Footer = () => {
  return (
    <footer className="bg-[#F2F2F2] border-t pt-10 mx-auto overflow-x-hidden">
      {/* Desktop Footer */}
      <div className="hidden md:block">
        <motion.div 
          className="container mx-auto px-2 md:max-w-[1200px] flex flex-col md:flex-row justify-between items-start space-x-4 gap-10  text-[#1E1E1E]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Section */}
          <motion.div className="flex items-start" variants={fadeIn("left", 0)}>
            <Image src="/logo.png" alt="Tax Lodge Online" width={50} height={50} className="lg:w-[75px] lg:h-[75px] hover:scale-105 transition-transform duration-300" />
            <div className="ml-3 mr-4">
              <h2 className="text-lg md:text-2xl font-bold hover:text-[#FE5722] transition-colors duration-300">Tax Lodge Online</h2>
              <p className="text-sm md:text-sm mt-2 leading-relaxed w-[362px]">
                Based in Melbourne, we provide expert tax lodgment and accounting
                services for individuals and businesses. As registered tax
                practitioners, we prioritize professionalism, security, and client
                trust. Contact us for stress-free tax solutions.
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeIn("up", 0.2)}>
            <h3 className="text-sm md:text-lg font-bold mb-2">Quick Links</h3>
            <ul className="text-sm md:text-sm space-y-1">
  {[
    { name: "About Us", url: "/About" },
    { name: "Our Services", url: "/ServiceDetails" },
    { name: "Pricing Plan", url: "/pricing" },
    { name: "Blog", url: "/blog" },
    { name: "Business Tax", url: "/BusinessTax" },
    { name: "Online Tax Return", url: "/OnlineTaxReturn" },
    { name: "Pay Calculator", url: "/Calculator" },
    { name: "Terms & Conditions", url: "/termsandconditions" },
    { name: "Privacy Policy", url: "/privacypolicy" },
    { name: "Refund Policy", url: "/refund-policy" },
    { name: "Contact Us", url: "/ContactUs" }
  ].map((link, index) => (
    <li key={index}>
      <a href={link.url} className="hover:text-[#FE5722] hover:underline transition-colors duration-300">
        {link.name}
      </a>
    </li>
  ))}
</ul>

          </motion.div>

          {/* Tax Services */}
          <motion.div variants={fadeIn("up", 0.4)}>
            <h3 className="text-sm md:text-lg font-bold mb-2">Tax Services</h3>
            <ul className="text-sm md:text-sm space-y-1">
              {["Online Tax Return", "Personal Income Tax Return", "Australian Tax Back Form", "Sole Trader Tax Return Form"].map((service, index) => (
                <li key={index}><a href="#" className="hover:text-[#FE5722] hover:underline transition-colors duration-300">{service}</a></li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div className="pr-4" variants={fadeIn("right", 0.6)}>
            <h3 className="text-sm md:text-lg font-bold mb-2">Contact Us</h3>
            <p className="text-sm md:text-sm flex items-start">
              <Image src="/map.png" alt="map" width={24} height={24} className="hover:scale-110 transition-transform duration-300" />
              Level 2, 311 Lonsdale Street,<br />
              Dandenong, Victoria 3175, Australia
            </p>
            <p className="text-sm md:text-sm mt-2 flex">
              <Image src="/phone.png" alt="phone" width={24} height={24} className="hover:scale-110 transition-transform duration-300" />(03) 8904 8602
            </p>
            <p className="text-sm md:text-sm mt-2 flex gap-1">
              <Image src="/mail.png" alt="mail" width={24} height={24} className="hover:scale-110 transition-transform duration-300" />
              <a href="mailto:support@taxlodgeonline.com.au" className="underline hover:text-[#FE5722] transition-colors duration-300">support@taxlodgeonline.com.au</a>
            </p>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="text-center text-[#A19C9C] text-sm py-4 bg-white mt-32"
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Copyright © 2025 Tax Lodge Online
        </motion.div>
      </div>
      <div className="block md:hidden">
  <div className="flex flex-col items-center justify-center  bg-gray-100 ">
    <motion.img
      src="/logo.png"
      alt="Logo"
      className="w-16 h-16 mb-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
    <motion.h1
      className="text-xl font-bold mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      Tax Lodge Online
    </motion.h1>
    <ul className="space-y-2 text-center">
      {[
        { name: "About Us", url: "/about" },
        { name: "Our Services", url: "/servicedetails" },
        { name: "Pricing Plan", url: "/pricing" },
        { name: "Blog", url: "/blog" },
        { name: "Contact Us", url: "/contactus" },
        { name: "Terms & Conditions", url: "/termsandconditions" },
        { name: "Privacy Policy", url: "/privacypolicy" },
        { name: "Refund Policy", url: "/refund-policy" },
      ].map((item, index) => (
        <motion.li
          key={item.name}
          className="text-gray-800 text-sm cursor-pointer hover:text-[#FE5722] hover:underline transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Link href={item.url}>
            {item.name}
          </Link>
        </motion.li>
      ))}
    </ul>
    <motion.div
      className="text-center text-[#A19C9C] w-full text-sm py-4 bg-white mt-5"
      variants={fadeIn("up", 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      Copyright © 2025 Tax Lodge Online
    </motion.div>
  </div>
</div>




    </footer>
  );
};

export default Footer;
