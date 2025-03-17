"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const WelcomeSection = () => {
  return (
    <div className="flex justify-center">
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:pl-10 2xl:mx-20 md:mr-20 py-12">
      {/* Left - Image */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full p-4"
      >
        <Image
          src="/calculatorgirl.png"
          alt="Using a calculator"
          width={500}
          height={333}
          className="rounded-[20px] shadow-md md:w-[500px] lg:w-[700px] hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      {/* Right - Content */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:w-1/2 2xl:w-full mt-6 md:mt-0"
      >
        <h1 className="text-[25px] md:text-[50px] 2xl:text-[60px] text-[#1E1E1E] font-bold mb-2 w-[900px]">
          Welcome To Pay Calculator
        </h1>
        <p className="text-[#1E1E1E] text-[12px] md:text-[16px] 2xl:text-[20px] mb-2">
          Easily calculate your net income after factoring in tax withheld, superannuation entitlement, HELP debt (if applicable), Medicare levy, and any tax offset entitlement using the tool below.
        </p>

        <ul className="space-y-2 text-gray-700 text-[12px] md:text-[16px] 2xl:text-[20px]">
          {["Enter your gross income (before tax) in the '$' box.", "Select the relevant income period (weekly, monthly, yearly).", "Click on the 'Calculate' button."].map((text, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 * index }}
              className="flex items-center hover:text-[#FF5733] transition-colors duration-300"
            >
              <span className="w-6 h-6 flex items-center justify-center bg-[#FFAB91] text-white font-bold rounded-full mr-3">
                ✓
              </span>
              {text}
            </motion.li>
          ))}
        </ul>

        <p className="mt-2 text-[#1E1E1E] text-[12px] md:text-[16px] 2xl:text-[20px]">
          The calculator will provide you with an estimate of your net income, which represents the amount you will receive after accounting for all the deductions mentioned above.
        </p>
      </motion.div>
    </section>
    </div>
  );
};

export default WelcomeSection;
