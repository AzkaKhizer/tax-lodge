"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function Business() {
  return (
    <section className="w-full mb-10 pt-6">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative h-[250px] md:h-full sm:w-full sm:min-h-[400px] rounded-r-[200px] overflow-hidden mx-auto"
      >
        {/* Background Image */}
        <Image
          src="/onlinetax.png"
          alt="Office Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />

        {/* Overlay Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute inset-0 flex flex-col justify-center bg-[#741C0059] rounded-r-[200px] bg-opacity-50 text-white px-5 pr-8 sm:px-6"
        >
          <h2 className="text-[18px] md:text-[42px] font-bold text-white pl-2 sm:pl-4">
            Whether you operate as a sole trader, in a partnership, as a company, or through a trust, you can lodge your business tax return online now with assistance of an IPA Tax Accountant.
          </h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 sm:mt-6 px-6 sm:px-10 py-2 sm:py-4 w-[150px] md:w-[220px] 2xl:w-[250px] bg-[#FE5722] text-[14px] md:text-[18px] 2xl:text-[20px] text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition"
          >
            GET STARTED
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
