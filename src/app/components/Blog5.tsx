"use client"

import Image from 'next/image';
import CommentsSection from './BlogComments';
import { Send } from "lucide-react"; 
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import Link from 'next/link';
import { motion } from 'framer-motion';
import RelatedBlog5 from './RelatedBlog5';

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

export default function TaxArticle5() {
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
        Superannuation is a retirement savings scheme in Australia that ensures individuals have funds set aside for their future. Employers play a key role in this system by contributing a percentage of an employee’s wages into their super fund. Understanding how superannuation works is essential to making the most of these contributions and planning for a secure retirement.
        </motion.p>

        <motion.div className='mb-6' variants={fadeIn}>
          <Image
            src='/blog5.png'
            alt='Tax documents on a desk'
            width={783}
            height={472}
            className='rounded-md shadow hover:scale-105'
          />
        </motion.div>

        {[
          ["Employer Contributions", [
             "From 1 July 2022 for the 2022-23 financial year, employers are required to contribute at least 10.5% of an employee's ordinary time earnings into their super fund. These contributions are made on top of the employee’s regular wages or salary. Ordinary time earnings include:",
              "Base salary or wages",
              "Commissions and allowances",
              "Some bonuses",
          ]],
             ["Personal Contributions and Tax Benefits",[
            "Employees can also make additional contributions to their super fund. These can be made from their pre-tax income, known as concessional contributions, which can also be claimed as tax deductions. However, there are limits to these contributions:",
            "Concessional Contribution Cap: $27,500 per year for the 2022-23 financial year.",
            "Non-Concessional Contribution Cap: $110,000 per year for after-tax contributions.",
            "Exceeding these limits results in taxation at your marginal tax rate, plus additional excess contributions tax."
           ],
        ],
        
           ["Investment and Access", [
             "The money in your super fund is invested on your behalf, and earnings on these investments are tax-free. Access to these funds is generally restricted until you reach a certain age, which is currently 60 for most people. Early Access: In certain circumstances, you may be able to access your super early, such as:",
            "Experiencing severe financial hardship.",
            "Having a terminal medical condition."
             
             
           ],
        ],
           ["Choosing the Right Super Fund", [
            "Selecting a super fund that aligns with your financial goals is crucial. Consider factors like:",
             "Fees: High fees can erode your savings over time.",
             "Performance: Assess the fund’s investment returns.",
             "Investment Options: Some funds offer diverse portfolios, allowing you to choose between growth, balanced, or conservative investment strategies."
             
           ]],

           ["Seeking Professional Advice", [
            "Navigating superannuation can be complex. Consulting a registered financial adviser can help you:",
            "Optimize contributions.",
             "Understand investment strategies.",
             "Plan for a comfortable retirement."
             
           ]],
          
           ["Conclusion", [
             "Superannuation is more than just a retirement savings plan; it’s a long-term investment in your financial future. Understanding the rules, maximizing contributions, and making informed decisions about your super fund can pave the way for a secure and fulfilling retirement. Staying informed and seeking professional advice ensures you’re on the right path to achieving your retirement goals."
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

        <RelatedBlog5/>

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
