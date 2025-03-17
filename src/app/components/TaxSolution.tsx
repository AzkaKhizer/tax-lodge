
"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:justify-between bg-[#FF8B66] text-white md:pl-12 mt-28 mx-auto overflow-x-hidden">
      {/* Left Content */}
      <motion.div
        className="md:w-1/2 flex justify-center items-start ml-5 md:ml-20 flex-col"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-[30px] md:text-[44px] font-semibold md:w-[578px] mb-6 mt-4 md:mt-0 md:mb-10">
          Smart Tax Solutions for You & Your Business
        </h2>
        <div className="flex flex-wrap gap-4 mt-4 mb-4">
          <motion.button
            className="bg-white text-[#FF8B66] w-[235px] px-2 md:px-6 py-3 rounded-md font-semibold shadow-md hover:bg-gray-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            SCHEDULE A CONSULTATION
          </motion.button>
          <motion.button
            className="border-2 border-white w-[235px] md:px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#FF8B66]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            START YOUR JOURNEY
          </motion.button>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="w-full md:w-1/2 flex md:justify-end mt-6 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image
          src="/orange.png"
          alt="Tax Solutions"
          width={500}
          height={300}
          className="shadow-lg w-full "
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;