"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#F2F2F2] border-t pt-10 mx-auto overflow-x-hidden">
      {/* Desktop Footer */}
      <div className="hidden md:block">
        <div 
          className="container mx-auto px-2 md:max-w-[1200px] flex flex-col md:flex-row justify-between items-start space-x-4 gap-10 text-[#1E1E1E]"
        >
          {/* Left Section */}
          <div className="flex items-start">
            <Image src="/logo.png" alt="Tax Lodge Online" width={75} height={75} className="lg:w-[75px] lg:h-[75px] hover:scale-105 transition-transform duration-300" />
            <div className="ml-3 mr-4">
              <h2 className="text-lg md:text-2xl font-bold hover:text-[#FE5722] transition-colors duration-300">Tax Lodge Online</h2>
              <p className="text-sm md:text-sm mt-2 leading-relaxed w-[362px]">
                Based in Melbourne, we provide expert tax lodgment and accounting
                services for individuals and businesses. As registered tax
                practitioners, we prioritize professionalism, security, and client
                trust. Contact us for stress-free tax solutions.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
  <h3 className="text-sm md:text-lg font-bold mb-2">Quick Links</h3>
  <ul className="text-sm md:text-sm space-y-1">
    <li><Link href="/about" className="hover:text-[#FE5722] hover:underline transition-colors duration-300">About Us</Link></li>
    <li><Link href="/servicedetails" className="hover:text-[#FE5722] hover:underline transition-colors duration-300">Our Services</Link></li>
    <li><Link href="/pricing" className="hover:text-[#FE5722] hover:underline transition-colors duration-300">Pricing Plan</Link></li>
    <li><Link href="/blogdetail" className="hover:text-[#FE5722] hover:underline transition-colors duration-300">Blog</Link></li>
    <li><Link href="/businesstax" className="hover:text-[#FE5722] hover:underline transition-colors duration-300">Business Tax</Link></li>
    <li><Link href="/onlinetaxreturn" className="hover:text-[#FE5722] hover:underline transition-colors duration-300">Online Tax Return</Link></li>
    <li><Link href="/calculator" className="hover:text-[#FE5722] hover:underline transition-colors duration-300">Pay Calculator</Link></li>
    <li><Link href="/termsandconditions" className="hover:text-[#FE5722] hover:underline transition-colors duration-300">Terms & Conditions</Link></li>
    <li><Link href="/privacypolicy" className="hover:text-[#FE5722] hover:underline transition-colors duration-300">Privacy Policy</Link></li>
    <li><Link href="/refund-policy" className="hover:text-[#FE5722] hover:underline transition-colors duration-300">Refund Policy</Link></li>
    <li><Link href="/contactus" className="hover:text-[#FE5722] hover:underline transition-colors duration-300">Contact Us</Link></li>
  </ul>
</div>

{/* Tax Services */}
<div>
  <h3 className="text-sm md:text-lg font-bold mb-2">Tax Services</h3>
  <ul className="text-sm md:text-sm space-y-1">
    <li><Link href="/online-tax-return" className="hover:text-[#FE5722] hover:underline transition-colors duration-300">Online Tax Return</Link></li>
    <li><Link href="/personal-income-tax-return" className="hover:text-[#FE5722] hover:underline transition-colors duration-300">Personal Income Tax Return</Link></li>
    <li><Link href="/tax-form" className="hover:text-[#FE5722] hover:underline transition-colors duration-300">Australian Tax Back Form</Link></li>
    <li><Link href="/sole-trader-tax-return-form" className="hover:text-[#FE5722] hover:underline transition-colors duration-300">Sole Trader Tax Return Form</Link></li>
  </ul>
</div>

          {/* Contact Section */}
          <div className="pr-4">
            <h3 className="text-sm md:text-lg font-bold mb-2">Contact Us</h3>
            <p className="text-sm md:text-sm flex items-start">
              <Image src="/map.png" alt="map" width={24} height={24} className="hover:scale-110 transition-transform duration-300" />
              Level 2, 311 Lonsdale Street,<br />
              Dandenong, Victoria 3175, Australia
            </p>
            <p className="text-sm md:text-sm mt-2 flex">
              <Image src="/phone.png" alt="phone" width={24} height={24} className="hover:scale-110 transition-transform duration-300" />
              (03) 8904 8602
            </p>
            <p className="text-sm md:text-sm mt-2 flex gap-1">
              <Image src="/mail.png" alt="mail" width={24} height={24} className="hover:scale-110 transition-transform duration-300" />
              <a href="mailto:support@taxlodgeonline.com.au" className="underline hover:text-[#FE5722] transition-colors duration-300">support@taxlodgeonline.com.au</a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-[#A19C9C] text-sm py-4 bg-white mt-32">
          Copyright © 2025 Tax Lodge Online
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="block md:hidden">
        <div className="flex flex-col items-center justify-center bg-gray-100">
          <Image src="/logo.png" alt="Logo" width={64} height={64} className="mb-4" />
          <h1 className="text-xl font-bold mb-4">Tax Lodge Online</h1>
          <ul className="space-y-2 text-center">
      {[
        { label: "About Us", href: "/about" },
        { label: "Our Services", href: "/servicedetails" },
        { label: "Pricing Plan", href: "/pricing" },
        { label: "Blog", href: "/blogdetail" },
        { label: "Contact Us", href: "/contactus" },
        { label: "Terms & Conditions", href: "/termsandconditions" },
        { label: "Pay Calculator", href: "/calculator" },
        { label: "Privacy Policy", href: "/privacypolicy" },
        { label: "Refund Policy", href: "/refund-policy" },
      ].map((item) => (
        <li
          key={item.label}
          className="text-gray-800 text-sm cursor-pointer hover:text-[#FE5722] hover:underline transition-colors duration-300"
        >
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
          <div className="text-center text-[#A19C9C] w-full text-sm py-4 bg-white mt-5">
            Copyright © 2025 Tax Lodge Online
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
