"use client"

import { Phone, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const iconHover = { scale: 1.1, transition: { duration: 0.3 } };

const ContactInfo = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Call Us */}
      <motion.div
        className="bg-[#FFAB914F] p-6 rounded-lg shadow-md flex flex-col items-center text-center cursor-pointer"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover={{ scale: 1.05 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="bg-[#FF8B66] w-[80px] h-[80px] p-3 rounded-lg mt-4 mr-4 flex justify-center items-center"
          whileHover={iconHover}
        >
          <Phone className="text-black w-6 h-6" />
        </motion.div>
        <div className="flex flex-col justify-start items-start">
          <p className="text-[#1E1E1E] mt-6">24/7 Service</p>
          <h3 className="text-[22px] font-semibold">Call Us Today</h3>
        </div>
        <hr className="w-full my-3 border-white pt-4 mt-8" />
        <a href="#" className="text-[#1E1E1E] hover:text-orange-500">
          +(03) 8904 8602
        </a>
        <a href="#" className="text-[#1E1E1E] hover:text-orange-500">
          +(03) 8904 8602
        </a>
      </motion.div>

      {/* Our Location */}
      <motion.div
        className="bg-[#FFAB914F] p-6 rounded-lg shadow-md flex flex-col items-center text-center cursor-pointer"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover={{ scale: 1.05 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="bg-[#FF8B66] w-[80px] h-[80px] p-3 rounded-lg mt-4 mr-4 flex justify-center items-center"
          whileHover={iconHover}
        >
          <MapPin className="text-black w-6 h-6" />
        </motion.div>
        <div className="flex flex-col justify-start items-start">
          <p className="text-[#1E1E1E] mt-6">Address</p>
          <h3 className="text-[22px] font-semibold">Our Location</h3>
        </div>
        <hr className="w-full my-3 border-white pt-4 mt-8" />
        <a
          href="mailto:support@toxiqdeonline.com.au"
          className="text-[#1E1E1E] hover:text-orange-500"
        >
          Level 2, 311 Lonsdale Street, Dandenong, Victoria 3175, Australia
        </a>
      </motion.div>

      {/* Mail Information */}
      <motion.div
        className="bg-[#FFAB914F] p-6 rounded-lg shadow-md flex flex-col items-center text-center cursor-pointer"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover={{ scale: 1.05 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="bg-[#FF8B66] p-3 rounded-lg mr-4 w-[80px] h-[80px] flex justify-center items-center"
          whileHover={iconHover}
        >
          <Mail className="text-black w-6 h-6" />
        </motion.div>
        <div className="flex flex-col justify-start items-start">
          <p className="text-[#1E1E1E] mt-3">Dropline</p>
          <h3 className="text-[22px] font-semibold">Mail Information</h3>
        </div>
        <hr className="w-full my-3 border-white pt-4 mt-8" />
        <a
          href="mailto:support@toxiqdeonline.com.au"
          className="text-[#1E1E1E] hover:text-orange-500"
        >
          support@toxiqdeonline.com.au
        </a>
      </motion.div>
    </section>
  );
};

export default ContactInfo;
