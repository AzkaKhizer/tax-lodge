"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BusinessTaxSection() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageHover = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const textHover = {
    hover: {  transition: { duration: 0.3 } },
  };

  return (
    <section className="container mx-auto px-4 py-12 space-y-16">
      {/* Section 1 */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.div
          className="md:w-1/2"
          whileHover="hover"
          variants={imageHover}
        >
          <Image src="/pic1.png" alt="Analysis" width={600} height={340} className="rounded-lg" />
        </motion.div>
        <div className="md:w-1/2">
          <motion.p
            className="text-gray-700 text-[16px] md:text-[18px] 2xl:text-[20px]"
            whileHover="hover"
            variants={textHover}
          >
           Sole traders in Australia are required to lodge a tax return with the Australian Taxation Office (ATO) every year, even if their income is $0. Unlike companies, sole traders are taxed on their net business income, meaning they must report all earnings and deduct any business-related expenses to determine their taxable income. To help reduce tax liability, sole traders can claim various deductions, including costs related to rent, equipment, and travel. Proper tax planning and record-keeping are essential to maximize deductions and ensure compliance with ATO regulations. By accurately reporting income and expenses, sole traders can minimize tax obligations while staying within legal requirements.
          </motion.p>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.div
          className="md:w-1/2"
          whileHover="hover"
          variants={imageHover}
        >
          <Image src="/pic2.png" alt="Handshake" width={600} height={400} className="rounded-lg" />
        </motion.div>
        <div className="md:w-1/2">
          <motion.p
            className="text-gray-700 text-[16px] md:text-[18px] 2xl:text-[20px]"
            whileHover="hover"
            variants={textHover}
          >
           Partnerships are a widely used business structure in Australia, where two or more individuals operate a business together with the intention of making a profit. Unlike sole traders, partnerships must lodge a separate tax return every year, detailing their income, deductions, expenses, and profit distribution among partners. However, the partnership itself does not pay tax; instead, each partner reports their share of the profits on their individual tax return. The Australian Taxation Office (ATO) mandates that partnership tax returns be submitted by October 31st for standard tax years. Given the ATO’s strict oversight, non-compliance can lead to penalties or fines. To avoid errors and ensure accurate reporting, seeking professional tax advice is highly recommended.                                           
          </motion.p>
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.div
          className="md:w-1/2"
          whileHover="hover"
          variants={imageHover}
        >
          <Image src="/pic3.png" alt="Meeting" width={600} height={400} className="rounded-lg" />
        </motion.div>
        <div className="md:w-1/2">
          <motion.p
            className="text-gray-700 text-[16px] md:text-[18px] 2xl:text-[20px]"
            whileHover="hover"
            variants={textHover}
          >
           Filing your company tax return online with the Australian Taxation Office (ATO) is a fast, convenient, and stress-free solution for businesses. Our secure online portal allows you to submit your tax return anytime, from anywhere, eliminating the hassle of paper forms and long queues. Online lodgment ensures your business stays compliant with tax laws and regulations, helping you avoid penalties and fines. Additionally, you can maximize tax savings and deductions, while also receiving potential refunds much faster. With a reliable, user-friendly platform, managing your company’s tax obligations has never been easier.  
          </motion.p>
        </div>
      </motion.div>

      {/* Section 4 */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.div
          className="md:w-1/2"
          whileHover="hover"
          variants={imageHover}
        >
          <Image src="/pic4.png" alt="Teamwork" width={600} height={400} className="rounded-lg" />
        </motion.div>
        <div className="md:w-1/2">
          <motion.p
            className="text-gray-700 text-[16px] md:text-[18px] 2xl:text-[20px]"
            whileHover="hover"
            variants={textHover}
          >
           A trust tax return is essential for maintaining compliance and ensuring tax efficiency. Trusts are widely used for wealth management, asset protection, and tax planning, offering a structured way to distribute income among beneficiaries. Since trusts are taxed separately from their beneficiaries, a tax return must be lodged annually to report income, deductions, expenses, and distributions. In most cases, trusts distribute all profits to beneficiaries to minimize tax liabilities and avoid the highest tax rates. Properly managing a trust tax return requires careful planning and expert guidance to ensure compliance with Australian Taxation Office (ATO) regulations.
          </motion.p>
        </div>
      </motion.div>

      {/* Button */}
      <motion.div
        className="mt-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        viewport={{ once: true }}
      >
        <motion.button
          className="bg-[#FE5722] text-white px-8 py-3 text-[16px] md:px-10 md:py-4 md:text-[18px] 2xl:px-12 2xl:py-6 2xl:text-[20px] rounded-full font-semibold shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          GET TAX RETURN
        </motion.button>
      </motion.div>
    </section>
  );
}
