"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const FormPage = () => {
  const [formData, setFormData] = useState({
    taxYear: "",
    originalReturn: "",
    clientType: "",
    name: "",
    lastName: "",
    dob: "",
    taxFileNumber: "",
    email: "",
    mobile: "",
    maritalStatus: "",
    dependents: "",
    residency: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#F2F2F2] min-h-screen py-10 px-4 md:px-20 pt-36 pb-20">
      <motion.div
        className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <motion.h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Online Tax Return
        </motion.h1>
        <p className="text-center text-gray-600 text-sm md:text-base mb-6">
          All tax returns will be prepared by a <span className="font-semibold">JPB Tax Accountant</span>. <br />
          Your data is kept secure by <span className="text-blue-600 font-medium">encrypting it 🔐</span>
        </p>

        {/* Stepper */}
        <div className="flex justify-center space-x-4 mb-8">
          {["Personal Info", "Income", "Deductions", "Submit"].map((step, index) => (
            <div
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                index === 0 ? "bg-[#FE5722] text-white" : "bg-gray-200 text-gray-600"
              }`}
            >
              {step}
            </div>
          ))}
        </div>

        {/* Form Section */}
        <form className="space-y-6">
          {/* Tax Year */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-1">Tax Year</label>
              <select
  name="taxYear"
  className="w-full border border-gray-300 rounded-md px-4 py-3"
  value={formData.taxYear}
  onChange={handleChange}
>
  <option value="">Select Year</option>
  {Array.from({ length: 23 }, (_, i) => {
    const year = 2023 - i; // Start from 2023 and go backward to 2001
    return (
      <option key={year} value={year + 1}>
        1/07/{year} - 30/06/{year + 1}
      </option>
    );
  })}
</select>

            </div>

            <div>
              <label className="block font-medium mb-1">Original return?</label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="originalReturn"
                    value="Yes"
                    onChange={handleChange}
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="originalReturn"
                    value="No"
                    onChange={handleChange}
                  />
                  <span>No (This is an amended return)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Client Type */}
          <div className="mt-4">
            <label className="block font-medium mb-1">I Am:</label>
            <div className="flex gap-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="clientType"
                  value="New Client"
                  onChange={handleChange}
                />
                <span>New Client</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="clientType"
                  value="Existing Client"
                  onChange={handleChange}
                />
                <span>Existing Client</span>
              </label>
            </div>
          </div>

          {/* Name Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-1">First Name</label>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-300 rounded-md px-4 py-3"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="w-full border border-gray-300 rounded-md px-4 py-3"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Other Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-1">Date of Birth</label>
              <input
                type="date"
                name="dob"
                className="w-full border border-gray-300 rounded-md px-4 py-3"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Tax File Number</label>
              <input
                type="text"
                name="taxFileNumber"
                className="w-full border border-gray-300 rounded-md px-4 py-3"
                value={formData.taxFileNumber}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 rounded-md px-4 py-3"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Mobile Number</label>
              <input
                type="text"
                name="mobile"
                className="w-full border border-gray-300 rounded-md px-4 py-3"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Marital Status</label>
              <select
                name="maritalStatus"
                className="w-full border border-gray-300 rounded-md px-4 py-3"
                value={formData.maritalStatus}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Single">Single</option>
                <option value="Married">Had Spouse (married or de facto)</option>
            
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Number of Dependents</label>
              <input
                type="number"
                name="dependents"
                className="w-full border border-gray-300 rounded-md px-4 py-3"
                value={formData.dependents}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Residency Status</label>
              <select
                name="residency"
                className="w-full border border-gray-300 rounded-md px-4 py-3 "
                value={formData.residency}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Citizen">An Australian Citizen</option>
                <option value="PR">An Australian Permanant Resident</option>
                <option value="Working Visa">in Australia on a visa</option>
                <option value="Working Visa">a New Zealand Citizen</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Postal Address</label>
              <input
                type="text"
                name="address"
                className="w-full border border-gray-300 rounded-md px-4 py-3"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-end mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#FE5722] text-white font-semibold px-6 py-3 rounded-md hover:bg-orange-400 transition duration-300"
            >
              Next →
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default FormPage;
