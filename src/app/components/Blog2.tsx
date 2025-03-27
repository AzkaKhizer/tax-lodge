"use client"

import Image from 'next/image';
import CommentsSection from './BlogComments';
import { Send } from "lucide-react"; 
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import Link from 'next/link';
import { motion } from 'framer-motion';
import RelatedBlog1 from './RelatedBlog2';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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

export default function TaxArticle2() {
  return (
    <div className='md:flex justify-center md:space-x-8 overflow-x-hidden mx-auto'>
        
        <div className='md:flex justify-center '>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='mx-auto p-6 bg-white mt-10 md:w-[800px]'
      >
        <motion.h1 className='text-3xl md:text-6xl font-semibold mb-2' variants={fadeIn}>
        Reporting Income and Deductions in Partnerships
        </motion.h1>
        <motion.p className='text-gray-600 mb-4 mt-6' variants={fadeIn}>
          March 20, 2025 • 5 min read
        </motion.p>
        <motion.p className='text-gray-700 mb-6' variants={fadeIn}>
          By <span className='font-semibold'>Murtaza Ali Haider</span>, Tax Lodge Online
        </motion.p>

        <motion.p className='text-gray-700 mb-4' variants={fadeIn}>
        Managing taxes for a partnership in Australia requires understanding some key processes and obligations. Unlike other business structures, partnerships aren’t taxed as separate entities. Instead, each partner is taxed on their share of the partnership’s net income. Let’s dive deeper into how partnership tax works and what you need to know.
        </motion.p>

        <motion.div className='mb-6' variants={fadeIn}>
          <Image
            src='/blog2.png'
            alt='Tax documents on a desk'
            width={783}
            height={472}
            className='rounded-md shadow hover:scale-105'
          />
        </motion.div>

        {[
  ["What Is a Partnership?", [
    "A partnership is a business structure where two or more individuals (or entities) come together to carry on a business with the intention of making a profit. Partnerships are popular due to their simplicity and flexibility, but they come with specific tax responsibilities."
  ]],
  ["Lodging a Partnership Tax Return", [
    "Every partnership must lodge a partnership tax return each financial year to report its income and claim any deductions or credits it’s entitled to. The due date for lodging the partnership tax return is generally 31 October following the end of the financial year (30 June). However, if a registered tax agent represents the partnership, the deadline may be extended to 15 May of the following year."
  ]],
  ["What to Include in a Partnership Tax Return", [
    "When preparing the partnership tax return, you’ll need to include details of:",
    "Gross Income: The total income earned by the partnership during the financial year.",
    "Business Expenses: Costs incurred while running the business, such as rent, salaries, utilities, and supplies.",
    "Tax Withheld: Any tax withheld from payments made to employees or contractors.",
    "Tax Credits: Credits the partnership may be entitled to, such as franking credits or foreign tax credits."
  ]],
  ["How Is the Income Taxed?", [
    "The partnership itself doesn’t pay income tax. Instead:",
    "The partnership’s net income or loss is distributed among the partners according to their partnership agreement.",
    "Each partner then reports their share of the partnership’s income (or loss) in their personal tax return.",
    "Partners pay tax at their individual tax rates.",
    "This structure ensures transparency and fairness, as each partner is responsible for their own tax obligations."
  ]],
  ["Avoiding Common Mistakes", [
    "To make sure the tax lodgment process goes smoothly, avoid these common pitfalls:",
    "Incomplete Records: Keep detailed records of all income and expenses.",
    "Incorrect Income Reporting: Include all income sources related to the partnership.",
    "Missing Deadlines: Lodge your tax return on time to avoid penalties."
  ]],
  ["Seeking Professional Help", [
    'Navigating partnership tax obligations can be complex, especially when dealing with shared finances and tax credits. Working with a qualified tax accountant ensures accuracy and compliance while maximizing your tax benefits. Ready to lodge your partnership tax return? Click the "Get Started" button and let an IPA Certified Tax Accountant handle the process for you, giving you peace of mind and more time to focus on growing your business.',
    
  ]]
].map(([heading, content], index) => (
  <motion.div key={index} variants={fadeIn}>
    <h2 className="text-2xl font-semibold mb-2 mt-2 md:mb-4 md:mt-4">{heading}</h2>

    {Array.isArray(content) ? (
      content.some((item) => item.includes(":") || !item.endsWith(":")) ? (
        <>
          <p className="text-gray-700 font-medium mb-2">{content[0]}</p>

          
            <ul className="list-disc pl-5 text-gray-700">
              {content.slice(1).map((item, i) => (
                <li key={i} >
                  {item}
                </li>
              ))}
            </ul>
          
        </>
      ) : (
        content.map((item, i) => (
          <p key={i} className="text-gray-700 mb-2">
            {item}
          </p>
        ))
      )
    ) : (
      <p className="text-gray-700">{content}</p>
    )}
  </motion.div>
))}

          
        
        <CommentsSection/>
      </motion.div>

      
    </div>

     
      
    

      <div className='w-full md:w-[400px]   mx-auto md:pr-4'>

        <RelatedBlog1/>

                <motion.div className="mt-6 p-2 md:p-4 border rounded-md shadow-md"
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
                    <Image src="/author2.png" alt="Author 1" className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover transition-transform transform hover:scale-105 hover:shadow-lg" />
                    <Image src="/author1.png" alt="Author 2" className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover transition-transform transform hover:scale-105 hover:shadow-lg" />
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

  );
}
