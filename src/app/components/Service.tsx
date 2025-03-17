"use client";
import { useState } from "react";
import { Search, Send } from "lucide-react"; // For search & send icons
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const service = [
    "Online Tax Return",
    "Personal Income Tax Return",
    "Australian Tax Back Form",
    "Sole Trader Tax Return Form",
  ];


import Image from "next/image";

export default function TaxServices() {
    const [searchTerm, setSearchTerm] = useState("");

    // ✅ Correct Filtering Logic
    const filteredServices = service.filter((s) =>
        s.toLowerCase().includes(searchTerm.toLowerCase())
      );

     
      
    return (
      <div className="flex ">
      <div>
        <div className="md:w-[1000px]">
        <section className="mx-auto p-6 md:p-12 bg-white">

          
          {/* Image */}
          <div className="overflow-hidden">
            <Image src="/service.png" alt="Tax Consultation" width={500} height={300} className="w-full md:w-[820px] h-auto md:h-[490px] transition-transform duration-500 hover:scale-105" />
          </div>
    
          {/* Heading and Description */}
          <div className="mt-6 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Individual & Sole Trader Tax Returns</h2>
            <p className="mt-4 text-gray-600 text-sm md:text-base">
              We are a team of dedicated IPA Tax Accountants and financial experts committed to providing personalized,
              professional, and secure tax and financial services. Our goal is to simplify complex financial processes and
              ensure that individuals and businesses receive the best possible tax outcomes and strategic financial advice.
              Whether you need tax return assistance, financial planning, or compliance support, we offer a comprehensive,
              data-driven approach tailored to your unique needs. With a focus on trust, accuracy, and efficiency, we help
              our clients navigate financial challenges and achieve their goals with confidence.
            </p>
          </div>
    
          {/* Service Boxes */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-[#F0F0F0] rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="bg-[#FFE5DD] p-3 rounded-[10px]">
                  <Image src={service.icon} alt={service.title} width={32} height={32} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
    
        <div className="mx-auto p-6 md:p-12 bg-white">
          {/* Service Benefits */}
          <div className="mb-12 animate-fade-in">
            <h2 className="text-2xl md:text-[44px] font-bold text-gray-900">Our Service Benefits</h2>
            <p className="mt-4 text-[#1E1E1E] text-sm md:text-[16px] leading-relaxed">
              We are more than just a tax lodgment service—we are your trusted financial partner, committed to ensuring
              accuracy, compliance, and maximum tax savings. Our services are designed to be accessible and affordable,
              offering the lowest fees while maintaining high standards of expertise and accuracy. We understand that tax-related
              questions can arise anytime, which is why we provide 24/7 email support, allowing you to reach out whenever you
              need assistance. Your security is our priority, and we use advanced encryption technology to safeguard your
              personal and financial data. Additionally, we don’t just process tax returns—we analyze them thoroughly to
              maximize your deductions and ensure the best possible refund based on your financial situation. With our hassle-free
              online lodgment, you can submit your tax return quickly and easily, eliminating paperwork, queues, and unnecessary stress.
            </p>
          </div>
    
          {/* Why Choose Us */}
          <div className="mb-12 animate-slide-up">
            <h2 className="text-2xl md:text-[44px] font-bold text-gray-900">Why Choose Us?</h2>
            <p className="mt-4 text-[#1E1E1E] text-sm md:text-[16px] leading-relaxed">
              We provide expert-led tax and financial services designed to simplify the complexities of tax filing and financial
              planning. Our commitment to accuracy, security, and personalized solutions ensures that you receive the best
              possible financial outcomes with minimal effort.
            </p>
    
            <div className="mt-6 flex flex-col md:flex-row items-start gap-6">
              {/* Image */}
              <div className="relative w-[301px] h-[210px] transition-transform duration-500 hover:scale-105">
                <Image
                  src="/whychooseus.png"
                  alt="Client discussion"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
    
              {/* Benefits List */}
              <ul className="flex-1 space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-black rounded-full text-lg transition-all duration-300 hover:bg-gray-700">
                      <span className="text-white">&#10003;</span>
                    </div>
                    <p className="text-[#1E1E1E] text-sm md:text-base">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
    
          {/* What We Do */}
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-[44px] font-bold text-gray-900">What We Do</h2>
            <p className="mt-4 text-[#1E1E1E] text-sm md:text-[16px] leading-relaxed">
              We specialize in tax return preparation and lodgment for individuals and businesses, making the tax process
              seamless and stress-free. Our expertise extends beyond tax lodgment—we provide strategic financial advisory
              services to help businesses optimize capital structures, boost profitability, and ensure long-term growth. We also
              offer audit and assurance services, ensuring compliance, risk assessment, and financial transparency. Additionally,
              we assist businesses in capital raising and fundraisings, providing financial strategies that support expansion and
              sustainability. For companies looking to streamline their financial operations, we offer business process outsourcing,
              handling bookkeeping, tax compliance, and financial management with precision. With our data-driven approach
              and expert accountants, we guarantee peace of mind and the best financial outcomes for all our clients.
            </p>
          </div>
        </div>
        </div>
      </div>
      
    
    
    
    <div className="p-2 mr-8 w-full mt-10 max-w-sm mx-auto hidden md:block">
        {/* Search Bar */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-3 pl-4 pr-10  border-b-2 border-gray-300  pb-2 focus:outline-none hover:text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-3 text-gray-500 w-5 h-5" />
        </div>

        {/* Services List */}
        <h2 className="text-[20px]  pt-6 mb-2 font-bold">Our Services</h2>
       
        <ul className="space-y-4">
  {filteredServices.map((service, index) => (
    <li
      key={index}
      className="flex justify-between items-center p-4 bg-white border border-white rounded-lg shadow-lg shadow-[#FFE1D8] cursor-pointer hover:bg-orange-200 transition"
    >
      {/* Link on text */}
      {service === "Online Tax Return" ? (
        <Link href="/onlinetaxreturn" className="text-black text-[18px] font-semibold">
          {service}
        </Link>
      ) : (
        <span className="text-black text-[18px] font-semibold">{service}</span>
      )}

      {/* Link on arrow */}
      {service === "Online Tax Return" ? (
        <Link href="/onlinetaxreturn">
          <span className="text-black border-[#FFE1D8] bg-[#FFE1D8] rounded-full px-3 py-2 hover:bg-orange-300">
            ➜
          </span>
        </Link>
      ) : (
        <span className="text-black border-[#FFE1D8] bg-[#FFE1D8] rounded-full px-3 py-2 hover:bg-orange-300">
          ➜
        </span>
      )}
    </li>
  ))}
</ul>

        {/* Contact Us Section */}
        <div className="mt-10 md:p-6 2xl:p-8 bg-white shadow-lg rounded-lg  h-[180px] text-center ">
          <p className=" font-medium text-[20px]  text-center">If You Need Any Help Contact With Us</p>
          <button className="mt-3 md:px-8 md:py-2 2xl:px-10 2xl:py-4 bg-[#FE5722] text-white rounded-full font-medium shadow-md hover:bg-orange-600 transition">
            Contact Us
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="mt-10 p-8 bg-white shadow-lg rounded-lg h-[132px]">
          <p className="text-[18px] font-medium">Follow Us</p>
          <div className="mt-3 flex justify-start gap-4 text-black">
            <Send className="w-[30px] h-[30px] cursor-pointer hover:text-orange-500 transition" />
            <FaInstagram className="w-[30px] h-[30px] cursor-pointer hover:text-orange-500 transition" />
            <FaFacebookF className="w-[30px] h-[30px] cursor-pointer hover:text-orange-500 transition" />
          </div>
        </div>
      </div>
</div>



      
    );
  }

  
  
  // Dummy service data
  const services = [
    {
      title: "Expert-Led Tax Preparation",
      description: "Certified IPA Tax Accountants ensure accuracy, compliance, and maximum refunds.",
      icon: "/icon4.png", // Replace with actual icon path
    },
    {
      title: "Secure & Hassle-Free Online Process",
      description: "Encrypted, user-friendly platform with 24/7 support.",
      icon: "/icon3.png",
    },
    {
      title: "Customized Strategies for Everyone",
      description: "Custom solutions for sole traders, partnerships, companies, and trusts.",
      icon: "/icon2.png",
    },
    {
      title: "Comprehensive Financial Solutions",
      description: "Tax lodgments, audit advisory, and outsourcing tailored to your needs.",
      icon: "/icon1.png",
    },
  ];

  // Benefits List
const benefits = [
    "Certified IPA Tax Accountants ensure accuracy and maximize refunds.",
    "Tax lodgment, advisory, audits, and more in one place.",
    "Encrypted, hassle-free online platform with 24/7 support.",
    "Solutions tailored to individuals, businesses, and trusts.",
  ];
  
  