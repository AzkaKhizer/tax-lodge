"use client"

import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    title: "Online Tax Return",
    price: "$99 / month",
    features: [
      "Salary and Wages income",
      "All work deductions included",
      "Eligible tax offsets applied",
      "Private Health Insurance",
      "Electronic signature",
      "Fast, easy and simple",
      "Prepared by Tax Accountant",
      "Additional charges may apply in supplementary section income",
    ],
    bgColor: "bg-white",
    textColor: "text-black",
    tickColor: "text-white",
    borderColor: "border-[#FF8B66]",
    borderBgColor: "bg-[#FF8B66]",
  },
  {
    title: "Complex Online Tax Return",
    price: "$245 / month",
    features: [
      "Salary and Wages income",
      "All work deductions included",
      "One Rental Property",
      "One Capital Gain",
      "10 Dividend income &",
      "$10 Additional dividend income",
      "Eligible tax offsets applied",
      "Private Health Insurance",
      "Electronic signature",
      "Fast, easy and simple",
      "Prepared by Tax Accountant",
    ],
    bgColor: "bg-orange-200",
    textColor: "text-black",
    tickColor: "text-[#FF8B66]",
    borderColor: "border-white",
    borderBgColor: "bg-white",
  },
  {
    title: "Sole Trader Online Tax Return",
    price: "$245 / month",
    features: [
      "Single Business income",
      "Business expenses",
      "EOFY GST Reconciliation",
      "All eligible deductions claimed",
      "Eligible tax offsets applied",
      "Private Health Insurance",
      "Electronic signature",
      "Prepared by Tax Accountant",
      "Additional charges apply where multiple business income",
    ],
    bgColor: "bg-orange-100",
    textColor: "text-black",
    tickColor: "text-[#FF8B66]",
    borderColor: "border-white",
    borderBgColor: "bg-white",
  },
  {
    title: "Rideshare Driver Tax Return",
    price: "$180 / month",
    features: [
      "Rideshare income",
      "Rideshare expenses",
      "EOFY GST Reconciliation",
      "All eligible deductions claimed",
      "Eligible tax offsets applied",
      "Private Health Insurance",
      "Electronic signature",
      "Fast, easy and simple",
      "Prepared by Tax Accountant",
    ],
    bgColor: "bg-white",
    textColor: "text-black",
    tickColor: "text-white",
    borderColor: "border-[#FF8B66]",
    borderBgColor: "bg-[#FF8B66]",
  },
];
const priceplans = [
  {
    heading: "Partnership Tax Return",
    price: "$495 / month",
    features: [
      "Partnership income",
      "Partnership expenses",
      "Partnership income distributed",
      "Eligible tax offsets applied",
      "Electronic signature",
      "Fast, simple and easy",
      "Prepared by Tax Accountant",
    ],
    bgColor: "bg-white",
    textColor: "text-black",
    tickColor: "text-white",
    borderColor: "border-[#FF8B66]",
    borderBgColor: "bg-[#FF8B66]",
  },
  {
    heading: "Company Tax Return",
    price: "$1195 / month",
    features: [
      "Company Income Statement",
      "Company Balance Sheet",
      "EOFY GST Reconciliation",
      "PAYGW Reconciliation",
      "Electronic signature",
      "Fast, easy and simple",
      "Prepared by Tax Accountant",
    ],
    bgColor: "bg-orange-200",
    textColor: "text-black",
    tickColor: "text-[#FF8B66]",
    borderColor: "border-white",
    borderBgColor: "bg-white",
  },
  {
    heading: "Trust Tax Return",
    price: "$1195 / month",
    features: [
      "Trust Income Statement",
      "Trust Balance Sheet",
      "EOFY GST Reconciliation",
      "PAYGW Reconciliation",
      "Electronic signature",
      "Fast, easy and simple",
      "Prepared by Tax Accountant",
    ],
    bgColor: "bg-orange-100",
    textColor: "text-black",
    tickColor: "text-[#FF8B66]",
    borderColor: "border-white",
    borderBgColor: "bg-white",
  },
  {
    heading: "Business Activity Statements",
    price: "$215 / month",
    features: [
      "GST Calculated",
      "PAYGW for up to 2 Employees",
      "PAYG Installment",
      "Electronic signature",
      "Prepared by Tax Accountant",
    ],
    bgColor: "bg-white",
    textColor: "text-black",
    tickColor: "text-white",
    borderColor: "border-[#FF8B66]",
    borderBgColor: "bg-[#FF8B66]",
  },
];

const Pricing = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Individual & Sole Trader Tax Returns */}
        <h1 className="text-4xl font-bold text-center mb-10 mt-10">
          Individual & Sole Trader Tax Returns
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`w-full sm:w-[416px] h-[580px] p-6 rounded-lg shadow-lg ${plan.bgColor} ${plan.textColor} flex flex-col`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-center">{plan.title}</h3>
              <p className="text-lg font-semibold mt-2 text-center">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-sm flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span
                      className={`rounded-full w-6 h-6 flex items-center justify-center mr-2 border-2 ${plan.borderColor} ${plan.borderBgColor}`}
                    >
                      <svg
                        className={`h-4 w-4 ${plan.tickColor}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-1 w-full mb-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                GET STARTED
              </button>
            </motion.div>
          ))}
        </div>
        <p className="flex justify-center items-center md:w-[850px] md:ml-32 mt-10 text-sm text-center">
          * Excludes Tax Returns that needs inclusion of supplementary section that can include income or loss from investment property, capital gains, foreign income, and business.
        </p>

        {/* Partnership & Business Entity Tax Returns */}
        <h1 className="text-4xl font-bold text-center mt-28 mb-10">
          Partnership & Business Entity Tax Returns
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {priceplans.map((plan, index) => (
            <motion.div
              key={index}
              className={`w-full sm:w-[416px] h-[580px] p-6 rounded-lg shadow-lg ${plan.bgColor} ${plan.textColor} flex flex-col transition-transform duration-300 hover:scale-105`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-center">{plan.heading}</h3>
              <p className="text-lg font-semibold mt-2 text-center">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-sm flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className={`rounded-full w-6 h-6 flex items-center justify-center mr-2 border-2 ${plan.borderColor} ${plan.borderBgColor}`}>
                      <svg className={`h-4 w-4 ${plan.tickColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-1 w-full mb-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                GET STARTED
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

