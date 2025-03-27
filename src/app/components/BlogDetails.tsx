"use client"

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Send } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function BlogPg() {
  const articles = [
    {
      title: "Navigating Personal Tax Returns with Ease",
      description: "Personal tax doesn’t have to be confusing. Learn how to lodge your tax return, claim deductions, and understand the key deadlines. This guide breaks down the essentials to help you manage your taxes with confidence and get the most out of your returns.",
      date: "March 20, 2025",
      readTime: "5 min read",
      image: "/blogpic1.png",
      link: '/blog'
    },
    {
      title: "Reporting Income and Deductions in Partnerships",
      description: "Partnerships come with unique tax responsibilities. Discover how to report income, handle expenses, and distribute profits among partners. Understand the lodgment process and key dates to ensure smooth tax management for your partnership.",
      date: "March 20, 2025",
      readTime: "5 min read",
      image: "/blogpic2.png",
      link: '/blog2'
    },
    {
      title: "Small Business Guide to Company Tax",
      description: "Running a company means staying on top of taxes. Explore how small businesses calculate taxable income, claim deductions, and meet deadlines. This guide simplifies the process, making company tax easier to navigate.",
      date: "March 20, 2025",
      readTime: "5 min read",
      image: "/blogpic3.png",
      link: '/blog3'
    },
    {
      title: "Understanding GST Obligations for Businesses",
      description: "GST can be complex, but it doesn’t have to be overwhelming. Learn when to register, what transactions are taxable, and how to report correctly. Master the essentials of managing GST for your business with ease.",
      date: "March 20, 2025",
      readTime: "5 min read",
      image: "/blogpic4.png",
      link: '/blog4'
    },
    {
      title: "Superannuation Contributions and Retirement Planning",
      description: "Superannuation is a vital part of planning for the future. Understand employer contributions, concessional caps, and how to grow your super. This guide breaks down the rules so you can take control of your retirement savings.",
      date: "March 20, 2025",
      readTime: "5 min read",
      image: "/blogpic5.png",
      link: '/blog5'
    },
  ];

  const tags = [
    "Taxable Income",
    "Lodgment Deadline",
    "Business Expenses",
    "Tax Credits",
    "Partnership Agreement",
    "Superannuation Contributions",
    "GST Compliance",
    "Australian Taxation Office (ATO)",
  ];

  return (
    <div className="p-8">
      <div className='md:flex gap-x-10 justify-center'>
        <div>
          <h1 className="text-lg font-semibold mb-2">5 Results</h1>

          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-4 border-b pb-4 md:flex items-start gap-4"
            >
              <div>
                <span className='text-sm'>{article.date}</span>
                <Link href={article.link} className="text-lg font-semibold text-blue-600 hover:underline">
  {article.title}
</Link>
                <p className="text-gray-700 mt-2">{article.description}</p>
                <span className="text-gray-500 text-sm">{article.readTime}</span>
              </div>
              <Image src={article.image} alt={article.title} width={180} height={150} className="mt-6 rounded-md object-cover w-full h-full md:w-[180px] md:h-[150px] transition-transform transform hover:scale-105 hover:shadow-lg" />
            </motion.div>
          ))}
        </div>

        <div>
          <motion.div className="mt-6 p-4 border rounded-md shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg font-semibold mb-2">Popular Tags</h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-red-100 text-gray-800 text-sm px-3 py-1 rounded-md cursor-pointer transition-transform transform hover:scale-105 hover:bg-red-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div className="p-4 border rounded-lg shadow-md mt-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-semibold mb-2">Authors</h2>
            <div className="flex items-center gap-2">
              <Image src="/author2.png" alt="Author 1" className="w-20 h-20 rounded-full object-cover transition-transform transform hover:scale-105 hover:shadow-lg" />
              <Image src="/author1.png" alt="Author 2" className="w-20 h-20 rounded-full object-cover transition-transform transform hover:scale-105 hover:shadow-lg" />
            </div>
          </motion.div>

          <div className="mt-10 md:p-6 2xl:p-8 bg-white border shadow-md rounded-lg text-center">
            <p className="font-medium text-[20px] mt-2 text-center">If You Need Any Help Contact With Us</p>
            <Link href={"/contactus"}>
              <button className="mt-3 px-4 py-2 mb-2 md:px-8 md:py-2 2xl:px-10 2xl:py-4 bg-[#FE5722] text-white rounded-full font-medium shadow-md hover:bg-orange-600 transition">
                Contact Us
              </button>
            </Link>
          </div>

          <div className="mt-10 p-8 bg-white border shadow-md rounded-lg h-[132px]">
            <p className="text-[18px] font-medium">Follow Us</p>
            <div className="mt-3 flex justify-start gap-4 text-black">
              <Send className="w-[30px] h-[30px] cursor-pointer hover:text-orange-500 transition" />
              <FaInstagram className="w-[30px] h-[30px] cursor-pointer hover:text-orange-500 transition" />
              <FaFacebookF className="w-[30px] h-[30px] cursor-pointer hover:text-orange-500 transition" />
            </div>
          </div>
        </div>
         
        
      </div>

      
    </div>
  );
}
