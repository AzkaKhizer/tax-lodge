"use client"

import Image from 'next/image';
import CommentsSection from './BlogComments';
import { Send } from "lucide-react"; 
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import Link from 'next/link';
import { motion } from 'framer-motion';
import RelatedBlog4 from './RelatedBlog4';

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

export default function TaxArticle4() {
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
        Understanding GST Obligations for Businesses
        </motion.h1>
        <motion.p className='text-gray-600 mb-4 mt-6' variants={fadeIn}>
          March 20, 2025 • 5 min read
        </motion.p>
        <motion.p className='text-gray-700 mb-6' variants={fadeIn}>
          By <span className='font-semibold'>Murtaza Ali Haider</span>, Tax Lodge Online
        </motion.p>

        <motion.p className='text-gray-700 mb-4' variants={fadeIn}>
        The Goods and Services Tax (GST) is a broad-based tax of 10% applied to most goods, services, and other items sold or consumed in Australia. Businesses play a crucial role in collecting this tax and passing it on to the Australian Taxation Office (ATO), ensuring the system runs smoothly and fairly.
        </motion.p>

        <motion.div className='mb-6' variants={fadeIn}>
          <Image
            src='/blogpg4.png'
            alt='Tax documents on a desk'
            width={783}
            height={472}
            className='rounded-md shadow hover:scale-105'
          />
        </motion.div>

        {[
          ["What Does GST Apply To?", [
             "GST covers a wide range of products and services, including:",
             "Everyday Goods: Clothing, electronics, cars, and household items.",
             "Services: Professional services like consulting, accounting, and trades.",
          ]],
             ["Items that are exempt from GST",[
            "However, some items are exempt fom GST, such as:",
             "Basic Food Items: Fresh fruits, vegetables, and bread.",
             "Medical Services: Doctor’s consultations and hospital treatments.",
             "Education and Training: Certain courses and learning materials."
           ],
        ],
        
           ["Claiming GST Credits", [
             "If a business pays more GST on its expenses than it collects from sales, it may be entitled to a refund from the ATO. Conversely, if it collects more GST from sales than it pays, it must remit the excess to the ATO."
             
             
           ],
        ],
           ["Record-Keeping and Compliance", [
            "The ATO may conduct audits to ensure businesses are meeting their GST obligations, so keeping thorough records is crucial. Accurate records are essential for GST compliance. Businesses should track:",
            "Sales and Purchases: Document all transactions involving GST.",
            "GST Paid and Collected: Maintain clear records of amounts paid and collected."
             
           ]],
          
           ["Conclusion", [
             "Understanding and managing GST obligations is vital for any business operating in Australia. Whether you're just starting out or running an established enterprise, staying compliant helps avoid penalties and ensures smooth operations. Seeking guidance from a tax professional can make the process even easier, helping you focus on what you do best — growing your business."
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

        <RelatedBlog4/>

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
                    <Image src="/author2.png" alt="Author 1" width={20} height={20} className="w-20 h-20 rounded-full object-cover transition-transform transform hover:scale-105 hover:shadow-lg" />
                    <Image src="/author1.png" alt="Author 2" width={20} height={20} className="w-20 h-20 rounded-full object-cover transition-transform transform hover:scale-105 hover:shadow-lg" />
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
