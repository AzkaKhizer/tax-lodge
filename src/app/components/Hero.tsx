"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TotalSavesCard from "./savescard";
import NewClientsCard from "./clientCard";
import EarningsCard from "./dollarCard";

const Hero = () => {


  return (
    
    <div className=" md:pt-10  md:mb-20  ">
      <div className="hidden md:block">
        <div className="flex justify-center 2xl:ml-80">
      <div className="bg-[#F2F2F2] flex items-center justify-center md:h-[650px] 2xl:h-[850px] ">
        <div className="w-full mx-auto flex justify-center items-center px-2 ">
          {/* Left Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="md:max-w-[750px] 2xl:max-w-[1200px] h-auto  md:ml-4 lg:ml-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className=" md:text-[20px] 2xl:text-[22px] font-semibold text-white border border-[#FE5722] rounded-[8px] bg-[#FE5722] px-4 py-2 w-fit"
            >
              SMART TAX SOLUTIONS FOR FINANCIAL SUCCESS
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="md:text-[44px] 2xl:text-6xl  font-bold mt-4 leading-tight"
            >
              Effortless Tax Solutions & Trusted Financial Guidance.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="md:text-[18px] 2xl:text-[22px] mt-6"
            >
              We provide expert tax and accounting services designed to make tax lodgment
              stress-free, ensuring individuals and businesses stay compliant while maximizing
              their financial benefits.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.1 }}
              className="bg-[#FE5722] hover:scale-105 md:text-lg 2xl:text-[25px] mt-6 text-white font-semibold md:py-3 md:px-8 2xl:py-6 2xl:px-10  rounded-[10px] hover:bg-orange-300 hover:text-[#FE5722] transition duration-300"
            >
              GET STARTED
            </motion.button>
          </motion.div>

          {/* Right Image Section */}
          

            {/* Man Image - No Hover Effect */}
            <div className="relative h-full w-full">
            <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.7 }}
  className="relative object-cover 
             w-[650px] h-[750px] 
             md:w-[650px] md:h-[750px] 
             2xl:w-[950px] 2xl:h-[1050px] 
             bg-no-repeat 
             md:bg-[position:70px_150px] 
             2xl:bg-[position:180px_150px] 
             translate-y-[50px]" // ✅ Tailwind handles translation!
  style={{ backgroundImage: "url('/background.png')" }} // ✅ Only keeps the image URL inline
>
  <Image
    src="/man.png"
    alt="hero person"
    width={950}
    height={1050}
    className="transition-transform duration-300 
               md:w-[520px] md:h-[530px] 
               2xl:w-[740px] 2xl:h-[780px] 
               translate-y-[250px] translate-x-[40px]" // ✅ Tailwind handles the man’s position
  />
</motion.div>

  




<motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.8 }}
    className="absolute md:left-[80px] md:top-[220px] 2xl:top-[250px] 2xl:left-[100px]"
  >
    <TotalSavesCard />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.8 }}
    className="absolute md:left-[-50px] md:top-[540px] 2xl:top-[750px] 2xl:left-[-80px]"
  >
    <NewClientsCard/>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.8 }}
    className="absolute 2xl:block md:left-[420px] md:top-[390px] 2xl:top-[430px] 2xl:left-[550px]"
  >
    <EarningsCard/>
  </motion.div>

        </div>
      </div>
      </div>
      </div>
      </div>
    
      {/* Mobile View */}
      <div className="block md:hidden bg-white">
  <motion.div
    className="flex flex-col justify-center items-center text-center px-6 mt-5"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    <h2 className="text-[40px] mt-24 font-bold">
      Welcome To <span className="text-[#FE5722]">Tax Lodge Online</span>
    </h2>
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src="/tlo.png"
        alt="tlo"
        width={405}
        height={243}
        className="w-full h-auto object-contain mt-4"
      />
    </motion.div>
  </motion.div>
</div>
</div>
    
  );
};

export default Hero;
