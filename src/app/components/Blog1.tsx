"use client"

import Image from 'next/image';
import CommentsSection from './BlogComments';
import { Send } from "lucide-react"; 
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import Link from 'next/link';
import { motion } from 'framer-motion';
import RelatedBlogs from './RelatedBlog1';

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

export default function TaxArticle() {
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
          Navigating Personal Tax Returns with Ease
        </motion.h1>
        <motion.p className='text-gray-600 mb-4 mt-6' variants={fadeIn}>
          March 20, 2025 • 5 min read
        </motion.p>
        <motion.p className='text-gray-700 mb-6' variants={fadeIn}>
          By <span className='font-semibold'>Murtaza Ali Haider</span>, Tax Lodge Online
        </motion.p>

        <motion.p className='text-gray-700 mb-4' variants={fadeIn}>
          Lodging your tax return online is a convenient option for Australian taxpayers. It’s faster, more secure, and when you choose an online tax return lodgement service, your submission will be reviewed by a qualified tax accountant. In this post, we’ll guide you through the process step-by-step.
        </motion.p>

        <motion.div className='mb-6' variants={fadeIn}>
          <Image
            src='/blogdetail.png'
            alt='Tax documents on a desk'
            width={783}
            height={472}
            className='rounded-md shadow hover:scale-105'
          />
        </motion.div>

        {[
          ['Benefits of Online Tax Return Lodgement', [
            'Convenience: Complete your tax return from anywhere, at any time, using your smartphone or other devices with internet access.',
            'Speed: Our accountants review your tax return and process it within 24 hours, helping you receive your refund faster.',
            'Accuracy: The system reduces the risk of errors by checking for common mistakes and prompting you for any missing information.',
            'Security: Tax Lodge Online ensures your personal information is protected with secure online processes.',
          ]],
          ['How to Get Started', [
            'Gather Your Tax Information: Collect your tax file number, income statements, receipts for deductions, and any other relevant documents. Don’t worry — we guide you based on your work situation.',
            'Choose a Reliable Service: Our platform offers a simple, user-friendly experience with expert tax accountants ensuring accuracy and compliance.',
            'Complete Your Tax Return: The platform guides you step-by-step, asking for necessary information and ensuring no detail is overlooked.',
            'Submit Your Tax Return: Once completed, submit your tax return securely through our platform.',
          ]],
          ['Common Mistakes to Avoid', [
            'Forgetting to include all sources of income, like side hustles or capital gains.',
            'Claiming deductions you’re not entitled to or forgetting legitimate ones.',
            'Not keeping proper records of income and expenses.',
            'Failing to seek professional advice when needed.',
          ]],
          ['Conclusion', ['Lodging your tax return online is convenient, fast, and reliable. Choosing Tax Lodge Online means having the added confidence that your lodgment is reviewed by a qualified tax accountant. Get started today and enjoy a stress-free tax return process!']],
        ].map(([heading, content], index) => (
          <motion.div key={index} variants={fadeIn}>
           <h2 className='text-2xl font-semibold mb-2 mt-2 md:mb-4 md:mt-4'>{heading}</h2>
{(Array.isArray(content) ? content : [content]).map((item, i) => (
  <p key={i} className='text-gray-700 '>
    {item}
  </p>
            ))}
          </motion.div>
        ))}

        <motion.h1 className='text-3xl md:text-4xl font-semibold mt-5 mb-3 md:mt-10 md:mb-6' variants={fadeIn}>
          Do You Need to Lodge a Tax Return?
        </motion.h1>
        <motion.p className='text-gray-700' variants={fadeIn}>
          You are required to lodge a tax return if your income exceeds the tax-free threshold for the financial year.
        </motion.p>
        <motion.ul className='list-disc list-inside text-gray-700' variants={fadeIn}>
          <li>Tax-Free Threshold: For the 2021-22 financial year, the threshold is $18,200. If you earned less, you don’t need to lodge a return.</li>
          <li>Mandatory Lodgment: If you earned more than $18,200, you must lodge a return — even if no tax is owed — to report income and claim deductions.</li>
        </motion.ul>

        <motion.p className='text-gray-700' variants={fadeIn}>
          Other situations requiring lodgment include:
        </motion.p>
        <motion.ul className='list-disc list-inside text-gray-700' variants={fadeIn}>
          <li>Tax withheld from payments.</li>
          <li>Foreign income, including pensions or annuities.</li>
          <li>Distributions from trusts, partnerships, or managed funds.</li>
          <li>Eligibility for the private health insurance rebate.</li>
          <li>Receipt of taxable government payments, like Centrelink benefits.</li>
        </motion.ul>

        <motion.p className='text-gray-700' variants={fadeIn}>
          Ready to lodge your tax return? Click the "Get Started" button and let an IPA Certified Tax Accountant handle the process for you.
        </motion.p>

        <motion.button
          className='bg-[#FE5722] mt-6 rounded-[50px] text-white py-4 px-8 hover:bg-orange-600 transition'
          variants={fadeIn}
        >
          GET STARTED
        </motion.button>
        <CommentsSection/>
      </motion.div>

      
    </div>

     
      
    

      <div className='w-full md:w-[400px] mx-auto md:pr-4'>

        <RelatedBlogs/>

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
