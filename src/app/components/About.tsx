"use client"; 

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex justify-center items-center md:ml-20">
      {/* Image Section */}
      <div className="relative hidden md:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }} 
        >
          <Image src="/teamwork.png" alt="pic" width={674} height={389} className="mt-52" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute bottom-[-80px] left-[-70px]"
        >
          <Image src="/Group.png" alt="pic" width={204} height={167} />
        </motion.div>
      </div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center items-center md:justify-end p-2 md:p-4 md:mr-32 mt-8 md:mt-16"
      >
        <div className="flex flex-col justify-start items-start">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white flex justify-center items-center mb-3 font-semibold rounded-[10px] border bg-[#FFAB91] w-[106px] h-[32px]"
          >
            ABOUT US
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-[28px] md:text-[44px] md:w-[320px] font-bold"
          >
            Empowering Individuals & Businesses with Expert Tax Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[16px] md:w-[360px] mt-4"
          >
            Our registered tax practitioners carefully review your submission for accuracy,
            compliance, and potential tax savings. Once verified, we lodge your tax return with
            the Australian Taxation Office (ATO) on your behalf.
          </motion.p>

          {/* Review Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#EDF5FF] md:bg-[#FFAB914D] w-full md:w-[376px] h-[220px] flex mt-3 md:mt-4 rounded-[10px]"
          >
            <div className="mt-7 ml-7 relative">
              <Image src="/Rectangle1.png" alt="rectangle" width={60} height={60} />
              <Image src="/pie-chart1.png" alt="rectangle" width={32} height={32} className="absolute top-3 left-3" />
            </div>
            <div className="flex flex-col ml-6 mt-3 md:mt-5 mb-5">
              <h2 className="text-[20px] font-semibold mb-2">We Review And Lodge</h2>
              <p className="text-[16px] w-[231px]">
                From personal tax returns to business tax compliance, we offer tailored solutions
                designed to simplify the process and maximize your returns.
              </p>
              <div className="block md:hidden">
                <Link href="/" className="text-[#FE5722] text-lg font-semibold hover:text-orange-700">
                  LEARN MORE
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Learn More Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block w-[200px] h-[58px] bg-[#FF8B66] hover:bg-orange-500 text-white rounded-[10px] mt-4"
          >
            LEARN MORE
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
