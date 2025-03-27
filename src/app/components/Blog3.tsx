"use client"

import Image from 'next/image';
import CommentsSection from './BlogComments';
import { Send } from "lucide-react"; 
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import Link from 'next/link';
import { motion } from 'framer-motion';
import RelatedBlog3 from './RelatedBlog3';

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

export default function TaxArticle3() {
  return (
    <div className='md:flex justify-center md:space-x-8 overflow-x-hidden mx-auto'>
        
        <div className='md:flex justify-center'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='mx-auto p-6 bg-white mt-10 md:w-[800px]'
      >
        <motion.h1 className='text-3xl md:text-6xl font-semibold mb-2' variants={fadeIn}>
        Small Business Guide to Company Tax
        </motion.h1>
        <motion.p className='text-gray-600 mb-4 mt-6' variants={fadeIn}>
          March 20, 2025 • 5 min read
        </motion.p>
        <motion.p className='text-gray-700 mb-6' variants={fadeIn}>
          By <span className='font-semibold'>Murtaza Ali Haider</span>, Tax Lodge Online
        </motion.p>

        <motion.p className='text-gray-700 mb-4' variants={fadeIn}>
        Running a small business comes with exciting opportunities — but understanding your tax obligations is crucial to staying compliant and maximizing your returns. In Australia, small businesses that qualify as base rate entities enjoy a reduced company tax rate, making it essential to know where your business stands and what you need to do come tax time.
        </motion.p>

        <motion.div className='mb-6' variants={fadeIn}>
          <Image
            src='/blog3.png'
            alt='Tax documents on a desk'
            width={783}
            height={472}
            className='rounded-md shadow hover:scale-105'
          />
        </motion.div>

        {[
          ["What Is a Base Rate Entity?", [
             "A base rate entity is a company that meets the following criteria:",
             "Has an annual turnover of less than $50 million for the 2021-22 financial year and onwards.",
             "Derives no more than 80% of its assessable income from passive sources like dividends, interest, and rent. If your business fits this category, you benefit from a reduced company tax rate of 25% on your taxable income.",
           ]],
           ["Calculating Taxable Income", [
             "Taxable income is calculated by deducting allowable business expenses from your total income. Allowable deductions include:",
             "Salaries and Wages: Payments to employees, including superannuation contributions.",
             "Rent and Utilities: Costs related to business premises.",
             "Office Supplies and Equipment: Items necessary for daily operations.",
             "Marketing and Advertising: Expenses incurred in promoting your business",
             
           ],
        ],
           ["Lodging Your Tax Return", [
             "Small business companies are required to lodge an annual tax return with the Australian Taxation Office (ATO) and pay any tax owed by the due date:",
             "The standard deadline for lodgment is usually 28 February of the following financial year.",
             "If your company is registered with a tax agent, you may be eligible for an extended deadline.",
             
           ]],
           ["Additional Tax Obligations", [
             "Small businesses may have other tax obligations separate from company tax, including:",
             "Goods and Services Tax (GST): A 10% tax on most goods and services sold in Australia. Businesses with a turnover of $75,000 or more must register for GST.",
             "Fringe Benefits Tax (FBT): Tax on non-cash benefits provided to employees, such as company cars or entertainment expenses.",
             
           ]],
           ["Seeking Professional Help", [
             'Navigating small business tax obligations can feel overwhelming, but you don’t have to do it alone. A qualified tax professional can help ensure your business stays compliant while making the most of the deductions and credits available to you. Are you ready to get your small business tax sorted? Click the "Get Started" button to connect with an IPA Certified Tax Accountant today!'
           ]],
           
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

     
      
    

      <div className='w-full md:w-[400px]  mx-auto md:pr-4'>

        <RelatedBlog3/>

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
                    <img src="/author2.png" alt="Author 1" className="w-20 h-20 rounded-full object-cover transition-transform transform hover:scale-105 hover:shadow-lg" />
                    <img src="/author1.png" alt="Author 2" className="w-20 h-20 rounded-full object-cover transition-transform transform hover:scale-105 hover:shadow-lg" />
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
